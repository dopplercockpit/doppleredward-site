const P = {
  kathy:{name:'Kathy Korpi',dates:'b. 1950',location:'USA',type:'noble',father:'leo',mother:'irene',spouse:'matthew',bio:"Born 1950, still living. Carries Finnish immigrant roots from multiple family lines (Korpi, Lampinen, Honkonen, Kuitunen) AND documented noble Swedish-Finnish ancestry through the Ehrnrooth family going back to Karl Johan Plagman (ennobled 1687) and claimed royal descent from King Karl Knutsson Bonde (c.1408–1470), three-time King of Sweden."},
  leo:{name:'Leo Harold Korpi',dates:'1925–2004',location:'Michigan',type:'normal',father:'oscar',mother:'hilja',bio:"Born 1925, died 2004. Son of Oscar Korpi and Hilja Honkonen, Finnish immigrant stock. Married Irene Lampinen. They had Kathy (b.1950), Raymond, and Russell."},
  irene:{name:'Irene Lampinen',dates:'b. 1925, living',location:'Michigan',type:'noble',father:'emil_l',mother:'signe',bio:"Born 1925, still living. Daughter of Emil Lampinen and Signe S. Kuitunen. Through her grandmother Linda K. Ehrnrooth, carries the full Ehrnrooth noble lineage claimed to trace back to King Karl Knutsson Bonde. Married Leo Harold Korpi."},
  oscar:{name:'Oscar Korpi',dates:'b. ~1904',location:'USA',type:'normal',father:'victor',mother:'mary_l',bio:"Born approximately 1904. Son of Victor Korpi and Mary Lehtinen, Finnish immigrants. Married Hilja Honkonen."},
  hilja:{name:'Hilja Honkonen',dates:'1898–1940',location:'USA',type:'normal',father:'matt_h',mother:'tilda',bio:"Born 1898, died 1940 at approximately 42. Daughter of Matt Honkonen and Tilda Ahtava. Married Oscar Korpi. Died while her son Leo was still a teenager."},
  emil_l:{name:'Emil Lampinen',dates:'1902–1950',location:'Michigan',type:'normal',father:'matt_l',mother:'eliina',bio:"Born 1902, died 1950. Son of Matt Lampinen (1872–1932) and Eliina Muhonen (1879–1950). Married Signe Kuitunen, connecting the Lampinen family to Ehrnrooth nobility."},
  signe:{name:'Signe S. Kuitunen',dates:'1906–1944',location:'Michigan',type:'noble',father:'adolf',mother:'linda',bio:"Born 1906, died 1944 at only 38. Daughter of Adolf R. Kuitunen and Linda K. Ehrnrooth. Carries Ehrnrooth noble bloodline. Married Emil Lampinen. Died during WWII while children were still young."},
  victor:{name:'Victor Korpi',dates:'dates unknown',location:'Finland → USA',type:'normal',bio:"Finnish immigrant. Emigrated during the great Finnish emigration wave (1880s–1910s). Married Mary Lehtinen."},
  mary_l:{name:'Mary Lehtinen',dates:'dates unknown',location:'Finland → USA',type:'normal',bio:"Finnish immigrant. Lehtinen means 'small grove.' Married Victor Korpi."},
  matt_h:{name:'Matt Honkonen',dates:'dates unknown',location:'Finland → USA',type:'normal',bio:"Finnish immigrant. Honkonen means 'pine forest.' Married Tilda Ahtava."},
  tilda:{name:'Tilda Ahtava',dates:'dates unknown',location:'Finland → USA',type:'normal',bio:"Finnish immigrant. Ahtava is an uncommon Finnish surname. Married Matt Honkonen."},
  matt_l:{name:'Matt Lampinen',dates:'1872–1932',location:'Finland → Michigan',type:'normal',bio:"Born 1872 in Finland, died 1932. Emigrated to Michigan's Upper Peninsula. Married Eliina Muhonen."},
  eliina:{name:'Eliina Muhonen',dates:'1879–1950',location:'Finland → Michigan',type:'normal',bio:"Born 1879 in Finland, died 1950. Married Matt Lampinen. Together they emigrated to Michigan."},
  adolf:{name:'Adolf R. Kuitunen',dates:'1881–1944',location:'Finland → Michigan',type:'normal',bio:"Born 1881, died 1944. Emigrated to Michigan. Married Linda K. Ehrnrooth — bridging Finnish working-class stock with 200+ years of Swedish-Finnish nobility."},
  linda:{name:'Linda K. Ehrnrooth',dates:'1882–1955',location:'Finland → Michigan',type:'noble',father:'reinhold',bio:"Born 1882, died 1955. Born into the Ehrnrooth noble family. Emigrated to Michigan. Her lineage traces through 8 generations of Finnish-Swedish nobility back to Karl Johan Plagman (ennobled 1687) and claims royal descent from King Karl Knutsson Bonde (c.1408)."},
  reinhold:{name:'Reinhold F. Ehrnrooth',dates:'1825–1899',location:'Finland',type:'noble',father:'gustav_h',mother:'katariina_m',bio:"Born 1825, died 1899. Son of Gustav H. Ehrnrooth and Katariina Manninen. Kathy's 2nd great-grandparent. Note: the MyHeritage tree marks a possible additional generation ('Potential +1') between Reinhold and Linda."},
  reinhold_sp:{name:'Unknown spouse',dates:'records not found',location:'Finland',type:'normal',bio:"The spouse of Reinhold F. Ehrnrooth has not yet been identified. Finnish National Archives (arkisto.fi) or HisKi project could reveal her name."},
  gustav_h:{name:'Gustav H. Ehrnrooth',dates:'1766–1845',location:'Finland',type:'noble',father:'magnus',mother:'katariina_m',bio:"Born 1766, died 1845. Son of Magnus J. Ehrnrooth. Kathy's 3rd great-grandfather. Married Katariina Manninen (Finnish surname) — a cross-cultural marriage bridging Swedish-Finnish nobility and Finnish-speaking stock."},
  katariina_m:{name:'Katariina Manninen',dates:'1791–1880',location:'Finland',type:'normal',bio:"Born 1791, died 1880 at an impressive 89! Finnish surname suggesting Finnish-speaking origins. Married Gustav H. Ehrnrooth. A notable cross-cultural marriage into Swedish-Finnish nobility."},
  magnus:{name:'Magnus J. Ehrnrooth',dates:'1730–1785',location:'Finland',type:'noble',father:'gustaf_h',mother:'christina_r',bio:"Born 1730, died 1785. Son of Gustaf H. Ehrnrooth and Christina Hästesko. Kathy's 4th great-grandfather. Married Christina E. Reiher."},
  christina_r:{name:'Christina E. Reiher',dates:'1743–1829',location:'Finland',type:'normal',bio:"Born 1743, died 1829 at 86. Married Magnus J. Ehrnrooth. The Reiher surname suggests German or Baltic-German origins, common in Finnish noble circles of the era."},
  gustaf_h:{name:'Gustaf H. Ehrnrooth',dates:'1692–1759',location:'Finland',type:'noble',father:'johan_p',mother:'brita_u',bio:"Born 1692, died 1759. Son of Karl Johan Plagman (Ehrnrooth) and Brita Uggla. Major in the Swedish military. Married Christina C. Hästesko 24 June 1727. First Ehrnrooth born into nobility."},
  christina_h:{name:'Christina C. Hästesko',dates:'1706–1780',location:'Finland',type:'noble',bio:"Born 1706, died 1780. From the Hästesko af Målagård noble family. Married Gustaf H. Ehrnrooth 24 June 1727."},
  johan_p:{name:'Karl Johan Plagman (Ehrnrooth)',dates:'1623–1696',location:'Turku → Hiitola, Finland',type:'noble',father:'hans_p',mother:'elisabet_f',bio:"Born Turku 1623. Studied Turku Academy (1644) and Uppsala (1648). District Judge of Käkisalmi. On 19 November 1687 raised to Swedish nobility as 'Ehrnrooth' — FOUNDING the entire noble dynasty. House of Nobility #1123. Died Hiitola 1696."},
  brita_u:{name:'Brita H. Uggle',dates:'1656–1692',location:'Sweden',type:'noble',father:'hildebrand',mother:'maria_e',bio:"Born 1656, died 1692 in Stockholm at just 36. Daughter of Hildebrand Claesson Uggla and Maria Ekeblad (both noble families). It is through the Uggla/Ekeblad families that the claimed descent from King Karl Knutsson Bonde traces. Married Johan Plagman 15 Dec 1681."},
  hans_p:{name:'Hans H. Plagman',dates:'c.1601–1679',location:'Turku, Finland',type:'normal',bio:"Merchant and town councilor (raatimies) in Turku; member of parliament. His grandfather Hans Plagman emigrated from Germany through Livonia (Latvia/Estonia) to Finland around 1600. The original immigrant who planted the family roots in Finland."},
  elisabet_f:{name:'Elisabet H. Finno',dates:'died 1679',location:'Turku, Finland',type:'normal',bio:"Wife of Hans H. Plagman. The Finno surname may connect to the known Finno family of Turku. Died and buried 20 July 1679."},
  hildebrand:{name:'Hildebrand C. Uggla',dates:'1608–1677',location:'Sweden',type:'noble',bio:"Swedish nobleman and major. Father of Brita Uggla who married Johan Plagman/Ehrnrooth. The Uggla family (Swedish nobility nr 100) is an established noble house with connections to medieval royal lineages."},
  maria_e:{name:'Maria G. Ekeblad',dates:'died c.1679',location:'Sweden',type:'noble',bio:"Wife of Hildebrand Uggla, mother of Brita Uggla. The Ekeblad family was a well-established Swedish noble family. Through her and the Uggla lineage, the claimed royal Bonde connection flows down to Kathy."},
  karl_bonde:{name:'Karl Knutsson Bonde',dates:'c.1408–1470',location:'Sweden',type:'royal',father:'knut_bonde',mother:'margareta_s',bio:"King of Sweden three times (1448–57, 1464–65, 1467–70) and King of Norway (1449–50). Born at Ekholmen Castle. His descendants have ascended the thrones of Norway, Great Britain, Denmark, Belgium, Spain, Russia and others. The connection to Kathy's line runs through the Uggla/Ekeblad noble families (claimed; genealogical research ongoing)."},
  knut_bonde:{name:'Knut Tordsson Bonde',dates:'d. 1413',location:'Sweden',type:'noble',father:'tord_bonde',mother:'ramborg',bio:"Knight and member of the Swedish privy council (riksråd). Hövidsman at Turku Castle. Died 1413, buried at Vadstena Monastery. Father of King Karl Knutsson. His own father Knut was first cousin of Erik Johansson Vasa's father."},
  margareta_s:{name:'Margareta Karlsdotter',dates:'d. 1428',location:'Sweden',type:'noble',father:'karl_ulfsson',mother:'helena_i',bio:"Only daughter and heiress of Karl Ulfsson, Lord of Tofta (Sparre av Tofta). Descended from Jarl Karl the Deaf and from Ingegerd Knutsdotter (daughter of Canute IV of Denmark). Mother of King Karl Knutsson. Her family claimed descent from Saint Erik IX of Sweden."},
  tord_bonde:{name:'Tord Röriksson Bonde',dates:'c.1350–c.1420',location:'Sweden',type:'noble',bio:"Grandfather of King Karl Knutsson. Swedish noble of the Bonde family. Married Ramborg Nilsdotter of the Vasa family — the same family that would later produce the Vasa royal dynasty of Sweden and Poland."},
  ramborg:{name:'Ramborg Nilsdotter (Vasa)',dates:'c.1360–?',location:'Sweden',type:'noble',bio:"Wife of Tord Röriksson Bonde. Member of the Vasa family — relatives of the later Vasa dynasty that ruled Sweden and Poland for centuries. Grandmother of King Karl Knutsson."},
  karl_ulfsson:{name:'Karl Ulfsson (Sparre av Tofta)',dates:'c.1370–c.1430',location:'Sweden',type:'noble',bio:"Lord of Tofta, marshal and lawman in Uppland. Father of Margareta Karlsdotter, who became mother of King Karl Knutsson. His family (Sparre av Tofta) claimed descent from Saint Eric (Erik IX) of Sweden, king ~1150s."},
  helena_i:{name:'Helena Israelsdotter (Finstaätten)',dates:'c.1370–?',location:'Sweden',type:'noble',bio:"Wife of Karl Ulfsson (Sparre av Tofta). From the Finstaätten family, an ancient Swedish noble house. Mother of Margareta Karlsdotter, who became mother of King Karl Knutsson Bonde."},
  matthew:{name:'Matthew Dopkowski',dates:'living',location:'USA',type:'normal',father:'edward',mother:'natalie',spouse:'kathy',bio:"Still living. Married Kathy Korpi. Original surname was Dorochowicz — changed to Dopkowski upon immigration. Family roots are in Poland, with branches in the Suwałki and Płock regions."},
  edward:{name:'Edward F. Dopkowski',dates:'b. July 12, 1926',location:'Detroit, MI',type:'normal',father:'antoni',mother:'anna_g',bio:"Born July 12, 1926 in Detroit, Michigan. Son of Antoni Dopkowski (original name Dorochowicz) and Anna Galicki. Matthew's father."},
  natalie:{name:'Natalie D. Dopkowski',dates:'b. Aug 21, 1928',location:'Hamtramck, MI',type:'normal',father:'frank_j',mother:'sofia_t',bio:"Born August 21, 1928 in Hamtramck, Michigan. Daughter of Frank Jankowski and Sofia Turowski. Matthew's mother. Hamtramck was heavily Polish-American at the time."},
  antoni:{name:'Antoni Dopkowski (Dorochowicz)',dates:'b. June 13, 1887',location:'Poland → Detroit',type:'normal',father:'thomas_d',mother:'marianna_m',bio:"Born June 13, 1887 in Poland. Original surname Dorochowicz; adopted Dopkowski in America. Emigrated to Detroit. Married Anna Galicki."},
  anna_g:{name:'Anna Galicki (Galicanka)',dates:'b. Feb 25, 1894',location:'Poland → Detroit',type:'normal',father:'franciszek',mother:'marianna_sz',bio:"Born February 25, 1894 in Poland, nickname 'Galicanka.' Daughter of Franciszek Galicki and Marianna Szpakowski. Emigrated to Detroit."},
  frank_j:{name:'Frank Jankowski',dates:'b. c. 1885',location:'Poland → Michigan',type:'normal',father:'john_j',mother:'josephine_j',bio:"Born approximately 1885, emigrated from Poland to Michigan. Son of John Jankowski (1859–1919) and Josephine Jendracyak (1870–1906). Married Sofia Turowski."},
  sofia_t:{name:'Sofia Turowski',dates:'1904–1985',location:'Kurewko, Poland → Michigan',type:'normal',father:'stefan_t',mother:'lottie_n',bio:"Born 1904 in Kurewko (between Płock and Sierpc), schooled in Gozewo. Emigrated to Michigan. Died 1985. Married Frank Jankowski."},
  thomas_d:{name:'Thomas Dorochowicz',dates:'1807–1902',location:'Poland (Suwałki region)',type:'normal',bio:"Born 1807, died 1902 — lived to approximately 95! From Wotownia near Jeleniewo, Suwałki region (then Russian-controlled Poland). Grandfather of Antoni Dopkowski."},
  marianna_m:{name:'Marianna Micielica',dates:'dates unknown',location:'Wotownia, near Jeleniewo, Poland',type:'normal',bio:"From the Suwałki region of Poland (historically Polish-Lithuanian Commonwealth, then Russian Empire). Married Thomas Dorochowicz."},
  franciszek:{name:'Franciszek Galicki',dates:'dates unknown',location:'Poland',type:'normal',bio:"From Poland. Married Marianna Szpakowski. Father of Anna Galicki who emigrated to Detroit. The Galicki surname may suggest szlachta (gentry) origins."},
  marianna_sz:{name:'Marianna Szpakowski',dates:'dates unknown',location:'Poland',type:'normal',bio:"From Poland, also recorded with nickname 'Gwizdiyka.' Married Franciszek Galicki. Mother of Anna Galicki."},
  john_j:{name:'John Jankowski',dates:'1859–1919',location:'Poland',type:'normal',bio:"Born 1859, died 1919. From Poland. Married Josephine Jendracyak. Father of Frank Jankowski. Died likely during the 1918–19 influenza pandemic."},
  josephine_j:{name:'Josephine Jendracyak',dates:'1870–1906',location:'Poland',type:'normal',bio:"Born 1870, died 1906 at only 36. Married John Jankowski. Mother of Frank Jankowski."},
  stefan_t:{name:'Stefan Turowski',dates:'died c. 1908',location:'Poland',type:'normal',bio:"Died approximately 1908. From Poland. Married Lottie Nicelska. Father of Sofia Turowski. Turowski derives from 'Turow,' a Polish place name."},
  lottie_n:{name:'Lottie Nicelska',dates:'1866–1918',location:'Poland',type:'normal',bio:"Born 1866, died 1918 at age 52. Married Stefan Turowski. Mother of Sofia Turowski. Almost certainly died in the devastating 1918 Spanish flu pandemic."},
};

