'use strict;'

var sliderPrev = '<a class="carousel-control-prev" href="#" role="button"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a>',
    sliderNext = '<a class="carousel-control-next" href="#" role="button"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>';



$(document).ready(function(){
    $('.close').click(function(e){
        e.preventDefault();
        $('.modal, .overlay').hide();
    });
    $('#category').select2({
        minimumResultsForSearch: -1
    });
    $('#support-carousel').slick({
        dots: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: sliderPrev,
        nextArrow: sliderNext,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows: false,
              dots: true
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
              dots: true
            }
          },
        ]
    });
    $('#greetings-carousel').slick({
        dots: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: sliderPrev,
        nextArrow: sliderNext,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows: false,
              dots: true
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true
            }
          },
        ]
    });
    $('.programm-header').click(function(e){
        if ($(this).hasClass('active')) {
            $(this).find('i').removeClass('up').addClass('down')
            $(this).removeClass('active').next().slideUp("slow");
        } else {
            $(this).find('i').removeClass('down').addClass('up');
            $(this).addClass('active').next().slideDown("slow");
        }
    });
    $(".carousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
        $(this).one("touchmove", function(event){
            var xMove = event.originalEvent.touches[0].pageX;
            if( Math.floor(xClick - xMove) > 5 ){
                $(this).carousel('next');
            }
            else if( Math.floor(xClick - xMove) < -5 ){
                $(this).carousel('prev');
            }
        });
        $(".carousel").on("touchend", function(){
                $(this).off("touchmove");
        });
    });
    $('#greetModal').on('show.bs.modal', function (event) {
        var text = $(event.relatedTarget).data('text');
        $('.greet-img').prop('src', 'img/greetings-1-ph-'+text+'.jpg');
        switch (text) {
            case 1:
                $('.greet-text').append('<h2>Уважаемые коллеги!</h2><p>От лица организаторов конференции «Скорость, безопасность, комфорт. Опыт десятилетия», Государственной компании «Автодор», и себя лично приветствую всех участников и гостей мероприятия!</p><p>Одна из основных целей, которую Государственная компания «Автодор» ставит перед собой при строительстве скоростных автомагистралей, – это достижение высоких показателей безопасности дорожного движения. Дорога должна быть безопасной не только за счет качественного покрытия, барьерного ограждения, инновационного освещения. Грамотная организация движения и внедрение элементов интеллектуальных транспортных систем должны повышать пропускную способность автодорог и помогать водителям чувствовать себя увереннее.</p><p>За десять лет Автодор построил и реконструировал более полутора тысяч километров современных скоростных автомагистралей и реализовал целый ряд общественно значимых проектов. Я убежден, что в ходе достижения поставленных амбициозных целей заданный сегодня темп развития будет постоянно увеличиваться, число проектов и скорость их реализации будут расти.</p><p>В рамках конференции мы представим наши новые проекты, обсудим с ведущими экспертами отрасли планы и перспективы их реализации. Я уверен, что участники смогут предложить инновационные решения, которые позволят нам сделать дороги комфортнее и безопаснее!</p><h2>В.П. Петушенко</h2><p>Председатель правления Государственной компании «Автодор»</p>');
                break;
            case 2: 
                $('.greet-text').append('<h2>Дорогие друзья!</h2><p>Рад приветствовать участников, гостей и организаторов конференции «Скорость, безопасность, комфорт. Опыт десятилетия»! Уверен, что мероприятие станет площадкой эффективной работы, позволит обменяться опытом и выявить наиболее перспективные проекты в сфере дорожно-строительной отрасли - одной из самых динамично развивающихся отраслей российской экономики.</p><p>«Деловая Россия» взаимодействует с Государственной компанией «Автодор» на протяжении многих лет. Наше активное сотрудничество способствует привлечению бизнеса к созданию масштабных инфраструктурных проектов, от которых зависят темпы и качество экономического роста нашей страны. Уверен, что такое сотрудничество выгодно как предприятиям «Деловой России», так и Государственной компании.</p><p>Конференция «Скорость, безопасность, комфорт. Опыт десятилетия» способствует решению нашей главной задачи - налаживанию общения между бизнесом и властью и помощи обеим сторонам в создании современной разветвленной сети качественных скоростных и безопасных дорог, в основе которой будут лежать инновационные разработки и передовые достижения науки. Такие дороги, безусловно, станут толчком для развития всех регионов нашей страны.</p><p>Убежден, что результаты работы конференции непременно оправдают ожидания организаторов, участников и гостей! Желаю всем успешной, плодотворной работы!</p><h2>А.Е. Репик</h2><p>Президент «Деловой России»</p>');
                break;            
            case 3: 
                $('.greet-text').append('<p class="text-right">Участникам, организаторам <br/> и гостям конференции <br/> «Скорость, безопасность, комфорт.  <br/> Опыт десятилетия»</p><p>Уважаемые коллеги, от имени Общероссийской общественной организации малого и среднего предпринимательства «ОПОРА РОССИИ» приветствую на конференции. И, пользуясь случаем, поздравляю коллектив Государственной компании «Российские автомобильные дороги» с десятилетием.</p><p>«ОПОРА РОССИИ» на протяжении многих лет тесно взаимодействует с Автодором. В частности, мы ведем совместную работу над проектами по развитию и модернизации придорожной инфраструктуры и объектов дорожного сервиса. Наши совместные проекты служат ярким примером того, как частный бизнес и государство сообща развивают и инвестируют в развитие дорожного хозяйства.</p><p>Особо хочу отметить важность и открытость подобных мероприятий для предпринимателей, имеющих непосредственное отношение к дорожной отрасли.</p><p>Желаю всем участникам конференции конструктивного диалога и успешных деловых встреч!</p><h2>Александр Калинин</h2><p>Президент «ОПОРЫ РОССИИ»</p>');
                break;  
            case 4: 
                $('.greet-text').append('<p>От лица Главного управления по обеспечению безопасности дорожного движения МВД России и от себя лично рад приветствовать участников конференции «Скорость, безопасность, комфорт. Опыт десятилетия».</p><p>На протяжении 10 лет Государственная компания «Российские автомобильные дороги» и Госавтоинспекция активно сотрудничают. За это время предприняты серьезные шаги для создания участникам дорожного движения максимальной безопасности и комфорта при использовании автомобильных дорог, снижения рисков получения травм в результате дорожно-транспортных происшествий.</p><p>Президент России и Правительство Российской Федерации поставили перед нами серьезную цель по снижению смертности на дорогах. Полагаю, что предложения присутствующих здесь специалистов позволят подготовить новые решения для ее достижения.</p><p>Искренне желаю плодотворной работы по обмену мнениями и накопленным опытом, обсуждения наиболее эффективных методов и средств по созданию безопасного и бесперебойного дорожного движения.</p><h2>М.Ю. Черников</h2> <p>Начальник ГУОБДД МВД РФ</p>');
                break;                      
            case 5: 
                $('.greet-text').append('<h2>Уважаемые коллеги!</h2><p>От имени ООО «ОКСО» и от себя лично приветствую участников, гостей и организаторов конференции «Скорость, безопасность, комфорт. Опыт десятилетия!». С каждым годом вопросы безопасности на автомобильных дорогах становятся более актуальными. Реализация национального проекта «Безопасные и качественные дороги» будет способствовать повышению безопасности и возможна на основе комплексного подхода с учетом всех сопутствующих факторов. Понимая это, компания «ОКСО» предлагает современные, надежные, комплексные системы ограждений, способные успешно решать вопросы безопасности людей и сохранения популяции диких животных на объектах автомобильного транспорта. Имея за плечами богатый опыт в области разработки инновационных технических решений, мы успешно реализовываем свой потенциал на рынке России и ближнего зарубежья. Собственное производство, оснащенное новейшим оборудованием, команда высококвалифицированных специалистов, уникальные технологии - все это позволяет нам предлагать индивидуальные решения для каждого клиента.</p><p>Уверен, что площадка конференции «Скорость, безопасность, комфорт. Опыт десятилетия!» позволит обсудить ключевые вопросы развития автомобильных дорог, их совершенствования, а также обеспечения безопасности граждан и инфраструктуры автомобильного транспорта. </p><p>Желаю всем участникам конференции плодотворной работы, установления деловых контактов, взаимовыгодного сотрудничества и всего самого наилучшего!</p><h2>Ю.В. Данилов</h2><p>Генеральный директор ООО «ОКСО»</p>');
                break;            
            case 6: 
                $('.greet-text').append(' <p>От имени Общества с ограниченной ответственностью «ИРД Инжиниринг Проект» приветствую участников конференции «СКОРОСТЬ, БЕЗОПАСНОСТЬ, КОМФОРТ. ОПЫТ ДЕСЯТИЛЕТИЯ»</p><p>Мероприятие позволит обменяться опытом и выявить наиболее перспективные проекты в одной из самых динамично развивающихся отраслей российской экономики - сфере дорожного строительства.</p><p>Конференция может и должна способствовать решению такой задачи, как налаживание общения между бизнесом и властью, что в свою очередь должно поспособствовать дальнейшему развитию современной разветвленной сети качественных скоростных и безопасных дорог.</p><p>Безусловно, такая инфраструктурная стратегия, в числе прочего, будет способствовать развитию регионов.</p><p>Желаю всем успешной и плодотворной работы, а также - чтобы результаты непременно оправдали ожидания организаторов, участников и гостей!</p><h2>Лука Ромео</h2> <p>Генеральный директор ООО «ИРД Инжиниринг Проект»</p>');
                break;            
            case 7: 
                $('.greet-text').append('  <h2>Уважаемые коллеги!</h2> <p>АО «Союздорпроект» приветствует участников, гостей и организаторов конференции «Скорость, безопасность, комфорт. Опыт десятилетия».</p><p>Уже десять лет наш институт сотрудничает с Государственной компанией «Российские автомобильные дороги».</p><p>За плечами - реализация сложнейших, уникальных объектов, сотни километров автодорог, построенных по проектам Института.</p><p>Выступая заказчиком, Государственная компания «Автодор» всегда уделяла особое внимание вопросам безопасности автомобильных дорог, созданию удобного и комфортного придорожного сервиса.</p><p>Мы надеемся, что следующее десятилетие нашего сотрудничества будет отмечено чередой новых побед, решением амбициозных задач, даст неоценимый опыт.</p><p>Желаю всем участникам конференции, чтобы наша совместная работа стала фундаментом будущего надежного партнерства.</p><h2>А.Е. Еремин</h2> <p>Генеральный директор АО «Союздорпроект»</p>');
                break;   
            case 8: 
                $('.greet-text').append('  <p>Уважаемые организаторы, участники и гости конференции «Скорость, безопасность, комфорт. Опыт десятилетия», позвольте поприветствовать вас и поздравить с открытием мероприятия, посвященного концепции развития в России сети автомобильных дорог.</p><p>Актуальность данной темы продиктована географическим положением Российской Федерации, которое во многом предопределяет ее стратегию, политику и темпы развития. Укрепление экономики страны особенно зависит от наличия современных магистральных и скоростных дорог, а формирование международных транспортных коридоров способно стать своеобразным геополитическим мостом между странами Запада и Востока.</p><p>Россия имеет уникальное географическое положение, имеет выходы к морям, доступ к системе морской, воздушной, космической навигации и обладает особыми возможностями участия в международном транзите. Именно поэтому так важно создание сети конкурентоспособных транспортных коридоров на территории РФ. Справиться с задачей создания современной сети автомобильных дорог можно только с помощью передовых технологий, развития рынка инфокоммуникаций, цифровизацией транспорта, внедрения интеллектуальных транспортных систем и других инновационных аспектов дорожной деятельности.</p><p>Поэтому, уважаемые коллеги и друзья, позвольте пожелать всем нам плодотворной творческой работы не только в рамках данного мероприятия, но и в последующей трудовой деятельности, направленной на достижение поставленных целей по формированию на необъятной территории нашей Родины развитой сети безопасных и качественных автомобильных дорог.</p><h2>В.Б. Салтыков</h2> <p>Генеральный директор ООО «Смол-ДорНИИ-Проект»</p>');
                break; 
            case 9: 
                $('.greet-text').append('  <h2>Уважаемые коллеги!</h2><p>От имени Министерства транспорта и от себя лично приветствую всех участников, гостей и организаторов конференции «Скорость, безопасность, комфорт. Опыт десятилетия»! </p><p>Дорожная отрасль активно меняется в эпоху информационных технологий, цифровыми становятся экономика и вся наша жизнь.</p><p>На дорогах, которые строит и реконструирует Государственная компания «Автодор», внедряются новые технологии, включая элементы интеллектуальных транспортных систем. В итоге трассы начинают отвечать самым современным мировым требованиям к безопасности и комфорту.</p><p>На конференции вы обсудите оптимальные пути реализации перспективных инвестиционных проектов, ориентированных на нужды экономики и запросы общества.</p><p>Желаю всем участникам мероприятия конструктивных дискуссий и плодотворной работы!</p><h2>Е.И. Дитрих</h2> <p>Министр транспорта Российской Федерации</p>');
                break;        
        }
    });
    $('#greetModal').on('hide.bs.modal', function (event) {
        $('.greet-img').prop('src','');
        $('.greet-text').html('');
    });
    $('#partnersModal').on('show.bs.modal', function (event) {
        var text = $(event.relatedTarget).data('text');
        switch (text) {
            case 1: 
                $('.partners-text').append(' <div class="row partners-header"> <div class="col-12 col-md-3"> <img src="img/donaerodorstroy.png" srcset="img/donaerodorstroy@2x.png" alt="АО «Донаэродорстрой»" title="АО «Донаэродорстрой»"> </div><div class="col-12 col-md-9"> <h1>АО «Донаэродорстрой»</h1> </div></div><div class="row"> <div class="col-12"> <p>Акционерное общество «Донаэродорстрой» является крупнейшим дорожно-строительным объединением федерального масштаба.</p><p>Опыт деятельности - с 1956 года, сегодня предприятие входит в группу строительных компаний «ДОН».</p><p>Коллектив возводил ключевые магистрали и взлетно-посадочные полосы юга страны. За более чем 60 лет работы специалистами предприятия построены свыше 5000 км автотрасс и более 1400 тыс. м<sup>2</sup> покрытий для аэродромов.</p><p>С конца XX века сдано в эксплуатацию свыше 600 км автомобильных дорог, выполнены работы на объектах регионального и федерального значения в Ростовской, Волгоградской, Воронежской областях и Краснодарском крае.</p><p>Особый опыт получен в ходе реконструкции федеральной трассы М-4 «Дон», которая благодаря усилиям специалистов компании стала в Ростовской области полностью четырехполосной магистралью.</p><p>Были построены Восточный и Западный обходы Ростова-на-Дону, автомобильная дорога «Морозовск - Волгодонск» с мостовым переходом через Дон, трассы «Ростов-на-Дону - Азов» и «Подъезд к аэропорту Платов».</p><p>«Донаэродорстрой» принимал участие в реконструкции участков федеральных автомагистралей Р-217 «Кавказ» (М-29), Р-22 «Каспий» (М-6), А-280 (М-23), А-260 (М-21), в крупнейших инфраструктурных проектах, связанных проведением Олимпиады-2014 в Сочи и Чемпионата мира по футболу ФИФА - 2018.</p><p>Компанию отличают развитая инфраструктура и оснащенность новейшей техникой, применение в работе передовых технологий и инноваций, эффективное выполнение договоренностей при высоких темпах и качестве работы.</p><p>Гордостью предприятия является уникальное сочетание профессионализма сотрудников с преемственностью поколений - коллектив насчитывает немало семейных династий, а его численность превышает 1500 человек.</p><p>Миссия компании: опираясь на опыт прошлого, успешно созидать в настоящем во имя нынешнего и будущего процветания России.</p><h2>Адрес: Россия, 107031 г. Москва, Страстной бульвар 8а, к.14-23</h2> </div></div><div class="row"> <div class="col-12 col-md-3"> <ul class="footer"> <li><a href="http://gcc-don.com/" target="_blank">gcc-don.com</a></li><li><a href="mailto:dadcpst@mail.ru">dadcpst@mail.ru</a></li></ul> </div><div class="col-12 col-md-9"> <ul class="footer"> <li>Телефон (Москва): +7 (495) 988-11-25</li><li>Телефон (Ростов-на-Дону): 8 (863) 204-16-70</li><li>Факс (Ростов-на-Дону): 8 (863) 204-16-70</li></ul> </div></div>');
                break;  
            case 2:
                $('.partners-text').append(' <div class="row partners-header"> <div class="col-12 col-md-3"> <img src="img/ird.png" srcset="img/ird@2x.png" alt="Компания «ИРД Инжиниринг»" title="Компания «ИРД Инжиниринг»"> </div><div class="col-12 col-md-9"> <h1>Компания «ИРД Инжиниринг»</h1> </div></div><div class="row"> <div class="col-12"> <p>Итальянская компания «ИРД Инжиниринг» на протяжении более 20 лет успешно реализует проекты в области инженерного консультирования, имея свои филиалы в 17 странах.</p><p>С 2016 года работает на территории Российской Федерации. В настоящее время участвует в реализации проектов по строительству Центральной кольцевой автомобильной дороги Московской области (пусковые комплексы 3 и 4) в качестве Технического Эксперта и Независимого Инженера.</p><p>«ИРД Инжиниринг» оказывает консультационные услуги для российских и международных заказчиков, включая заказчиков из стран СНГ, представляющих как частных инвесторов, так и государственные структуры. Международный опыт «ИРД» в сочетании с глубоким пониманием специфики условий в России и странах СНГ дает возможность предлагать результативные решения по проектам вне зависимости от их сложности и масштабов.</p><strong>«ИРД Инжиниринг» предлагает комплексные инженерные решения по таким направлениям, как:</strong> <ul> <li><span>Инфраструктура дорог и автомагистралей;</span></li><li><span>Железнодорожная инфраструктура;</span></li><li><span>Инфраструктура аэропортов;</span></li><li><span>Управление строительными проектами.</span></li></ul> <p>Кроме этого, компанией «ИРД Инжиниринг» успешно реализуются проекты для международных финансовых институтов (таких как Европейский Банк Реконструкции и Развития (ЕБРР), Азиатский Банк Развития (АБР), Европейский Инвестиционный Банк (ЕИБ), Африканский Банк Развития (АФБР) и Всемирный Банк (ВБ). В частности, по исполнению функции «Эксперт Банка» (услуги строительного аудита и мониторинга) в ходе реализации проектов транспортной инфраструктуры на территории ЕС.</p><h2>Адрес: РФ, г. Москва, 125047, ул. 1-я Брестская, д. 35, офис 601</h2> </div></div><div class="row"> <div class="col-12 col-md-4"> <ul class="footer"> <li><a href="http://irdeng.com/" target="_blank">irdeng.com</a></li><li><a href="mailto:russiainfo@irdeng.com">russiainfo@irdeng.com</a></li></ul> </div><div class="col-12 col-md-8"> <ul class="footer"> <li>Телефон: +7 (495) 997-16-08</li></ul> </div></div>');
                break;
            case 3:
                $('.partners-text').append('  <div class="row partners-header"> <div class="col-12 col-md-3"> <img src="img/smoldorniiproekt.png" srcset="img/smoldorniiproekt@2x.png" alt="ООО «Смол-дорНИИ-Проект»" title="ООО «Смол-дорНИИ-Проект»"></div><div class="col-12 col-md-9"> <h1>ООО «Смол-дорНИИ-Проект»</h1> </div></div><div class="row"> <div class="col-12"> <p>ООО «Смол-дорНИИ-Проект» за 13 лет работы на рынке имеет более 425 реализованных контрактов. </p><strong>Виды деятельности: </strong> <p>ООО «Смол-ДорНИИ-Проект» (г. Смоленск) создано в 2006 году как организация, специализирующаяся на оказании инженерных услуг в дорожном хозяйстве. В том числе:</p><ul> <li><span>Строительный контроль (технический надзор) за строительством, реконструкцией и капитальным ремонтом автомобильных дорог и сооружений на них.</span></li><li><span>Проектирование и инженерные изыскания автомобильных дорог и искусственных сооружений (Разработка проектной и рабочей документации на строительство, реконструкцию, капитальный ремонт и ремонт автомобильных дорог, искусственных сооружений на автомобильных дорогах, объектов дорожного хозяйства, в том числе обоснование инвестиций. Оказание информационно-консультационных услуг при проектировании объектов дорожного строительства и хозяйства).</span></li><li><span>Диагностика, обследования, паспортизация и испытания автомобильных дорог и искусственных сооружений (Предпроектное обследование и оценка состояния эксплуатируемых участков автомобильных дорог и мостовых сооружений, обследование и оценка качества дорожных объектов перед вводом в эксплуатацию).</span></li><li><span>Создание и внедрение геоинформационных систем для управления автомобильными дорогами.</span></li><li><span>Научно-исследовательские работы. Экспертные и консультационные услуги.</span></li></ul> <strong>Основные объекты строительного контроля:</strong> <ul> <li><span>Строительство скоростной автомобильной дороги Москва - Санкт-Петербург;</span></li><li><span>Строительство ЦКАД Московской области (этапы строительства №3, 4);</span></li><li><span>Скоростная а/д Москва - Нижний Новгород - Казань (М-7 «Волга»);</span></li><li><span>Строительный контроль за объектами транспортной инфраструктуры Олимпиады-2014, г. Сочи;</span></li><li><span>Строительство, реконструкция автомобильной дороги А-290 Новороссийск - Керчь (обход г. Анапа);</span></li><li><span>Строительство подъезда от автомобильной дороги М-25 Новороссийск - Керченский пролив к г. Керчь и сухогрузному району морского порта Тамань;</span></li><li><span>Строительство и реконструкция а/д М-29 «Кавказ», подъезд к г. Майкоп, республика Адыгея.</span></li></ul> <strong>Лицензии, свидетельства и сертификаты: </strong> <p>ООО «Смол-ДорНИИ-Проект» является членом саморегулируемых организаций и имеет необходимые допуски к строительным работам, включая осуществление строительного контроля, проектным и изыскательским работам. </p><p>В ООО «Смол-ДорНИИ-Проект» действует сертифицированная система управления качеством в соответствии с международными стандартами ГОСТ ISO 9001-2015 (сертификат соответствия № СДС.ТП.СМ.10291-17, действителен до 05.07.2020). </p><p>Испытательная лаборатория ООО «Смол-ДорНИИ-Проект» имеет аттестат аккредитации, подтверждающий соответствие требованиям ГОСТ ИСО/МЭК 17025-2009. Также испытательная лаборатория аттестована на соответствие технической компетентности и независимости: Аттестат № РОСС RU.И521.04ДБ01.ОКИЛ03.0007, действителен до 25.10.2020. </p><p>Сертификат соответствия № СДС. ТП. СМ.10770-17 системы экологического менеджмента требованиям ГОСТ Р ИСО 14001-2016 (ISO 14001:2015). </p><p>Сертификат соответствия № СДС.ТП.СМ.10771-17 системы менеджмента безопасности труда и охраны здоровья требованиям ГОСТ Р 54934-2012 (OHSAS 18001:2007). </p><p>Специалисты организации имеют квалификационную подготовку и опыт работ по инвестиционно-строительным контрактам по методике FIDIC (Международной федерации инженеров-консультантов), в том числе по договорам между заказчиком и консультантом на оказание услуг («Белая» книга). </p><p>ООО «Смол-ДорНИИ-Проект» имеет высокие показатели уровня квалификации, подтвержденные соответствующими сертификатами оценки опыта и деловой репутации, удостоверяющими соответствие требованиям ГОСТов по осуществлению строительства, архитектурно-строительного проектирования и инженерных изысканий.</p><strong>Контакты:</strong> <div class="row partners-contacts"> <div class="col-12 col-md-6"> <p>Генеральный директор: </p><p>Салтыков Владимир Борисович</p></div><div class="col-12 col-md-6"> <p>Главный бухгалтер: </p><p>Федорцева Нина Ивановна</p></div></div><h2>Адрес: Россия, 214004, г. Смоленск, ул. 2-я Краснинская, 7/1</h2> <div class="row"> <div class="col-12 col-md-3"> <ul class="footer"> <li><a href="http://www.xn--d1aiajeiecse.xn--p1ai/" target="_blank">смолдорнии.рф</a> </li><li><a href="mailto:office@smoldornii.ru">office@smoldornii.ru</a> </li></ul> </div><div class="col-12 col-md-9"> <div class="row"> <div class="col-12 col-md-4"> <ul class="footer"> <li>Телефон/Факс:</li></ul> </div><div class="col-12 col-md-8"> <ul class="footer"> <li> +7 (4812) 68-34-99,</li><li> +7 (4812) 68-32-44</li></ul> </div></div> </div></div></div></div>');
                break;
            case 5:
                $('.partners-text').append('<div class="row partners-header"> <div class="col-12 col-md-3"> <img src="img/okso.png" srcset="img/okso@2x.png" alt="ООО «ОКСО»" title="ООО «ОКСО»"> </div><div class="col-12 col-md-9"> <h1>Компания «Отечественный Комплекс Систем Ограждений» (ООО «ОКСО»)</h1> </div></div><div class="row"> <div class="col-12"> <p>Является одним из ведущих предприятий Российской Федерации по проектированию, производству и внедрению комплексных систем ограждений. Сфера применения ограждений Компании «ОКСО» охватывает объекты транспортной инфраструктуры, нефтегазовой отрасли, городских агломераций, военные, промышленные и специальные объекты.</p><strong>Ограждения «ОКСО» могут выполнять следующие функции:</strong> <ul> <li><span>основное и предупредительное инженерное заграждение, в том числе в составе комплекса технических средств охраны, физической защиты периметра объектов различных отраслей, в том числе транспортной, промышленной, военной и др.;</span></li><li><span>обеспечение безопасности объектов транспортной инфраструктуры, ограничение и направление движения пешеходов и животных; </span></li><li><span>обозначение и разделение границ территории предприятий различного назначения.</span></li></ul> <p>Производственная мощность завода Компании «ОКСО» до 3,5 млн погонных метров сетки в год. Благодаря уникальному полимерному покрытию, нанесенному на сетчатые ограждения Компании «ОКСО», срок их службы увеличен до 15 лет без дополнительного обслуживания. Таким образом, ограждения «ОКСО» имеют наилучшие технические характеристики среди аналогов на российском рынке. Компания «ОКСО» использует сырье и материалы отечественного производства, полностью соответствующие требованиям качества и безопасности.</p><p>Комплексные решения ООО «ОКСО» успешно эксплуатируются на скоростных автомобильных магистралях ГК «АВТОДОР», объектах ОАО «Российские железные дороги» в регионах с различными климатическими условиями. </p><p>Являясь экспертом в области разработки защитных ограждений, Компания «ОКСО» предлагает надежные решения под индивидуальные требования клиентов.</p><h2>Юридический адрес: 152300, Россия, Ярославская область, Тутаевский район, г. Тутаев, ул. Промышленная, д. 27, литера А, помещение IV</h2> </div></div><div class="row"> <div class="col-12 col-md-3"> <ul class="footer"> <li><a href="http://oksopro.ru/" target="_blank">oksopro.ru</a></li><li> <a href="http://оксо.рф" target="_blank">оксо.рф</a></li><li> <a href="mailto:info@oksopro.ru">info@oksopro.ru</a></li></ul> </div><div class="col-12 col-md-9"> <ul class="footer"> <li>Телефон: +7 (499) 551-66-86</li></ul> </div></div>');
                break;
            case 6:
                $('.partners-text').append('  <div class="row partners-header"> <div class="col-12 col-md-3"><img src="img/soyuzdorproekt.png" srcset="img/soyuzdorproekt@2x.png" alt="АО «Союздорпроект»" title="АО «Союздорпроект»"></div><div class="col-12 col-md-9"> <h1>АО «Союздорпроект»</h1> </div></div><div class="row"> <div class="col-12"> <p>Акционерное общество «Институт по проектированию и изысканиям автомобильных дорог «Союздорпроект» (АО «Союздорпроект») является одной из крупнейших проектных организаций Российской Федерации в области изысканий и проектирования автомобильных дорог и искусственных сооружений с 80-летней историей.</p><p>По проектам Института было построено более 123 000 км автомобильных дорог (в их числе федеральные трассы М-1 «Беларусь», М-2 «Крым», М-5 «Урал», М-7 «Волга», М-8 «Холмогоры», МКАД) и 120 км больших мостов - как на территории нашей страны, так и за рубежом.</p><p>АО «Союздорпроект» участвовало в создании большого числа крупных и наиболее сложных дорожных объектов: кольцевых автомагистралей, подъездов к международным аэропортам, горных дорог, радиальных выходов из больших городов, титульных мостов и путепроводов.</p><p>В Институте трудится более 160 грамотных, опытных специалистов, постоянно повышающих свою квалификацию.</p><p>Генеральный директор - Еремин Андрей Евгеньевич.</p><p>АО «Союздорпроект» занимает одно из ключевых мест в реализации долгосрочной Федеральной целевой программы «Развитие транспортной системы России (2010-2020 годы)».</p><p>Институтом реализованы такие глобальные проекты, как скоростная автомагистраль М-11 «Москва - Санкт-Петербург» и Центральная кольцевая автомобильная дорога Московской области (в качестве генерального проектировщика и разработчика рабочей документации для строительства), реконструкция основных участков трасс М-3 «Украина» и М-4 «Дон» для эксплуатации на платной основе. Кроме того, выполняются проекты по подготовке документации по планировке территорий, созданию геоинформационных систем для управления автомобильными дорогами, разрабатываются проекты концессионных соглашений для создания государственно-частных партнерств в дорожной отрасли.</p><p>Мы занимаем ведущее место в области проектирования систем взимания платы, автоматизированных систем управления дорожным движением, рамных конструкций системы стационарного контроля (ССК).</p><p>В настоящее время Институт приступил к разработке проекта планировки основных участков новой скоростной автомобильной дороги «Москва - Нижний Новгород - Казань» (М-12), входящей в Международный транспортный коридор «Европа - Западный Китай». Новую четырехполосную трассу планируется построить до конца 2027 года.</p><p>АО «Союздорпроект» сохранило свой творческий и кадровый потенциал и продолжает вносить достойный вклад в дальнейшее повышение технического уровня и конкурентоспособности выпускаемой проектной продукции.</p><p>АО «Союздорпроект» предлагает Заказчикам комплекс услуг в области проектирования объектов дорожной инфраструктуры, включая выполнение работ на всех стадиях проектирования - от технико-экономических обоснований строительства и реконструкции объектов до разработки рабочей документации (в том числе с применением инновационных методов проектирования и строительства автомагистралей), а также подготовку концессионных соглашений по эксплуатации платных дорог Российской Федерации.</p><h2>Юридический адрес: 152300, Россия, Ярославская область, Тутаевский район, г. Тутаев, ул. Промышленная, д. 27, литера А, помещение IV</h2></div></div><div class="row"> <div class="col-12 col-md-3"> <ul class="footer"> <li><a href="http://sdp-mos.ru/" target="_blank">sdp-mos.ru</a> </li><li><a href="mailto:info@sdp-mos.ru">info@sdp-mos.ru</a></li></ul> </div><div class="col-12 col-md-9"> <ul class="footer"> <li>Телефон: +7 (495) 663-35-50</li><li>Факс: +7 (495) 663-35-51</li></ul> </div></div>');
                break;
            case 7:
                $('.partners-text').append(' <div class="row partners-header"> <div class="col-12 col-md-3"> <img src="img/pik.png" srcset="img/pik@2x.png" alt="Предприятие «ПИК»" title="Предприятие «ПИК»"></div><div class="col-12 col-md-9"> <h1>Предприятие «ПИК»</h1> </div></div><div class="row"> <div class="col-12"> <p>Предприятие «ПИК» насчитывает более 500 сотрудников и более 28 лет занимается разработкой, производством и установкой технических средств организации дорожного движения. Многогранность деятельности компании выводит ее в число лидеров рынка обустройства автомобильных дорог в России.</p><p>В Нижнем Новгороде и Кстово располагается мощный производственный комплекс, продукцией которого являются барьерные, тросовые, пешеходные ограждения, модульные надземные пешеходные переходы, шумопоглощающие и снегозащитные экраны, стойки под дорожные знаки, опоры освещения, РМГ, РМП, ограждения от животных и другие средства обустройства дорог.</p><p>На предприятии имеется собственный отдел НИОКР, разрабатывающий новые продукты, технологии, материалы. Все производимые изделия прошли испытания на Дмитровском полигоне НАМИ, строго регламентированы нормативными документами и сертифицированы в соответствии с требованиями TP ТС 014/2011 «Безопасность автомобильных дорог».</p><p>Строительно-монтажное управление, состоящее из 12 бригад, осуществляет монтаж любых типов металлоконструкций из ассортимента предприятия. Бригады оснащены специализированной техникой, в числе которой сваебойные машины, оборудование для установки тросового ограждения, собственный автопарк. Оснащение строительно-монтажных подразделений в совокупности с многолетним опытом позволяют выпускать более 4000 тонн изделий и устанавливать более 60 км различных видов ограждений в месяц.</p><h2>Адрес: 603053, Россия, г. Нижний Новгород, ул. Ковпака, 1а</h2> </div></div><div class="row"> <div class="col-12 col-md-3"> <ul class="footer"> <li><a href="https://pik.com/" target="_blank">pik.com</a> </li><li><a href="mailto:com@pik.com">com@pik.com</a> </li></ul> </div><div class="col-12 col-md-9"> <div class="row"> <div class="col-12 col-md-2"> <ul class="footer"> <li>Телефон:</li></ul> </div><div class="col-12 col-md-9"> <ul class="footer"> <li> +7 (831) 262-14-41,</li><li> +7 (831) 41-296-41</li></ul> </div></div></div></div>');
                break;
            case 8: 
                $('.partners-text').append(' <div class="row partners-header"> <div class="col-12 col-md-3"> <img src="img/stroyproekt.png" srcset="img/stroyproekt@2x.png" alt="АО «Институт «Стройпроект»" title="АО «Институт «Стройпроект»"> </div><div class="col-12 col-md-9"> <h1>АО «Институт «Стройпроект»</h1> </div></div><div class="row"> <div class="col-12"> <p>АО «Институт «Стройпроект» - лидер дорожной отрасли России в сфере комплексного проектирования и строительного контроля.</p><p>Компания представлена в разных регионах России - от Санкт-Петербурга и Москвы до Саратова и Новосибирска. За годы работы специалистами Стройпроекта запроектировано множество дорожных сооружений в различных регионах России (скоростные автомагистрали, мосты, путепроводы, эстакады, тоннели), в том числе такие масштабные объекты как искусственные сооружения Кольцевой автодороги и Западный cкоростной диаметр в Санкт-Петербурге, инфраструктурные проекты к Чемпионату мира по футболу - 2018 и Олимпиаде-2014 в Сочи, Бугринский мост через Обь в Новосибирске.</p><p>Стройпроект принимает участие в крупных концессионных проектах строительства и реконструкции: Скоростной платной автодороги М-11 «Москва - Санкт-Петербург», федеральных трасс М-1 «Беларусь», М-4 «Дон», Центральной кольцевой автомобильной дороги и др.</p><p>Помимо проектирования транспортной инфраструктуры, специалисты Стройпроекта осуществляют строительный контроль на масштабных проектах по всей России. Среди крупных проектов: Комплекс защитных сооружений Санкт-Петербурга от наводнений, мост через пролив Босфор Восточный во Владивостоке, Обход Одинцово в Московской области, развитие Мурманского транспортного узла.</p><p>Общая численность сотрудников компаний превышает 1550 человек.</p><p>В 2015 году Стройпроект вошел в ТОП-150 мировых проектных организаций (The Top 150 Global Design Firms) по версии журнала Engineering News-Record.</p><p>По итогам 2017 и 2018 годов, согласно рейтингу лидеров рынка инфраструктурных проектов Национальной ассоциации концессионеров и долгосрочных инвесторов в инфраструктуру (НАКДИ), Стройпроект возглавил список ТОП-3 технических советников концессионных проектов.</p><h2>Адрес: 196158, Санкт-Петербург, Дунайский пр., д. 13, корп. 2, Литера А, а/я 9</h2> </div></div><div class="row"> <div class="col-12 col-md-3"> <ul class="footer"> <li><a href="https://www.stpr.ru/" target="_blank">stpr.ru</a></li><li><a href="mailto:mamost@stpr.ru">most@stpr.ru</a></li></ul> </div><div class="col-12 col-md-9"> <ul class="footer"> <li>Телефон: +7 (812) 331-0500</li><li>Факс: +7 (812) 331-0505</li></ul> </div></div>');
                break;
                 
        }
    }); 
    $('#partnersModal').on('hide.bs.modal', function (event) {
        $('.partners-text').html('');
    });
});
function bindContactForm() {
	var form = $('#sendForm');

    event.preventDefault(); 
    $("#sendForm .form-control").each(function() {
        validate ($(this), $(this).prop('type'));
    });
    if ($('.form-control.is-invalid').length == 0 )  {
        var formData = form.serialize();
        $.ajax({
                url: 'send.php',
                type: "POST",
                data: formData,
                beforeSend: function() {
                    $('#sendForm input,  #sendForm button').prop('disabled', 'disabled');
                },
                success: function(result) {

                    $('.success-modal, .overlay').show();
                    $('#sendForm input,  #sendForm button').prop('disabled', false);
                    $('#sendForm input').val('');
                },
                error: function(data) {
                    form.html('Oops! Произошла ошибка и ваше письмо не отправилось').css('opacity', '1');					
                }
        });  
    }

};

function validate (self, propType) {
	var  regEmail = /^[a-zа-яё0-9](([_\.\-]?[a-zа-яё0-9]+)*)@([a-zа-яё0-9]+)(([\.\-]?[a-zа-яё0-9]+)*)\.([a-zа-яё])+$/;
	if (self.val() == "" && propType != 'email') {
		self.addClass('is-invalid');
	} else if (propType == 'email') {
		if (self.val().trim() == "") {
			self.addClass('is-invalid');
		} else if (!(regEmail.test(self.val().toLowerCase()))) {
			self.addClass('is-invalid');		
		} else {
			self.removeClass('is-invalid');			
		}	
    } else if (propType == 'select-one') {
        if (self.val() == null) {
            self.addClass('is-invalid');
        } else {
            self.removeClass('is-invalid');	
        }
    } else if (propType == 'checkbox') {
        if (self.prop('checked')) {
            self.removeClass('is-invalid');
        } else {
            self.addClass('is-invalid');	
        }
    } else {
		self.removeClass('is-invalid');
	} 
}
