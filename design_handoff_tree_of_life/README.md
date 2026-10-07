# Handoff: 생명의 나무 (Evolutionary Tree of Life)

## Overview
This is an interactive, zoomable **radial phylogenetic tree** poster that runs from LUCA (the last universal common ancestor) up to every living **order (목)** of vertebrates, insects, and land plants, plus the major orders of the remaining invertebrates, protists, fungi, bacteria, and archaea. Every terminal node is a **family (과)**, labelled with its Korean name, its Latin name, and representative organisms. Viruses appear in a separate, unconnected dendrogram because they are non-cellular and have multiple origins. All UI copy is Korean.

Size: about 485 orders and about 765 leaf families. The poster canvas is about 10,800 × 7,200 px and grows automatically with the data.

## About the Design Files
The files in this bundle are **design references created in HTML**: a working prototype that shows the intended look and behavior, not production code to copy as-is. Recreate it in the target codebase's environment (React, Vue, Svelte, etc.) using that codebase's patterns. If there is no environment yet, a good choice is a React/Vite or Next.js app with **d3-hierarchy** for layout and **d3-zoom** (or similar) for pan and zoom. The tree data (`tol/*.js`) is real content and can be reused directly, or converted to JSON.

## Fidelity
**High-fidelity.** Colors, typography, layout algorithm, and label rules are final. Reproduce them exactly.

## Screens / Views

### 1. Poster viewer (single screen)
- **Purpose:** Explore the tree by panning and zooming, and export it as a PNG.
- **Layout:**
  - A full-viewport stage (`position: fixed; inset: 0`) with background `#15191b`.
  - Inside it, a "poster" div holds one SVG. The poster's width and height are computed at runtime.
  - A CSS transform `translate(x,y) scale(k)` (from d3-zoom) is applied to the poster.
- **Poster composition (top to bottom):**
  1. **Title block** (y 0–204)
     - Title "생명의 나무": 96px / 700, letter-spacing −2px, centered at y=120.
     - Subtitle: 22px / 500, letter-spacing 6px, `--dim` color, at y=172.
     - Hairline at y=204, from x=M to W−M: `--dim` at opacity 0.25.
  2. **Radial tree**
     - Starts at y=230 with 90px side margins (M).
     - The fan spans **206°** and is centered on "up".
     - LUCA sits at the center bottom.
  3. **Bottom band:** a hairline, then two blocks side by side.
     - **Left:** the "계통 색상" legend (16px / 700 heading). It is a 4-column grid with columns 190px apart and rows 28px apart; each entry is a 7px-radius dot plus a 14px label. Below it are three 14px note lines in `--dim`, spaced 24px apart.
     - **Right:** the **virus dendrogram**, right-aligned to W−M. It is horizontal with elbow links, a row height of 21px, and a column step of about 322px per depth.
- **Fixed overlay UI** (outside the poster, not scaled)
  - Bottom-right buttons, 6px gap: `+`, `−`, `전체 보기`, `PNG로 저장`.
    - Font: IBM Plex Sans KR 13px / 500.
    - Background `#f4f4f2`, text `#1b1f22`, radius 6px, padding 9×13px. Hover: `#fff`.
  - Bottom-left hint "스크롤로 확대 · 드래그로 이동": 12px, color `#9aa3a6`.
  - Loading overlay "계통수를 그리는 중…", shown until fonts are loaded and the tree is drawn.

### Radial tree rendering rules (the core of the design)
- **Layout:** `d3.cluster().size([SPAN, 1])` with separation 1 for siblings and 1.6 for cousins.
- **Radius:** `R = max(900, 19px / minimum angular gap between adjacent leaves)`. This guarantees at least 19px between adjacent leaf labels at the rim.
- **Depth mapping:** `r(node) = R * depth01^0.82`, where depth01 is the cluster's normalized y.
- **Angle:** 0 points straight up; `x,y = (sin a · r, −cos a · r)`.
- **Branches:** radial elbow paths. Draw an arc along the parent's radius to the child's angle, then a straight radial line out to the child. This makes crossings impossible.
  - Stroke = group color. Width = `clamp(1.6, sqrt(leafCount) × 1.05, 11)`. Round caps, opacity 0.85.
  - Extinct lineages: dashed `5 5`, opacity 0.55.
- **Leaf node** (family)
  - Dot: radius 4. The highlighted node (사람과) uses radius 6.5. Extinct leaves get a hollow dot (fill = bg, stroke = color, 1.6px).
  - The label is rotated along the radius, starts 12px outside R, and is flipped 180° on the left half so it always reads left to right.
  - The label is one line made of tspans:
    - Order prefix (only when the order has a single family): `목 › `, 11px / 500, group color.
    - Family name: 13px / 600, `--ink` (highlighted: 14.5px / 700, group color). Append ` †` if extinct.
    - Latin name: IBM Plex Mono italic 10px, `--dim`.
    - Representative organisms: 11px, group color, opacity 0.9.
- **Milestone badges** (nodes with `big`: 1, 2, or 3)
  - A pill (rx = h/2) filled with the group color, with a 3px stroke in the bg color.
  - Text inside in the bg color, weight 700. Font size: LUCA 24px (big 3), kingdoms and domains 16px (big 2), classes 13.5px (big 1).
  - Below the pill, the Latin name and era (`ma`) in the group color: 10.5px (13px for LUCA).