const CHILDREN = {};
Object.entries(P).forEach(([id, p]) => {
  if (p.father) (CHILDREN[p.father] = CHILDREN[p.father] || []).push(id);
  if (p.mother) (CHILDREN[p.mother] = CHILDREN[p.mother] || []).push(id);
});

let focused = 'kathy', stack = [];

function focusOn(id) {
  if (!P[id]) return;
  if (focused !== id) stack.push(focused);
  focused = id;
  renderAll();
}

function navBack() {
  if (!stack.length) return;
  focused = stack.pop();
  renderAll();
}

function navTo(i) {
  const t = stack[i];
  stack = stack.slice(0, i);
  focused = t;
  renderAll();
}

function card(id, sz, opts = {}) {
  const { isFocal, isSpouse } = opts;
  if (!id) {
    return `<div class="card sz-${sz} unk"><div class="cn" style="font-size:10px">Unknown</div><div class="cd" style="font-size:9px">not recorded</div></div>`;
  }
  const p = P[id]; if (!p) return '';
  const tc = p.type === 'royal' ? 'royal' : p.type === 'noble' ? 'noble' : '';
  const badge = p.type === 'royal' ? `<div class="cbadge cb-r">♛ Royalty</div>` : p.type === 'noble' ? `<div class="cbadge cb-n">★ Noble</div>` : '';
  const action = isFocal ? 'detail' : (isSpouse || p.father || p.mother) ? 'focus' : 'detail';
  const fcls = isFocal ? ' focal-c' : '';
  return `<div class="card sz-${sz}${fcls} ${tc}" data-action="${action}" data-id="${id}" title="${isFocal ? 'Click for full bio' : 'Click to explore ancestors'}">
    ${sz !== 'grand' ? badge : ''}
    <div class="cn">${p.name}</div>
    <div class="cd">${p.dates}</div>
    ${sz !== 'grand' && p.location ? `<div class="cl">${p.location}</div>` : ''}
  </div>`;
}

