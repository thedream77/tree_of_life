// 교회의 나무 — A3 가로 인쇄용 렌더러 (흰 배경)
// 좌표 단위: 1 unit = 0.1 mm  →  시트 4200 × 2970 = 420 × 297 mm.  1pt ≈ 3.53 unit
(function () {
  const PW = 4200, PH = 2970, M = 100;
  Object.entries(FAM_PRINT).forEach(([k, c]) => { FAM[k].c = c; });
  const BG = '#ffffff', INK = 'oklch(0.22 0.01 70)', DIM = 'oklch(0.44 0.012 70)', GOLD = FAM.gold.c;
  const FF = "'IBM Plex Sans KR', sans-serif", FM = "'IBM Plex Mono', monospace";
  const F = { title: 150, sub: 32, note: 21, era: 23, eraY: 17, kick: 17, cname: 31, cdesc: 19, cppl: 17,
    bnameB: 29, bname: 23, byr: 18, bdesc: 18, pname: 20, pyr: 14.5, prole: 16.5, cin: 21, cind: 18, ev: 18.5, today: 21, leg: 21 };

  // ---------- 시간 축 ----------
  const RIGHTW = 600, NOW = 2026;
  const X0 = M + 40, X1 = PW - M - RIGHTW;
  const SEG = [[30, 800, 5.6], [800, 1500, 1.5], [1500, NOW, 5.2]];
  const tot = SEG.reduce((s, [a, b, k]) => s + (b - a) * k, 0), sc = (X1 - X0) / tot;
  const X = yr => { let acc = X0; for (const [a, b, k] of SEG) { if (yr <= b) return acc + (Math.max(yr, a) - a) * k * sc; acc += (b - a) * k * sc; } return acc; };

  // ---------- 텍스트 ----------
  const cv = document.createElement('canvas').getContext('2d');
  const tw = (s, fs, wt = 400, mono = false, it = false) => { cv.font = `${it ? 'italic ' : ''}${wt} ${fs}px ${mono ? FM : FF}`; return cv.measureText(s || '').width * 1.03; };
  function wrap(s, fs, wt, maxW, it) {
    const words = (s || '').split(' '), lines = []; let cur = '';
    for (const w of words) { const t = cur ? cur + ' ' + w : w; if (tw(t, fs, wt, false, it) > maxW && cur) { lines.push(cur); cur = w; } else cur = t; }
    if (cur) lines.push(cur); return lines;
  }
  const mkHit = arr => (b, pad = 3) => arr.some(o => b[0] < o[2] + pad && b[2] > o[0] - pad && b[1] < o[3] + pad && b[3] > o[1] - pad);

  const svg = d3.select('#tree');
  const defs = svg.append('defs');
  const world = svg.append('g');
  const bgG = world.append('g'), cardLineG = world.append('g'), brG = world.append('g'), leadG = world.append('g'), dotG = world.append('g'), labG = world.append('g');
  const txt = (g, x, y, s, o = {}) => {
    const t = g.append('text').attr('x', x).attr('y', y).attr('font-size', o.fs || 18).attr('font-weight', o.wt || 400).attr('fill', o.c || INK).text(s);
    if (o.mono) t.attr('font-family', FM);
    if (o.it) t.attr('font-style', 'italic');
    if (o.anchor) t.attr('text-anchor', o.anchor);
    if (o.halo !== false) t.attr('class', 'halo');
    if (o.ls) t.attr('letter-spacing', o.ls);
    if (o.op) t.attr('opacity', o.op);
    return t;
  };

  // ---------- 제목 ----------
  txt(world, M, 160, '교회의 나무', { fs: F.title, wt: 700, ls: -4, halo: false });
  const tW = tw('교회의 나무', F.title, 700) - 30;
  txt(world, M + tW + 50, 112, 'A.D. 30 오순절부터 2026년까지 — 하나의 사도적 교회가 공의회 · 신학 논쟁 · 분열을 거치며 갈라져 온 2,000년', { fs: F.sub, wt: 500, c: DIM, halo: false });
  txt(world, M + tW + 50, 155, '시간은 왼쪽 → 오른쪽 · 가지가 갈라지는 점 = 분리된 해 · 가지 위 = 어디서 · 어떻게 · ◆ 공의회 · ● 인물 · 오른쪽 끝 = 오늘의 교회', { fs: F.note, c: DIM, halo: false });
  txt(world, PW - M, 112, 'A3 가로 · 420 × 297 mm', { fs: 19, c: DIM, mono: true, anchor: 'end', halo: false });

  // ---------- 하단 고정 영역 ----------
  const LG = PH - 210;          // 범례 시작
  const AX = LG - 230;          // 시간 축
  const ERA_Y = 262;

  // ---------- 세계 공의회 카드 (한 줄, 겹치면 묶어서 이동) ----------
  const BAND0 = 300, CW = 236, GAP = 14;
  const cards = COUNCILS.filter(c => CTOP[c.y] && !(CTOP_EXTRA || []).includes(c.y)).map(c => {
    const [d, p] = CTOP[c.y];
    const kick = c.k === 'ecu' ? `제${c.no}차 세계 공의회 · ${c.y}` : c.k === 'split' ? `대분열 · ${c.y}` : `사도 공의회 · A.D. ${c.y}`;
    const dl = wrap(d, F.cdesc, 400, CW - 6), pl = wrap(p, F.cppl, 400, CW - 6, true);
    return { c, kick, dl, pl, want: X(c.y) - 9, H: 22 + 36 + 22 + dl.length * 23 + 6 + pl.length * 20 };
  });
  let cl = cards.map(c => ({ items: [c], left: c.want }));
  const cw = n => n * (CW + GAP) - GAP;
  for (let guard = 0; guard < 50; guard++) {
    let merged = false;
    cl.forEach(g => { g.left = Math.max(M, Math.min(g.left, X1 + 40 - cw(g.items.length))); });
    for (let i = 0; i < cl.length - 1; i++) {
      const a = cl[i], b = cl[i + 1];
      if (a.left + cw(a.items.length) + GAP > b.left) {
        const items = [...a.items, ...b.items];
        cl.splice(i, 2, { items, left: d3.mean(items, (it, j) => it.want - j * (CW + GAP)) });
        merged = true; break;
      }
    }
    if (!merged) break;
  }
  cl.forEach(g => g.items.forEach((it, j) => { it.left = g.left + j * (CW + GAP); }));
  const BAND_BOT = BAND0 + d3.max(cards, c => c.H);
  const TREE_TOP = BAND_BOT + 110;
  const LU = (AX - 50 - TREE_TOP) / 100;
  const laneY = l => TREE_TOP + l * LU;

  // ---------- 가지 기하 ----------
  const byId = {};
  BRANCHES.forEach(b => {
    byId[b.id] = b;
    b.y = laneY(b.x); b.dead = b.k === 'dead';
    b.endX = X(b.z || NOW); b.col = FAM[b.f].c; b.w = b.w * 0.85;
    const p = b.p ? byId[b.p] : null;
    if (!p) { b.sx = X(b.a); b.ex = b.sx; b.py = b.y; return; }
    b.py = p.y;
    b.sx = Math.max(X(b.a), p.ex + 4);
    b.cx = Math.max(26, Math.min(90, Math.abs(b.y - b.py) * 0.22));
    b.ex = b.sx + b.cx;
  });
  const boxes = [], hit = mkHit(boxes);
  const bez = (b, t) => {
    const p0 = [b.sx, b.py], p1 = [b.sx + b.cx * 0.5, b.py], p2 = [b.sx + b.cx * 0.5, b.y], p3 = [b.ex, b.y], u = 1 - t;
    return [0, 1].map(i => u * u * u * p0[i] + 3 * u * u * t * p1[i] + 3 * u * t * t * p2[i] + t * t * t * p3[i]);
  };
  BRANCHES.forEach(b => {
    const hw = b.w / 2 + 2;
    boxes.push([b.ex, b.y - hw, b.endX, b.y + hw]);
    if (b.p) for (let i = 1; i < 12; i++) { const [x, y] = bez(b, i / 12); boxes.push([x - hw, y - hw, x + hw, y + hw]); }
  });

  // ---------- 배경: 시대 띠 · 세기 격자 ----------
  ERAS.forEach(([a, z, n], i) => {
    if (i % 2) bgG.append('rect').attr('x', X(a)).attr('y', ERA_Y - 34).attr('width', X(z) - X(a)).attr('height', AX - ERA_Y + 34).attr('fill', 'oklch(0.975 0.004 80)');
    bgG.append('line').attr('x1', X(a)).attr('x2', X(a)).attr('y1', ERA_Y - 34).attr('y2', AX).attr('stroke', DIM).attr('stroke-opacity', 0.35).attr('stroke-width', 1.5);
    txt(bgG, X(a) + 10, ERA_Y - 8, n, { fs: F.era, wt: 600, c: DIM, halo: false });
    const yrs = `${a}–${z === 2026 ? '오늘' : z}`;
    if (tw(n, F.era, 600) + 12 + tw(yrs, F.eraY, 400, true) + 30 < X(z) - X(a))
      txt(bgG, X(a) + 10 + tw(n, F.era, 600) + 12, ERA_Y - 8, yrs, { fs: F.eraY, c: DIM, mono: true, halo: false, op: 0.8 });
    else txt(bgG, X(a) + 10, ERA_Y + 14, yrs, { fs: F.eraY, c: DIM, mono: true, halo: false, op: 0.8 });
  });
  const ticks = [];
  for (let y = 100; y <= 2000; y += (y < 800 ? 50 : 100)) ticks.push(y);
  ticks.forEach(y => bgG.append('line').attr('x1', X(y)).attr('x2', X(y)).attr('y1', TREE_TOP - 50).attr('y2', AX)
    .attr('stroke', INK).attr('stroke-opacity', y % 100 === 0 ? 0.09 : 0.045).attr('stroke-width', 1.2));
  ticks.filter(y => y % 100 === 0).forEach(y => txt(bgG, X(y), TREE_TOP - 56, String(y), { fs: 15, c: DIM, mono: true, anchor: 'middle', halo: false, op: 0.75 }));

  // ---------- 카드 ----------
  cards.forEach(({ c, left, kick, dl, pl, H }) => {
    const ax = left + 9, trunkY = byId[c.b].y, x = X(c.y);
    cardLineG.append('path').attr('d', `M${ax},${BAND0 + H + 6} L${ax},${BAND_BOT + 16} L${x},${BAND_BOT + 74} L${x},${trunkY}`)
      .attr('fill', 'none').attr('stroke', GOLD).attr('stroke-opacity', 0.7).attr('stroke-width', 1.6).attr('stroke-dasharray', '3 5');
    labG.append('path').attr('d', `M${ax},${BAND0 + 2} l9,9 l-9,9 l-9,-9 z`).attr('fill', GOLD);
    let yy = BAND0 + 17;
    txt(labG, left + 24, yy, kick, { fs: F.kick, wt: 500, c: GOLD, mono: true });
    yy += 36; txt(labG, left, yy, c.n, { fs: F.cname, wt: 700 });
    yy += 22; txt(labG, left, yy, c.s, { fs: 16, c: DIM });
    dl.forEach(s => { yy += 23; txt(labG, left, yy, s, { fs: F.cdesc }); });
    yy += 4;
    pl.forEach(s => { yy += 20; txt(labG, left, yy, s, { fs: F.cppl, c: GOLD, it: true }); });
  });

  // ---------- 가지 ----------
  [...BRANCHES].sort((a, b) => b.w - a.w).forEach(b => {
    let stroke = b.col;
    if (b.dead) {
      const gid = 'p_' + b.id;
      const lg = defs.append('linearGradient').attr('id', gid).attr('gradientUnits', 'userSpaceOnUse').attr('x1', b.endX - 160).attr('x2', b.endX).attr('y1', 0).attr('y2', 0);
      lg.append('stop').attr('offset', 0).attr('stop-color', b.col).attr('stop-opacity', 1);
      lg.append('stop').attr('offset', 1).attr('stop-color', b.col).attr('stop-opacity', 0.08);
      stroke = `url(#${gid})`;
    }
    const d = b.p ? `M${b.sx},${b.py} C${b.sx + b.cx * 0.5},${b.py} ${b.sx + b.cx * 0.5},${b.y} ${b.ex},${b.y} L${b.endX},${b.y}` : `M${b.sx},${b.y} L${b.endX},${b.y}`;
    brG.append('path').attr('d', d).attr('fill', 'none').attr('stroke', stroke).attr('stroke-width', b.w)
      .attr('stroke-linecap', b.dead ? 'butt' : 'round').attr('stroke-dasharray', b.k === 'nt' ? '8 5' : null);
    if (b.p) dotG.append('circle').attr('cx', b.sx).attr('cy', b.py).attr('r', Math.max(3, b.w / 2 + 1.5)).attr('fill', b.col).attr('stroke', BG).attr('stroke-width', 2);
    if (!b.dead) dotG.append('circle').attr('cx', b.endX).attr('cy', b.y).attr('r', b.w / 2 + 3).attr('fill', b.col).attr('stroke', BG).attr('stroke-width', 2);

  });
  dotG.append('circle').attr('cx', X(30)).attr('cy', byId.apo.y).attr('r', 17).attr('fill', FAM.apo.c).attr('stroke', BG).attr('stroke-width', 3);

  // ---------- 가지 라벨: 연도 · 이름 · 한 줄 설명 (같은 줄, 넘치면 아래로) ----------
  const order = [...BRANCHES].sort((a, b) => b.w - a.w);
  order.forEach(b => {
    const fs = b.w >= 6 ? F.bnameB : F.bname;
    const x0 = b.p ? b.ex + 8 : b.sx + 26;
    const base = b.y - b.w / 2 - 6;
    const yr = b.p ? String(b.a) : 'A.D. 30';
    const name = b.n + (b.dead ? ' †' : '');
    const desc = (window.SHORT && SHORT[b.id]) || b.d;
    const yw = tw(yr, F.byr, 500, true) + 8, nw = tw(name, fs, 700), dw = tw(desc, F.bdesc);
    const limit = b.dead ? b.endX + 420 : b.endX - 14;
    const dag = (r) => { if (b.dead) { const dx = r > b.endX - 20 ? r + 12 : b.endX + 6; txt(labG, dx, b.y + 5, '† ' + b.z, { fs: 15, c: DIM, mono: true }); boxes.push([dx, b.y - 10, dx + tw('† ' + b.z, 15, 400, true), b.y + 8]); } };
    const top = b.y + b.w / 2 + 4;
    // 이름이 다른 라벨과 겹치면 가지를 따라 오른쪽으로 밀기
    let x = x0, inline = false, found = false;
    for (let xx = x0; xx + yw + nw <= Math.max(limit, x0 + yw + nw); xx += 14) {
      const full = [xx, base - fs + 3, xx + yw + nw + 14 + dw, base + 3];
      if (full[2] <= limit && !hit(full, 1)) { x = xx; inline = true; found = true; break; }
    }
    if (!found) for (let xx = x0; xx + yw + nw <= limit; xx += 14) {
      if (!hit([xx, base - fs + 3, xx + yw + nw, base + 3], 1)) { x = xx; found = true; break; }
    }
    if (!found) { // 자리가 없으면 연도만 (이름은 오른쪽 '오늘의 교회'에)
      if (b.p && !hit([x0, base - F.byr, x0 + yw, base + 3], 0)) txt(labG, x0, base, yr, { fs: F.byr, wt: 500, c: b.col, mono: true });
      boxes.push([x0, base - F.byr, x0 + yw, base + 3]);
      dag(-1);
      return;
    }
    const full = [x, base - fs + 3, x + yw + nw + 14 + dw, base + 3];
    const t = labG.append('text').attr('class', 'halo').attr('x', x).attr('y', base);
    t.append('tspan').attr('font-family', FM).attr('font-size', F.byr).attr('font-weight', 500).attr('fill', b.col).text(yr);
    t.append('tspan').attr('dx', 8).attr('font-size', fs).attr('font-weight', 700).attr('fill', b.dead ? DIM : b.col).text(name);
    if (inline) {
      t.append('tspan').attr('dx', 14).attr('font-size', F.bdesc).attr('fill', DIM).text(desc);
      boxes.push(full);
      dag(full[2]);
      return;
    }
    boxes.push([x, base - fs + 3, x + yw + nw, base + 3]);
    const below = [x, top, x + dw, top + F.bdesc + 3];
    dag(x + yw + nw);
    if (below[2] <= limit && !hit(below, 1)) { txt(labG, x, top + F.bdesc - 2, desc, { fs: F.bdesc, c: DIM }); boxes.push(below); return; }
    for (let xx = x; xx + dw <= limit; xx += 14) {
      const bb = [xx, top, xx + dw, top + F.bdesc + 3];
      if (!hit(bb, 1)) { txt(labG, xx, top + F.bdesc - 2, desc, { fs: F.bdesc, c: DIM }); boxes.push(bb); return; }
    }
  });

  // ---------- 오늘의 교회 ----------
  const RX = X1 + 22;
  txt(labG, RX, TREE_TOP - 58, '오늘의 교회', { fs: 22, wt: 700, c: DIM, ls: 2 });
  txt(labG, RX, TREE_TOP - 34, '2026 · 신자 수는 대략치', { fs: 15, c: DIM, mono: true });
  // 세로 겹침 해소 (위→아래로 밀고, 넘치면 아래→위로 되밀기)
  const term = BRANCHES.filter(b => !b.dead && !b.z).sort((a, b) => a.y - b.y).map(b => ({ b, y: b.y }));
  const GAPT = F.today + 5;
  for (let i = 1; i < term.length; i++) term[i].y = Math.max(term[i].y, term[i - 1].y + GAPT);
  for (let i = term.length - 2; i >= 0; i--) term[i].y = Math.min(term[i].y, term[i + 1].y - GAPT);
  term.forEach(({ b, y }) => {
    if (Math.abs(y - b.y) > 1) leadG.append('path').attr('d', `M${b.endX + b.w / 2 + 3},${b.y} L${RX - 12},${b.y} L${RX - 4},${y}`).attr('fill', 'none').attr('stroke', b.col).attr('stroke-width', 1.4);
    txt(labG, RX, y + 7, b.t || b.n, { fs: F.today, wt: 700, c: b.col });
  });

  // ---------- 점: 공의회 · 인물 ----------
  const ptX = (b, yr) => Math.min(Math.max(X(yr), b.ex + 6), b.endX - 4);
  const CINX = Object.assign({ 1545: '반종교개혁 · 성경과 성전 · 일곱 성사', 1962: '자국어 전례 · 종교 자유 · 교회 일치' }, CIN);
  const inl = COUNCILS.filter(c => !cards.some(k => k.c === c)).map(c => ({ c, b: byId[c.b], x: ptX(byId[c.b], c.y) }));
  const ppl = PEOPLE.map(p => ({ p, b: byId[p.b], x: ptX(byId[p.b], p.y) }));
  cards.forEach(({ c }) => {
    const x = X(c.y), y = byId[c.b].y;
    dotG.append('path').attr('d', `M${x},${y - 11} l11,11 l-11,11 l-11,-11 z`).attr('fill', GOLD).attr('stroke', BG).attr('stroke-width', 2.5);
    boxes.push([x - 12, y - 12, x + 12, y + 12]);
  });
  inl.forEach(d => boxes.push([d.x - 9, d.b.y - 9, d.x + 9, d.b.y + 9]));
  ppl.forEach(d => boxes.push([d.x - 4, d.b.y - 4, d.x + 4, d.b.y + 4]));

  function place(x, y, W, H, ga) {
    for (let k = 0; k <= 44; k++) for (const side of [-1, 1]) for (const xo of [-6, -W + 6, -W / 2, 14, -W - 14, 40, -W - 40]) {
      const top = side < 0 ? y - ga - H - k * 8 : y + ga + k * 8;
      const b = [x + xo, top, x + xo + W, top + H];
      if (b[0] > M && b[2] < X1 + 10 && !hit(b, 2)) return b;
    }
    return null;
  }
  function leader(x, y, box, hw, c) {
    const above = box[3] <= y;
    const y1 = above ? y - hw : y + hw, y2 = above ? box[3] + 1 : box[1] - 1;
    if (Math.abs(y2 - y1) > 4) {
      leadG.append('line').attr('x1', x).attr('x2', x).attr('y1', y1).attr('y2', y2).attr('stroke', c).attr('stroke-opacity', 0.6).attr('stroke-width', 1.2);
      boxes.push([x - 1, Math.min(y1, y2), x + 1, Math.max(y1, y2)]);
    }
  }

  inl.sort((a, b) => a.c.y - b.c.y).forEach(({ c, b, x }) => {
    const y = b.y;
    dotG.append('path').attr('d', `M${x},${y - 9} l9,9 l-9,9 l-9,-9 z`).attr('fill', GOLD).attr('stroke', BG).attr('stroke-width', 2);
    const head = c.s.match(/^\d/) ? c.s.split(' · ')[0] : String(c.y);
    const d = CINX[c.y] || c.d;
    const W = Math.max(tw(head, F.cind, 500, true) + 8 + tw('◆ ' + c.n, F.cin, 700), tw(d, F.cind));
    const H = F.cin + F.cind + 10;
    let box = place(x, y, W, H, b.w / 2 + 8);
    if (!box) { (window.__MISS = window.__MISS || []).push(c.n); box = [x - 6, y - 12 - H, x - 6 + W, y - 12]; }
    boxes.push(box); leader(x, y, box, 10, GOLD);
    const t = labG.append('text').attr('class', 'halo').attr('x', box[0]).attr('y', box[1] + F.cin - 2);
    t.append('tspan').attr('font-family', FM).attr('font-size', F.cind).attr('font-weight', 500).attr('fill', GOLD).text(head);
    t.append('tspan').attr('dx', 8).attr('font-size', F.cin).attr('font-weight', 700).attr('fill', GOLD).text('◆ ' + c.n);
    txt(labG, box[0], box[1] + F.cin + F.cind + 3, d, { fs: F.cind });
  });

  ppl.sort((a, b) => a.p.y - b.p.y).forEach(({ p, b, x }) => {
    const y = b.y;
    dotG.append('circle').attr('cx', x).attr('cy', y).attr('r', 4.6).attr('fill', INK).attr('stroke', BG).attr('stroke-width', 1.8);
    const role = p.n in PROLE ? PROLE[p.n] : (p.r && p.r.length <= 11 ? p.r : '');
    const yrS = String(p.y);
    const W = Math.max(tw(p.n, F.pname, 700) + 6 + tw(yrS, F.pyr, 400, true), role ? tw(role, F.prole) : 0);
    const H = role ? F.pname + F.prole + 6 : F.pname + 3;
    let box = place(x, y, W, H, b.w / 2 + 6), roleOk = true;
    if (!box && role) { const W2 = tw(p.n, F.pname, 700) + 6 + tw(yrS, F.pyr, 400, true); box = place(x, y, W2, F.pname + 3, b.w / 2 + 6); roleOk = false; }
    if (!box) { (window.__MISS = window.__MISS || []).push(p.n); box = [x - 6, y - b.w / 2 - 8 - H, x - 6 + W, y - b.w / 2 - 8]; }
    boxes.push(box); leader(x, y, box, 4.6, INK);
    const t = labG.append('text').attr('class', 'halo').attr('x', box[0]).attr('y', box[1] + F.pname - 3);
    t.append('tspan').attr('font-size', F.pname).attr('font-weight', 700).attr('fill', INK).text(p.n);
    t.append('tspan').attr('dx', 6).attr('font-family', FM).attr('font-size', F.pyr).attr('fill', DIM).text(yrS);
    if (role && roleOk) txt(labG, box[0], box[1] + F.pname + F.prole, role, { fs: F.prole, c: b.dead ? DIM : b.col });
  });

  // ---------- 시간 축 ----------
  const axG = world.append('g');
  axG.append('line').attr('x1', X(30)).attr('x2', X(NOW)).attr('y1', AX).attr('y2', AX).attr('stroke', INK).attr('stroke-opacity', 0.7).attr('stroke-width', 2);
  [30, ...ticks, NOW].forEach(y => {
    const major = y % 100 === 0 || y === 30 || y === NOW;
    axG.append('line').attr('x1', X(y)).attr('x2', X(y)).attr('y1', AX).attr('y2', AX + (major ? 10 : 6)).attr('stroke', INK).attr('stroke-opacity', 0.7);
    if (major && y === NOW) { txt(axG, X(y) + 8, AX + 34, '→ ' + y, { fs: 18, wt: 500, c: INK, mono: true, halo: false }); return; }
    if (major) txt(axG, X(y), AX + 34, String(y), { fs: y % 500 === 0 || y === 30 || y === NOW ? 24 : 18, wt: 500, c: y % 500 === 0 ? INK : DIM, mono: true, anchor: 'middle', halo: false });
  });
  [[800, '축척 변경 ↓'], [1500, '축척 변경 ↑']].forEach(([y, s]) => txt(axG, X(y), AX - 10, s, { fs: 14, c: DIM, mono: true, anchor: 'middle' }));

  // ---------- 사건 ----------
  const EV0 = AX + 56;
  txt(world, M, EV0 + 17, '사건', { fs: 21, wt: 700, c: DIM, halo: false });
  const evBoxes = [], evHit = mkHit(evBoxes);
  EVENTS.forEach(e => {
    const x = X(e.y), yrS = String(e.y), W = tw(yrS, 16, 500, true) + 8 + tw(e.n, F.ev, e.b ? 700 : 400);
    let box = null;
    for (let k = 0; k < 5 && !box; k++) for (const xo of [-5, -W + 5]) {
      const b = [x + xo, EV0 + k * 26, x + xo + W, EV0 + k * 26 + 21];
      if (b[0] > M + 70 && !evHit(b, 8)) { box = b; break; }
    }
    if (!box) return;
    evBoxes.push(box);
    axG.append('circle').attr('cx', x).attr('cy', AX).attr('r', e.b ? 5.5 : 3.8).attr('fill', e.b ? INK : DIM);
    axG.append('line').attr('x1', x).attr('x2', x).attr('y1', AX + 44).attr('y2', box[1] + 3).attr('stroke', DIM).attr('stroke-opacity', 0.45).attr('stroke-width', 1.2);
    const t = axG.append('text').attr('x', box[0]).attr('y', box[1] + 17);
    t.append('tspan').attr('font-family', FM).attr('font-size', 16).attr('font-weight', 500).attr('fill', DIM).text(yrS);
    t.append('tspan').attr('dx', 8).attr('font-size', F.ev).attr('font-weight', e.b ? 700 : 400).attr('fill', e.b ? INK : DIM).text(e.n);
  });

  // ---------- 범례 ----------
  world.append('line').attr('x1', M).attr('x2', PW - M).attr('y1', LG - 26).attr('y2', LG - 26).attr('stroke', INK).attr('stroke-opacity', 0.2).attr('stroke-width', 1.5);
  const lg = world.append('g').attr('transform', `translate(${M},${LG + 14})`);
  txt(lg, 0, 0, '계통 색상', { fs: 22, wt: 700, halo: false });
  Object.entries(FAM).filter(([k]) => k !== 'gold').forEach(([k, v], i) => {
    const cx = (i % 5) * 330, cy = 36 + Math.floor(i / 5) * 30;
    if (k === 'nt') lg.append('line').attr('x1', 0 + cx).attr('x2', cx + 32).attr('y1', cy - 7).attr('y2', cy - 7).attr('stroke', v.c).attr('stroke-width', 6).attr('stroke-dasharray', '8 5');
    else lg.append('rect').attr('x', cx).attr('y', cy - 11).attr('width', 32).attr('height', 8).attr('rx', 4).attr('fill', v.c);
    txt(lg, cx + 42, cy, v.name, { fs: F.leg, c: DIM, halo: false });
  });
  const sx = 1700;
  txt(lg, sx, 0, '기호', { fs: 22, wt: 700, halo: false });
  const sym = [['dia', '공의회 · 결정 (위 = 일곱 세계 공의회와 대분열)'], ['dot', '인물 — 이름 · 활동 연도 · 역할'], ['fade', '소멸한 흐름 · 정죄된 이설 († 소멸 연도)'], ['fork', '갈라지는 점 = 분리된 해 (라벨 앞 연도)']];
  sym.forEach(([k, s], i) => {
    const cy = 36 + i * 30, g = lg.append('g').attr('transform', `translate(${sx},${cy - 7})`);
    if (k === 'dia') g.append('path').attr('d', 'M16,-9 l9,9 l-9,9 l-9,-9 z').attr('fill', GOLD);
    if (k === 'dot') g.append('circle').attr('cx', 16).attr('r', 5).attr('fill', INK);
    if (k === 'fade') { const l = defs.append('linearGradient').attr('id', 'lgf'); l.append('stop').attr('offset', 0).attr('stop-color', FAM.dead.c); l.append('stop').attr('offset', 1).attr('stop-color', FAM.dead.c).attr('stop-opacity', 0.08); g.append('rect').attr('y', -3.5).attr('width', 34).attr('height', 7).attr('fill', 'url(#lgf)'); }
    if (k === 'fork') { g.append('path').attr('d', 'M2,7 C12,7 12,-6 26,-6 L36,-6').attr('fill', 'none').attr('stroke', DIM).attr('stroke-width', 3); g.append('circle').attr('cx', 2).attr('cy', 7).attr('r', 4).attr('fill', DIM); }
    txt(lg, sx + 50, cy, s, { fs: F.leg, c: DIM, halo: false });
  });
  const nx = 2560;
  txt(lg, nx, 0, '읽는 법', { fs: 22, wt: 700, halo: false });
  ['시간 축척은 세 구간이 다릅니다 — 30–800년은 넓게, 800–1500년은 좁게, 1500년 이후는 다시 넓게.',
   '가지 굵기는 오늘의 대략적 규모, 위아래 위치는 계보의 가까움을 뜻합니다.',
   '분열 연도는 상징적 사건 기준이며, 실제 분리는 수십 ~ 수백 년에 걸쳐 진행되었습니다.',
  ].forEach((s, i) => txt(lg, nx, 36 + i * 30, s, { fs: F.leg - 1, c: DIM, halo: false }));

  svg.attr('width', PW).attr('height', PH).attr('viewBox', `0 0 ${PW} ${PH}`);
  window.__POSTER = { W: PW, H: PH };
})();
