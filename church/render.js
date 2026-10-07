// 교회의 나무 — 렌더러 (시간: 왼쪽 → 오른쪽, 가지: 위아래로 갈라짐)
(function () {
  const BG = 'oklch(0.23 0.012 70)', INK = 'oklch(0.95 0.01 85)', DIM = 'oklch(0.72 0.02 80)', GOLD = FAM.gold.c;
  const FF = "'IBM Plex Sans KR', sans-serif", FM = "'IBM Plex Mono', monospace";

  // ---------- 시간 축 (구간별 축척) ----------
  const SEG = [[30, 800, 6], [800, 1500, 1.8], [1500, 2030, 4.2]];
  const X0 = 170;
  const X = yr => { let acc = 0; for (const [a, b, k] of SEG) { if (yr <= b) return X0 + acc + (Math.max(yr, a) - a) * k; acc += (b - a) * k; } return X0 + acc; };
  const LU = 30;
  const NOW = 2026;

  // ---------- 텍스트 측정 ----------
  const cv = document.createElement('canvas').getContext('2d');
  const tw = (s, fs, wt = 400, mono = false, it = false) => { cv.font = `${it ? 'italic ' : ''}${wt} ${fs}px ${mono ? FM : FF}`; return cv.measureText(s || '').width * 1.02; };
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
    const t = g.append('text').attr('x', x).attr('y', y).attr('font-size', o.fs || 12).attr('font-weight', o.wt || 400)
      .attr('fill', o.c || INK).text(s);
    if (o.mono) t.attr('font-family', FM);
    if (o.it) t.attr('font-style', 'italic');
    if (o.anchor) t.attr('text-anchor', o.anchor);
    if (o.halo !== false) t.attr('class', 'halo');
    if (o.ls) t.attr('letter-spacing', o.ls);
    if (o.op) t.attr('opacity', o.op);
    return t;
  };

  // ---------- 제목 ----------
  txt(world, X0, 140, '교회의 나무', { fs: 104, wt: 700, ls: -3, halo: false });
  txt(world, X0 + 4, 196, 'A.D. 30 오순절부터 2026년까지 — 하나의 사도적 교회가 공의회 · 신학 논쟁 · 분열을 거치며 갈라져 온 2,000년', { fs: 24, wt: 500, c: DIM, halo: false });
  txt(world, X0 + 4, 232, '시간은 왼쪽 → 오른쪽 · 가지가 갈라지는 자리 = 분리된 해 · 줄기 아래 설명 = 어디서 · 어떻게 · 오른쪽 끝 = 오늘의 교회', { fs: 16, c: DIM, halo: false, op: 0.8 });

  // ---------- 상단: 세계 공의회 카드 ----------
  const ERA_Y = 300, BAND0 = 350;
  const bandBoxes = [], bandHit = mkHit(bandBoxes);
  const TOPK = { ecu0: 1, ecu: 1, split: 1 };
  const cards = COUNCILS.filter(c => TOPK[c.k]).map(c => {
    const x = X(c.y);
    const kick = c.k === 'ecu' ? `제${c.no}차 세계 공의회 · ${c.y}` : c.k === 'split' ? `대분열 · ${c.y}` : `사도 공의회 · A.D. ${c.y}`;
    const dl = wrap(c.d, 14, 400, 300), pl = wrap(c.p, 12.5, 400, 300, true);
    const W = Math.max(tw(kick, 12.5, 500, true), tw(c.n, 25, 700), tw(c.s, 13), ...dl.map(s => tw(s, 14)), ...pl.map(s => tw(s, 12.5, 400, false, true)));
    const H = 18 + 30 + 20 + dl.length * 19 + 6 + pl.length * 17;
    let top = BAND0, box;
    for (let k = 0; k < 80; k++) {
      top = BAND0 + k * 12;
      box = [x - 10, top, x + 18 + W, top + H];
      const line = [x - 3, top, x + 3, 99999];
      if (!bandHit(box, 10) && !bandHit(line, 6)) break;
    }
    bandBoxes.push(box);
    return { c, x, top, kick, dl, pl, H, box };
  });
  // 세로선이 다른 카드를 관통하지 않도록 카드를 등록한 뒤에 선을 장애물로 등록
  const BAND_BOT = d3.max(cards, d => d.box[3]) + 70;
  const TREE_TOP = BAND_BOT + 40;
  const laneY = l => TREE_TOP + l * LU;
  const TRUNK_Y = laneY(45);

  // ---------- 가지 기하 ----------
  const byId = {};
  BRANCHES.forEach(b => {
    byId[b.id] = b;
    b.y = laneY(b.x);
    b.dead = b.k === 'dead';
    b.endX = X(b.z || NOW);
    b.col = FAM[b.f].c;
    const p = b.p ? byId[b.p] : null;
    if (!p) { b.sx = X(b.a); b.ex = b.sx; b.py = b.y; return; }
    b.py = p.y;
    b.sx = Math.max(X(b.a), p.ex + 6);
    const dy = Math.abs(b.y - b.py);
    b.cx = Math.max(40, Math.min(140, dy * 0.25));
    b.ex = b.sx + b.cx;
  });
  const boxes = [], hit = mkHit(boxes);
  const bez = (b, t) => {
    const p0 = [b.sx, b.py], p1 = [b.sx + b.cx * 0.5, b.py], p2 = [b.sx + b.cx * 0.5, b.y], p3 = [b.ex, b.y];
    const u = 1 - t;
    return [0, 1].map(i => u * u * u * p0[i] + 3 * u * u * t * p1[i] + 3 * u * t * t * p2[i] + t * t * t * p3[i]);
  };
  BRANCHES.forEach(b => {
    const hw = b.w / 2 + 2;
    boxes.push([b.ex, b.y - hw, b.endX, b.y + hw]);
    if (b.p) for (let i = 1; i < 12; i++) { const [x, y] = bez(b, i / 12); boxes.push([x - hw, y - hw, x + hw, y + hw]); }
  });

  // ---------- 배경: 시대 띠 · 세기 격자 ----------
  const AX = laneY(100) + 60;
  ERAS.forEach(([a, z, n], i) => {
    bgG.append('rect').attr('x', X(a)).attr('y', ERA_Y - 30).attr('width', X(z) - X(a)).attr('height', AX - ERA_Y + 30)
      .attr('fill', i % 2 ? 'oklch(1 0 0 / 0.028)' : 'oklch(0 0 0 / 0)');
    txt(bgG, X(a) + 14, ERA_Y, n, { fs: 15, wt: 600, c: DIM, ls: 3, halo: false });
    txt(bgG, X(a) + 14, ERA_Y + 18, `${a} – ${z === 2026 ? '오늘' : z}`, { fs: 11.5, c: DIM, mono: true, halo: false, op: 0.7 });
  });
  const ticks = [];
  for (let y = 100; y <= 2000; y += (y < 800 ? 50 : 100)) ticks.push(y);
  ticks.forEach(y => {
    const major = y % 100 === 0;
    bgG.append('line').attr('x1', X(y)).attr('x2', X(y)).attr('y1', TREE_TOP - 30).attr('y2', AX)
      .attr('stroke', INK).attr('stroke-opacity', major ? 0.07 : 0.035);
  });

  // ---------- 공의회 카드 그리기 + 세로선 ----------
  cards.forEach(({ c, x, top, kick, dl, pl }) => {
    const tx = x + 16;
    cardLineG.append('line').attr('x1', x).attr('x2', x).attr('y1', top + 10).attr('y2', byId[c.b].y)
      .attr('stroke', GOLD).attr('stroke-opacity', 0.45).attr('stroke-width', 1.4).attr('stroke-dasharray', '2 5');
    labG.append('path').attr('d', `M${x},${top + 2} l8,8 l-8,8 l-8,-8 z`).attr('fill', GOLD);
    let yy = top + 15;
    txt(labG, tx, yy, kick, { fs: 12.5, wt: 500, c: GOLD, mono: true });
    yy += 30; txt(labG, tx, yy, c.n, { fs: 25, wt: 700 });
    yy += 20; txt(labG, tx, yy, c.s, { fs: 13, c: DIM });
    dl.forEach(s => { yy += 19; txt(labG, tx, yy, s, { fs: 14 }); });
    yy += 6;
    pl.forEach(s => { yy += 17; txt(labG, tx, yy, s, { fs: 12.5, c: GOLD, it: true, op: 0.85 }); });
  });

  // ---------- 가지 그리기 ----------
  [...BRANCHES].sort((a, b) => b.w - a.w).forEach(b => {
    let stroke = b.col;
    if (b.dead) {
      const gid = 'g_' + b.id;
      const lg = defs.append('linearGradient').attr('id', gid).attr('gradientUnits', 'userSpaceOnUse')
        .attr('x1', b.endX - 220).attr('x2', b.endX).attr('y1', 0).attr('y2', 0);
      lg.append('stop').attr('offset', 0).attr('stop-color', b.col).attr('stop-opacity', 0.9);
      lg.append('stop').attr('offset', 1).attr('stop-color', b.col).attr('stop-opacity', 0.05);
      stroke = `url(#${gid})`;
    }
    const d = b.p
      ? `M${b.sx},${b.py} C${b.sx + b.cx * 0.5},${b.py} ${b.sx + b.cx * 0.5},${b.y} ${b.ex},${b.y} L${b.endX},${b.y}`
      : `M${b.sx},${b.y} L${b.endX},${b.y}`;
    brG.append('path').attr('d', d).attr('fill', 'none').attr('stroke', stroke).attr('stroke-width', b.w)
      .attr('stroke-linecap', b.dead ? 'butt' : 'round').attr('stroke-dasharray', b.k === 'nt' ? '9 6' : null)
      .attr('opacity', b.dead ? 0.85 : 0.95);
    if (b.p) dotG.append('circle').attr('cx', b.sx).attr('cy', b.py).attr('r', Math.max(3, b.w / 2 + 1.5)).attr('fill', b.col).attr('stroke', BG).attr('stroke-width', 2);
    if (!b.dead) dotG.append('circle').attr('cx', b.endX).attr('cy', b.y).attr('r', b.w / 2 + 3).attr('fill', b.col).attr('stroke', BG).attr('stroke-width', 2);
    else txt(labG, b.endX + 6, b.y + 4, '† ' + b.z, { fs: 11, c: DIM, mono: true, op: 0.8 });
  });
  // 뿌리
  dotG.append('circle').attr('cx', X(30)).attr('cy', TRUNK_Y).attr('r', 18).attr('fill', FAM.apo.c).attr('stroke', BG).attr('stroke-width', 3);

  // ---------- 가지 라벨 (이름 + 어떻게·어디서) ----------
  const terminal = [];
  const RX = X(NOW) + 26;
  BRANCHES.forEach(b => {
    const big = b.w >= 7;
    const fs = big ? 18 : 14.5;
    const x = b.p ? b.ex + 10 : b.sx + 30;
    const base = b.y - b.w / 2 - 7;
    const yr = b.p ? String(b.a) : 'A.D. 30';
    const yw = tw(yr, 12.5, 500, true) + 7;
    const nw = tw(b.n + (b.dead ? ' †' : ''), fs, 700);
    const t = labG.append('text').attr('class', 'halo').attr('x', x).attr('y', base);
    t.append('tspan').attr('font-family', FM).attr('font-size', 12.5).attr('font-weight', 500).attr('fill', b.col).text(yr + ' ');
    t.append('tspan').attr('dx', 3).attr('font-size', fs).attr('font-weight', 700).attr('fill', b.dead ? DIM : b.col).text(b.n + (b.dead ? ' †' : ''));
    boxes.push([x, base - fs + 2, x + yw + nw, base + 4]);

    // 설명
    let avail;
    if (b.dead) {
      const next = d3.min(BRANCHES.filter(o => o !== b && Math.abs(o.x - b.x) < 1.6 && o.sx > b.sx), o => o.sx);
      avail = Math.min(next ? next - x - 60 : 900, 900);
    } else avail = b.endX - x - 24;
    const full = tw(b.d, 12, 400);
    const top = b.y + b.w / 2 + 5;
    let lines = null;
    if (full <= avail) lines = [b.d];
    else if (avail >= 300) { const l = wrap(b.d, 12, 400, avail); if (l.length <= (b.dead ? 3 : 2)) lines = l; }
    if (lines) {
      const W = d3.max(lines, s => tw(s, 12));
      const box = [x, top, x + W, top + lines.length * 15 + 2];
      if (!b.dead && hit(box, 2)) lines = null;
      else {
        lines.forEach((s, i) => txt(labG, x, top + 12 + i * 15, s, { fs: 12, c: DIM }));
        boxes.push(box);
      }
    }
    if (!b.dead && !b.z) terminal.push({ b, dd: lines ? null : b.d });
    else if (!b.dead && !lines) {
      const l = wrap(b.d, 12, 400, 600);
      l.forEach((s, i) => txt(labG, x, top + 12 + i * 15, s, { fs: 12, c: DIM }));
      boxes.push([x, top, x + 600, top + l.length * 15 + 2]);
    }
    else if (!lines) { // 짧은 소멸 가지는 강제로 줄바꿈
      const l = wrap(b.d, 12, 400, 320);
      l.forEach((s, i) => txt(labG, x, top + 12 + i * 15, s, { fs: 12, c: DIM }));
      boxes.push([x, top, x + 320, top + l.length * 15 + 2]);
    }
  });

  // ---------- 오른쪽 끝: 오늘의 교회 ----------
  txt(labG, RX, TREE_TOP - 34, '오늘의 교회', { fs: 15, wt: 700, c: DIM, ls: 3 });
  txt(labG, RX, TREE_TOP - 16, '2026 · 신자 수는 대략치', { fs: 11.5, c: DIM, mono: true, op: 0.7 });
  let RW = 0;
  terminal.forEach(({ b, dd }) => {
    txt(labG, RX, b.y + 5, b.t || b.n, { fs: 15, wt: 700, c: b.col });
    RW = Math.max(RW, tw(b.t || b.n, 15, 700));
    if (dd) {
      const l = wrap(dd, 11.5, 400, 560);
      l.forEach((s, i) => txt(labG, RX, b.y + 21 + i * 13.5, s, { fs: 11.5, c: DIM }));
      RW = Math.max(RW, d3.max(l, s => tw(s, 11.5)));
    }
  });

  // ---------- 점 위치 (공의회 · 인물) ----------
  const ptX = (b, yr) => Math.min(Math.max(X(yr), b.ex + 8), b.endX - 4);
  const inl = COUNCILS.filter(c => !TOPK[c.k]).map(c => ({ c, b: byId[c.b], x: ptX(byId[c.b], c.y) }));
  const ppl = PEOPLE.map(p => ({ p, b: byId[p.b], x: ptX(byId[p.b], p.y) }));
  // 상단 카드에 해당하는 몸통 위 표석
  cards.forEach(({ c, x }) => {
    const y = byId[c.b].y;
    dotG.append('path').attr('d', `M${x},${y - 11} l11,11 l-11,11 l-11,-11 z`).attr('fill', GOLD).attr('stroke', BG).attr('stroke-width', 2.5);
    boxes.push([x - 12, y - 12, x + 12, y + 12]);
  });
  inl.forEach(d => boxes.push([d.x - 9, d.b.y - 9, d.x + 9, d.b.y + 9]));
  ppl.forEach(d => boxes.push([d.x - 4, d.b.y - 4, d.x + 4, d.b.y + 4]));

  function place(x, y, W, H, ga, gb) {
    for (let k = 0; k <= 16; k++) for (const side of [-1, 1]) for (const xo of [-8, -W + 8, -W / 2]) {
      const top = side < 0 ? y - ga - H - k * 13 : y + gb + k * 13;
      const b = [x + xo, top, x + xo + W, top + H];
      if (!hit(b)) return b;
    }
    return [x - 8, y - ga - H, x - 8 + W, y - ga];
  }
  function leader(x, y, box, hw, c) {
    const above = box[3] <= y;
    const y1 = above ? y - hw : y + hw, y2 = above ? box[3] : box[1];
    if (Math.abs(y2 - y1) > 4) {
      leadG.append('line').attr('x1', x).attr('x2', x).attr('y1', y1).attr('y2', y2).attr('stroke', c).attr('stroke-opacity', 0.55).attr('stroke-width', 1);
      boxes.push([x - 1, Math.min(y1, y2), x + 1, Math.max(y1, y2)]);
    }
  }

  // 지역 공의회 · 결정
  inl.sort((a, b) => a.c.y - b.c.y).forEach(({ c, b, x }) => {
    const y = b.y;
    dotG.append('path').attr('d', `M${x},${y - 8} l8,8 l-8,8 l-8,-8 z`).attr('fill', GOLD).attr('stroke', BG).attr('stroke-width', 2);
    const head = `${c.s.match(/^\d/) ? c.s.split(' · ')[0] : c.y}`;
    const sub = c.s.match(/^\d/) ? c.s.split(' · ').slice(1).join(' · ') : c.s;
    const dl = wrap(c.d, 12, 400, 290), pl = c.p ? wrap(c.p, 11.5, 400, 290, true) : [];
    const W = Math.max(tw(head, 12, 500, true) + 8 + tw(c.n, 15, 700) + 8 + tw(sub, 11.5), ...dl.map(s => tw(s, 12)), ...pl.map(s => tw(s, 11.5, 400, false, true)));
    const H = 18 + dl.length * 15 + pl.length * 14 + 4;
    const box = place(x, y, W, H, 10, 10);
    boxes.push(box);
    leader(x, y, box, 9, GOLD);
    const t = labG.append('text').attr('class', 'halo').attr('x', box[0]).attr('y', box[1] + 14);
    t.append('tspan').attr('font-family', FM).attr('font-size', 12).attr('font-weight', 500).attr('fill', GOLD).text(head + ' ');
    t.append('tspan').attr('dx', 4).attr('font-size', 15).attr('font-weight', 700).attr('fill', GOLD).text('◆ ' + c.n);
    t.append('tspan').attr('dx', 8).attr('font-size', 11.5).attr('fill', DIM).text(sub);
    dl.forEach((s, i) => txt(labG, box[0], box[1] + 32 + i * 15, s, { fs: 12 }));
    pl.forEach((s, i) => txt(labG, box[0], box[1] + 32 + dl.length * 15 + i * 14, s, { fs: 11.5, c: GOLD, it: true, op: 0.85 }));
  });

  // 인물
  ppl.sort((a, b) => a.p.y - b.p.y).forEach(({ p, b, x }) => {
    const y = b.y;
    dotG.append('circle').attr('cx', x).attr('cy', y).attr('r', 4.2).attr('fill', INK).attr('stroke', BG).attr('stroke-width', 1.8);
    const nameS = p.n, yrS = String(p.y);
    const W = Math.max(tw(nameS, 13.5, 700) + 6 + tw(yrS, 10.5, 400, true), p.r ? tw(p.r, 11) : 0);
    const H = p.r ? 31 : 17;
    const hw = b.w / 2 + 3;
    const box = place(x, y, W, H, hw + 4, hw + 4);
    boxes.push(box);
    leader(x, y, box, 4, INK);
    const t = labG.append('text').attr('class', 'halo').attr('x', box[0]).attr('y', box[1] + 13);
    t.append('tspan').attr('font-size', 13.5).attr('font-weight', 700).attr('fill', INK).text(nameS);
    t.append('tspan').attr('dx', 6).attr('font-family', FM).attr('font-size', 10.5).attr('fill', DIM).text(yrS);
    if (p.r) txt(labG, box[0], box[1] + 28, p.r, { fs: 11, c: b.dead ? DIM : b.col, op: 0.95 });
  });

  // ---------- 시간 축 ----------
  const axG = world.append('g');
  axG.append('line').attr('x1', X(30)).attr('x2', X(NOW)).attr('y1', AX).attr('y2', AX).attr('stroke', DIM).attr('stroke-opacity', 0.6).attr('stroke-width', 1.5);
  [30, ...ticks, NOW].forEach(y => {
    const major = y % 100 === 0 || y === 30 || y === NOW;
    axG.append('line').attr('x1', X(y)).attr('x2', X(y)).attr('y1', AX).attr('y2', AX + (major ? 10 : 6)).attr('stroke', DIM);
    if (major) txt(axG, X(y), AX + 30, String(y), { fs: y % 500 === 0 || y === 30 ? 19 : 15, wt: 500, c: y % 500 === 0 ? INK : DIM, mono: true, anchor: 'middle', halo: false });
    if (major && y !== 30 && y !== NOW) txt(axG, X(y), TREE_TOP - 40, String(y), { fs: 13, c: DIM, mono: true, anchor: 'middle', halo: false, op: 0.6 });
  });
  [[800, '1년 = 6px → 1.8px'], [1500, '1년 = 1.8px → 4.2px']].forEach(([y, s]) => {
    txt(axG, X(y), AX + 48, '축척 변경 · ' + s, { fs: 10.5, c: DIM, mono: true, anchor: 'middle', halo: false, op: 0.6 });
  });

  // ---------- 하단: 교회사 · 세계사 사건 ----------
  const EV0 = AX + 90;
  txt(world, X0 - 120, EV0 + 14, '사건', { fs: 16, wt: 700, c: DIM, halo: false });
  const evBoxes = [], evHit = mkHit(evBoxes);
  let evBot = EV0;
  EVENTS.forEach(e => {
    const x = X(e.y), s = e.n, yrS = String(e.y);
    const W = tw(yrS, 12, 500, true) + 8 + tw(s, 14, e.b ? 700 : 400);
    let box;
    for (let k = 0; k < 30; k++) {
      let ok = false;
      for (const xo of [-6, -W + 6]) { box = [x + xo, EV0 + k * 24, x + xo + W, EV0 + k * 24 + 18]; if (!evHit(box, 6)) { ok = true; break; } }
      if (ok) break;
    }
    evBoxes.push(box); evBot = Math.max(evBot, box[3]);
    axG.append('circle').attr('cx', x).attr('cy', AX).attr('r', e.b ? 5 : 3.5).attr('fill', e.b ? INK : DIM);
    axG.append('line').attr('x1', x).attr('x2', x).attr('y1', AX + 54).attr('y2', box[1] + 2).attr('stroke', DIM).attr('stroke-opacity', 0.35);
    const t = axG.append('text').attr('x', box[0]).attr('y', box[1] + 14);
    t.append('tspan').attr('font-family', FM).attr('font-size', 12).attr('font-weight', 500).attr('fill', DIM).text(yrS);
    t.append('tspan').attr('dx', 8).attr('font-size', 14).attr('font-weight', e.b ? 700 : 400).attr('fill', e.b ? INK : DIM).text(s);
  });

  // ---------- 범례 ----------
  const LG = evBot + 90;
  const W = Math.ceil(RX + RW + 120);
  world.append('line').attr('x1', X0).attr('x2', W - 120).attr('y1', LG - 40).attr('y2', LG - 40).attr('stroke', DIM).attr('stroke-opacity', 0.25);
  const lg = world.append('g').attr('transform', `translate(${X0},${LG})`);
  txt(lg, 0, 0, '계통 색상', { fs: 17, wt: 700, halo: false });
  Object.entries(FAM).filter(([k]) => k !== 'gold').forEach(([k, v], i) => {
    const cx = (i % 5) * 300, cy = 40 + Math.floor(i / 5) * 32;
    lg.append('rect').attr('x', cx).attr('y', cy - 10).attr('width', 34).attr('height', 8).attr('rx', 4).attr('fill', v.c)
      .attr('stroke-dasharray', null);
    txt(lg, cx + 46, cy, v.name, { fs: 15, c: DIM, halo: false });
  });
  const sx = 1620;
  txt(lg, sx, 0, '기호', { fs: 17, wt: 700, halo: false });
  const sym = [
    ['dia', '공의회 · 결정 (위 카드 = 일곱 세계 공의회와 대분열)'],
    ['dot', '인물 — 이름 · 활동 연도 · 역할'],
    ['fade', '소멸한 흐름 · 정죄된 이설 († 소멸 연도)'],
    ['dash', '전통적 삼위일체 신앙 밖의 신흥 종파'],
    ['fork', '가지가 갈라지는 점 = 분리된 해 (라벨의 연도)'],
  ];
  sym.forEach(([k, s], i) => {
    const cy = 40 + i * 30, g = lg.append('g').attr('transform', `translate(${sx},${cy - 5})`);
    if (k === 'dia') g.append('path').attr('d', 'M14,-8 l8,8 l-8,8 l-8,-8 z').attr('fill', GOLD);
    if (k === 'dot') g.append('circle').attr('cx', 14).attr('r', 4.5).attr('fill', INK);
    if (k === 'fade') { const gid = 'lgfade'; const l = defs.append('linearGradient').attr('id', gid); l.append('stop').attr('offset', 0).attr('stop-color', FAM.dead.c); l.append('stop').attr('offset', 1).attr('stop-color', FAM.dead.c).attr('stop-opacity', 0.05); g.append('rect').attr('y', -3).attr('width', 34).attr('height', 6).attr('fill', `url(#${gid})`); }
    if (k === 'dash') g.append('line').attr('x2', 34).attr('stroke', FAM.nt.c).attr('stroke-width', 4).attr('stroke-dasharray', '9 6');
    if (k === 'fork') { g.append('path').attr('d', 'M0,6 C10,6 10,-6 24,-6 L34,-6').attr('fill', 'none').attr('stroke', DIM).attr('stroke-width', 3); g.append('circle').attr('cx', 1).attr('cy', 6).attr('r', 4).attr('fill', DIM); }
    txt(lg, sx + 50, cy, s, { fs: 15, c: DIM, halo: false });
  });
  const notes = [
    '시간 축은 세 구간의 축척이 다릅니다 — 공의회와 교부가 몰린 30–800년을 넓게, 800–1500년을 좁게, 종교개혁 이후를 다시 넓게 그렸습니다.',
    '가지의 굵기는 오늘의 대략적 규모를, 위아래 위치는 계보의 가까움을 나타냅니다. 신자 수는 대략치이며 통계마다 다릅니다.',
    '분열의 연도는 상징적 사건 기준입니다 — 실제 분리는 수십 년에서 수백 년에 걸쳐 점진적으로 일어났습니다 (예: 1054년 이후 1204년에 고착).',
  ];
  notes.forEach((s, i) => txt(lg, 2700, 40 + i * 30, s, { fs: 15, c: DIM, halo: false }));
  txt(lg, 2700, 0, '읽는 법', { fs: 17, wt: 700, halo: false });

  const H = Math.ceil(LG + 260);
  svg.attr('width', W).attr('height', H).attr('viewBox', `0 0 ${W} ${H}`);
  window.__POSTER = { W, H };
})();