function renderAll() {
  document.getElementById('back-btn').style.display = stack.length ? '' : 'none';
  const bc = document.getElementById('bc');
  bc.innerHTML = stack.map((id, i) => `<span class="bci" data-navto="${i}">${P[id]?.name || id}</span><span style="color:#ccc"> › </span>`).join('') + `<strong style="color:#1a1a18;font-size:10px">${P[focused]?.name || focused}</strong>`;
  document.getElementById('detail').classList.remove('open');
  const p = P[focused];
  const f = p?.father || null, m = p?.mother || null;
  const pfgf = f ? P[f]?.father || null : null;
  const pfgm = f ? P[f]?.mother || null : null;
  const pmgf = m ? P[m]?.father || null : null;
  const pmgm = m ? P[m]?.mother || null : null;
  const hasGrand = pfgf || pfgm || pmgf || pmgm;
  const hasPar = f || m;
  const sp = p?.spouse;
  const kids = (CHILDREN[focused] || []).filter(id => id !== sp);
  let h = '';
  if (hasGrand) {
    h += `<div class="gr">${card(pfgf,'grand')}${card(pfgm,'grand')}${card(pmgf,'grand')}${card(pmgm,'grand')}</div>`;
    h += `<div class="gr" style="gap:0;margin:0">`;
    [0,1,2,3].forEach(i => { h += `<div style="width:148px;display:flex;justify-content:center"><div class="vl" style="height:10px"></div></div>`; if (i < 3) h += `<div style="width:6px"></div>`; });
    h += `</div>`;
  }
  if (hasPar) {
    h += `<div class="gr">${card(f,'par')}${card(m,'par')}</div>`;
    h += `<div class="gr" style="height:14px"><div class="vl" style="height:14px"></div></div>`;
  }
  h += `<div class="gr" style="align-items:flex-start;flex-wrap:wrap">`;
  h += `<div style="display:flex;flex-direction:column;align-items:center">${card(focused,'foc',{isFocal:true})}<div class="hint">↑ Click any ancestor to explore their lineage</div></div>`;
  if (sp && P[sp]) {
    h += `<div style="display:flex;align-items:center;padding-top:24px"><div style="width:16px;height:1px;background:#ccc"></div><span style="font-size:12px;color:#ccc;padding:0 4px">♡</span><div style="width:16px;height:1px;background:#ccc"></div></div>`;
    h += `<div style="display:flex;flex-direction:column;align-items:center"><div class="hint">Spouse (click to explore their side)</div>${card(sp,'sp',{isSpouse:true})}</div>`;
  }
  h += `</div>`;
  if (kids.length) {
    h += `<div class="sep-label">↓ Children / descendants</div><div class="gr" style="flex-wrap:wrap;gap:6px">`;
    kids.forEach(id => { h += card(id, 'ch'); });
    h += `</div>`;
  }
  document.getElementById('tree').innerHTML = h;
}

