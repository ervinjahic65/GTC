;(function() {
    var parentNode = document.currentScript.parentNode;

    // Deafult configuration
    var form_config = { lang: 'en' };
    var form_style_link = 'reg-form/style.css';

    if (typeof formLang !== 'undefined' && formLang !== "") {
        form_config.lang = formLang;
    }

    var formStyle = document.createElement("link");
        formStyle.href = form_style_link;
        formStyle.rel = "stylesheet";
        formStyle.type = "text/css";
        document.head.appendChild(formStyle);

    if (typeof customCss !== 'undefined' && customCss !== "") {
    var customStyle = document.createElement("link");
        customStyle.href = customCss;
        customStyle.rel = "stylesheet";
        customStyle.type = "text/css";
        document.head.appendChild(customStyle);
    }

    var _script = document.createElement("script");
    var _css = document.createElement("link");
    
    _script.src = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/intlTelInput.min.js";
    _css.href = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/css/intlTelInput.min.css";
    _css.rel = "stylesheet";
    _css.type = "text/css";
    
    document.head.appendChild(_script);
    document.head.appendChild(_css);

    var HTMLForm = '<h1 class="form-header">Change Your life today!</h1><div class="form-body"><form id="regform"><div class="steps-navigator"><div class="navigator-step step-1 active-step"></div><div class="navigator-step step-2 inactive-step"></div></div><div class="intgrtn-loader-holder"><div class="intgrtn-loader-text-holder"><div class="intgrtn-lds-dual-ring"></div><div class="intgrtn-loader-text">Loading...</div></div></div><div class="first-step"><div class="input-holder"><input type="text" id="f_first_name" name="f_first_name" placeholder="First Name" /><span class="regform-error-text first-name-error">First name is required</span></div><div class="input-holder"><input type="text" id="f_last_name" name="f_last_name" placeholder="Last Name" /><span class="regform-error-text last-name-error">Last name is required</span></div><div class="input-holder"><input type="email" id="f_email" name="f_email" placeholder="Email" /><span class="regform-error-text email-error">Email is required</span></div><div class="form-check"><label class="form-check-label" for="terms-checkbox" id="terms-box"><input class="form-check-input" type="checkbox" id="terms-checkbox" checked style="width:auto;height:auto;"> I have read and agree to <a href="terms.html" id="terms-link" target="_blank">Terms and Conditions</a>, and <a href="privacy.html" id="policy-link" target="_blank">Privacy Policy</a></label></div></div><div class="second-step"><div class="input-holder"><input type="tel" id="f_phone" name="f_phone" placeholder="81234567" /><span class="regform-error-text phone-error">Phone is required</span></div></div><div class="form-btn-holder"><button id="btn-step-1" class="step-btn" type="button"><span>Next</span></button><button id="btn-step-2" class="step-btn" type="submit" id="getStartedRegister"><span>Get started now</span></button></div></form><p id="thanksMessageRegister" style="display: none; font-size 18px;">Thank you for registering! An email with an activation link was sent to the email address you provided.</p></div>';
    var formDiv = document.createElement('div');
    formDiv.id = "custom-regform";
    formDiv.style.display = "none";
    formDiv.innerHTML = HTMLForm;
    parentNode.insertBefore(formDiv, parentNode.firstChild);

    // English deafult Modal
    var modal = '<div id="successModal" class="f_modal"> <div class="modal-content"> <span class="close" onclick="document.getElementById(\'successModal\').style.display = \'none\'">&times;</span> <div class="modal-row"> <div class="text-col"> <h2>Welcome to <span class="purple">MT4</span></h2> <p class="subtitle"> First of all, congratulations for making this exciting move! You are only a few short steps away from setting up your account, so pay very close attention here as you need to make sure your system is setup correctly. </p> </div> <div class="img-col"> <img src="../images/main2.png?v=1" class="main-img"> </div> </div> <div class="modal-row"> <div class="img-col"> <img src="../images/step1.png?v=1" class="main-img"> </div> <div class="text-col"> <div class="thankyou-step"> <div class="thankyou-step-item active">01</div> <div class="thankyou-step-item">02</div> </div> <h2 class="item-h">Phone Call Verification &amp; Setup</h2> <p class="item-p"> As you have seen, in this program, <strong>we take security very seriously and in order to verify you</strong> are a real person and to validate your account, one of our start up specialists will be calling you within the next 30mins. (Mon-Fri) </p> <p class="item-p"> If you aren\'t available, <strong>please answer the call and schedule an appointment</strong> for a more convenient time. </p> </div> </div> </div> </div>';


    if (form_config.lang === 'es') {
        modal = '<div id="successModal" class="f_modal"><div class="modal-content" id="thankyou"><span class="close" onclick="document.getElementById(\'successModal\').style.display = \'none\'">×</span><div class="modal-row"><div class="text-col"><h2 style="font-size:27px;">Bienvenido a la APLICACIÓN <span class="purple">MT4</span></h2><p class="subtitle"> En primer lugar, ¡felicidades por hacer este emocionante movimiento! Está a solo unospocos pasos de configurar su cuenta, así que preste mucha atención aquí, ya que necesita asegurarse de quesu sistema esté configurado correctamente. </p></div><div class="img-col"> <img src="../images/main2.png?v=1" class="main-img"> </div></div><div class="modal-row"><div class="img-col"> <img src="../images/step1.png?v=1" class="main-img"> </div><div class="text-col"><div class="thankyou-step"><div class="thankyou-step-item active">01</div><div class="thankyou-step-item">02</div></div><h2 class="item-h">Verificación y configuración de llamadas telefónicas</h2><p class="item-p"> Como ha visto, en este programa, <strong>nos tomamos la seguridad muy en serio y paraverificar</strong> que es una persona real y validar su cuenta, uno de nuestros especialistas en puesta enmarcha lo llamará dentro de los próximos 30 minutos. (lunes a viernes) </p><p class="item-p"> Si no está disponible, <strong>responda la llamada y programe una cita</strong> para unhorario más conveniente. </p></div></div></div></div>';
    } else if (form_config.lang === 'ar') {
        modal = '<div id="successModal" class="f_modal" style="direction:ltr;"> <div class="modal-content" id="thankyou"> <span class="close" onclick="document.getElementById(\'successModal\').style.display = \'none\'">&times;</span> <div class="modal-row"> <div class="text-col" style="direction:rtl;text-align: right;"> <h2>مرحبًا بك في تطبيق <span class="purple">MT5</span></h2> <p class="subtitle"> بادئ ذي بدء ، تهانينا على هذه الخطوة المثيرة! أنت على بعد خطوات قليلة فقط من إعداد حسابك ، لذا انتبه جيدًا هنا لأنك تحتاج إلى التأكد من إعداد نظامك بشكل صحيح. </p> </div> <div class="img-col"> <img src="../images/main2.png?v=1" class="main-img"> </div> </div> <div class="modal-row"> <div class="img-col"> <img src="../images/step1.png?v=1" class="main-img"> </div> <div class="text-col" style="direction:rtl;text-align: right;"> <div class="thankyou-step"> <div class="thankyou-step-item active">01</div> <div class="thankyou-step-item">02</div> </div> <h2 class="item-h">التحقق من المكالمات الهاتفية &amp; اقامة</h2> <p class="item-p"> كما رأيتم ، في هذا البرنامج ، <strong>نحن نتعامل مع الأمان بجدية شديدة وللتحقق من هويتك</strong> شخص حقيقي وللتحقق من صحة حسابك ، سيتصل بك أحد المتخصصين المبتدئين لدينا في غضون الثلاثين دقيقة القادمة. (من الإثنين إلى الجمعة) </p> <p class="item-p"> إذا لم تكن متاحًا ، <strong>يرجى الرد على المكالمة وتحديد موعد</strong> لوقت أكثر ملاءمة. </p> </div> </div> </div></div>';
    } else if (form_config.lang === 'it') {
        modal = '<div id="successModal" class="f_modal"> <div class="modal-content" id="thankyou"> <span class="close" onclick="document.getElementById(\'successModal\').style.display = \'none\'">&times;</span> <div class="modal-row"> <div class="text-col"> <h2>Benvenuto nell\'APP <span class="purple">MT4</span></h2> <p class="subtitle"> Prima di tutto, congratulazioni per aver fatto questa mossa emozionante! Sei solo a pochi passi dalla configurazione del tuo account, quindi presta molta attenzione qui poiché devi assicurarti che il tuo sistema sia impostato correttamente. </p> </div> <div class="img-col"> <img src="../images/main2.png?v=1" class="main-img" /> </div> </div> <div class="modal-row"> <div class="img-col"> <img src="../images/step1.png?v=1" class="main-img" /> </div> <div class="text-col"> <div class="thankyou-step"> <div class="thankyou-step-item active">01</div> <div class="thankyou-step-item">02</div> </div> <h2 class="item-h">Verifica e configurazione delle telefonate</h2> <p class="item-p"> Come hai visto, <strong>in questo programma prendiamo molto sul serio la sicurezza e per verificare</strong> che tu sia una persona reale e convalidare il tuo account, uno dei nostri specialisti della messa in servizio ti chiamerà entro i prossimi 30 minuti. (Lunedi al venerdì) </p> <p class="item-p"> Se non sei disponibile, <strong>rispondi alla chiamata e fissa un appuntamento</strong> per un orario più conveniente.</p></div></div></div></div>';
    }

    var modalDiv = document.createElement('div');
    modalDiv.innerHTML = modal;
    document.body.appendChild(modalDiv);
    
    var form_locale = {
        en: {
            header_text: "Register now",
            first_name: "First Name",
            last_name: "Last Name",
            email: "Email",
            first_name_error: "First name is required",
            last_name_error: "Last name is required",
            email_error: "Email is required",
            phone_error: "Phone is required",
            btn_step_1: "Next",
            btn_step_2: "Get started now",
            loading: "Loading...",
            terms: '<input class="form-check-input" type="checkbox" checked id="terms-checkbox" style="width:auto;height:auto;"> I have read and agree to <a href="terms.html" target="_blank">Terms and Conditions</a>, and <a href="privacy.html" target="_blank">Privacy Policy</a>',
            thanksmsg: "Thank you for registering! An email with an activation link was sent to the email address you provided."
        },
        de: {
            header_text: "Jetzt registrieren!",
            first_name: "Vorname",
            last_name: "Nachname",
            email: "Email",
            first_name_error: "Vorname ist erforderlich",
            last_name_error: "Nachname ist erforderlich",
            email_error: "E-Mail ist erforderlich",
            phone_error: "Telefon ist erforderlich",
            btn_step_1: "Nächster",
            btn_step_2: "Jetzt loslegen",
            loading: "Wird geladen...",
            terms: '<input class="form-check-input" type="checkbox" checked="" id="terms-checkbox" style="width:auto;height:auto;"> Ich habe die <a href="terms.html" target="_blank">Allgemeinen Geschäftsbedingungen</a>, und die <a href="privacy.html" target="_blank">Datenschutzrichtlinie</a> gelesen und stimme ihnen zu',
            thanksmsg: "Vielen Dank für die Registrierung! Eine E-Mail mit einem Aktivierungslink wurde an die von Ihnen angegebene E-Mail-Adresse gesendet."
        },
        tr: {
            header_text: "Şimdi kaydolun!",
            first_name: "İlk adı",
            last_name: "Soy isim",
            email: "E-posta",
            first_name_error: "Ad gerekli",
            last_name_error: "Soyadı gerekli",
            email_error: "Email gereklidir",
            phone_error: "Telefon gerekli",
            btn_step_1: "Sonraki",
            btn_step_2: "Şimdi başla",
            loading: "İşleme...",
            terms: '<input class="form-check-input" type="checkbox" checked id="terms-checkbox" style="width:auto;height:auto;"><a href="terms.html" target="_blank">Şartlar ve Koşulları</a> ve <a href="privacy.html" target="_blank">Gizlilik Politikasını</a> okudum ve kabul ediyorum',
            thanksmsg: "Kaydınız için teşekkür ederiz! Aktivasyon bağlantısı içeren bir e-posta, sağladığınız e-posta adresine gönderildi."
        },
        pl: {
            header_text: "Zainwestuj w Amazon",
            first_name: "Imię",
            last_name: "Nazwisko",
            email: "E-mail",
            first_name_error: "Pierwsze imię jest wymagane",
            last_name_error: "Nazwisko jest wymagane",
            email_error: "E-mail jest wymagany",
            phone_error: "Telefon jest wymagany",
            btn_step_1: "Następny",
            btn_step_2: "Zacznij teraz",
            loading: "Ładowanie...",
            terms: '<input class="form-check-input" type="checkbox" checked="" id="terms-checkbox" style="width:auto;height:auto;"> Przeczytałem i zgadzam się <a href="terms.html" target="_blank">Zasady i warunki</a>, oraz <a href="privacy.html" target="_blank">Polityka prywatności</a>',
            thanksmsg: "Dziękujemy za rejestrację! E-mail z linkiem aktywacyjnym został wysłany na podany adres e-mail."
        },
        it: {
            header_text: "Registrati ora!",
            first_name: "Nome di battesimo",
            last_name: "Cognome",
            email: "E-mail",
            first_name_error: "Il nome è obbligatorio",
            last_name_error: "Il cognome è obbligatorio",
            email_error: "L'e-mail è richiesta",
            phone_error: "Il telefono è richiesto",
            btn_step_1: "Prossimo",
            btn_step_2: "Iniziamo",
            loading: "Caricamento in corso...",
            terms: '<input class="form-check-input" type="checkbox" checked id="terms-checkbox" style="width:auto;height:auto;"> Accetto la <a href="terms.html" target="_blank">Termini e Condizioni</a>, e <a href="privacy.html" target="_blank">Politica sulla Riservatezza</a>',
            thanksmsg: "Grazie per esserti registrato! È stata inviata un'email con il link di attivazione all'indirizzo email fornito."
        },
        nl: {
            header_text: "Registreer nu!",
            first_name: "Voornaam",
            last_name: "Achternaam",
            email: "E-mail",
            first_name_error: "Voornaam is verplicht",
            last_name_error: "Achternaam is verplicht",
            email_error: "E-mail is vereist",
            phone_error: "Telefoon is vereist",
            btn_step_1: "De volgende",
            btn_step_2: "Begin nu",
            loading: "Bezig met laden...",
            terms:'<input class="form-check-input" type="checkbox" checked id="terms-checkbox" style="width:auto;height:auto;"> Ik heb gelezen en ga ermee akkoord <a href="terms.html" target="_blank">Algemene Voorwaarden</a>, en <a href="privacy.html" target="_blank">Privacybeleid</a>.',
            thanksmsg: "Bedankt voor het registreren! Er is een e-mail met een activatielink verzonden naar het opgegeven e-mailadres."
        },
        se: {
            header_text: "Registrera nu!",
            first_name: "Förnamn",
            last_name: "Efternamn",
            email: "E-post",
            first_name_error: "Förnamn krävs",
            last_name_error: "Efternamn krävs",
            email_error: "E-post krävs",
            phone_error: "Telefon krävs",
            btn_step_1: "Nästa",
            btn_step_2: "Börja nu",
            loading: "Läser in...",
            terms: '<input class="form-check-input" type="checkbox" checked id="terms-checkbox" style="width:auto;height:auto;"> Jag godkänner härmed <a href="privacy.html" target="_blank">TIntegritetspolicyn</a>, and <a href="terms.html" target="_blank">Användarvillkoren</a>.',
            thanksmsg: "Tack för att du registrerade dig! Ett e-postmeddelande med en aktiveringslänk har skickats till den angivna e-postadressen."
        },
        es: {
            header_text: "Regístrese ahora",
            first_name: "Primer nombre",
            last_name: "Apellido",
            email: "Correo electrónico",
            first_name_error: "Se requiere el primer nombre",
            last_name_error: "Se requiere el apellido",
            email_error: "Correo electronico es requerido",
            phone_error: "Se requiere teléfono",
            btn_step_1: "Próximo",
            btn_step_2: "Empieza ahora",
            loading: "Cargando...",
            terms: '<input class="form-check-input" type="checkbox" checked id="terms-checkbox" style="width:auto;height:auto;"> Acepto la <a href="privacy.html" target="_blank">Política de Privacidad</a>, los <a href="terms.html" target="_blank">Términos y Condiciones*</a> y recibir material de marketing.',
            thanksmsg: "¡Gracias por registrarte! Se ha enviado un correo electrónico con un enlace de activación a la dirección de correo electrónico que proporcionaste."
        },
        pt: {
            header_text: "Invista na Amazon",
            first_name: "Primeiro nome",
            last_name: "Sobrenome",
            email: "E-mail",
            first_name_error: "O primeiro nome é necessário",
            last_name_error: "O sobrenome é obrigatório",
            email_error: "O e-mail é obrigatório",
            phone_error: "O telefone é obrigatório",
            btn_step_1: "Próximo",
            btn_step_2: "Comece agora",
            loading: "Carregando...",
            terms: '<input class="form-check-input" type="checkbox" checked id="terms-checkbox" style="width:auto;height:auto;"> Aceito a <a href="privacy.html" target="_blank">Política de Privacidade</a>, os <a href="terms.html" target="_blank">Termos e Condições*</a> e receber material de marketing.',
            thanksmsg: "Obrigado por se registrar! Um e-mail com um link de ativação foi enviado para o endereço de e-mail que você forneceu."
        },
        ar: {
            header_text: 'سجّل الآن!',
            first_name: 'الاسم الاول',
            last_name: 'اسم العائلة',
            email: 'البريد الإلكتروني',
            first_name_error: 'الإسم الأول مطلوب',
            last_name_error: 'إسم العائلة مطلوب',
            email_error: 'البريد الالكتروني مطلوب',
            phone_error: 'الهاتف مطلوب',
            btn_step_1: 'التالي',
            btn_step_2: 'ابدأ الآن',
            loading: 'جار التحميل...',
            terms: '<input class="form-check-input" type="checkbox" id="terms-checkbox" checked=""> <span> أقبل <a href="privacy.html" id="policy-link" target="_blank">سياسة الخصوصية</a>, ال <a href="terms.html" id="terms-link" target="_blank">الأحكام والشروط*</a> وتلقي المواد التسويقية.</span>',
            thanksmsg: "شكرًا لتسجيلك! تم إرسال بريد إلكتروني يحتوي على رابط تفعيل إلى عنوان البريد الإلكتروني الذي قدمته."
        },
        hi: {
            header_text: 'अभी रजिस्टर करें!',
            first_name: 'पहला नाम',
            last_name: 'उपनाम',
            email: 'ईमेल',
            first_name_error: 'पहला नाम आवश्यक है',
            last_name_error: 'उपनाम आवश्यक है',
            email_error: 'ईमेल की जरूरत है',
            phone_error: 'फ़ोन की आवश्यकता है',
            btn_step_1: 'अगला',
            btn_step_2: 'अब शुरू हो जाओ',
            loading: 'लोड हो रहा है...',
            terms: '<input class="form-check-input" type="checkbox" checked id="terms-checkbox" style="width:auto;height:auto;"> मैंने पढ़ लिया है और इससे सहमत हूं <a href="terms.html" target="_blank">नियम और शर्तें</a>, तथा <a href="privacy.html" target="_blank">गोपनीयता नीति</a>',
            thanksmsg: "आपके पंजीकरण के लिए धन्यवाद! आपके द्वारा प्रदान किए गए ईमेल पते पर एक सक्रियण लिंक वाला एक ईमेल भेजा गया था।"
        },
        fr: {
            header_text: "Inscrivez-vous maintenant!",
            first_name: 'Prénom',
            last_name: 'Nom de famille',
            email: 'E-mail',
            first_name_error: 'Le prénom est requis',
            last_name_error: 'Le nom de famille est requis',
            email_error: "L'e-mail est requis",
            phone_error: 'Le téléphone est requis',
            btn_step_1: 'Prochain',
            btn_step_2: 'Commencez maintenant',
            loading: 'Chargement...',
            terms: '<input class="form-check-input" type="checkbox" checked id="terms-checkbox" style="width:auto;height:auto;"> J\'ai lu et j\'accepte <a href="terms.html" target="_blank">Termes et conditions</a>, et <a href="privacy.html" target="_blank">Politique de confidentialité</a>',
            thanksmsg: "Merci de vous être inscrit! Un e-mail avec un lien d'activation a été envoyé à l'adresse e-mail que vous avez fournie."
        },
        th: {
            header_text: 'ลงทะเบียนตอนนี้!',
            first_name: 'ชื่อจริง',
            last_name: 'นามสกุล',
            email: 'อีเมล',
            first_name_error: 'ต้องระบุชื่อ',
            last_name_error: 'ต้องระบุนามสกุล',
            email_error: 'จำเป็นต้องใช้อีเมล',
            phone_error: 'ต้องใช้โทรศัพท์',
            btn_step_1: 'ต่อไป',
            btn_step_2: 'เริ่มตอนนี้เลย',
            loading: 'กำลังโหลด...',
            terms: '<input class="form-check-input" type="checkbox" checked id="terms-checkbox" style="width:auto;height:auto;"> ฉันได้อ่านและตกลงที่จะ <a href="terms.html" target="_blank">ข้อกำหนดและเงื่อนไข</a>, และ <a href="privacy.html" target="_blank">นโยบายความเป็นส่วนตัว</a>',
            thanksmsg: "ขอบคุณสำหรับการลงทะเบียน! อีเมลพร้อมลิงก์เพื่อเปิดใช้งานได้ถูกส่งไปยังที่อยู่อีเมลที่คุณได้ระบุ"
        },
        sl: {
            header_text: 'Registrirajte se zdaj!',
            first_name: 'Ime',
            last_name: 'Prezime',
            email: 'Email adresa',
            first_name_error: 'Ime je obvezno',
            last_name_error: 'Priimek je obvezen',
            email_error: 'E-pošta je obvezna',
            phone_error: 'Potreben je telefon',
            btn_step_1: 'Naslednji',
            btn_step_2: 'Začni zdaj',
            loading: 'Nalaganje...',
            terms: '<input class="form-check-input" type="checkbox" checked id="terms-checkbox" style="width:auto;height:auto;">Prebral sem in se strinjam <a href="terms.html" target="_blank">Pogoji</a>, in <a href="privacy.html" target="_blank">Politika zasebnosti</a>',
            thanksmsg: "Hvala za registracijo! Na naslov, ki ste ga navedli, smo poslali e-pošto z aktivacijsko povezavo."
        },
        ko: {
            header_text: "지금 등록하세요",
            first_name: "이름",
            last_name: "성",
            email: "이메일",
            first_name_error: "이름은 필수입니다",
            last_name_error: "성은 필수입니다",
            email_error: "이메일은 필수입니다",
            phone_error: "전화번호는 필수입니다",
            btn_step_1: "다음",
            btn_step_2: "지금 시작하기",
            loading: "로딩 중...",
            terms: '<input class="form-check-input" type="checkbox" checked id="terms-checkbox" style="width:auto;height:auto;"> 저는 <a href="terms.html" target="_blank">이용 약관</a>과 <a href="privacy.html" target="_blank">개인 정보 보호 정책</a>을 읽고 동의합니다.',
            thanksmsg: "등록해 주셔서 감사합니다! 제공하신 이메일 주소로 활성화 링크가 포함된 이메일을 발송했습니다."
        }
    };
    
        
    var modal = document.getElementById("successModal");
    var span = document.getElementsByClassName("close")[0];
    
    function localeForm(e) {
        var t = form_locale[e];
        var r = document.getElementById("custom-regform");
        r.querySelector("#f_first_name").placeholder = t.first_name;
        r.querySelector("#f_last_name").placeholder = t.last_name;
        r.querySelector("#f_email").placeholder = t.email;
        r.querySelector("#thanksMessageRegister").innerText = t.thanksmsg;
        r.getElementsByClassName("first-name-error")[0].innerText = t.first_name_error;
        r.getElementsByClassName("last-name-error")[0].innerText = t.last_name_error;
        r.getElementsByClassName("email-error")[0].innerText = t.email_error;
        r.getElementsByClassName("phone-error")[0].innerText = t.phone_error;
        r.getElementsByClassName("intgrtn-loader-text")[0].innerText = t.loading;
        r.querySelector("#btn-step-1").firstChild.innerText = t.btn_step_1;
        r.querySelector("#btn-step-2").firstChild.innerText = t.btn_step_2;
        document.getElementById('terms-box').innerHTML = t.terms;
        r.getElementsByClassName('form-header')[0].innerText = t.header_text;
    }

    window.onclick = function(e) {
        e.target == modal && (modal.style.display = "none");
    };
    
    form_locale[form_config.lang] ? localeForm(form_config.lang) : localeForm("en");
    
    function getQueryParameters() {
        var e = location.search.slice(1),
            t = {};
        return e.replace(/([^=]*)=([^&]*)&*/g, function(e, r, a) {
            t[r] = a;
        }), t;
    }
    
    var getUrl = getQueryParameters();
    
    var clickId = "";
    var campaignId = "";
    var dmCampaign = "";
    var pageInfo = "";
    var offerSlider = false;
    
    if (getUrl.cid) { clickId = getUrl.cid; }

    if (getUrl.cpid) { campaignId = getUrl.cpid;}

    // For Dr. Mailer campaigns
    if (getUrl.campaign) {
        dmCampaign = getUrl.campaign.split("_")[1];
        if (!dmCampaign) {
            dmCampaign = 1;
        }
    }
    
    // For info about page
    if (getUrl.page) { pageInfo = getUrl.page }
    
    // For offer Slider
    if (getUrl.offer && getUrl.offer === "slider") {
        offerSlider = true;
    }

    if (getUrl.pixelid) {
        var fbScript = document.createElement("script");
        var fbScriptContent = document.createTextNode('!function(e,t,n,o,c,a){e.fbq||(o=e.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},e._fbq||(e._fbq=o),(o.push=o).loaded=!0,o.version="2.0",o.queue=[],(c=t.createElement(n)).async=!0,c.src="https://connect.facebook.net/en_US/fbevents.js",(a=t.getElementsByTagName(n)[0]).parentNode.insertBefore(c,a))}(window,document,"script"),fbq("init","'+getUrl.pixelid+'"),fbq("track","PageView");');
        fbScript.appendChild(fbScriptContent); 
        document.head.appendChild(fbScript);
    }

    function validateEmail(e) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase());
    }
    
    var _regForm = document.getElementById("regform"),
        _firstName = document.getElementById("f_first_name"),
        _lasttName = document.getElementById("f_last_name"),
        _email = document.getElementById("f_email"),
        _firstStep = document.getElementById("btn-step-1"),
        _secondStep = document.getElementById("btn-step-2"),
        _phone = document.querySelector("#f_phone");
    
    function loader(e) {
        var t = document.getElementsByClassName("intgrtn-loader-holder");
        return t[0].style.display = "start" === e ? "block" : "none"
    }
    
    function switchToStep(e) {
        2 === e ? (document.getElementsByClassName("first-step")[0].style.display = "none",
            document.getElementById("btn-step-1").style.display = "none",
            document.getElementsByClassName("second-step")[0].style.display = "block",
            document.getElementById("btn-step-2").style.display = "block",
            document.getElementsByClassName("step-1")[0].classList.remove("active-step"),
            document.getElementsByClassName("step-1")[0].classList.add("inactive-step"),
            document.getElementsByClassName("step-2")[0].classList.remove("inactive-step"),
            document.getElementsByClassName("step-2")[0].classList.add("active-step"),
            loader("stop")) : (document.getElementsByClassName("first-step")[0].style.display = "block",
            document.getElementById("btn-step-1").style.display = "block",
            document.getElementsByClassName("second-step")[0].style.display = "none",
            document.getElementById("btn-step-2").style.display = "none",
            document.getElementsByClassName("step-2")[0].classList.remove("active-step"),
            document.getElementsByClassName("step-2")[0].classList.add("inactive-step"),
            document.getElementsByClassName("step-1")[0].classList.remove("inactive-step"),
            document.getElementsByClassName("step-1")[0].classList.add("active-step"), loader("stop"));
    }
    
    var e = null; // intlTelInput variable initializing
    
    _firstStep.addEventListener("click", function() {
        var error = false;
        if ("" === _firstName.value) {
            document.getElementsByClassName("first-name-error")[0].style.display = "block";
            error = true;
        } else {
            document.getElementsByClassName("first-name-error")[0].style.display = "none"
        }
        if ("" === _lasttName.value) {
            document.getElementsByClassName("last-name-error")[0].style.display = "block";
            error = true;
        } else {
            document.getElementsByClassName("last-name-error")[0].style.display = "none";
        }
        if ("" === _email.value || !validateEmail(_email.value)) {
            document.getElementsByClassName("email-error")[0].style.display = "block";
            error = true;
        } else {
            document.getElementsByClassName("email-error")[0].style.display = "none";
        }
        
        if (!error) {
            loader("start");
            adjustTelInputPadding();
            e = window.intlTelInput(_phone, {
                separateDialCode: !0,
                initialCountry: "auto",
                geoIpLookup: function(e) {
                    var t = new XMLHttpRequest();
                    t.onreadystatechange = function() {
                        if (4 == this.readyState && 200 == this.status) {
                            var r = JSON.parse(t.responseText);
                            r.country ? e(r.country) : e("US");
                        }
                    };
                }
            });
            setTimeout(function() {
                switchToStep(2);
            }, 1200)
        }
    }), window.addEventListener("load", function() {
        _secondStep.addEventListener("click", function(t) {
            if (t.preventDefault(), !isNaN(_phone.value) && _phone.value.length > 5) {
                document.getElementById("btn-step-2").disabled = true;
                document.getElementsByClassName("phone-error")[0].style.display = "none", loader("start");
                var r = {
                    country: e.getSelectedCountryData().iso2,
                    dm_campaign: dmCampaign,
                    first_name: _firstName.value,
                    last_name: _lasttName.value,
                    email: _email.value,
                    phone_code: e.getSelectedCountryData().dialCode,
                    phone_number: _phone.value,
                    campaign_id: campaignId,
                    click_id: clickId,
                    page: pageInfo,
                    href: window.location.href,
                    user_agent: window.navigator.userAgent,
                    redirect: true
                }
                setTimeout(function() {
                    switchToStep(3);
                    document.getElementById("regform").style.display = "none";
                    document.getElementById("thanksMessageRegister").style.display = "block";
                }, 1200)

            } else document.getElementsByClassName("phone-error")[0].style.display = "block";
        });
    }, !1);
    
    
    function adjustTelInputPadding() {
        document.getElementById("f_phone").style.paddingLeft = "100px";
    }

    function fireEvent() {
        // Facebook event
        if (typeof fbq === "function") {
            fbq("track", "Lead");
        }

        // Huawei event
        if (typeof recordTier === "object") {
            recordTier.push({eventName:"effectiveLeadsForm",tracking_id:"35308226"});
        }

        return true;
    }
    
    function openOfferSlider(userName) {
        var cn = 'NA';
        var country = 'NA';
        if (getUrl.campaign) {
            cn = getUrl.campaign;
        }
        if (e.getSelectedCountryData().iso2) {
            country = e.getSelectedCountryData().iso2;
        }

        var iframe = document.createElement("iframe");
        iframe.classList.add("responsive-iframe");
        iframe.src = "/offers-slides/?name=" + userName + '&campaign=' + cn + '&lang=' + form_config.lang + '&country=' + country;

        var modal = document.getElementById("successModal");
        modal.style.display = "block";
        modal.style.overflow = "hidden";

        var modalContent = document.getElementsByClassName("modal-content")[0];
        modalContent.classList.add("slider-container");
        modalContent.innerHTML = "";
        modalContent.appendChild(iframe);
    }
})();

function scrollToForm() {
    let e = document.getElementById("custom-regform");
    e.scrollIntoView({
        block: "end",
        behavior: "smooth",
        inline: "center"
    });
}

setTimeout(function() {
    document.getElementById("custom-regform").style.display = "block";
}, 800);