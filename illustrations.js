/* Original vector illustrations drawn by BizWeb KH for this design prototype.
   They are NOT photographs and do not depict real CMEHA programs, staff or beneficiaries.
   Replace with approved CMEHA photography when supplied. No third-party artwork is used. */
(function () {
  const C = { navy: "#1f2270", blue: "#2e3192", mid: "#5b60c9", pale: "#dfe2f7", gold: "#e8a300", cream: "#fff6dc", mint: "#d9f1e5", white: "#ffffff", ink: "#14163f" };
  const SK = ["#8a5a3c", "#a9744f", "#c68e65", "#6f4529"];
  const star = (cx, cy, r, f, o = 1) => { const p = []; for (let i = 0; i < 16; i++) { const a = (Math.PI * i) / 8 - Math.PI / 2, rr = i % 2 ? r * 0.62 : r; p.push((cx + rr * Math.cos(a)).toFixed(1) + "," + (cy + rr * Math.sin(a)).toFixed(1)); } return `<polygon points="${p.join(" ")}" fill="${f}" opacity="${o}"/>`; };
  // person: feet at (x,y), height ≈ 100*s. style: 'scarf' | 'cap' | 'hair'
  const person = (x, y, s, skin, cloth, style = "hair", arms = "down") => {
    const hx = x, hy = y - 84 * s;
    let head = "";
    if (style === "scarf") head = `<circle cx="${hx}" cy="${hy}" r="${15 * s}" fill="${cloth}"/><ellipse cx="${hx}" cy="${hy + 2 * s}" rx="${8.5 * s}" ry="${10 * s}" fill="${skin}"/>`;
    else if (style === "cap") head = `<circle cx="${hx}" cy="${hy}" r="${10.5 * s}" fill="${skin}"/><path d="M${hx - 10 * s} ${hy - 3 * s}a${10 * s} ${8 * s} 0 0 1 ${20 * s} 0z" fill="#fff"/>`;
    else head = `<circle cx="${hx}" cy="${hy}" r="${10.5 * s}" fill="${skin}"/><path d="M${hx - 11 * s} ${hy}a${11 * s} ${11 * s} 0 0 1 ${22 * s} 0 ${9 * s} ${5 * s} 0 0 0 -${22 * s} 0z" fill="#2a1c14"/>`;
    const body = `<path d="M${x - 15 * s} ${y}v${-40 * s}a${15 * s} ${14 * s} 0 0 1 ${30 * s} 0v${40 * s}z" fill="${cloth}"/>`;
    const arm = arms === "up" ? `<path d="M${x + 13 * s} ${y - 52 * s}l${14 * s} ${-26 * s}" stroke="${skin}" stroke-width="${6 * s}" stroke-linecap="round"/>` : arms === "hold" ? `<path d="M${x - 12 * s} ${y - 50 * s}l${22 * s} ${14 * s}" stroke="${skin}" stroke-width="${6 * s}" stroke-linecap="round"/>` : "";
    return `<g>${body}${arm}<rect x="${x - 5 * s}" y="${y - 74 * s}" width="${10 * s}" height="${9 * s}" fill="${skin}"/>${head}</g>`;
  };
  const cloud = (x, y, s = 1, o = 0.7) => `<g fill="#fff" opacity="${o}"><ellipse cx="${x}" cy="${y}" rx="${46 * s}" ry="${14 * s}"/><ellipse cx="${x - 20 * s}" cy="${y - 10 * s}" rx="${22 * s}" ry="${14 * s}"/><ellipse cx="${x + 14 * s}" cy="${y - 14 * s}" rx="${26 * s}" ry="${16 * s}"/></g>`;
  const book = (x, y, w, h, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${c}"/><rect x="${x + 3}" y="${y}" width="3" height="${h}" fill="#fff" opacity=".35"/>`;
  const cap = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-40 0L0-18 40 0 0 18z" fill="${C.navy}"/><path d="M-24 8v16q24 14 48 0V8L0 20z" fill="${C.blue}"/><path d="M40 0v22" stroke="${C.gold}" stroke-width="3"/><circle cx="40" cy="25" r="4" fill="${C.gold}"/></g>`;
  const defs = (id, a, b) => `<defs><linearGradient id="g${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>`;
  const wrap = (inner, vb = "0 0 800 600") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" preserveAspectRatio="xMidYMax slice" role="img" aria-hidden="true" focusable="false">${inner}</svg>`;

  const scenes = {
    classroom: (t = 0) => wrap(`${defs("c", t ? C.mint : C.cream, "#fff")}<rect width="800" height="600" fill="url(#gc)"/>
      <rect y="440" width="800" height="160" fill="${C.pale}"/>
      <rect x="60" y="70" width="400" height="220" rx="10" fill="${C.navy}"/><rect x="72" y="82" width="376" height="196" rx="6" fill="${C.blue}"/>
      <path d="M100 130h160M100 165h240M100 200h120" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".8"/><circle cx="360" cy="125" r="22" fill="none" stroke="${C.gold}" stroke-width="5"/>
      <rect x="540" y="70" width="190" height="230" rx="8" fill="#bfe3ff"/><path d="M635 70v230M540 185h190" stroke="#fff" stroke-width="8"/>${cloud(600, 120, .8)}${star(680, 240, 14, C.gold, .0)}
      ${person(500, 440, 1.6, SK[1], C.gold, "scarf", "up")}
      ${person(150, 500, 1.05, SK[2], C.mid, "hair")}${person(290, 505, 1.05, SK[0], C.blue, "cap")}${person(430, 505, 1.05, SK[3], C.mid, "scarf")}
      <rect x="100" y="470" width="100" height="14" rx="4" fill="#c9895a"/><rect x="240" y="475" width="100" height="14" rx="4" fill="#c9895a"/><rect x="380" y="475" width="100" height="14" rx="4" fill="#c9895a"/>
      ${book(130, 456, 28, 14, C.gold)}${book(268, 461, 26, 14, C.navy)}<rect x="0" y="540" width="800" height="60" fill="#b9bfe8" opacity=".5"/>`),
    library: (t = 0) => wrap(`<rect width="800" height="600" fill="${t ? C.pale : C.navy}"/>
      ${[0, 1, 2].map((r) => `<rect x="40" y="${70 + r * 150}" width="720" height="10" fill="#c9895a"/>` + [...Array(18)].map((_, i) => book(52 + i * 39, 70 + r * 150 - (60 + ((i * 7 + r * 5) % 4) * 12), 30, 60 + ((i * 7 + r * 5) % 4) * 12, [C.gold, C.mid, "#fff", C.blue, C.mint][(i + r) % 5])).join("")).join("")}
      <rect x="0" y="500" width="800" height="100" fill="${t ? C.mint : C.blue}"/>
      <g transform="translate(560 410)"><circle r="82" fill="${C.mint}" stroke="${C.gold}" stroke-width="6"/><ellipse rx="34" ry="82" fill="none" stroke="${C.blue}" stroke-width="4" opacity=".5"/><path d="M-82 0h164M-70-38h140M-70 38h140" stroke="${C.blue}" stroke-width="4" opacity=".5"/><rect x="-6" y="82" width="12" height="46" fill="${C.gold}"/><rect x="-40" y="124" width="80" height="12" rx="6" fill="${C.gold}"/></g>
      ${person(270, 520, 1.9, SK[1], C.gold, "scarf", "hold")}${book(300, 400, 46, 12, "#fff")}`),
    community: (t = 0) => wrap(`${defs("m", t ? "#ffe7a8" : "#bcd0ff", "#fff")}<rect width="800" height="600" fill="url(#gm)"/><circle cx="620" cy="150" r="64" fill="${C.gold}" opacity=".9"/>${cloud(160, 120, 1)}${cloud(420, 80, .7)}
      <path d="M0 400q200-90 400-20t400-40v260H0z" fill="${C.mint}"/><path d="M0 460q240-70 420-10t380-20v170H0z" fill="#b6e2c9"/>
      <g transform="translate(90 300)"><rect x="-8" y="40" width="16" height="110" fill="#8a5a3c"/><circle cy="20" r="70" fill="#4aa57b"/><circle cx="-40" cy="60" r="44" fill="#5bbd90"/><circle cx="44" cy="62" r="42" fill="#3f956e"/></g>
      ${[[250, 1.1, 0, C.blue, "hair"], [320, 1.35, 1, C.gold, "scarf"], [390, 1.2, 2, C.mid, "cap"], [460, 1.45, 3, C.navy, "scarf"], [530, 1.15, 0, C.gold, "hair"], [595, 1.3, 1, C.blue, "scarf"], [655, 0.9, 2, C.mid, "hair"]].map(([x, s, k, c, st], i) => person(x, 540 + (i % 2) * 14, s, SK[k], c, st, i == 3 ? "up" : "down")).join("")}`),
    relief: (t = 0) => wrap(`<rect width="800" height="600" fill="${t ? C.mint : C.cream}"/><circle cx="640" cy="130" r="150" fill="${C.gold}" opacity=".22"/>${star(130, 120, 56, C.gold, .35)}${star(700, 480, 40, C.blue, .12)}
      <rect y="470" width="800" height="130" fill="${C.pale}"/>
      <g><rect x="90" y="400" width="110" height="90" rx="6" fill="#d6a06b"/><path d="M145 400v90M90 440h110" stroke="${C.gold}" stroke-width="10"/><rect x="190" y="430" width="100" height="60" rx="6" fill="#c9895a"/><path d="M240 430v60" stroke="${C.blue}" stroke-width="9"/><rect x="130" y="330" width="90" height="70" rx="6" fill="#e2b183"/><path d="M175 330v70" stroke="${C.blue}" stroke-width="9"/></g>
      ${person(430, 520, 1.7, SK[0], C.blue, "cap", "hold")}${person(560, 520, 1.55, SK[2], C.gold, "scarf", "hold")}
      <g transform="translate(496 372)"><rect x="-26" y="-18" width="52" height="40" rx="5" fill="#e2b183"/><path d="M0-18v40" stroke="${C.navy}" stroke-width="7"/></g>
      <path d="M690 300c-30-30-70 8-34 42l34 30 34-30c36-34-4-72-34-42z" fill="${C.blue}"/>`),
    youth: (t = 0) => wrap(`${defs("y", t ? "#e6e8ff" : "#d9f1e5", "#fff")}<rect width="800" height="600" fill="url(#gy)"/>${cloud(620, 110, 1)}
      <path d="M0 430q220-60 440-10t360-30v210H0z" fill="#bfe6d1"/><rect y="500" width="800" height="100" fill="#a9d8c0"/>
      <g transform="translate(660 250)"><rect x="-10" y="40" width="20" height="200" fill="#8a5a3c"/><circle cy="10" r="90" fill="#4aa57b"/><circle cx="-60" cy="60" r="52" fill="#5bbd90"/><circle cx="62" cy="64" r="50" fill="#3f956e"/></g>
      <g><ellipse cx="300" cy="540" rx="220" ry="26" fill="#9fcfb7"/></g>
      ${person(190, 530, 1.5, SK[2], C.blue, "hair", "hold")}${person(300, 530, 1.6, SK[1], C.gold, "scarf", "hold")}${person(410, 530, 1.45, SK[3], C.mid, "cap", "up")}
      ${cap(300, 150, 1.5)}${book(170, 400, 36, 10, C.gold)}${book(180, 388, 30, 10, C.navy)}${star(110, 150, 26, C.gold, .6)}${star(480, 90, 18, C.blue, .25)}`),
    event: (_t = 0) => wrap(`<rect width="800" height="600" fill="${C.navy}"/>${defs("e", C.blue, C.navy)}<rect width="800" height="420" fill="url(#ge)"/>
      <path d="M200 0L100 420h140zM600 0l100 420H560z" fill="#fff" opacity=".07"/>
      <rect x="150" y="150" width="500" height="150" rx="10" fill="#fff"/><rect x="150" y="150" width="500" height="150" rx="10" fill="none" stroke="${C.gold}" stroke-width="6"/>
      ${star(220, 225, 38, C.gold)}<rect x="290" y="190" width="300" height="14" rx="7" fill="${C.blue}"/><rect x="290" y="220" width="240" height="10" rx="5" fill="${C.mid}" opacity=".6"/><rect x="290" y="244" width="180" height="10" rx="5" fill="${C.mid}" opacity=".4"/>
      <rect y="360" width="800" height="30" fill="#c9895a"/>${person(350, 360, 1.3, SK[1], C.gold, "scarf", "up")}${person(450, 360, 1.3, SK[0], "#fff", "cap")}
      <rect y="390" width="800" height="210" fill="${C.ink}"/>
      ${[...Array(15)].map((_, i) => { const x = 40 + i * 52 + (i % 2) * 14, y = 470 + (i % 3) * 36; return `<circle cx="${x}" cy="${y}" r="${22 + (i % 3) * 3}" fill="${[SK[0], SK[1], SK[2], SK[3]][i % 4]}"/><path d="M${x - 26} ${y + 70}a26 36 0 0 1 52 0z" fill="${[C.blue, C.mid, C.gold][i % 3]}"/>`; }).join("")}`),
    hero: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true" focusable="false">
      <defs><linearGradient id="gh" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#14163f"/><stop offset=".55" stop-color="#2e3192"/><stop offset="1" stop-color="#8a8fe0"/></linearGradient><radialGradient id="sun"><stop offset="0" stop-color="#ffd36b"/><stop offset="1" stop-color="#e8a300"/></radialGradient></defs>
      <rect width="1600" height="800" fill="url(#gh)"/>
      ${[...Array(26)].map((_, i) => `<circle cx="${(i * 233) % 1600}" cy="${(i * 97) % 340}" r="${1 + (i % 3)}" fill="#fff" opacity=".5"/>`).join("")}
      <circle cx="1180" cy="470" r="190" fill="url(#sun)" opacity=".95"/><circle cx="1180" cy="470" r="250" fill="none" stroke="#e8a300" stroke-opacity=".25" stroke-width="2"/><circle cx="1180" cy="470" r="320" fill="none" stroke="#e8a300" stroke-opacity=".12" stroke-width="2"/>
      <path d="M0 640q300-120 640-50t520-40 440 30v220H0z" fill="#1f2270" opacity=".9"/>
      <g fill="#14163f"><rect x="640" y="540" width="260" height="140"/><path d="M670 540a100 100 0 0 1 200 0z"/><rect x="768" y="400" width="4" height="50"/><circle cx="770" cy="398" r="8"/>
        <rect x="610" y="430" width="30" height="250"/><path d="M606 430l19-46 19 46z"/><rect x="900" y="470" width="26" height="210"/><path d="M896 470l17-40 17 40z"/>
        <rect x="940" y="580" width="120" height="100"/><path d="M950 580a50 50 0 0 1 100 0z"/><rect x="460" y="600" width="140" height="80"/></g>
      <g fill="#e8a300" opacity=".9">${[680, 730, 780, 830].map((x) => `<path d="M${x} 640v-34a12 12 0 0 1 24 0v34z"/>`).join("")}<path d="M752 520v-30a18 18 0 0 1 36 0v30z" opacity=".8"/></g>
      <path d="M0 700q300-70 700-20t900-20v140H0z" fill="#14163f"/>
      <ellipse cx="1230" cy="742" rx="260" ry="14" fill="#0b0c2a" opacity=".55"/>
      <g>${[[1060, 1.45, 1, "#e8a300", "scarf"], [1140, 1.7, 0, "#fff", "cap"], [1230, 1.55, 2, "#5b60c9", "scarf"], [1318, 1.4, 3, "#e8a300", "hair"], [1396, 1.15, 1, "#fff", "scarf"]].map(([x, s, k, c, st]) => person(x, 740, s, SK[k], c, st)).join("")}</g>
      <g transform="translate(1235 500)"><path d="M-60 0q60-30 60 0v60q-30-24-60 0z" fill="#fff"/><path d="M60 0q-60-30-60 0v60q30-24 60 0z" fill="#dfe2f7"/></g>
    </svg>`,
    mark: () => wrap(`<rect width="800" height="600" fill="${C.pale}"/>${star(400, 300, 220, C.blue, .08)}${star(400, 300, 140, C.gold, .15)}`)
  };
  window.ILLU = scenes;
})();
