// 무척추동물 — 주요 문(門)의 현생 목 (곤충은 전 목 수록)
(function () {
  const { T, F, L } = window;

  TOL.insects = T('곤충강', { s: 'Insecta', big: 1 },
    L(`돌좀목 Archaeognatha = 돌좀과 Machilidae 돌좀
       좀목 Zygentoma = 좀과 Lepismatidae 좀`),
    T('유시아강', { s: 'Pterygota' },
      L(`하루살이목 Ephemeroptera = 하루살이과 Ephemeridae 하루살이
         잠자리목 Odonata = 잠자리과 Libellulidae 고추잠자리; 왕잠자리과 Aeshnidae 왕잠자리; 실잠자리과 Coenagrionidae 실잠자리`),
      T('신시류', { s: 'Neoptera' },
        T('메뚜기상목', { s: 'Polyneoptera' },
          L(`강도래목 Plecoptera = 강도래과 Perlidae 강도래
             집게벌레목 Dermaptera = 집게벌레과 Forficulidae 집게벌레
             메뚜기목 Orthoptera = 메뚜기과 Acrididae 메뚜기; 여치과 Tettigoniidae 여치; 귀뚜라미과 Gryllidae 귀뚜라미; 땅강아지과 Gryllotalpidae 땅강아지
             대벌레목 Phasmida = 대벌레과 Phasmatidae 대벌레; 잎사귀벌레과 Phylliidae 나뭇잎벌레
             흰개미붙이목 Embioptera = 흰개미붙이과 Oligotomidae 흰개미붙이
             갈르와벌레목 Notoptera = 갈르와벌레과 Grylloblattidae 갈르와벌레
             민벌레목 Zoraptera = 민벌레과 Zorotypidae 민벌레
             사마귀목 Mantodea = 사마귀과 Mantidae 왕사마귀; 꽃사마귀과 Hymenopodidae 난초사마귀
             바퀴목 Blattodea = 왕바퀴과 Blattidae 이질바퀴; 바퀴과 Ectobiidae 바퀴; 흰개미과 Termitidae 흰개미`)),
        T('준변태류', { s: 'Paraneoptera' },
          L(`다듬이벌레목 Psocodea = 다듬이벌레과 Psocidae 다듬이벌레; 이과 Pediculidae 이
             총채벌레목 Thysanoptera = 총채벌레과 Thripidae 꽃노랑총채벌레
             노린재목 Hemiptera = 노린재과 Pentatomidae 노린재; 매미과 Cicadidae 매미; 진딧물과 Aphididae 진딧물; 소금쟁이과 Gerridae 소금쟁이; 빈대과 Cimicidae 빈대`)),
        T('완전변태류', { s: 'Holometabola' },
          L(`벌목 Hymenoptera = 잎벌과 Tenthredinidae 잎벌; 맵시벌과 Ichneumonidae 맵시벌; 말벌과 Vespidae 장수말벌; 꿀벌과 Apidae 꿀벌·호박벌; 개미과 Formicidae 개미
             풀잠자리목 Neuroptera = 풀잠자리과 Chrysopidae 풀잠자리; 명주잠자리과 Myrmeleontidae 개미귀신
             뱀잠자리목 Megaloptera = 뱀잠자리과 Corydalidae 뱀잠자리
             약대벌레목 Raphidioptera = 약대벌레과 Raphidiidae 약대벌레
             딱정벌레목 Coleoptera = 딱정벌레과 Carabidae 딱정벌레; 물방개과 Dytiscidae 물방개; 풍뎅이과 Scarabaeidae 풍뎅이·쇠똥구리; 사슴벌레과 Lucanidae 사슴벌레; 반딧불이과 Lampyridae 반딧불이; 무당벌레과 Coccinellidae 무당벌레; 하늘소과 Cerambycidae 하늘소; 바구미과 Curculionidae 바구미
             부채벌레목 Strepsiptera = 부채벌레과 Stylopidae 부채벌레
             날도래목 Trichoptera = 날도래과 Phryganeidae 날도래
             나비목 Lepidoptera = 호랑나비과 Papilionidae 호랑나비; 흰나비과 Pieridae 배추흰나비; 네발나비과 Nymphalidae 제왕나비; 누에나방과 Bombycidae 누에나방; 박각시과 Sphingidae 박각시
             밑들이목 Mecoptera = 밑들이과 Panorpidae 밑들이
             벼룩목 Siphonaptera = 벼룩과 Pulicidae 벼룩
             파리목 Diptera = 모기과 Culicidae 모기; 각다귀과 Tipulidae 각다귀; 초파리과 Drosophilidae 초파리; 집파리과 Muscidae 집파리; 꽃등에과 Syrphidae 꽃등에`)))));

  TOL.arthropods = T('절지동물문', { s: 'Arthropoda' },
    T('삼엽충강', { s: 'Trilobita · 멸종' },
      L(`레들리키아목 Redlichiida = 레들리키아과† Redlichiidae 레들리키아
         파콥스목 Phacopida = 파콥스과† Phacopidae 파콥스
         아사푸스목 Asaphida = 아사푸스과† Asaphidae 아사푸스`)),
    T('협각아문', { s: 'Chelicerata' },
      L(`바다거미목 Pantopoda = 바다거미과 Nymphonidae 바다거미
         검미목 Xiphosura = 투구게과 Limulidae 투구게
         광익목 Eurypterida = 광익과† Pterygotidae 바다전갈`),
      T('거미강', { s: 'Arachnida' },
        L(`거미목 Araneae = 왕거미과 Araneidae 왕거미; 깡충거미과 Salticidae 깡충거미; 늑대거미과 Lycosidae 늑대거미; 새잡이거미과 Theraphosidae 타란툴라; 꼬마거미과 Theridiidae 과부거미
           채찍전갈목 Thelyphonida = 채찍전갈과 Thelyphonidae 채찍전갈
           무편모목 Amblypygi = 무편모과 Phrynidae 채찍거미
           분절미목 Schizomida = 분절미과 Hubbardiidae 짧은꼬리채찍전갈
           전갈목 Scorpiones = 뷰티드과 Buthidae 데스스토커; 전갈과 Scorpionidae 황제전갈
           의갈목 Pseudoscorpiones = 의갈과 Chernetidae 의갈
           낙타거미목 Solifugae = 낙타거미과 Galeodidae 낙타거미
           통거미목 Opiliones = 통거미과 Phalangiidae 장님거미
           미소거미목 Palpigradi = 미소거미과 Eukoeneniidae 미소채찍전갈
           리키눌레이목 Ricinulei = 리키눌레이과 Ricinoididae 두건거미
           참진드기목 Ixodida = 참진드기과 Ixodidae 참진드기
           응애목 Trombidiformes = 잎응애과 Tetranychidae 점박이응애; 털진드기과 Trombiculidae 털진드기
           먼지진드기목 Sarcoptiformes = 집먼지진드기과 Pyroglyphidae 집먼지진드기`))),
    T('다지아문', { s: 'Myriapoda' },
      L(`그리마목 Scutigeromorpha = 그리마과 Scutigeridae 그리마
         돌지네목 Lithobiomorpha = 돌지네과 Lithobiidae 돌지네
         왕지네목 Scolopendromorpha = 왕지네과 Scolopendridae 왕지네
         땅지네목 Geophilomorpha = 땅지네과 Geophilidae 땅지네
         띠노래기목 Polydesmida = 띠노래기과 Paradoxosomatidae 띠노래기
         각시노래기목 Julida = 각시노래기과 Julidae 노래기
         공노래기목 Glomerida = 공노래기과 Glomeridae 공벌레노래기`)),
    T('범갑각류', { s: 'Pancrustacea' },
      T('갑각류', { s: 'Crustacea · 따개비·거북손 포함' },
        L(`요각목 Calanoida = 요각과 Calanidae 요각류
           만각목 Balanomorpha = 따개비과 Balanidae 따개비
           유병만각목 Pedunculata = 거북손과 Pollicipedidae 거북손
           패충목 Podocopida = 패충과 Cyprididae 씨새우
           무갑목 Anostraca = 아르테미아과 Artemiidae 브라인슈림프
           물벼룩목 Anomopoda = 물벼룩과 Daphniidae 물벼룩
           갯가재목 Stomatopoda = 갯가재과 Squillidae 갯가재; 나비갯가재과 Odontodactylidae 공작갯가재
           난바다곤쟁이목 Euphausiacea = 난바다곤쟁이과 Euphausiidae 크릴
           단각목 Amphipoda = 옆새우과 Gammaridae 옆새우; 갯강구붙이과 Talitridae 모래벼룩
           등각목 Isopoda = 쥐며느리과 Porcellionidae 쥐며느리; 갯강구과 Ligiidae 갯강구; 대왕구족과 Cirolanidae 대왕구족충
           십각목 Decapoda = 보리새우과 Penaeidae 대하; 가재과 Astacidae 가재; 바닷가재과 Nephropidae 바닷가재; 꽃게과 Portunidae 꽃게; 왕게과 Lithodidae 킹크랩; 집게과 Paguridae 소라게
           레미페스목 Nectiopoda = 레미페스과 Speleonectidae 레미페스`)),
      T('육각아문', { s: 'Hexapoda' },
        L(`톡토기목 Collembola = 톡토기과 Entomobryidae 톡토기
           낫발이목 Protura = 낫발이과 Eosentomidae 낫발이
           좀붙이목 Diplura = 좀붙이과 Japygidae 집게좀붙이`),
        TOL.insects)));

  TOL.ecdysozoa = T('탈피동물', { s: 'Ecdysozoa' },
    T('선형동물문', { s: 'Nematoda' },
      L(`간선충목 Rhabditida = 간선충과 Rhabditidae 예쁜꼬마선충; 회충과 Ascarididae 회충; 사상충과 Onchocercidae 사상충
         편충목 Trichocephalida = 편충과 Trichuridae 편충`)),
    T('새예동물문', { s: 'Priapulida' }, L(`새예목 Priapulimorpha = 새예과 Priapulidae 새예동물`)),
    T('유조동물문', { s: 'Onychophora' }, L(`유조목 Euonychophora = 페리파투스과 Peripatidae 발톱벌레`)),
    T('완보동물문', { s: 'Tardigrada' }, L(`진완보목 Parachela = 곰벌레과 Macrobiotidae 물곰`)),
    TOL.arthropods);

  TOL.lophotrochozoa = T('촉수담륜동물', { s: 'Spiralia' },
    T('편형동물문', { s: 'Platyhelminthes' },
      L(`세갈래창자목 Tricladida = 플라나리아과 Dugesiidae 플라나리아
         원두촌충목 Cyclophyllidea = 촌충과 Taeniidae 갈고리촌충
         이생흡충목 Plagiorchiida = 간흡충과 Opisthorchiidae 간흡충`)),
    T('윤형동물문', { s: 'Rotifera' }, L(`윤충목 Ploima = 윤충과 Brachionidae 윤충`)),
    T('태형동물문', { s: 'Bryozoa' }, L(`순구목 Cheilostomatida = 이끼벌레과 Membraniporidae 이끼벌레`)),
    T('완족동물문', { s: 'Brachiopoda · 조개 닮은 별개 문' }, L(`개맛목 Lingulida = 개맛과 Lingulidae 개맛`)),
    T('유형동물문', { s: 'Nemertea' }, L(`유형동물목 Pilidiophora = 끈벌레과 Lineidae 끈벌레`)),
    T('환형동물문', { s: 'Annelida' },
      L(`갯지렁이목 Phyllodocida = 참갯지렁이과 Nereididae 갯지렁이
         꽃갯지렁이목 Sabellida = 꽃갯지렁이과 Sabellidae 꽃갯지렁이; 시보글리눔과 Siboglinidae 심해관벌레
         후생빈모목 Crassiclitellata = 낚시지렁이과 Lumbricidae 지렁이
         턱거머리목 Arhynchobdellida = 턱거머리과 Hirudinidae 의료용 거머리`)),
    T('연체동물문', { s: 'Mollusca' },
      T('다판강', { s: 'Polyplacophora' }, L(`군부목 Chitonida = 군부과 Chitonidae 군부`)),
      T('굴족강', { s: 'Scaphopoda' }, L(`뿔조개목 Dentaliida = 뿔조개과 Dentaliidae 뿔조개`)),
      T('복족강', { s: 'Gastropoda' },
        L(`삿갓조개목 Patellogastropoda = 삿갓조개과 Patellidae 삿갓조개
           고둥목 Neogastropoda = 물레고둥과 Buccinidae 골뱅이; 청자고둥과 Conidae 청자고둥
           총알고둥목 Littorinimorpha = 총알고둥과 Littorinidae 총알고둥; 개오지과 Cypraeidae 개오지
           나새목 Nudibranchia = 갯민숭달팽이과 Chromodorididae 갯민숭달팽이
           군소목 Aplysiida = 군소과 Aplysiidae 군소
           병안목 Stylommatophora = 달팽이과 Helicidae 달팽이; 민달팽이과 Limacidae 민달팽이; 아프리카왕달팽이과 Achatinidae 왕달팽이`)),
      T('이매패강', { s: 'Bivalvia' },
        L(`홍합목 Mytilida = 홍합과 Mytilidae 홍합
           굴목 Ostreida = 굴과 Ostreidae 굴
           가리비목 Pectinida = 가리비과 Pectinidae 가리비
           백합목 Venerida = 백합과 Veneridae 바지락·백합; 대왕조개과 Tridacnidae 대왕조개`)),
      T('두족강', { s: 'Cephalopoda' },
        L(`앵무조개목 Nautilida = 앵무조개과 Nautilidae 앵무조개
           암모나이트목 Ammonitida = 암모나이트과† Ammonitidae 암모나이트
           문어목 Octopoda = 문어과 Octopodidae 문어·낙지
           흡혈오징어목 Vampyromorphida = 흡혈오징어과 Vampyroteuthidae 흡혈오징어
           갑오징어목 Sepiida = 갑오징어과 Sepiidae 갑오징어
           살오징어목 Oegopsida = 살오징어과 Ommastrephidae 오징어; 대왕오징어과 Architeuthidae 대왕오징어`))));

  TOL.deuterostomes = T('후구동물', { s: 'Deuterostomia' },
    T('수관동물', { s: 'Ambulacraria' },
      L(`장새목 Enteropneusta = 장새과 Ptychoderidae 장새류`),
      T('극피동물문', { s: 'Echinodermata' },
        L(`갯고사리목 Comatulida = 갯고사리과 Antedonidae 갯고사리
           겸자불가사리목 Forcipulatida = 불가사리과 Asteriidae 아무르불가사리
           판족불가사리목 Valvatida = 별불가사리과 Asterinidae 별불가사리; 왕관불가사리과 Acanthasteridae 악마불가사리
           거미불가사리목 Ophiurida = 거미불가사리과 Ophiuridae 거미불가사리
           만두성게목 Camarodonta = 둥근성게과 Strongylocentrotidae 보라성게
           염통성게목 Spatangoida = 염통성게과 Spatangidae 염통성게
           순수목 Synallactida = 돌기해삼과 Stichopodidae 해삼`))),
    T('척삭동물문', { s: 'Chordata', g: 'fish' },
      L(`창고기목 Amphioxiformes = 창고기과 Branchiostomatidae 창고기`),
      T('피낭동물', { s: 'Tunicata' },
        L(`측구목 Stolidobranchia = 멍게과 Pyuridae 멍게; 미더덕과 Styelidae 미더덕
           살파목 Salpida = 살파과 Salpidae 살파
           미충목 Copelata = 미충과 Oikopleuridae 미충`)),
      T('척추동물', { s: 'Vertebrata', ma: '약 5.2억 년 전', big: 1 },
        TOL.agnatha,
        T('유악류', { s: 'Gnathostomata' },
          TOL.chondrichthyes,
          T('경골어류', { s: 'Osteichthyes' },
            TOL.actinopterygii,
            T('육기어류', { s: 'Sarcopterygii' },
              TOL.sarcopterygii_fish,
              T('사지동물', { s: 'Tetrapoda', ma: '약 3.7억 년 전', g: 'amp' },
                TOL.amphibians,
                T('양막류', { s: 'Amniota' },
                  TOL.sauropsids,
                  T('단궁류', { s: 'Synapsida', g: 'mam' },
                    L(`반룡목 Pelycosauria = 스페나코돈과† Sphenacodontidae 디메트로돈
                       수궁목 Therapsida = 디키노돈과† Dicynodontidae 리스트로사우루스`),
                    TOL.mammals)))))))));

  TOL.animals = T('동물계', { s: 'Animalia', ma: '약 6억 년 전', big: 2, g: 'inv' },
    T('해면동물문', { s: 'Porifera' },
      L(`육방해면목 Lyssacinosida = 해로동굴해면과 Euplectellidae 비너스의 꽃바구니
         목욕해면목 Dictyoceratida = 목욕해면과 Spongiidae 목욕해면
         하플로스클레리다목 Haplosclerida = 하플로스클레리다과 Callyspongiidae 대롱해면`)),
    T('유즐동물문', { s: 'Ctenophora' }, L(`빗해파리목 Lobata = 빗해파리과 Bolinopsidae 빗해파리`)),
    T('판형동물문', { s: 'Placozoa' }, L(`판형동물목 Trichoplacida = 판형동물과 Trichoplacidae 트리코플락스`)),
    T('자포동물문', { s: 'Cnidaria' },
      L(`기구해파리목 Semaeostomeae = 느릅나무해파리과 Ulmaridae 보름달물해파리; 유령해파리과 Cyaneidae 사자갈기해파리
         근구해파리목 Rhizostomeae = 근구해파리과 Rhizostomatidae 노무라입깃해파리
         상자해파리목 Chirodropida = 상자해파리과 Chirodropidae 바다말벌
         관해파리목 Siphonophorae = 고깔해파리과 Physaliidae 작은부레관해파리
         꽃해파리목 Anthoathecata = 히드라과 Hydridae 히드라; 투리톱시스과 Oceaniidae 홍해파리
         돌산호목 Scleractinia = 사슴뿔산호과 Acroporidae 사슴뿔산호; 뇌산호과 Merulinidae 뇌산호
         해변말미잘목 Actiniaria = 해변말미잘과 Actiniidae 말미잘; 큰말미잘과 Stichodactylidae 흰동가리말미잘
         연산호목 Malacalcyonacea = 연산호과 Alcyoniidae 연산호; 부채뿔산호과 Gorgoniidae 부채산호`)),
    T('좌우대칭동물', { s: 'Bilateria' },
      L(`무장목 Acoela = 무장과 Convolutidae 무장동물`),
      T('선구동물', { s: 'Protostomia' }, TOL.lophotrochozoa, TOL.ecdysozoa),
      TOL.deuterostomes));
})();
