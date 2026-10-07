// 식물계 — 육상식물 전 목 (속씨식물은 APG IV 64목, 양치식물 PPG I, 겉씨식물 전 목)
(function () {
  const { T, F, L } = window;

  const angio = T('속씨식물', { s: 'Angiosperms', ma: '약 1.4억 년 전' },
    T('기저 속씨식물', { s: 'ANA grade' },
      L(`암보렐라목 Amborellales = 암보렐라과 Amborellaceae 암보렐라
         수련목 Nymphaeales = 수련과 Nymphaeaceae 수련·가시연; 어항마름과 Cabombaceae 카봄바
         붓순나무목 Austrobaileyales = 오미자과 Schisandraceae 오미자·팔각`)),
    L(`홀아비꽃대목 Chloranthales = 홀아비꽃대과 Chloranthaceae 홀아비꽃대`),
    T('목련군', { s: 'Magnoliids' },
      L(`카넬라목 Canellales = 윈테라과 Winteraceae 윈터껍질
         후추목 Piperales = 후추과 Piperaceae 후추; 쥐방울덩굴과 Aristolochiaceae 족도리풀
         목련목 Magnoliales = 목련과 Magnoliaceae 목련·백합나무; 포포나무과 Annonaceae 포포·체리모야; 육두구과 Myristicaceae 육두구
         녹나무목 Laurales = 녹나무과 Lauraceae 아보카도·계피; 받침꽃과 Calycanthaceae 납매`)),
    T('외떡잎식물', { s: 'Monocots' },
      L(`창포목 Acorales = 창포과 Acoraceae 창포
         천남성목 Alismatales = 천남성과 Araceae 토란·몬스테라; 택사과 Alismataceae 벗풀; 거머리말과 Zosteraceae 거머리말
         페트로사비아목 Petrosaviales = 페트로사비아과 Petrosaviaceae 페트로사비아
         마목 Dioscoreales = 마과 Dioscoreaceae 마
         판다누스목 Pandanales = 판다누스과 Pandanaceae 판단; 라플레시아과 Rafflesiaceae 라플레시아
         백합목 Liliales = 백합과 Liliaceae 백합·튤립; 청미래덩굴과 Smilacaceae 청미래덩굴
         비짜루목 Asparagales = 난초과 Orchidaceae 난초·바닐라; 붓꽃과 Iridaceae 붓꽃·사프란; 수선화과 Amaryllidaceae 양파·마늘·수선화; 비짜루과 Asparagaceae 아스파라거스·용설란`),
      T('닭의장풀군', { s: 'Commelinids' },
        L(`야자목 Arecales = 야자과 Arecaceae 코코넛·대추야자
           닭의장풀목 Commelinales = 닭의장풀과 Commelinaceae 닭의장풀; 물옥잠과 Pontederiaceae 부레옥잠
           생강목 Zingiberales = 파초과 Musaceae 바나나; 생강과 Zingiberaceae 생강·강황; 극락조화과 Strelitziaceae 극락조화
           벼목 Poales = 벼과 Poaceae 벼·밀·옥수수·대나무; 사초과 Cyperaceae 파피루스; 파인애플과 Bromeliaceae 파인애플; 부들과 Typhaceae 부들`))),
    L(`붕어마름목 Ceratophyllales = 붕어마름과 Ceratophyllaceae 붕어마름`),
    T('진정쌍떡잎식물', { s: 'Eudicots' },
      L(`미나리아재비목 Ranunculales = 미나리아재비과 Ranunculaceae 미나리아재비·작약; 양귀비과 Papaveraceae 양귀비; 매자나무과 Berberidaceae 매자나무
         프로테아목 Proteales = 연꽃과 Nelumbonaceae 연꽃; 버즘나무과 Platanaceae 플라타너스; 프로테아과 Proteaceae 마카다미아
         트로코덴드론목 Trochodendrales = 트로코덴드론과 Trochodendraceae 수레나무
         회양목목 Buxales = 회양목과 Buxaceae 회양목
         군네라목 Gunnerales = 군네라과 Gunneraceae 군네라
         딜레니아목 Dilleniales = 딜레니아과 Dilleniaceae 딜레니아`),
      T('장미상군', { s: 'Superrosids' },
        L(`범의귀목 Saxifragales = 범의귀과 Saxifragaceae 범의귀; 까치밥나무과 Grossulariaceae 블랙커런트; 돌나물과 Crassulaceae 다육식물; 작약과 Paeoniaceae 모란`),
        T('장미군', { s: 'Rosids' },
          L(`포도목 Vitales = 포도과 Vitaceae 포도`),
          T('콩군', { s: 'Fabids' },
            L(`남가새목 Zygophyllales = 남가새과 Zygophyllaceae 크레오소트
               노박덩굴목 Celastrales = 노박덩굴과 Celastraceae 노박덩굴
               괭이밥목 Oxalidales = 괭이밥과 Oxalidaceae 괭이밥·스타프루트
               말피기목 Malpighiales = 버드나무과 Salicaceae 버드나무·포플러; 대극과 Euphorbiaceae 고무나무·카사바; 제비꽃과 Violaceae 제비꽃; 시계꽃과 Passifloraceae 패션프루트; 망그로브과 Rhizophoraceae 맹그로브
               콩목 Fabales = 콩과 Fabaceae 콩·완두·아카시아; 원지과 Polygalaceae 원지
               장미목 Rosales = 장미과 Rosaceae 장미·사과·벚나무; 뽕나무과 Moraceae 뽕나무·무화과; 삼과 Cannabaceae 홉; 쐐기풀과 Urticaceae 쐐기풀; 느릅나무과 Ulmaceae 느릅나무
               박목 Cucurbitales = 박과 Cucurbitaceae 오이·호박·수박; 베고니아과 Begoniaceae 베고니아
               참나무목 Fagales = 참나무과 Fagaceae 참나무·밤나무; 자작나무과 Betulaceae 자작나무; 가래나무과 Juglandaceae 호두나무`)),
          T('아욱군', { s: 'Malvids' },
            L(`쥐손이풀목 Geraniales = 쥐손이풀과 Geraniaceae 제라늄
               도금양목 Myrtales = 도금양과 Myrtaceae 유칼립투스·정향; 부처꽃과 Lythraceae 석류; 바늘꽃과 Onagraceae 달맞이꽃
               크로소소마목 Crossosomatales = 고추나무과 Staphyleaceae 고추나무
               피크라무니아목 Picramniales = 피크라무니아과 Picramniaceae 피크라무니아
               후에르테아목 Huerteales = 후에르테아과 Dipentodontaceae 페리탁시스
               배추목 Brassicales = 배추과 Brassicaceae 배추·무·겨자; 파파야과 Caricaceae 파파야; 한련과 Tropaeolaceae 한련화
               아욱목 Malvales = 아욱과 Malvaceae 목화·카카오·두리안; 팥꽃나무과 Thymelaeaceae 침향
               무환자나무목 Sapindales = 운향과 Rutaceae 귤·레몬; 무환자나무과 Sapindaceae 단풍나무·리치; 옻나무과 Anacardiaceae 망고·캐슈; 멀구슬나무과 Meliaceae 마호가니`)))),
      T('국화상군', { s: 'Superasterids' },
        L(`산토룸목 Santalales = 단향과 Santalaceae 겨우살이·백단향
           베를리아목 Berberidopsidales = 베를리아과 Berberidopsidaceae 산호덩굴
           석죽목 Caryophyllales = 석죽과 Caryophyllaceae 패랭이꽃; 선인장과 Cactaceae 선인장; 비름과 Amaranthaceae 시금치·비트; 마디풀과 Polygonaceae 메밀·대황; 끈끈이귀개과 Droseraceae 파리지옥; 벌레잡이통풀과 Nepenthaceae 네펜데스`),
        T('국화군', { s: 'Asterids' },
          L(`층층나무목 Cornales = 층층나무과 Cornaceae 산딸나무; 수국과 Hydrangeaceae 수국
             진달래목 Ericales = 진달래과 Ericaceae 진달래·블루베리; 차나무과 Theaceae 차나무·동백; 감나무과 Ebenaceae 감나무; 앵초과 Primulaceae 앵초; 다래나무과 Actinidiaceae 키위`),
          T('꿀풀군', { s: 'Lamiids' },
            L(`이키나목 Icacinales = 이키나과 Icacinaceae 이키나
               메티오니아목 Metteniusales = 메티오니아과 Metteniusaceae 메티오니아
               가리아목 Garryales = 두충과 Eucommiaceae 두충
               용담목 Gentianales = 꼭두서니과 Rubiaceae 커피나무·치자; 협죽도과 Apocynaceae 협죽도·박주가리; 용담과 Gentianaceae 용담
               지치목 Boraginales = 지치과 Boraginaceae 지치·물망초
               바히아목 Vahliales = 바히아과 Vahliaceae 바리아
               가지목 Solanales = 가지과 Solanaceae 토마토·감자·고추; 메꽃과 Convolvulaceae 고구마·나팔꽃
               꿀풀목 Lamiales = 꿀풀과 Lamiaceae 라벤더·바질·민트; 물푸레나무과 Oleaceae 올리브·개나리; 참깨과 Pedaliaceae 참깨; 질경이과 Plantaginaceae 질경이; 쥐꼬리망초과 Acanthaceae 쥐꼬리망초`)),
          T('초롱꽃군', { s: 'Campanulids' },
            L(`감탕나무목 Aquifoliales = 감탕나무과 Aquifoliaceae 호랑가시나무·마테
               국화목 Asterales = 국화과 Asteraceae 해바라기·국화·상추; 초롱꽃과 Campanulaceae 도라지
               에스칼로니아목 Escalloniales = 에스칼로니아과 Escalloniaceae 에스칼로니아
               브루니아목 Bruniales = 브루니아과 Bruniaceae 브루니아
               파라크리피아목 Paracryphiales = 파라크리피아과 Paracryphiaceae 파라크리피아
               산토끼꽃목 Dipsacales = 인동과 Caprifoliaceae 인동·마타리; 연복초과 Adoxaceae 딱총나무
               산형목 Apiales = 미나리과 Apiaceae 당근·미나리·고수; 두릅나무과 Araliaceae 인삼·아이비; 돈나무과 Pittosporaceae 돈나무`))))));

  TOL.plants = T('식물계', { s: 'Plantae', big: 2, g: 'pla' },
    T('회색조류', { s: 'Glaucophyta' },
      L(`글라우코키스티스목 Glaucocystales = 글라우코키스티스과 Glaucocystaceae 글라우코키스티스`)),
    T('홍조식물문', { s: 'Rhodophyta' },
      L(`김목 Bangiales = 김과 Bangiaceae 김
         우뭇가사리목 Gelidiales = 우뭇가사리과 Gelidiaceae 우뭇가사리
         산호말목 Corallinales = 산호말과 Corallinaceae 산호말
         돌가사리목 Gigartinales = 돌가사리과 Gigartinaceae 진두발`)),
    T('녹색식물', { s: 'Viridiplantae' },
      T('녹조식물문', { s: 'Chlorophyta' },
        L(`갈파래목 Ulvales = 갈파래과 Ulvaceae 파래
           클라미도모나스목 Chlamydomonadales = 클라미도모나스과 Chlamydomonadaceae 클라미도모나스; 볼복스과 Volvocaceae 볼복스
           클로렐라목 Chlorellales = 클로렐라과 Chlorellaceae 클로렐라
           청각목 Bryopsidales = 청각과 Codiaceae 청각`)),
      T('차축조식물', { s: 'Streptophyta' },
        L(`윤조목 Charales = 윤조과 Characeae 차축조
           접합조목 Zygnematales = 해캄과 Zygnemataceae 해캄`),
        T('육상식물', { s: 'Embryophyta', ma: '약 4.7억 년 전' },
          T('선태식물', { s: 'Bryophyta s.l.' },
            L(`우산이끼목 Marchantiales = 우산이끼과 Marchantiaceae 우산이끼
               비늘이끼목 Jungermanniales = 비늘이끼과 Lejeuneaceae 비늘이끼
               뿔이끼목 Anthocerotales = 뿔이끼과 Anthocerotaceae 뿔이끼
               물이끼목 Sphagnales = 물이끼과 Sphagnaceae 물이끼
               솔이끼목 Polytrichales = 솔이끼과 Polytrichaceae 솔이끼
               표주박이끼목 Funariales = 표주박이끼과 Funariaceae 표주박이끼
               초롱이끼목 Bryales = 참이끼과 Bryaceae 참이끼`)),
          T('관다발식물', { s: 'Tracheophyta' },
            T('석송식물문', { s: 'Lycopodiophyta' },
              L(`석송목 Lycopodiales = 석송과 Lycopodiaceae 석송
                 부처손목 Selaginellales = 부처손과 Selaginellaceae 부처손
                 물부추목 Isoetales = 물부추과 Isoetaceae 물부추
                 인목목 Lepidodendrales = 인목과† Lepidodendraceae 레피도덴드론`)),
            T('양치식물', { s: 'Polypodiopsida' },
              L(`속새목 Equisetales = 속새과 Equisetaceae 쇠뜨기·속새
                 솔잎란목 Psilotales = 솔잎란과 Psilotaceae 솔잎란
                 고사리삼목 Ophioglossales = 고사리삼과 Ophioglossaceae 고사리삼
                 마라티아목 Marattiales = 마라티아과 Marattiaceae 왕고비
                 고비목 Osmundales = 고비과 Osmundaceae 고비
                 처녀이끼목 Hymenophyllales = 처녀이끼과 Hymenophyllaceae 처녀이끼
                 풀고사리목 Gleicheniales = 풀고사리과 Gleicheniaceae 풀고사리
                 실고사리목 Schizaeales = 실고사리과 Lygodiaceae 실고사리
                 생이가래목 Salviniales = 생이가래과 Salviniaceae 생이가래·물개구리밥; 네가래과 Marsileaceae 네가래
                 나무고사리목 Cyatheales = 나무고사리과 Cyatheaceae 나무고사리
                 고란초목 Polypodiales = 잔고사리과 Dennstaedtiaceae 고사리; 고란초과 Polypodiaceae 고란초; 꼬리고사리과 Aspleniaceae 파초일엽; 공작고사리과 Pteridaceae 공작고사리`)),
            T('종자식물', { s: 'Spermatophyta' },
              T('겉씨식물', { s: 'Gymnosperms' },
                L(`소철목 Cycadales = 소철과 Cycadaceae 소철; 자미아과 Zamiaceae 자미아
                   은행나무목 Ginkgoales = 은행나무과 Ginkgoaceae 은행나무
                   마황목 Gnetales = 마황과 Ephedraceae 마황; 웰위치아과 Welwitschiaceae 웰위치아; 매마등과 Gnetaceae 매마등
                   소나무목 Pinales = 소나무과 Pinaceae 소나무·전나무·가문비나무
                   남양삼나무목 Araucariales = 남양삼나무과 Araucariaceae 칠레삼나무·울레미소나무; 나한송과 Podocarpaceae 나한송
                   측백나무목 Cupressales = 측백나무과 Cupressaceae 세쿼이아·향나무·메타세쿼이아; 주목과 Taxaceae 주목; 금송과 Sciadopityaceae 금송
                   종자고사리목 Medullosales = 메둘로사과† Medullosaceae 종자고사리`)),
              angio))))));
})();
