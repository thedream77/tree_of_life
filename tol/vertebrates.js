// 척추동물 — 현생 모든 목 (포유류 MDD, 조류 IOC, 어류 Betancur-R 2017 기준 단순화)
(function () {
  const { T, F, L } = window;

  // ───── 포유강 (29목) ─────
  TOL.mammals = T('포유강', { s: 'Mammalia', ma: '약 2억 년 전', big: 1 },
    L(`단공목 Monotremata = 오리너구리과 Ornithorhynchidae 오리너구리; 바늘두더지과 Tachyglossidae 가시두더지`),
    T('유대류', { s: 'Marsupialia' },
      L(`주머니쥐목 Didelphimorphia = 주머니쥐과 Didelphidae 버지니아주머니쥐
         새도둑주머니쥐목 Paucituberculata = 새도둑주머니쥐과 Caenolestidae 땃쥐주머니쥐
         칠로에주머니쥐목 Microbiotheria = 칠로에주머니쥐과 Microbiotheriidae 몬티토델몬테
         주머니고양이목 Dasyuromorphia = 주머니고양이과 Dasyuridae 태즈메이니아데빌; 주머니늑대과† Thylacinidae 주머니늑대
         주머니두더지목 Notoryctemorphia = 주머니두더지과 Notoryctidae 주머니두더지
         반디쿠트목 Peramelemorphia = 반디쿠트과 Peramelidae 반디쿠트
         캥거루목 Diprotodontia = 캥거루과 Macropodidae 캥거루; 코알라과 Phascolarctidae 코알라; 웜뱃과 Vombatidae 웜뱃`)),
    T('태반류', { s: 'Placentalia' },
      T('아프로테리아상목', { s: 'Afrotheria' },
        L(`아프리카땃쥐목 Afrosoricida = 텐렉과 Tenrecidae 텐렉; 황금두더지과 Chrysochloridae 황금두더지
           코끼리땃쥐목 Macroscelidea = 코끼리땃쥐과 Macroscelididae 코끼리땃쥐
           관치목 Tubulidentata = 땅돼지과 Orycteropodidae 땅돼지
           바위너구리목 Hyracoidea = 바위너구리과 Procaviidae 바위너구리
           장비목 Proboscidea = 코끼리과 Elephantidae 코끼리; 맘모스과† Mammutidae 마스토돈
           바다소목 Sirenia = 매너티과 Trichechidae 매너티; 듀공과 Dugongidae 듀공`)),
      T('빈치상목', { s: 'Xenarthra' },
        L(`피갑목 Cingulata = 아르마딜로과 Dasypodidae 아르마딜로
           유모목 Pilosa = 세발가락나무늘보과 Bradypodidae 나무늘보; 개미핥기과 Myrmecophagidae 큰개미핥기`)),
      T('영장상목', { s: 'Euarchontoglires' },
        T('설치동물', { s: 'Glires' },
          L(`토끼목 Lagomorpha = 토끼과 Leporidae 토끼; 우는토끼과 Ochotonidae 우는토끼
             설치목 Rodentia = 다람쥐과 Sciuridae 다람쥐; 비버과 Castoridae 비버; 쥐과 Muridae 생쥐·집쥐; 비단털쥐과 Cricetidae 햄스터; 호저과 Hystricidae 호저; 기니피그과 Caviidae 카피바라`)),
        L(`나무두더지목 Scandentia = 나무두더지과 Tupaiidae 나무두더지
           날원숭이목 Dermoptera = 날원숭이과 Cynocephalidae 날원숭이
           영장목 Primates = 여우원숭이과 Lemuridae 여우원숭이; 로리스과 Lorisidae 늘보로리스; 안경원숭이과 Tarsiidae 안경원숭이; 꼬리감는원숭이과 Cebidae 꼬리감는원숭이; 긴꼬리원숭이과 Cercopithecidae 개코원숭이; 긴팔원숭이과 Hylobatidae 긴팔원숭이; 사람과 Hominidae 사람·침팬지·고릴라`)),
      T('로라시아상목', { s: 'Laurasiatheria' },
        L(`진무맹장목 Eulipotyphla = 고슴도치과 Erinaceidae 고슴도치; 땃쥐과 Soricidae 땃쥐; 두더지과 Talpidae 두더지
           박쥐목 Chiroptera = 큰박쥐과 Pteropodidae 과일박쥐; 관박쥐과 Rhinolophidae 관박쥐; 애기박쥐과 Vespertilionidae 집박쥐; 흡혈박쥐과 Phyllostomidae 흡혈박쥐`),
        T('페룽굴라타', { s: 'Ferungulata' },
          L(`천산갑목 Pholidota = 천산갑과 Manidae 천산갑
             식육목 Carnivora = 고양이과 Felidae 고양이·사자·호랑이; 사향고양이과 Viverridae 사향고양이; 하이에나과 Hyaenidae 하이에나; 몽구스과 Herpestidae 미어캣; 개과 Canidae 개·늑대·여우; 곰과 Ursidae 불곰·판다; 족제비과 Mustelidae 족제비·수달; 미국너구리과 Procyonidae 라쿤; 물범과 Phocidae 물범; 바다사자과 Otariidae 물개·바다사자; 바다코끼리과 Odobenidae 바다코끼리
             기제목 Perissodactyla = 말과 Equidae 말·얼룩말; 맥과 Tapiridae 맥; 코뿔소과 Rhinocerotidae 코뿔소
             경우제목 Cetartiodactyla = 낙타과 Camelidae 낙타·알파카; 멧돼지과 Suidae 돼지; 사슴과 Cervidae 사슴; 기린과 Giraffidae 기린; 소과 Bovidae 소·양·염소; 하마과 Hippopotamidae 하마; 수염고래과 Balaenopteridae 흰긴수염고래; 향유고래과 Physeteridae 향유고래; 참돌고래과 Delphinidae 돌고래·범고래`)))
    )
  );

  // ───── 조강 (44목) ─────
  TOL.birds = T('조강', { s: 'Aves', big: 1, g: 'bird' },
    T('고악류', { s: 'Palaeognathae' },
      L(`타조목 Struthioniformes = 타조과 Struthionidae 타조
         레아목 Rheiformes = 레아과 Rheidae 레아
         티나무목 Tinamiformes = 티나무과 Tinamidae 티나무
         화식조목 Casuariiformes = 화식조과 Casuariidae 화식조·에뮤
         키위목 Apterygiformes = 키위과 Apterygidae 키위
         모아목 Dinornithiformes = 모아과† Dinornithidae 모아
         코끼리새목 Aepyornithiformes = 코끼리새과† Aepyornithidae 코끼리새`)),
    T('신악류', { s: 'Neognathae' },
      T('닭기러기류', { s: 'Galloanserae' },
        L(`닭목 Galliformes = 꿩과 Phasianidae 닭·꿩; 무덤새과 Megapodiidae 무덤새
           기러기목 Anseriformes = 오리과 Anatidae 오리·기러기·고니`)),
      T('신조류', { s: 'Neoaves' },
        L(`홍학목 Phoenicopteriformes = 홍학과 Phoenicopteridae 홍학
           논병아리목 Podicipediformes = 논병아리과 Podicipedidae 논병아리
           비둘기목 Columbiformes = 비둘기과 Columbidae 비둘기·도도†
           메사이트목 Mesitornithiformes = 메사이트과 Mesitornithidae 메사이트
           사막꿩목 Pterocliformes = 사막꿩과 Pteroclidae 사막꿩
           쑥독새목 Caprimulgiformes = 쑥독새과 Caprimulgidae 쏙독새
           칼새목 Apodiformes = 칼새과 Apodidae 칼새; 벌새과 Trochilidae 벌새
           느시목 Otidiformes = 느시과 Otididae 느시
           투라코목 Musophagiformes = 투라코과 Musophagidae 투라코
           두견이목 Cuculiformes = 두견이과 Cuculidae 뻐꾸기
           호아친목 Opisthocomiformes = 호아친과 Opisthocomidae 호아친
           두루미목 Gruiformes = 두루미과 Gruidae 두루미; 뜸부기과 Rallidae 뜸부기
           도요목 Charadriiformes = 물떼새과 Charadriidae 물떼새; 도요과 Scolopacidae 도요새; 갈매기과 Laridae 갈매기; 바다오리과 Alcidae 퍼핀
           카구목 Eurypygiformes = 카구과 Rhynochetidae 카구
           열대새목 Phaethontiformes = 열대새과 Phaethontidae 열대새
           아비목 Gaviiformes = 아비과 Gaviidae 아비
           펭귄목 Sphenisciformes = 펭귄과 Spheniscidae 황제펭귄
           슴새목 Procellariiformes = 신천옹과 Diomedeidae 알바트로스; 슴새과 Procellariidae 슴새
           황새목 Ciconiiformes = 황새과 Ciconiidae 황새
           가다랭이잡이목 Suliformes = 가마우지과 Phalacrocoracidae 가마우지; 군함조과 Fregatidae 군함조
           사다새목 Pelecaniformes = 사다새과 Pelecanidae 펠리컨; 백로과 Ardeidae 백로·왜가리; 저어새과 Threskiornithidae 저어새·따오기
           콘도르목 Cathartiformes = 콘도르과 Cathartidae 콘도르
           수리목 Accipitriformes = 수리과 Accipitridae 독수리·참수리; 물수리과 Pandionidae 물수리
           올빼미목 Strigiformes = 올빼미과 Strigidae 올빼미·부엉이; 가면올빼미과 Tytonidae 원숭이올빼미
           쥐새목 Coliiformes = 쥐새과 Coliidae 쥐새
           뻐꾸기파랑새목 Leptosomiformes = 뻐꾸기파랑새과 Leptosomidae 뻐꾸기파랑새
           비단날개새목 Trogoniformes = 비단날개새과 Trogonidae 케찰
           코뿔새목 Bucerotiformes = 코뿔새과 Bucerotidae 코뿔새; 후투티과 Upupidae 후투티
           파랑새목 Coraciiformes = 물총새과 Alcedinidae 물총새; 파랑새과 Coraciidae 파랑새
           딱다구리목 Piciformes = 딱다구리과 Picidae 딱따구리; 큰부리새과 Ramphastidae 큰부리새
           세리에마목 Cariamiformes = 세리에마과 Cariamidae 세리에마
           매목 Falconiformes = 매과 Falconidae 매·황조롱이
           앵무목 Psittaciformes = 앵무과 Psittacidae 앵무새; 유황앵무과 Cacatuidae 코카투
           참새목 Passeriformes = 참새과 Passeridae 참새; 까마귀과 Corvidae 까마귀·까치; 제비과 Hirundinidae 제비; 박새과 Paridae 박새; 지빠귀과 Turdidae 개똥지빠귀; 금조과 Menuridae 금조`)))
  );

  // ───── 파충류 · 공룡 ─────
  TOL.sauropsids = T('석형류', { s: 'Sauropsida', g: 'rep', big: 1 },
    L(`거북목 Testudines = 바다거북과 Cheloniidae 바다거북; 남생이과 Geoemydidae 남생이; 땅거북과 Testudinidae 갈라파고스땅거북; 자라과 Trionychidae 자라`),
    T('인룡류', { s: 'Lepidosauria' },
      L(`옛도마뱀목 Rhynchocephalia = 옛도마뱀과 Sphenodontidae 투아타라
         유린목 Squamata = 도마뱀붙이과 Gekkonidae 게코; 도마뱀과 Scincidae 도마뱀; 이구아나과 Iguanidae 이구아나; 카멜레온과 Chamaeleonidae 카멜레온; 왕도마뱀과 Varanidae 코모도왕도마뱀; 비단뱀과 Pythonidae 비단뱀; 뱀과 Colubridae 유혈목이; 코브라과 Elapidae 코브라; 살모사과 Viperidae 살모사; 모사사우루스과† Mosasauridae 모사사우루스`)),
    T('어룡·수장룡', { s: '중생대 해양 파충류' },
      L(`어룡목 Ichthyosauria = 어룡과† Ichthyosauridae 이크티오사우루스
         수장룡목 Plesiosauria = 플레시오사우루스과† Plesiosauridae 플레시오사우루스`)),
    T('지배파충류', { s: 'Archosauria' },
      L(`악어목 Crocodylia = 악어과 Crocodylidae 나일악어; 앨리게이터과 Alligatoridae 앨리게이터; 가비알과 Gavialidae 가비알
         익룡목 Pterosauria = 프테라노돈과† Pteranodontidae 프테라노돈`),
      T('공룡', { s: 'Dinosauria' },
        T('조반목', { s: 'Ornithischia' },
          F('케라톱스과', 'Ceratopsidae', '트리케라톱스', { ex: 1 }),
          F('스테고사우루스과', 'Stegosauridae', '스테고사우루스', { ex: 1 }),
          F('하드로사우루스과', 'Hadrosauridae', '오리주둥이공룡', { ex: 1 })),
        T('용반목', { s: 'Saurischia' },
          F('브라키오사우루스과', 'Brachiosauridae', '브라키오사우루스', { ex: 1 }),
          F('티라노사우루스과', 'Tyrannosauridae', '티라노사우루스', { ex: 1 }),
          F('드로마이오사우루스과', 'Dromaeosauridae', '벨로키랍토르', { ex: 1 }),
          TOL.birds)))
  );

  // ───── 양서강 ─────
  TOL.amphibians = T('양서강', { s: 'Amphibia' },
    L(`무미목 Anura = 무당개구리과 Bombinatoridae 무당개구리; 두꺼비과 Bufonidae 두꺼비; 청개구리과 Hylidae 청개구리; 개구리과 Ranidae 참개구리; 독화살개구리과 Dendrobatidae 독화살개구리
       유미목 Caudata = 장수도롱뇽과 Cryptobranchidae 장수도롱뇽; 도롱뇽과 Hynobiidae 도롱뇽; 영원과 Salamandridae 영원; 점박이도롱뇽과 Ambystomatidae 아홀로틀
       무족목 Gymnophiona = 무족영원과 Caeciliidae 무족영원`)
  );

  // ───── 어류 ─────
  TOL.agnatha = T('무악류', { s: 'Cyclostomi' },
    L(`먹장어목 Myxiniformes = 먹장어과 Myxinidae 먹장어
       칠성장어목 Petromyzontiformes = 칠성장어과 Petromyzontidae 칠성장어`));

  TOL.chondrichthyes = T('연골어강', { s: 'Chondrichthyes' },
    L(`은상어목 Chimaeriformes = 은상어과 Chimaeridae 은상어`),
    T('판새아강', { s: 'Elasmobranchii' },
      L(`괭이상어목 Heterodontiformes = 괭이상어과 Heterodontidae 괭이상어
         수염상어목 Orectolobiformes = 고래상어과 Rhincodontidae 고래상어; 수염상어과 Orectolobidae 워베공
         악상어목 Lamniformes = 악상어과 Lamnidae 백상아리; 환도상어과 Alopiidae 환도상어
         흉상어목 Carcharhiniformes = 흉상어과 Carcharhinidae 뱀상어; 귀상어과 Sphyrnidae 귀상어; 두툽상어과 Scyliorhinidae 두툽상어
         신락상어목 Hexanchiformes = 신락상어과 Hexanchidae 칠성상어; 주름상어과 Chlamydoselachidae 주름상어
         돔발상어목 Squaliformes = 돔발상어과 Squalidae 돔발상어
         톱상어목 Pristiophoriformes = 톱상어과 Pristiophoridae 톱상어
         전자리상어목 Squatiniformes = 전자리상어과 Squatinidae 전자리상어
         전기가오리목 Torpediniformes = 전기가오리과 Torpedinidae 전기가오리
         톱가오리목 Rhinopristiformes = 톱가오리과 Pristidae 톱가오리
         홍어목 Rajiformes = 홍어과 Rajidae 홍어
         매가오리목 Myliobatiformes = 매가오리과 Myliobatidae 쥐가오리; 노랑가오리과 Dasyatidae 노랑가오리`)));

  TOL.actinopterygii = T('조기어강', { s: 'Actinopterygii' },
    T('연질어류', { s: 'Chondrostei' },
      L(`다기어목 Polypteriformes = 폴립테루스과 Polypteridae 비키르
         철갑상어목 Acipenseriformes = 철갑상어과 Acipenseridae 철갑상어; 주걱철갑상어과 Polyodontidae 주걱철갑상어`)),
    T('전골어류', { s: 'Holostei' },
      L(`레피소스테우스목 Lepisosteiformes = 레피소스테우스과 Lepisosteidae 가아
         아미아목 Amiiformes = 아미아과 Amiidae 보우핀`)),
    T('진골어류', { s: 'Teleostei' },
      T('골설어상목', { s: 'Osteoglossomorpha' },
        L(`히오돈목 Hiodontiformes = 히오돈과 Hiodontidae 문아이
           골설어목 Osteoglossiformes = 골설어과 Osteoglossidae 아로와나; 아라파이마과 Arapaimidae 피라루쿠`)),
      T('당멸치상목', { s: 'Elopomorpha' },
        L(`당멸치목 Elopiformes = 풀잉어과 Megalopidae 타폰
           여을멸목 Albuliformes = 여을멸과 Albulidae 여을멸
           밑보리멸목 Notacanthiformes = 밑보리멸과 Notacanthidae 가시장어
           뱀장어목 Anguilliformes = 뱀장어과 Anguillidae 뱀장어; 곰치과 Muraenidae 곰치; 붕장어과 Congridae 붕장어
           심해뱀장어목 Saccopharyngiformes = 주머니입장어과 Eurypharyngidae 펠리컨장어`)),
      T('오토케팔라', { s: 'Otocephala' },
        L(`청어목 Clupeiformes = 청어과 Clupeidae 청어·정어리; 멸치과 Engraulidae 멸치
           민머리치목 Alepocephaliformes = 민머리치과 Alepocephalidae 민머리치
           압치목 Gonorynchiformes = 밀크피시과 Chanidae 밀크피시
           잉어목 Cypriniformes = 잉어과 Cyprinidae 잉어·붕어; 미꾸리과 Cobitidae 미꾸라지; 다니오과 Danionidae 제브라피시
           카라신목 Characiformes = 세라살무스과 Serrasalmidae 피라냐; 카라신과 Characidae 네온테트라
           김노투스목 Gymnotiformes = 전기뱀장어과 Gymnotidae 전기뱀장어
           메기목 Siluriformes = 메기과 Siluridae 메기; 동자개과 Bagridae 동자개; 갑옷메기과 Loricariidae 플레코`)),
      T('신진골어류', { s: 'Euteleostei' },
        L(`샛멸목 Argentiniformes = 샛멸과 Argentinidae 샛멸
           바다빙어목 Osmeriformes = 바다빙어과 Osmeridae 빙어·열빙어
           강꼬치고기목 Esociformes = 강꼬치고기과 Esocidae 강꼬치고기
           연어목 Salmoniformes = 연어과 Salmonidae 연어·송어
           꼬리치목 Ateleopodiformes = 꼬리치과 Ateleopodidae 꼬리치
           앨퉁이목 Stomiiformes = 앨퉁이과 Sternoptychidae 손도끼고기; 독사고기과 Stomiidae 독사고기
           홍메치목 Aulopiformes = 매퉁이과 Synodontidae 매퉁이
           샛비늘치목 Myctophiformes = 샛비늘치과 Myctophidae 샛비늘치
           이악어목 Lampridiformes = 이악어과 Lampridae 붉평치; 산갈치과 Regalecidae 산갈치
           턱수염금눈돔목 Polymixiiformes = 턱수염금눈돔과 Polymixiidae 턱수염금눈돔`),
        T('측극기상목', { s: 'Paracanthopterygii' },
          L(`연농어목 Percopsiformes = 동굴어과 Amblyopsidae 동굴어
             대구목 Gadiformes = 대구과 Gadidae 대구·명태; 민태과 Macrouridae 민태`)),
        T('극기상목', { s: 'Acanthopterygii' },
          L(`금눈돔목 Beryciformes = 금눈돔과 Berycidae 금눈돔
             얼게돔목 Holocentriformes = 얼게돔과 Holocentridae 얼게돔
             달고기목 Zeiformes = 달고기과 Zeidae 달고기`),
          T('농어계', { s: 'Percomorpha' },
            L(`첨치목 Ophidiiformes = 첨치과 Ophidiidae 첨치
               두꺼비고기목 Batrachoidiformes = 두꺼비고기과 Batrachoididae 두꺼비고기
               쿠르투스목 Kurtiformes = 동갈돗돔과 Apogonidae 동갈돔
               망둑어목 Gobiiformes = 망둑어과 Gobiidae 망둑어·짱뚱어
               실고기목 Syngnathiformes = 실고기과 Syngnathidae 해마·실고기; 쏠종개과 Mullidae 노랑촉수
               고등어목 Scombriformes = 고등어과 Scombridae 참치·고등어; 갈치과 Trichiuridae 갈치; 병어과 Stromateidae 병어
               드렁허리목 Synbranchiformes = 드렁허리과 Synbranchidae 드렁허리
               등목어목 Anabantiformes = 버들붕어과 Osphronemidae 베타; 가물치과 Channidae 가물치
               돛새치목 Istiophoriformes = 돛새치과 Istiophoridae 돛새치; 황새치과 Xiphiidae 황새치
               전갱이목 Carangiformes = 전갱이과 Carangidae 전갱이·방어; 넙치과 Paralichthyidae 광어; 가자미과 Pleuronectidae 가자미
               키클라목 Cichliformes = 시클리드과 Cichlidae 틸라피아·엔젤피시
               폴리디크티스목 Pholidichthyiformes = 폴리디크티스과 Pholidichthyidae 장어베도라치
               숭어목 Mugiliformes = 숭어과 Mugilidae 숭어
               색줄멸목 Atheriniformes = 색줄멸과 Atherinidae 색줄멸
               동갈치목 Beloniformes = 날치과 Exocoetidae 날치; 송사리과 Adrianichthyidae 송사리
               열대송사리목 Cyprinodontiformes = 포에킬리아과 Poeciliidae 구피
               베도라치목 Blenniiformes = 청베도라치과 Blenniidae 청베도라치
               통구멍목 Uranoscopiformes = 통구멍과 Uranoscopidae 통구멍
               놀래기목 Labriformes = 놀래기과 Labridae 놀래기·나폴레옹피시; 비늘돔과 Scaridae 파랑비늘돔
               백미돔목 Lobotiformes = 백미돔과 Lobotidae 백미돔
               활치목 Ephippiformes = 제비활치과 Ephippidae 제비활치
               도미목 Spariformes = 도미과 Sparidae 참돔
               나비고기목 Chaetodontiformes = 나비고기과 Chaetodontidae 나비고기
               아귀목 Lophiiformes = 아귀과 Lophiidae 아귀; 초롱아귀과 Oneirodidae 초롱아귀
               복어목 Tetraodontiformes = 참복과 Tetraodontidae 복어; 쥐치과 Monacanthidae 쥐치; 개복치과 Molidae 개복치
               양쥐돔목 Acanthuriformes = 양쥐돔과 Acanthuridae 블루탱; 민어과 Sciaenidae 민어·조기
               주걱치목 Pempheriformes = 주걱치과 Pempheridae 주걱치
               검정우럭목 Centrarchiformes = 검정우럭과 Centrarchidae 블루길·배스; 꺽지과 Centropomidae 꺽지
               농어목 Perciformes = 농어과 Percidae 퍼치; 바리과 Serranidae 다금바리; 양볼락과 Scorpaenidae 쏨뱅이·쏠배감펭; 둑중개과 Cottidae 둑중개`))))
    )
  );

  TOL.sarcopterygii_fish = [
    L(`실러캔스목 Coelacanthiformes = 라티메리아과 Latimeriidae 실러캔스`),
    T('폐어류', { s: 'Dipnoi' },
      L(`케라토두스목 Ceratodontiformes = 케라토두스과 Neoceratodontidae 오스트레일리아폐어
         레피도시렌목 Lepidosireniformes = 레피도시렌과 Lepidosirenidae 남아메리카폐어; 프로톱테루스과 Protopteridae 아프리카폐어`)),
  ];
})();
