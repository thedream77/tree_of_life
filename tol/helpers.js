// 계통수 데이터 작성 도우미
// T(이름, 옵션, ...자식)  — 내부 분기
// F(과, 학명, 대표, 옵션) — 말단 '과'
// L(`목 Latin = 과 Latin 대표; 과 Latin 대표`) — 여러 목을 한 번에 (줄 단위). 과가 하나면 '목 › 과' 한 노드로 접음.
//   과 이름 끝에 † 를 붙이면 멸종.
(function () {
  const T = (n, o = {}, ...kids) => ({ n, ...o, children: kids.flat(Infinity).length ? kids.flat(Infinity) : undefined });
  const F = (n, s, e, o = {}) => ({ n, s, e, ...o });
  function fam(str) {
    const p = str.trim().split(/\s+/);
    let n = p[0], ex = 0;
    if (n.endsWith('†')) { n = n.slice(0, -1); ex = 1; }
    return F(n, p[1], p.slice(2).join(' '), ex ? { ex: 1 } : {});
  }
  function L(src) {
    return src.split('\n').map(s => s.trim()).filter(s => s && !s.startsWith('//')).map(line => {
      const [left, right] = line.split('=');
      const lp = left.trim().split(/\s+/);
      const ord = lp[0], lat = lp[1];
      const fams = right.split(';').filter(x => x.trim()).map(fam);
      return fams.length === 1 ? { ...fams[0], ord } : T(ord, { s: lat }, ...fams);
    });
  }
  Object.assign(window, { T, F, L });
  window.TOL = {};
})();