function showDetail(id) {
  const p = P[id]; if (!p) return;
  const d = document.getElementById('detail');
  const tb = p.type === 'royal' ? `<span class="dtag dtr">♛ Royal ancestry</span>` : p.type === 'noble' ? `<span class="dtag dtg">★ Noble lineage</span>` : '';
  const ancBtn = (p.father || p.mother) ? `<br><button class="anc-btn" data-action="focus" data-id="${id}">Explore ${p.name.split(' ')[0]}'s ancestors ↑</button>` : '';
  d.innerHTML = `<button class="xbtn" data-close-detail>✕</button><h3>${p.name}</h3><p>${p.bio}</p><div>${p.location ? `<span class="dtag dti">📍 ${p.location}</span>` : ''}${p.dates ? `<span class="dtag dti">📅 ${p.dates}</span>` : ''}${tb}${ancBtn}</div>`;
  d.classList.add('open');
}

function doSearch(v) {
  const r = document.getElementById('sr');
  if (!v.trim()) { r.style.display = 'none'; return; }
  const q = v.toLowerCase();
  const matches = Object.entries(P).filter(([, p]) => p.name.toLowerCase().includes(q)).slice(0, 8);
  if (!matches.length) { r.style.display = 'none'; return; }
  r.innerHTML = matches.map(([id, p]) => `<div class="sri" data-focus="${id}" data-clear-search>${p.name} <span style="opacity:.45;font-size:9px">${p.dates}</span></div>`).join('');
  r.style.display = 'block';
}