- **Other internal nodes:** dot radius 3.5 with a 1.5px bg-colored stroke. Label: 11px / 600, group color. An optional era line underneath: 9.5px, opacity 0.8.
  - **Label placement is greedy collision avoidance.** Process nodes from outermost to innermost. For each, try 10 candidate offsets in this order: above, below, right, left, further above, further below, then the four diagonals. Pick the first spot that doesn't overlap an already-placed label box.
- **Halo:** every free-floating label has `paint-order: stroke; stroke: <bg>; stroke-width: 4px` so it stays readable over lines.

## Interactions & Behavior
- **Pan and zoom:** d3-zoom on the stage. Scale extent is 0.02–4. Wheel zooms, drag pans. The cursor is `grab` normally and `grabbing` while active.
- **전체 보기:** animated (400ms) fit-to-viewport at 98% of the limiting dimension, centered.
- **+ / −:** scale by 1.5 or 1/1.5, animated over 250ms.
- **Persistence:** the zoom transform is saved to localStorage key `tol-zoom-v3` on every change and restored on load. If nothing is saved, the view fits to the viewport.
- **PNG export:** uses html-to-image on the poster, temporarily setting `transform: none`.
  - Pixel ratio = `min(1.5, 16000/max(W,H), sqrt(2.4e8/(W·H)))`, which keeps the export within browser canvas limits.
  - While exporting, the button label changes to "저장 중…".
  - For production, consider server-side rendering or exporting SVG/PDF instead, because the canvas is very large.
- Rendering waits for `document.fonts.ready` so that text measurement is correct.

## State Management
- Static data only. Nothing is fetched.
- Runtime state: the zoom transform (persisted) and an exporting flag.
- Layout is computed once on mount. For production, precompute it at build time; it is deterministic.

## Data model (`tol/*.js`)
- `helpers.js` defines:
  - `T(name, opts, ...children)` for internal nodes.
  - `F(name, latin, examples, opts)` for families.
  - `L(multilineString)`, a compact order notation: `목이름 Latin = 과 Latin 대표; 과 Latin 대표`. An order with a single family collapses into one leaf carrying `ord`. A trailing `†` on a family name marks it extinct.
- **Node options:**

  | Option | Meaning |
  |---|---|
  | `s` | Latin name or subtitle |
  | `e` | Representative organisms |
  | `g` | Color group key (inherited by descendants) |
  | `big` | Badge level (1–3) |
  | `ma` | Era text |
  | `ex` | Extinct |
  | `hl` | Highlight |
  | `ord` | Collapsed order name |

- **File order:** `helpers → vertebrates → invertebrates → plants → microbes`. The last file assembles `window.TREE`, `window.VIRUS`, and `window.GROUPS`.
- **Coverage:**
  - All extant orders: mammals (MDD), birds (IOC), fish (Betancur-R 2017), angiosperms (APG IV), ferns (PPG I), gymnosperms, and insects.
  - Major orders only: everything else.
  - Each order includes 1–8 representative families.

## Design Tokens

**Base colors**

| Token | Value |
|---|---|
| Background `--bg` | `oklch(0.26 0.018 220)` (about `#1d2629`) |
| Ink `--ink` | `oklch(0.96 0.005 220)` |
| Dim `--dim` | `oklch(0.70 0.015 220)` |
| Page outside poster | `#15191b` |

**Group colors** (same lightness and chroma family, hue varies)

| Group | Value |
|---|---|
| 공통 조상 (root) | `oklch(0.74 0.02 210)` |
| 세균 | `oklch(0.74 0.07 245)` |
| 고균 | `oklch(0.74 0.07 290)` |
| 원생생물 | `oklch(0.76 0.09 195)` |
| 식물 | `oklch(0.80 0.15 145)` |
| 균류 | `oklch(0.80 0.07 75)` |
| 무척추동물 | `oklch(0.76 0.13 320)` |
| 어류·척삭동물 | `oklch(0.78 0.11 235)` |
| 양서류 | `oklch(0.80 0.12 170)` |
| 파충류 | `oklch(0.76 0.14 35)` |
| 조류 | `oklch(0.78 0.13 15)` |
| 포유류 | `oklch(0.82 0.14 85)` |
| 바이러스 | `oklch(0.70 0.02 220)` |

**Typography**
- Korean UI: **IBM Plex Sans KR** (400/500/600/700).
- Latin names: **IBM Plex Mono** italic 400.
- Font sizes used: 96, 24, 22, 16, 14.5, 14, 13.5, 13, 12, 11, 10.5, 10, 9.5px.

**Spacing**
- Poster margin: 90px.
- Title area: 230px.
- Minimum gap between leaf labels: 19px.
- Leaf label offset from the rim: 12px.

**Radii**
- Buttons: 6px.
- Badges: fully rounded pills.

## Assets
No images. Fonts load from Google Fonts. Libraries: d3@7.9.0 and html-to-image@1.11.11 (both from the unpkg CDN).

## Files
- `생명의 나무 v3.html`: the prototype (layout, rendering, zoom, export).
- `tol/helpers.js`: data DSL.
- `tol/vertebrates.js`: mammals, birds, reptiles and dinosaurs, amphibians, fish.
- `tol/invertebrates.js`: insects, arthropods, other invertebrate phyla, deuterostome assembly, and `TOL.animals`.
- `tol/plants.js`: Plantae, including all APG IV angiosperm orders.
- `tol/microbes.js`: bacteria, archaea, protists, fungi, viruses, the root `TREE` assembly, and color `GROUPS`.
