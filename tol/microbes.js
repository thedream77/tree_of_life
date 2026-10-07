// 세균 · 고균 · 원생생물 · 균류 · 바이러스 + 전체 조립
(function () {
  const { T, F, L } = window;

  const bacteria = T('세균', { s: 'Bacteria', big: 2, g: 'bac' },
    T('테라박테리아', { s: 'Terrabacteria' },
      T('남세균문', { s: 'Cyanobacteriota' },
        L(`노스톡목 Nostocales = 노스톡과 Nostocaceae 염주말
           시네코코쿠스목 Synechococcales = 프로클로로코쿠스과 Prochlorococcaceae 해양 광합성균
           흔들말목 Oscillatoriales = 흔들말과 Oscillatoriaceae 흔들말·스피룰리나`)),
      T('바실루스문', { s: 'Bacillota' },
        L(`젖산균목 Lactobacillales = 젖산균과 Lactobacillaceae 유산균; 연쇄상구균과 Streptococcaceae 폐렴구균
           바실루스목 Bacillales = 바실루스과 Bacillaceae 고초균·탄저균; 포도상구균과 Staphylococcaceae 황색포도상구균; 리스테리아과 Listeriaceae 리스테리아
           클로스트리디움목 Eubacteriales = 클로스트리디움과 Clostridiaceae 보툴리누스균·파상풍균
           마이코플라스마목 Mycoplasmatales = 마이코플라스마과 Mycoplasmataceae 마이코플라스마`)),
      T('방선균문', { s: 'Actinomycetota' },
        L(`스트렙토미세스목 Streptomycetales = 스트렙토미세스과 Streptomycetaceae 항생물질 생산균
           미코박테리움목 Mycobacteriales = 미코박테리움과 Mycobacteriaceae 결핵균·나병균; 코리네박테리움과 Corynebacteriaceae 디프테리아균
           비피도박테리움목 Bifidobacteriales = 비피도박테리움과 Bifidobacteriaceae 비피더스균`)),
      T('데이노코쿠스문', { s: 'Deinococcota' },
        L(`데이노코쿠스목 Deinococcales = 데이노코쿠스과 Deinococcaceae 방사선 내성균
           써무스목 Thermales = 써무스과 Thermaceae 호열균(PCR 효소)`)),
      T('클로로플렉시문', { s: 'Chloroflexota' },
        L(`클로로플렉서스목 Chloroflexales = 클로로플렉서스과 Chloroflexaceae 녹색비황세균`))),
    T('그라실리쿠테스', { s: 'Gracilicutes' },
      T('슈도모나스문', { s: 'Pseudomonadota' },
        L(`장내세균목 Enterobacterales = 장내세균과 Enterobacteriaceae 대장균·살모넬라; 예르시니아과 Yersiniaceae 페스트균
           비브리오목 Vibrionales = 비브리오과 Vibrionaceae 콜레라균
           슈도모나스목 Pseudomonadales = 슈도모나스과 Pseudomonadaceae 녹농균
           레지오넬라목 Legionellales = 레지오넬라과 Legionellaceae 레지오넬라
           리케차목 Rickettsiales = 리케차과 Rickettsiaceae 발진티푸스균
           근립균목 Hyphomicrobiales = 근립균과 Rhizobiaceae 뿌리혹박테리아
           나이세리아목 Neisseriales = 나이세리아과 Neisseriaceae 임균·수막구균
           캄필로박터목 Campylobacterales = 헬리코박터과 Helicobacteraceae 헬리코박터`)),
      T('박테로이데스문', { s: 'Bacteroidota' },
        L(`박테로이데스목 Bacteroidales = 박테로이데스과 Bacteroidaceae 장내 공생균`)),
      T('클라미디아문', { s: 'Chlamydiota' },
        L(`클라미디아목 Chlamydiales = 클라미디아과 Chlamydiaceae 클라미디아`)),
      T('스피로헤타문', { s: 'Spirochaetota' },
        L(`스피로헤타목 Spirochaetales = 트레포네마과 Treponemataceae 매독균; 보렐리아과 Borreliaceae 라임병균`)),
      T('아퀴펙스문', { s: 'Aquificota' },
        L(`아퀴펙스목 Aquificales = 아퀴펙스과 Aquificaceae 초호열균`))));

  const sar = T('SAR', { s: '부등편모·피층·리자리아' },
    T('부등편모류', { s: 'Stramenopiles' },
      L(`다시마목 Laminariales = 다시마과 Laminariaceae 다시마; 미역과 Alariaceae 미역
         모자반목 Fucales = 모자반과 Sargassaceae 톳·모자반
         중심규조목 Coscinodiscales = 원반규조과 Coscinodiscaceae 원반규조
         우상규조목 Naviculales = 배돌말과 Naviculaceae 배돌말
         물곰팡이목 Saprolegniales = 물곰팡이과 Saprolegniaceae 물곰팡이
         역병균목 Peronosporales = 역병균과 Peronosporaceae 감자역병균`)),
    T('피층류', { s: 'Alveolata' },
      L(`페니쿨리다목 Peniculida = 짚신벌레과 Parameciidae 짚신벌레
         나팔벌레목 Heterotrichida = 나팔벌레과 Stentoridae 나팔벌레
         혈포자충목 Haemosporida = 말라리아원충과 Plasmodiidae 말라리아 원충
         진콕시듐목 Eucoccidiorida = 톡소플라스마과 Sarcocystidae 톡소플라스마
         페리디니움목 Peridiniales = 페리디니움과 Peridiniaceae 적조 와편모조류
         야광충목 Noctilucales = 야광충과 Noctilucaceae 야광충`)),
    T('리자리아', { s: 'Rhizaria' },
      L(`유공충목 Rotaliida = 유공충과 Rotaliidae 유공충
         방산충목 Spumellaria = 방산충과 Spongodiscidae 방산충
         뿌리혹병균목 Plasmodiophorida = 뿌리혹병균과 Plasmodiophoridae 배추무사마귀병균`)));

  const protists = [
    sar,
    T('하프토·크립토', { s: 'Haptista · Cryptista' },
      L(`코콜리투스목 Coccolithales = 코콜리투스과 Coccolithaceae 석회비늘편모조류
         크립토모나스목 Cryptomonadales = 크립토모나스과 Cryptomonadaceae 크립토모나스`)),
    T('디스코바', { s: 'Discoba' },
      L(`유글레나목 Euglenales = 유글레나과 Euglenaceae 유글레나
         트리파노소마목 Trypanosomatida = 트리파노소마과 Trypanosomatidae 수면병 원충·리슈마니아
         쉬조피렌목 Schizopyrenida = 바헬캄피아과 Vahlkampfiidae 뇌먹는 아메바`)),
    T('메타모나다', { s: 'Metamonada' },
      L(`디플로모나스목 Diplomonadida = 헥사미타과 Hexamitidae 람블편모충
         트리코모나스목 Trichomonadida = 트리코모나스과 Trichomonadidae 질편모충`)),
    T('아메보조아', { s: 'Amoebozoa' },
      L(`아메바목 Euamoebida = 아메바과 Amoebidae 아메바
         엔트아메바목 Mastigamoebida = 엔트아메바과 Entamoebidae 이질아메바
         자루곰팡이목 Physarales = 황색망사점균과 Physaraceae 황색망사점균
         딕티오스텔리움목 Dictyosteliida = 딕티오스텔리움과 Dictyosteliaceae 세포성 점균`)),
  ];

  const fungi = T('균계', { s: 'Fungi', big: 2, g: 'fun' },
    L(`미포자충목 Microsporidia = 노세마과 Nosematidae 노세마
       항아리곰팡이목 Chytridiales = 항아리곰팡이과 Chytridiaceae 항아리곰팡이; 개구리항아리곰팡이과 Batrachochytriaceae 개구리 항아리곰팡이병균
       글로메로목 Glomerales = 글로메로과 Glomeraceae 균근균
       털곰팡이목 Mucorales = 털곰팡이과 Mucoraceae 털곰팡이·거미줄곰팡이
       곤충병균목 Entomophthorales = 곤충병균과 Entomophthoraceae 좀비파리균`),
    T('자낭균문', { s: 'Ascomycota' },
      L(`분열효모목 Schizosaccharomycetales = 분열효모과 Schizosaccharomycetaceae 분열효모
         효모목 Saccharomycetales = 효모과 Saccharomycetaceae 빵·맥주 효모; 칸디다과 Debaryomycetaceae 칸디다
         유로티움목 Eurotiales = 누룩곰팡이과 Aspergillaceae 누룩·푸른곰팡이
         주발버섯목 Pezizales = 곰보버섯과 Morchellaceae 곰보버섯; 덩이버섯과 Tuberaceae 트러플
         육좌균목 Hypocreales = 동충하초과 Cordycipitaceae 동충하초; 맥각균과 Clavicipitaceae 맥각균
         흰가루병균목 Erysiphales = 흰가루병균과 Erysiphaceae 흰가루병균
         붉은빵곰팡이목 Sordariales = 붉은빵곰팡이과 Sordariaceae 붉은빵곰팡이
         레카노라목 Lecanorales = 매화나무지의과 Parmeliaceae 지의류(석이)`)),
    T('담자균문', { s: 'Basidiomycota' },
      L(`녹병균목 Pucciniales = 녹병균과 Pucciniaceae 녹병균
         깜부기병균목 Ustilaginales = 깜부기병균과 Ustilaginaceae 옥수수깜부기
         흰목이목 Tremellales = 흰목이과 Tremellaceae 흰목이
         목이목 Auriculariales = 목이과 Auriculariaceae 목이버섯
         꾀꼬리버섯목 Cantharellales = 꾀꼬리버섯과 Cantharellaceae 살구버섯
         구멍장이버섯목 Polyporales = 구멍장이버섯과 Polyporaceae 영지·구름버섯
         무당버섯목 Russulales = 무당버섯과 Russulaceae 젖버섯·무당버섯
         그물버섯목 Boletales = 그물버섯과 Boletaceae 포르치니
         말뚝버섯목 Phallales = 말뚝버섯과 Phallaceae 망태버섯
         주름버섯목 Agaricales = 주름버섯과 Agaricaceae 양송이; 광대버섯과 Amanitaceae 광대버섯; 송이버섯과 Tricholomataceae 송이; 솔밭버섯과 Omphalotaceae 표고버섯; 느타리과 Pleurotaceae 느타리; 뽕나무버섯과 Physalacriaceae 팽이·뽕나무버섯`)));

  const holozoa = [
    L(`깃편모충목 Choanoflagellida = 살핀고에카과 Salpingoecidae 깃편모충`),
    TOL.animals,
  ];

  window.TREE = T('LUCA', { s: '최종 공통 조상', ma: '약 40억 년 전', big: 3, g: 'root' },
    bacteria,
    T('고균', { s: 'Archaea', big: 2, g: 'arc' },
      T('유리고세균문', { s: 'Methanobacteriota' },
        L(`메탄박테리움목 Methanobacteriales = 메탄박테리움과 Methanobacteriaceae 메탄생성균(되새김위)
           할로박테리움목 Halobacteriales = 할로박테리움과 Halobacteriaceae 호염균
           써모코쿠스목 Thermococcales = 써모코쿠스과 Thermococcaceae 심해 열수구균`)),
      T('써모프로테우스문', { s: 'Thermoproteota' },
        L(`술폴로부스목 Sulfolobales = 술폴로부스과 Sulfolobaceae 호열·호산균
           니트로소스파이라목 Nitrososphaerales = 니트로소스파이라과 Nitrososphaeraceae 암모니아 산화균`)),
      T('아스가르드 고균', { s: 'Asgardarchaeota' },
        L(`로키고균목 Lokiarchaeales = 로키고균과 Lokiarchaeaceae 로키고균`),
        T('진핵생물', { s: 'Eukarya', ma: '약 20억 년 전', big: 2, g: 'pro' },
          protists,
          TOL.plants,
          T('후편모생물', { s: 'Opisthokonta' }, fungi, T('홀로조아', { s: 'Holozoa' }, holozoa))))));

  window.VIRUS = T('바이러스', { s: 'Viruses · 비세포성', big: 2, g: 'vir' },
    T('리보비리아', { s: 'Riboviria · RNA' },
      L(`니도바이러스목 Nidovirales = 코로나바이러스과 Coronaviridae 사스·코로나19
         모노네가바이러스목 Mononegavirales = 파라믹소바이러스과 Paramyxoviridae 홍역; 필로바이러스과 Filoviridae 에볼라; 랍도바이러스과 Rhabdoviridae 광견병
         아티쿨라바이러스목 Articulavirales = 오르토믹소바이러스과 Orthomyxoviridae 인플루엔자
         피코르나바이러스목 Picornavirales = 피코르나바이러스과 Picornaviridae 소아마비·감기
         아마릴로바이러스목 Amarillovirales = 플라비바이러스과 Flaviviridae 뎅기·지카
         부냐바이러스목 Bunyavirales = 한타바이러스과 Hantaviridae 한탄바이러스
         오르테르바이러스목 Ortervirales = 레트로바이러스과 Retroviridae HIV
         블루바이러스목 Blubervirales = 헤파드나바이러스과 Hepadnaviridae B형 간염
         토바모바이러스목 Martellivirales = 비르가바이러스과 Virgaviridae 담배모자이크`)),
    T('두플로드나비리아', { s: 'Duplodnaviria · dsDNA' },
      L(`헤르페스바이러스목 Herpesvirales = 헤르페스바이러스과 Orthoherpesviridae 수두·대상포진
         코다바이러스목 Caudovirales = 미오바이러스과 Straboviridae T4 박테리오파지`)),
    T('바리드나비리아', { s: 'Varidnaviria · dsDNA' },
      L(`키토바이러스목 Chitovirales = 폭스바이러스과 Poxviridae 천연두·엠폭스
         로와바이러스목 Rowavirales = 아데노바이러스과 Adenoviridae 아데노바이러스
         이미터바이러스목 Imitervirales = 미미바이러스과 Mimiviridae 거대 바이러스`)),
    T('모노드나비리아', { s: 'Monodnaviria · DNA' },
      L(`추르하우젠바이러스목 Zurhausenvirales = 파필로마바이러스과 Papillomaviridae HPV`)));

  window.GROUPS = {
    root: { c: 'oklch(0.74 0.02 210)', name: '공통 조상' },
    bac:  { c: 'oklch(0.74 0.07 245)', name: '세균' },
    arc:  { c: 'oklch(0.74 0.07 290)', name: '고균' },
    pro:  { c: 'oklch(0.76 0.09 195)', name: '원생생물' },
    pla:  { c: 'oklch(0.80 0.15 145)', name: '식물' },
    fun:  { c: 'oklch(0.80 0.07 75)',  name: '균류' },
    inv:  { c: 'oklch(0.76 0.13 320)', name: '무척추동물' },
    fish: { c: 'oklch(0.78 0.11 235)', name: '어류·척삭동물' },
    amp:  { c: 'oklch(0.80 0.12 170)', name: '양서류' },
    rep:  { c: 'oklch(0.76 0.14 35)',  name: '파충류' },
    bird: { c: 'oklch(0.78 0.13 15)',  name: '조류' },
    mam:  { c: 'oklch(0.82 0.14 85)',  name: '포유류' },
    vir:  { c: 'oklch(0.70 0.02 220)', name: '바이러스 (비생물)' },
  };
})();