function hideSR() { document.getElementById('sr').style.display = 'none'; }

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('back-btn').addEventListener('click', navBack);

  // Static nav buttons use data-focus attribute
  document.getElementById('nav').addEventListener('click', e => {
    const btn = e.target.closest('[data-focus]');
    if (btn) focusOn(btn.dataset.focus);
  });

  // Search input
  const srch = document.getElementById('srch');
  srch.addEventListener('input', () => doSearch(srch.value));
  srch.addEventListener('blur', () => setTimeout(hideSR, 180));

  // Event delegation for tree, breadcrumb, and detail panel
  document.getElementById('app').addEventListener('click', e => {
    // Cards and anc-btn: focus or detail
    const actionEl = e.target.closest('[data-action]');
    if (actionEl) {
      const { action, id } = actionEl.dataset;
      if (action === 'focus') focusOn(id);
      else if (action === 'detail') showDetail(id);
      return;
    }
    // Breadcrumb nav
    const navto = e.target.closest('[data-navto]');
    if (navto) { navTo(parseInt(navto.dataset.navto, 10)); return; }
    // Search result rows
    const sri = e.target.closest('[data-focus]');
    if (sri) {
      focusOn(sri.dataset.focus);
      if (sri.hasAttribute('data-clear-search')) {
        document.getElementById('srch').value = '';
        hideSR();
      }
      return;
    }
    // Close detail
    if (e.target.closest('[data-close-detail]')) {
      document.getElementById('detail').classList.remove('open');
    }
  });

  renderAll();
});
