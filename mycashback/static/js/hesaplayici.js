function calculateDiscounts() {
    const marketInput = parseFloat(document.getElementById('marketInput').value);
    const restoranInput = parseFloat(document.getElementById('restoranInput').value);
    const taxiInput = parseFloat(document.getElementById('taxiInput').value);
    const kinoInput = parseFloat(document.getElementById('kinoInput').value);
    const gozellikInput = parseFloat(document.getElementById('gozellikInput').value);
    const ydmInput = parseFloat(document.getElementById('ydmInput').value);
    const ictimaiInput = parseFloat(document.getElementById('ictimaiInput').value);
    const geyimInput = parseFloat(document.getElementById('geyimInput').value);
    const elektronikaInput = parseFloat(document.getElementById('elektronikaInput').value);
    const sigortaInput = parseFloat(document.getElementById('sigortaInput').value);
    const catdirilmaInput = parseFloat(document.getElementById('catdirilmaInput').value);
    const evheyvanlariInput = parseFloat(document.getElementById('evheyvanlariInput').value);
    const aptekInput = parseFloat(document.getElementById('aptekInput').value);
    const klinikaInput = parseFloat(document.getElementById('klinikaInput').value);
    const aviabiletInput = parseFloat(document.getElementById('aviabiletInput').value);
    const hotelInput = parseFloat(document.getElementById('hotelInput').value);
    const eylenceInput = parseFloat(document.getElementById('eylenceInput').value);
    const gulmagazasiInput = parseFloat(document.getElementById('gulmagazasiInput').value);
    const parfumeriyaInput = parseFloat(document.getElementById('parfumeriyaInput').value);
    const kitavvedefterxanaInput = parseFloat(document.getElementById('kitavvedefterxanaInput').value);
    const oyunInput = parseFloat(document.getElementById('oyunInput').value);
    const avtoehtiyyatInput = parseFloat(document.getElementById('avtoehtiyyatInput').value);
    const demiryollariInput = parseFloat(document.getElementById('demiryollariInput').value);
    const onlineInput = parseFloat(document.getElementById('onlineInput').value);
    const digerInput = parseFloat(document.getElementById('digerInput').value);

    const kartnameRate = 5 / 100;
    const leoRate = 0;
    const ucardRate = 5 / 100;
    const bolkartRate = 3 / 100;
    const ailebascisiRate = 5 / 100;
    const macəracıRate = 0;
    const romantikRate = 0;
    const gencRate = 0;
    const kapitalistRate = 1.5 / 100;
    const xalqkartRate = 2 / 100;
    const neokartRate = 2 / 100;
    const akartRate = 1 / 100;
    const birkartRate = 0;

    if (isNaN(marketInput) || isNaN(restoranInput) || isNaN(taxiInput) || isNaN(kinoInput)
    || isNaN(gozellikInput) || isNaN(ydmInput) || isNaN(ictimaiInput) || isNaN(geyimInput) || isNaN(elektronikaInput)
    || isNaN(sigortaInput) || isNaN(catdirilmaInput) || isNaN(evheyvanlariInput) || isNaN(aptekInput)  
    || isNaN(klinikaInput)  || isNaN(aviabiletInput)  || isNaN(hotelInput)  || isNaN(eylenceInput)  || isNaN(gulmagazasiInput)
    || isNaN(parfumeriyaInput)   || isNaN(kitavvedefterxanaInput)   || isNaN(oyunInput)   || isNaN(avtoehtiyyatInput)   || isNaN(demiryollariInput)
    || isNaN(onlineInput)  || isNaN(digerInput)) {
        const resultsElement = document.getElementById('results');
        resultsElement.innerHTML = `
            <div style="color: red; margin-top: 10px;">Məbləğ sahələri düzgün doldurulmalıdır!</div>
        `;
    } else {
        // market emeliyyatlari
        const kartnameDiscount = marketInput * kartnameRate;
        const leoDiscount = marketInput * leoRate;
        const ucardDiscount = marketInput * ucardRate;
        const bolkartDiscount = marketInput * bolkartRate;
        const ailebascisiRateDiscount = marketInput * ailebascisiRate
        const macəracıRateDiscount = marketInput * macəracıRate
        const romantikRateDiscount = marketInput * romantikRate
        const gencRateDiscount = marketInput * gencRate
        const kapitalistRateDiscount = marketInput * (2 / 100)
        const xalqkartRateDiscount = marketInput * xalqkartRate
        const neokartRate = marketInput * (2 / 100)
        const akartRateDiscount = marketInput * (5 / 100)
        const birkartRateDiscount = marketInput * birkartRate


        const restoranKartnameDiscount = restoranInput * (5 / 100);
        const restoranLeoDiscount = restoranInput * leoRate;
        const restoranUcardDiscount = restoranInput * (5 / 100);
        const restoranbolkartDiscountt = restoranInput * bolkartRate;
        const restoranailebascisiRateDiscountt = restoranInput * (1 / 100)
        const restoranmacəracıRateDiscountt = restoranInput * macəracıRate
        const restoranromantikRateDiscountt = restoranInput * (4 / 100)
        const restorangencRateDiscountt = restoranInput * gencRate
        const restorankapitalistRateDiscountt = restoranInput * (3 / 100)
        const restoranxalqkartRateDiscountt = restoranInput * xalqkartRate
        const restoranneokartRateDiscountt = restoranInput * (2 / 100)
        const restoranakartRateDiscountt = restoranInput * (1 / 100)
        const restoranbirkartRateDiscountt = restoranInput * birkartRate


        const taxiKartnameDiscount = taxiInput * (5 / 100);
        const taxiLeoDiscount = taxiInput * leoRate;
        const taxiUcardDiscount = taxiInput * (1 / 100);
        const taxibolkartDiscounttt = taxiInput * bolkartRate;
        const taxiailebascisiRateDiscount = taxiInput * (1 / 100)
        const taximacəracıRateDiscount = taxiInput * macəracıRate
        const taxiromantikRateDiscount = taxiInput * romantikRate
        const taxigencRateDiscount = taxiInput * (5 / 100)
        const taxikapitalistRateDiscount = taxiInput * (1.5 / 100)
        const taxixalqkartRateDiscount = taxiInput * xalqkartRate
        const taxineokartRateDiscount = taxiInput * (2 / 100)
        const taxiakartRateDiscount = taxiInput * (1 / 100)
        const taxibirkartRateDiscount = taxiInput * birkartRate

        const kinoKartnameDiscount = kinoInput * (10 / 100);
        const kinoLeoDiscount = kinoInput * leoRate;
        const kinoUcardDiscount = kinoInput * (1 / 100);
        const kinobolkartDiscoun = kinoInput * bolkartRate;
        const kinoailebascisiRateDiscoun = kinoInput * (1 / 100)
        const kinomacəracıRateDiscoun = kinoInput * macəracıRate
        const kinoromantikRateDiscoun = kinoInput * romantikRate
        const kinogencRateDiscoun = kinoInput * gencRate
        const kinokapitalistRateDiscoun = kinoInput * (10 / 100)
        const kinoxalqkartRateDiscoun = kinoInput * (2 / 100)
        const kinoneokartRateDiscoun = kinoInput * (2 / 100)
        const kinoakartRateDiscoun = kinoInput * (1 / 100)
        const kinobirkartRateDiscoun = kinoInput * birkartRate


        const gozellikKartnameDiscount = gozellikInput * (5 / 100);
        const gozellikLeoDiscount = gozellikInput * leoRate;
        const gozellikUcardDiscount = gozellikInput * (1 / 100);
        const gozellikbolkartDiscount = gozellikInput * bolkartRate;
        const gozellikailebascisiRateDiscount = gozellikInput * (1 / 100)
        const gozellikmacəracıRateDiscount = gozellikInput * macəracıRate
        const gozellikromantikRateDiscount = gozellikInput * romantikRate
        const gozellikgencRateDiscount = gozellikInput * gencRate
        const gozellikkapitalistRateDiscount = gozellikInput * kapitalistRate
        const gozellikxalqkartRateDiscount = gozellikInput * xalqkartRate
        const gozellikneokartRateDiscount = gozellikInput * (2 / 100)
        const gozellikakartRateDiscount = gozellikInput * (1 / 100)
        const gozellikbirkartRateDiscount = gozellikInput * birkartRate


        const ydmKartnameDiscount = ydmInput * (10 / 100);
        const ydmLeoDiscount = ydmInput * leoRate;
        const ydmUcardDiscount = ydmInput * (5 / 100);
        const ydmbolkartDiscoun = ydmInput * bolkartRate;
        const ydmailebascisiRateDiscoun = ydmInput * (5 / 100)
        const ydmmacəracıRateDiscoun = ydmInput * macəracıRate
        const ydmromantikRateDiscoun = ydmInput * romantikRate
        const ydmgencRateDiscoun = ydmInput * gencRate
        const ydmkapitalistRateDiscoun = ydmInput * kapitalistRate
        const ydmxalqkartRateDiscoun = ydmInput * xalqkartRate
        const ydmneokartRateDiscoun = ydmInput * (2 / 100)
        const ydmakartRateDiscoun = ydmInput * (5 / 100)
        const ydmbirkartRateDiscoun = ydmInput * birkartRate

        const ictimaiKartnameDiscount = ictimaiInput * (5 / 100);
        const ictimaiLeoDiscount = ictimaiInput * leoRate;
        const ictimaiUcardDiscount = ictimaiInput * (1 / 100);
        const ictimaibolkartDiscount = ictimaiInput * bolkartRate;
        const ictimaiailebascisiRateDiscount = ictimaiInput * (1 / 100)
        const ictimaimacəracıRateDiscount = ictimaiInput * macəracıRate
        const ictimairomantikRateDiscount = ictimaiInput * romantikRate
        const ictimaigencRateDiscount = ictimaiInput * gencRate
        const ictimaikapitalistRateDiscount = ictimaiInput * kapitalistRate
        const ictimaixalqkartRateDiscount = ictimaiInput * xalqkartRate
        const ictimaineokartRateDiscount = ictimaiInput * (2 / 100)
        const ictimaiakartRateDiscount = ictimaiInput * (1 / 100)
        const ictimaibirkartRateDiscount = ictimaiInput * birkartRate

        const geyimKartnameDiscount = geyimInput * (5 / 100);
        const geyimLeoDiscount = geyimInput * leoRate;
        const geyimUcardDiscount = geyimInput * (1 / 100);
        const geyimbolkartDiscoun = geyimInput * bolkartRate;
        const geyimailebascisiRateDiscoun = geyimInput * (1 / 100)
        const geyimmacəracıRateDiscoun = geyimInput * (5 / 100)
        const geyimromantikRateDiscoun = geyimInput * romantikRate
        const geyimgencRateDiscoun = geyimInput * gencRate
        const geyimkapitalistRateDiscoun = geyimInput * kapitalistRate
        const geyimxalqkartRateDiscoun = geyimInput * xalqkartRate
        const geyimneokartRateDiscoun = geyimInput * (2 / 100)
        const geyimakartRateDiscoun = geyimInput * (1 / 100)
        const geyimbirkartRateDiscoun = geyimInput * birkartRate

        const elektronikaKartnameDiscount = elektronikaInput * (3 / 100);
        const elektronikaLeoDiscount = elektronikaInput * leoRate;
        const elektronikaUcardDiscount = elektronikaInput * (1 / 100);
        const elektronikabolkartDiscount = elektronikaInput * bolkartRate;
        const elektronikaailebascisiRateDiscount = elektronikaInput * (1 / 100)
        const elektronikamacəracıRateDiscount = elektronikaInput * macəracıRate
        const elektronikaromantikRateDiscount = elektronikaInput * romantikRate
        const elektronikagencRateDiscount = elektronikaInput * gencRate
        const elektronikakapitalistRateDiscount = elektronikaInput * kapitalistRate
        const elektronikaxalqkartRateDiscount = elektronikaInput * xalqkartRate
        const elektronikaneokartRateDiscount = elektronikaInput * (2 / 100)
        const elektronikaakartRateDiscount = elektronikaInput * (1 / 100)
        const elektronikabirkartRateDiscount = elektronikaInput * birkartRate

        const sigortaKartnameDiscount = sigortaInput * (2 / 100);
        const sigortaLeoDiscount = sigortaInput * leoRate;
        const sigortaUcardDiscount = sigortaInput * (1 / 100);
        const sigortabolkartDiscoun = sigortaInput * bolkartRate;
        const sigortaailebascisiRateDiscoun = sigortaInput * (1 / 100)
        const sigortamacəracıRateDiscoun = sigortaInput * macəracıRate
        const sigortaromantikRateDiscoun = sigortaInput * romantikRate
        const sigortagencRateDiscoun = sigortaInput * gencRate
        const sigortakapitalistRateDiscoun = sigortaInput * kapitalistRate
        const sigortaxalqkartRateDiscoun = sigortaInput * xalqkartRate
        const sigortaneokartRateDiscoun = sigortaInput * (2 / 100)
        const sigortaakartRateDiscoun = sigortaInput * (1 / 100)
        const sigortabirkartRateDiscoun = sigortaInput * birkartRate

        const catdirilmaKartnameDiscount = catdirilmaInput * (5 / 100);
        const catdirilmaLeoDiscount = catdirilmaInput * leoRate;
        const catdirilmaUcardDiscount = catdirilmaInput * (1 / 100);
        const catdirilmabolkartDiscoun = catdirilmaInput * bolkartRate;
        const catdirilmaailebascisiRateDiscount = catdirilmaInput * (1 / 100)
        const catdirilmamacəracıRateDiscount = catdirilmaInput * macəracıRate
        const catdirilmaromantikRateDiscount = catdirilmaInput * romantikRate
        const catdirilmagencRateDiscount = catdirilmaInput * gencRate
        const catdirilmakapitalistRateDiscount = catdirilmaInput * kapitalistRate
        const catdirilmaxalqkartRateDiscount = catdirilmaInput * xalqkartRate
        const catdirilmaneokartRateDiscount = catdirilmaInput * (2 / 100)
        const catdirilmakartRateDiscount = catdirilmaInput * (1 / 100)
        const catdirilmabirkartRateDiscount = catdirilmaInput * birkartRate

        const evheyvanlariKartnameDiscount = evheyvanlariInput * (2 / 100);
        const evheyvanlariLeoDiscount = evheyvanlariInput * leoRate;
        const evheyvanlariUcardDiscount = evheyvanlariInput * (1 / 100);
        const evheyvanlaribolkartDiscount = evheyvanlariInput * bolkartRate;
        const evheyvanlariaailebascisiRateDiscount = evheyvanlariInput * (1 / 100)
        const evheyvanlarimacəracıRateDiscount = evheyvanlariInput * macəracıRate
        const evheyvanlariromantikRateDiscount = evheyvanlariInput * romantikRate
        const evheyvanlarigencRateDiscount = evheyvanlariInput * gencRate
        const evheyvanlarikapitalistRateDiscount = evheyvanlariInput * kapitalistRate
        const evheyvanlarixalqkartRateDiscount = evheyvanlariInput * xalqkartRate
        const evheyvanlarineokartRateDiscount = evheyvanlariInput * (2 / 100)
        const evheyvanlarikartRateDiscount = evheyvanlariInput * (1 / 100)
        const evheyvanlaribirkartRateDiscount = evheyvanlariInput * birkartRate

        const aptekKartnameDiscount = aptekInput * (2 / 100);
        const aptekLeoDiscount = aptekInput * leoRate;
        const aptekUcardDiscount = aptekInput * (1 / 100);
        const aptekbolkartDiscount = aptekInput * bolkartRate;
        const aptekailebascisiRateDiscount = aptekInput * (5 / 100)
        const aptekmacəracıRateDiscount = aptekInput * macəracıRate
        const aptekromantikRateDiscount = aptekInput * romantikRate
        const aptekgencRateDiscount = aptekInput * gencRate
        const aptekkapitalistRateDiscount = aptekInput * kapitalistRate
        const aptekxalqkartRateDiscount = aptekInput * xalqkartRate
        const aptekneokartRateDiscount = aptekInput * (2 / 100)
        const aptekakartRateDiscount = aptekInput * (5 / 100)
        const aptekbirkartRateDiscount = aptekInput * birkartRate

        const klinikaKartnameDiscount = klinikaInput * (2 / 100);
        const klinikaLeoDiscount = klinikaInput * leoRate;
        const klinikaUcardDiscount = klinikaInput * (1 / 100);
        const klinikabolkartDiscount = klinikaInput * bolkartRate;
        const klinikaailebascisiRateDiscount = klinikaInput * (5 / 100)
        const klinikamacəracıRateDiscount = klinikaInput * macəracıRate
        const klinikaromantikRateDiscount = klinikaInput * romantikRate
        const klinikagencRateDiscount = klinikaInput * gencRate
        const klinikakapitalistRateDiscount = klinikaInput * kapitalistRate
        const klinikaxalqkartRateDiscount = klinikaInput * xalqkartRate
        const klinikaneokartRateDiscount = klinikaInput * (2 / 100)
        const klinikaakartRateDiscount = klinikaInput * (1 / 100)
        const klinikabirkartRateDiscount = klinikaInput * birkartRate
        

        const aviabiletKartnameDiscount = aviabiletInput * (2 / 100);
        const aviabiletLeoDiscount = aviabiletInput * leoRate;
        const aviabiletUcardDiscount = aviabiletInput * (1 / 100);
        const aviabiletbolkartDiscount = aviabiletInput * bolkartRate;
        const aviabiletailebascisiRateDiscount = aviabiletInput * (1 / 100)
        const aviabiletmacəracıRateDiscount = aviabiletInput * (3 / 100)
        const aviabiletromantikRateDiscount = aviabiletInput * romantikRate
        const aviabiletgencRateDiscount = aviabiletInput * gencRate
        const aviabiletkapitalistRateDiscount = aviabiletInput * kapitalistRate
        const aviabiletxalqkartRateDiscount = aviabiletInput * xalqkartRate
        const aviabiletneokartRateDiscount = aviabiletInput * (2 / 100)
        const aviabiletakartRateDiscount = aviabiletInput * (1 / 100)
        const aviabiletbirkartRateDiscount = aviabiletInput * birkartRate

        const hotelKartnameDiscount = hotelInput * kartnameRate;
        const hotelLeoDiscount = hotelInput * leoRate;
        const hotelUcardDiscount = hotelInput * (1 / 100);
        const hotelbolkartDiscount = hotelInput * bolkartRate;
        const hotelailebascisiRateDiscount = hotelInput * (1 / 100)
        const hotelmacəracıRateDiscount = hotelInput * macəracıRate
        const hotelromantikRateDiscount = hotelInput * romantikRate
        const hotelgencRateDiscount = hotelInput * gencRate
        const hotelkapitalistRateDiscount = hotelInput * kapitalistRate
        const hotelxalqkartRateDiscount = hotelInput * xalqkartRate
        const hotelneokartRateDiscount = hotelInput * (2 / 100)
        const hotelakartRateDiscount = hotelInput * (1 / 100)
        const hotelbirkartRateDiscount = hotelInput * birkartRate


        const eylenceKartnameDiscount = eylenceInput * (2 / 100);
        const eylenceLeoDiscount = eylenceInput * leoRate;
        const eylenceUcardDiscount = eylenceInput * (1 / 100);
        const eylencebolkartDiscount = eylenceInput * bolkartRate;
        const eylenceailebascisiRateDiscount = eylenceInput * (1 / 100)
        const eylencemacəracıRateDiscount = eylenceInput * macəracıRate
        const eylenceromantikRateDiscount = eylenceInput * romantikRate
        const eylencegencRateDiscount = eylenceInput * gencRate
        const eylencekapitalistRateDiscount = eylenceInput * kapitalistRate
        const eylencexalqkartRateDiscount = eylenceInput * xalqkartRate
        const eylenceneokartRateDiscount = eylenceInput * (2 / 100)
        const eylenceakartRateDiscount = eylenceInput * (1 / 100)
        const eylencebirkartRateDiscount = eylenceInput * birkartRate


        const gulmagazasiKartnameDiscount = gulmagazasiInput * (2 / 100);
        const gulmagazasiLeoDiscount = gulmagazasiInput * leoRate;
        const gulmagazasiUcardDiscount = gulmagazasiInput * (1 / 100);
        const gulmagazasibolkartDiscount = gulmagazasiInput * bolkartRate;
        const gulmagazasiailebascisiRateDiscount = gulmagazasiInput * (1 / 100)
        const gulmagazasimacəracıRateDiscount = gulmagazasiInput * macəracıRate
        const gulmagazasiromantikRateDiscount = gulmagazasiInput * romantikRate
        const gulmagazasigencRateDiscount = gulmagazasiInput * gencRate
        const gulmagazasikapitalistRateDiscount = gulmagazasiInput * kapitalistRate
        const gulmagazasixalqkartRateDiscount = gulmagazasiInput * xalqkartRate
        const gulmagazasineokartRateDiscount = gulmagazasiInput * (2 / 100)
        const gulmagazasiakartRateDiscount = gulmagazasiInput * (1 / 100)
        const gulmagazasibirkartRateDiscount = gulmagazasiInput * birkartRate


        const parfumeriyaKartnameDiscount = parfumeriyaInput * (2 / 100);
        const parfumeriyaLeoDiscount = parfumeriyaInput * leoRate;
        const parfumeriyaUcardDiscount = parfumeriyaInput * (1 / 100);
        const parfumeriyabolkartDiscount = parfumeriyaInput * bolkartRate;
        const parfumeriyaailebascisiRateDiscount = parfumeriyaInput * (1 / 100)
        const parfumeriyamacəracıRateDiscount = parfumeriyaInput * macəracıRate
        const parfumeriyaromantikRateDiscount = parfumeriyaInput * romantikRate
        const parfumeriyagencRateDiscount = parfumeriyaInput * gencRate
        const parfumeriyakapitalistRateDiscount = parfumeriyaInput * kapitalistRate
        const parfumeriyaxalqkartRateDiscount = parfumeriyaInput * xalqkartRate
        const parfumeriyaneokartRateDiscount = parfumeriyaInput * (2 / 100)
        const parfumeriyaakartRateDiscount = parfumeriyaInput * (1 / 100)
        const parfumeriyabirkartRateDiscount = parfumeriyaInput * birkartRate


        const kitavvedefterxanaKartnameDiscount = kitavvedefterxanaInput * (2 / 100);
        const kitavvedefterxanaLeoDiscount = kitavvedefterxanaInput * leoRate;
        const kitavvedefterxanaUcardDiscount = kitavvedefterxanaInput * (1 / 100);  
        const kitavvedefterxanabolkartDiscount = kitavvedefterxanaInput * bolkartRate;
        const kitavvedefterxanaailebascisiRateDiscount = kitavvedefterxanaInput * (1 / 100)
        const kitavvedefterxanamacəracıRateDiscount = kitavvedefterxanaInput * macəracıRate
        const kitavvedefterxanaromantikRateDiscount = kitavvedefterxanaInput * romantikRate
        const kitavvedefterxanagencRateDiscount = kitavvedefterxanaInput * gencRate
        const kitavvedefterxanakapitalistRateDiscount = kitavvedefterxanaInput * kapitalistRate
        const kitavvedefterxanaxalqkartRateDiscount = kitavvedefterxanaInput * xalqkartRate
        const kitavvedefterxananeokartRateDiscount = kitavvedefterxanaInput * (2 / 100)
        const kitavvedefterxanaakartRateDiscount = kitavvedefterxanaInput * (1 / 100)
        const kitavvedefterxanairkartRateDiscount = kitavvedefterxanaInput * birkartRate


        const oyunKartnameDiscount = oyunInput * (2 / 100);
        const oyunLeoDiscount = oyunInput * leoRate;
        const oyunUcardDiscount = oyunInput * (1 / 100);  
        const oyunbolkartDiscount = oyunInput * bolkartRate;
        const oyunailebascisiRateDiscount = oyunInput * (1 / 100)
        const oyunmacəracıRateDiscount = oyunInput * macəracıRate
        const oyunromantikRateDiscount = oyunInput * romantikRate
        const oyungencRateDiscount = oyunInput * gencRate
        const oyunkapitalistRateDiscount = oyunInput * kapitalistRate
        const oyunxalqkartRateDiscount = oyunInput * xalqkartRate
        const oyunneokartRateDiscount = oyunInput * (2 / 100)
        const oyunakartRateDiscount = oyunInput * (1 / 100)
        const oyunbirkartRateDiscount = oyunInput * birkartRate



        const avtoehtiyyatKartnameDiscount = avtoehtiyyatInput * (2 / 100);
        const avtoehtiyyatLeoDiscount = avtoehtiyyatInput * leoRate;
        const avtoehtiyyatUcardDiscount = avtoehtiyyatInput * (1 / 100); 
        const avtoehtiyyatbolkartDiscount = avtoehtiyyatInput * bolkartRate;
        const avtoehtiyyatailebascisiRateDiscount = avtoehtiyyatInput * (1 / 100)
        const avtoehtiyyatmacəracıRateDiscount = avtoehtiyyatInput * macəracıRate
        const avtoehtiyyatromantikRateDiscount = avtoehtiyyatInput * romantikRate
        const avtoehtiyyatgencRateDiscount = avtoehtiyyatInput * gencRate
        const avtoehtiyyatkapitalistRateDiscount = avtoehtiyyatInput * kapitalistRate
        const avtoehtiyyatxalqkartRateDiscount = avtoehtiyyatInput * xalqkartRate
        const avtoehtiyyatneokartRateDiscount = avtoehtiyyatInput * (2 / 100)
        const avtoehtiyyatakartRateDiscount = avtoehtiyyatInput * (1 / 100)
        const avtoehtiyyatbirkartRateDiscount = avtoehtiyyatInput * birkartRate


        const demiryollariKartnameDiscount = demiryollariInput * (2 / 100);
        const demiryollariLeoDiscount = demiryollariInput * leoRate;
        const demiryollariUcardDiscount = demiryollariInput * (1 / 100); 
        const demiryollaribolkartDiscount = demiryollariInput * bolkartRate;
        const demiryollariailebascisiRateDiscount = demiryollariInput * (1 / 100)
        const demiryollarimacəracıRateDiscount = demiryollariInput * macəracıRate
        const demiryollariromantikRateDiscount = demiryollariInput * romantikRate
        const demiryollarigencRateDiscount = demiryollariInput * gencRate
        const demiryollarikapitalistRateDiscount = demiryollariInput * kapitalistRate
        const demiryollarixalqkartRateDiscount = demiryollariInput * xalqkartRate
        const demiryollarineokartRateDiscount = demiryollariInput * (2 / 100)
        const demiryollariakartRateDiscount = demiryollariInput * (1 / 100)
        const demiryollaribirkartRateDiscount = demiryollariInput * birkartRate

        
        const onlineKartnameDiscount = onlineInput * (2 / 100);
        const onlineLeoDiscount = onlineInput * leoRate;
        const onlineUcardDiscount = onlineInput * (5 / 100); 
        const onlinebolkartDiscount = onlineInput * bolkartRate;
        const onlineailebascisiRateDiscount = onlineInput * (1 / 100)
        const onlinemacəracıRateDiscount = onlineInput * macəracıRate
        const onlineromantikRateDiscount = onlineInput * romantikRate
        const onlinegencRateDiscount = onlineInput * gencRate
        const onlinekapitalistRateDiscount = onlineInput * kapitalistRate
        const onlinexalqkartRateDiscount = onlineInput * xalqkartRate
        const onlineneokartRateDiscount = onlineInput * (2 / 100)
        const onlineakartRateDiscount = onlineInput * (1 / 100)
        const onlinebirkartRateDiscount = onlineInput * birkartRate


        const digerKartnameDiscount = digerInput * (2 / 100);
        const digerLeoDiscount = digerInput * leoRate;
        const digerUcardDiscount = digerInput * (1 / 100); 
        const digerbolkartDiscount = digerInput * bolkartRate;
        const digerailebascisiRateDiscount = digerInput * (1 / 100)
        const digermacəracıRateDiscount = digerInput * macəracıRate
        const digerromantikRateDiscount = digerInput * romantikRate
        const digergencRateDiscount = digerInput * gencRate
        const digerkapitalistRateDiscount = digerInput * kapitalistRate
        const digerxalqkartRateDiscount = digerInput * xalqkartRate
        const digerneokartRateDiscount = digerInput * (2 / 100)
        const digerakartRateDiscount = digerInput * (1 / 100)
        const digerbirkartRateDiscount = digerInput * birkartRate

        
        const totalKartname = kartnameDiscount + restoranKartnameDiscount + taxiKartnameDiscount + kinoKartnameDiscount + gozellikKartnameDiscount + ydmKartnameDiscount + ictimaiKartnameDiscount + geyimKartnameDiscount + elektronikaKartnameDiscount + sigortaKartnameDiscount + catdirilmaKartnameDiscount + evheyvanlariKartnameDiscount + aptekKartnameDiscount + klinikaKartnameDiscount + aviabiletKartnameDiscount + hotelKartnameDiscount + eylenceKartnameDiscount + gulmagazasiKartnameDiscount + parfumeriyaKartnameDiscount + kitavvedefterxanaKartnameDiscount + oyunKartnameDiscount + avtoehtiyyatKartnameDiscount + demiryollariKartnameDiscount + onlineKartnameDiscount + digerKartnameDiscount;
        const totalLeo = leoDiscount + restoranLeoDiscount + taxiLeoDiscount + kinoLeoDiscount + gozellikLeoDiscount + ydmLeoDiscount + ictimaiLeoDiscount + geyimLeoDiscount + elektronikaLeoDiscount + sigortaLeoDiscount + catdirilmaLeoDiscount + evheyvanlariLeoDiscount + aptekLeoDiscount + klinikaLeoDiscount + aviabiletLeoDiscount + hotelLeoDiscount + eylenceLeoDiscount + gulmagazasiLeoDiscount + parfumeriyaLeoDiscount + kitavvedefterxanaLeoDiscount + oyunLeoDiscount + avtoehtiyyatLeoDiscount + demiryollariLeoDiscount + onlineLeoDiscount + digerLeoDiscount; 
        const totalUcard = ucardDiscount + restoranUcardDiscount + taxiUcardDiscount + kinoUcardDiscount + gozellikUcardDiscount + ydmUcardDiscount + ictimaiUcardDiscount + geyimUcardDiscount + elektronikaUcardDiscount + sigortaUcardDiscount + catdirilmaUcardDiscount + evheyvanlariUcardDiscount + aptekUcardDiscount + klinikaUcardDiscount + aviabiletUcardDiscount + hotelUcardDiscount + eylenceUcardDiscount + gulmagazasiUcardDiscount + parfumeriyaUcardDiscount + kitavvedefterxanaUcardDiscount + oyunUcardDiscount + avtoehtiyyatUcardDiscount + demiryollariUcardDiscount + onlineUcardDiscount + digerUcardDiscount;
        const totalBolkart = bolkartDiscount + restoranbolkartDiscountt + taxibolkartDiscounttt + kinobolkartDiscoun + gozellikbolkartDiscount + ydmbolkartDiscoun + ictimaibolkartDiscount + geyimbolkartDiscoun + elektronikabolkartDiscount + sigortabolkartDiscoun + catdirilmabolkartDiscoun + evheyvanlaribolkartDiscount + aptekbolkartDiscount + klinikabolkartDiscount + aviabiletbolkartDiscount + hotelbolkartDiscount + eylencebolkartDiscount + gulmagazasibolkartDiscount + parfumeriyabolkartDiscount + kitavvedefterxanabolkartDiscount + oyunbolkartDiscount + avtoehtiyyatbolkartDiscount + demiryollaribolkartDiscount + onlinebolkartDiscount + digerbolkartDiscount;
        const totalAilebascisi = ailebascisiRateDiscount + restoranailebascisiRateDiscountt + taxiailebascisiRateDiscount + kinoailebascisiRateDiscoun + gozellikailebascisiRateDiscount + ydmailebascisiRateDiscoun + ictimaiailebascisiRateDiscount + geyimailebascisiRateDiscoun + elektronikaailebascisiRateDiscount + sigortaailebascisiRateDiscoun + catdirilmaailebascisiRateDiscount + evheyvanlariaailebascisiRateDiscount + aptekailebascisiRateDiscount + klinikaailebascisiRateDiscount + aviabiletailebascisiRateDiscount + hotelailebascisiRateDiscount + eylenceailebascisiRateDiscount + gulmagazasiailebascisiRateDiscount + parfumeriyaailebascisiRateDiscount + kitavvedefterxanaailebascisiRateDiscount + oyunailebascisiRateDiscount + avtoehtiyyatailebascisiRateDiscount + demiryollariailebascisiRateDiscount + onlineailebascisiRateDiscount + digerailebascisiRateDiscount;
        const totalMaceraci = macəracıRateDiscount + restoranmacəracıRateDiscountt + taximacəracıRateDiscount + kinomacəracıRateDiscoun + gozellikmacəracıRateDiscount + ydmmacəracıRateDiscoun + ictimaimacəracıRateDiscount + geyimmacəracıRateDiscoun + elektronikamacəracıRateDiscount + sigortamacəracıRateDiscoun + catdirilmamacəracıRateDiscount + evheyvanlarimacəracıRateDiscount + aptekmacəracıRateDiscount + klinikamacəracıRateDiscount + aviabiletmacəracıRateDiscount + hotelmacəracıRateDiscount + eylencemacəracıRateDiscount + gulmagazasimacəracıRateDiscount + parfumeriyamacəracıRateDiscount + kitavvedefterxanamacəracıRateDiscount + oyunmacəracıRateDiscount + avtoehtiyyatmacəracıRateDiscount + demiryollarimacəracıRateDiscount + onlinemacəracıRateDiscount + digermacəracıRateDiscount;
        const totalRomantik = romantikRateDiscount + restoranromantikRateDiscountt + taxiromantikRateDiscount + kinoromantikRateDiscoun + gozellikromantikRateDiscount + ydmromantikRateDiscoun + ictimairomantikRateDiscount + geyimromantikRateDiscoun + elektronikaromantikRateDiscount + sigortaromantikRateDiscoun + catdirilmaromantikRateDiscount + evheyvanlariromantikRateDiscount + aptekromantikRateDiscount + klinikaromantikRateDiscount + aviabiletromantikRateDiscount + hotelromantikRateDiscount + eylenceromantikRateDiscount + gulmagazasiromantikRateDiscount + parfumeriyaromantikRateDiscount + kitavvedefterxanaromantikRateDiscount + oyunromantikRateDiscount + avtoehtiyyatromantikRateDiscount + demiryollariromantikRateDiscount + onlineromantikRateDiscount + digerromantikRateDiscount;
        const totalGenc = gencRateDiscount + restorangencRateDiscountt + taxigencRateDiscount + kinogencRateDiscoun + gozellikgencRateDiscount + ydmgencRateDiscoun + ictimaigencRateDiscount + geyimgencRateDiscoun + elektronikagencRateDiscount + sigortagencRateDiscoun + catdirilmagencRateDiscount + evheyvanlarigencRateDiscount + aptekgencRateDiscount + klinikagencRateDiscount + aviabiletgencRateDiscount + hotelgencRateDiscount + eylencegencRateDiscount + gulmagazasigencRateDiscount + parfumeriyagencRateDiscount + kitavvedefterxanagencRateDiscount + oyungencRateDiscount + avtoehtiyyatgencRateDiscount + demiryollarigencRateDiscount + onlinegencRateDiscount + digergencRateDiscount;
        const totalKapitalist = kapitalistRateDiscount + restorankapitalistRateDiscountt + taxikapitalistRateDiscount  + kinokapitalistRateDiscoun + gozellikkapitalistRateDiscount + ydmkapitalistRateDiscoun + ictimaikapitalistRateDiscount + geyimkapitalistRateDiscoun + elektronikakapitalistRateDiscount + sigortakapitalistRateDiscoun + catdirilmakapitalistRateDiscount + evheyvanlarikapitalistRateDiscount + aptekkapitalistRateDiscount + klinikakapitalistRateDiscount + aviabiletkapitalistRateDiscount + hotelkapitalistRateDiscount + eylencekapitalistRateDiscount + gulmagazasikapitalistRateDiscount + parfumeriyakapitalistRateDiscount + kitavvedefterxanakapitalistRateDiscount + oyunkapitalistRateDiscount + avtoehtiyyatkapitalistRateDiscount + demiryollarikapitalistRateDiscount + onlinekapitalistRateDiscount + digerkapitalistRateDiscount;
        const totalXalqkart = xalqkartRateDiscount + restoranxalqkartRateDiscountt + taxixalqkartRateDiscount + kinoxalqkartRateDiscoun + gozellikxalqkartRateDiscount + ydmxalqkartRateDiscoun + ictimaixalqkartRateDiscount + geyimxalqkartRateDiscoun + elektronikaxalqkartRateDiscount + sigortaxalqkartRateDiscoun + catdirilmaxalqkartRateDiscount + evheyvanlarixalqkartRateDiscount + aptekxalqkartRateDiscount + klinikaxalqkartRateDiscount + aviabiletxalqkartRateDiscount + hotelxalqkartRateDiscount + eylencexalqkartRateDiscount + gulmagazasixalqkartRateDiscount + parfumeriyaxalqkartRateDiscount + kitavvedefterxanaxalqkartRateDiscount + oyunxalqkartRateDiscount + avtoehtiyyatxalqkartRateDiscount + demiryollarixalqkartRateDiscount + onlinexalqkartRateDiscount + digerxalqkartRateDiscount;
        const totalNeokart = neokartRate + restoranneokartRateDiscountt + taxineokartRateDiscount + kinoneokartRateDiscoun + gozellikneokartRateDiscount + ydmneokartRateDiscoun + ictimaineokartRateDiscount + geyimneokartRateDiscoun + elektronikaneokartRateDiscount + sigortaneokartRateDiscoun + catdirilmaneokartRateDiscount + evheyvanlarineokartRateDiscount + aptekneokartRateDiscount + klinikaneokartRateDiscount + aviabiletneokartRateDiscount + hotelneokartRateDiscount + eylenceneokartRateDiscount + gulmagazasineokartRateDiscount + parfumeriyaneokartRateDiscount + kitavvedefterxananeokartRateDiscount + oyunneokartRateDiscount + avtoehtiyyatneokartRateDiscount + demiryollarineokartRateDiscount + onlineneokartRateDiscount + digerneokartRateDiscount;
        const totalAkart = akartRateDiscount + restoranakartRateDiscountt + taxiakartRateDiscount + kinoakartRateDiscoun + gozellikakartRateDiscount + ydmakartRateDiscoun + ictimaiakartRateDiscount + geyimakartRateDiscoun + elektronikaakartRateDiscount + sigortaakartRateDiscoun + catdirilmakartRateDiscount + evheyvanlarikartRateDiscount + aptekakartRateDiscount + klinikaakartRateDiscount + aviabiletakartRateDiscount + hotelakartRateDiscount + eylenceakartRateDiscount + gulmagazasiakartRateDiscount + parfumeriyaakartRateDiscount + kitavvedefterxanaakartRateDiscount + oyunakartRateDiscount + avtoehtiyyatakartRateDiscount + demiryollariakartRateDiscount + onlineakartRateDiscount + digerakartRateDiscount;
        const totalBirkart = birkartRateDiscount + restoranbirkartRateDiscountt + taxibirkartRateDiscount + kinobirkartRateDiscoun + gozellikbirkartRateDiscount + ydmbirkartRateDiscoun + ictimaibirkartRateDiscount + geyimbirkartRateDiscoun + elektronikabirkartRateDiscount + sigortabirkartRateDiscoun + catdirilmabirkartRateDiscount + evheyvanlaribirkartRateDiscount + aptekbirkartRateDiscount + klinikabirkartRateDiscount + aviabiletbirkartRateDiscount + hotelbirkartRateDiscount + eylencebirkartRateDiscount + gulmagazasibirkartRateDiscount + parfumeriyabirkartRateDiscount + kitavvedefterxanairkartRateDiscount + oyunbirkartRateDiscount + avtoehtiyyatbirkartRateDiscount + demiryollaribirkartRateDiscount + onlinebirkartRateDiscount + digerbirkartRateDiscount;

        const resultsElement = document.getElementById('results');
        resultsElement.innerHTML = `

        <div class="container">
    <div class="row">
        <div class="col-lg-12">
            <div class="service-title-one">
                <h1 style="margin-top: 60px; font-weight: 600; color: #333282;">Sizin kartlar üzrə cashback məbləğləriniz</h1>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4">
            <div class="container-33">
                <div class="card">
                <div class="circle" style="background: green !important;">
                    <h2>${totalKartname.toFixed(2)}</h2>
                </div>
                <div class="content">
                    <a style="background: green !important;" href="#">Kartname</a>
                </div>
            </div>

            <div class="card">
                <div class="circle"  style="background: #000 !important;">
                    <h2>${totalLeo.toFixed(2)}</h2>
                </div>
                <div class="content">
                    <a  style="background: #000 !important;" href="#">Leo</a>
                </div>
            </div>

            <div class="card">
                <div class="circle" style="background: orangered !important;">
                    <h2>${totalUcard.toFixed(2)}</h2>
                </div>
                <div class="content">
                    <a style="background: orangered !important;" href="#">Ucard</a>
                </div>
            </div>

            <div class="card">
                <div class="circle"  style="background: #65767F !important;">
                    <h2>${totalBolkart.toFixed(2)}</h2>
                </div>
                <div class="content">
                    <a  style="background: #65767F !important;" href="#">Bolkart</a>
                </div>
            </div>

            <div class="card">
                <div class="circle"  style="background: #1B7DBD !important;">
                    <h2>${totalAilebascisi.toFixed(2)}</h2>
                </div>
                <div class="content">
                    <a  style="background: #1B7DBD !important;" href="#">ABB Ailə Başcısı</a>
                </div>
            </div>

            <div class="card">
                <div class="circle"  style="background: #6A85B5 !important;">
                    <h2>${totalMaceraci.toFixed(2)}</h2>
                </div>
                <div class="content">
                    <a  style="background: #6A85B5 !important;" href="#">ABB Macəraçı</a>
                </div>
            </div>

            <div class="card">
                <div class="circle"  style="background: #6E2C90 !important;">
                    <h2>${totalRomantik.toFixed(2)}</h2>
                </div>
                <div class="content">
                    <a  style="background: #6E2C90 !important;" href="#">ABB Romantik</a>
                </div>
            </div>

            <div class="card">
                <div class="circle"  style="background: #8DD1D2 !important;">
                    <h2>${totalGenc.toFixed(2)}</h2>
                </div>
                <div class="content">
                    <a  style="background: #8DD1D2 !important;" href="#">ABB Gənc</a>
                </div>
            </div>

            <div class="card">
                <div class="circle"  style="background: #867BE6 !important;">
                    <h2>${totalKapitalist.toFixed(2)}</h2>
                </div>
                <div class="content">
                    <a  style="background: #867BE6 !important;" href="#">ABB Kapitalist</a>
                </div>
            </div>

            <div class="card">
                <div class="circle"  style="background: #55595A !important;">
                    <h2>${totalXalqkart.toFixed(2)}</h2>
                </div>
                <div class="content">
                    <a  style="background: #55595A !important;" href="#">XalqKart</a>
                </div>
            </div>

            <div class="card">
                <div class="circle"  style="background: #801FC0 !important;">
                    <h2>${totalNeokart.toFixed(2)}</h2>
                </div>
                <div class="content">
                    <a  style="background: #801FC0 !important;" href="#">NeoKart</a>
                </div>
            </div>

            <div class="card">
                <div class="circle"  style="background: rgb(107,70,150);
background: linear-gradient(180deg, rgba(107,70,150,1) 28%, rgba(32,155,203,1) 85%);">
                    <h2>${totalAkart.toFixed(2)}</h2>
                </div>
                <div class="content">
                    <a  style="background: #6b4696 !important;" href="#">Akart</a>
                </div>
            </div>

            <div class="card">
                <div class="circle"  style="background: #EF3149 !important;">
                    <h2>${totalBirkart.toFixed(2)}</h2>
                </div>
                <div class="content">
                    <a  style="background: #EF3149 !important;" href="#">Birkart</a>
                </div>
            </div>

            </div>
        </div>
    </div>
    </div>
        `;
    }
}