  function switchLanguage(event) {
    const langButton = event.target;
    const currentLang = langButton.textContent.trim();

    document.querySelectorAll('.btn-language').forEach(btn => btn.classList.remove('active'));
    langButton.classList.add('active');

    if (currentLang === 'English') {
      document.documentElement.lang = 'en';
      document.documentElement.setAttribute('dir', 'ltr');
      translateToEnglish();
      updateLogo('Logo2.png');
    } else {
      document.documentElement.lang = 'ar';
      document.documentElement.setAttribute('dir', 'rtl');
      translateToArabic();
      updateLogo('Logo2ar.png');
    }
  }

  function translateToEnglish() {
    document.getElementById('why-we').textContent = 'Why We';
    document.getElementById('services').textContent = 'Services';
    document.getElementById('about-us').textContent = 'About';
    document.getElementById('our-partners').textContent = 'Our Partners';
    document.getElementById('contact').textContent = 'Contact';
    document.getElementById('welcome').innerHTML = 'Welcome To <span style="color: #21566f; font-weight: bold" id="almuayid">ALMUAYID</span>';
    document.getElementById('nice-to-meet-you').textContent = "It's Nice To Meet You";
    document.getElementById('tell-me-more').textContent = 'Tell Me More';
    document.getElementById('section-heading-how').textContent = 'How to establish your company';
    document.getElementById('section-subheading-how').textContent = 'Experts in establishing companies';
    document.getElementById('section-content-how').innerHTML = `
      <p>
        Company incorporation is simply the establishment of a business
        entity within the United Arab Emirates. This process includes
        registering the company with Official authorities, obtaining the
        necessary licenses and complying with various legal requirements
        The UAE offers several options for establishing companies,
        including companies operating on the mainland and free zones And
        external foreign companies. Choosing the ideal configuration
        depends on several factors, including the nature of the business,
        the required location, and the level of permitted foreign
        ownership. Establishing a company may seem daunting if there is no
        proper planning and direction. Therefore, our experts are ready to
        provide full advice. Accompanying you at all stages
      </p>
    `;
    document.getElementById('section-heading-services').textContent = 'Services';
    document.getElementById('section-subheading-service').textContent = 'Some of our services';
    document.getElementById('service1-title').textContent = 'Establishing companies in the Emirates';
    document.getElementById('service1-description').textContent = 'The UAE has strengthened its position as one of the best destinations for investors to establish their businesses or branches for their companies. It also provided three types of economic zones for companies to establish and develop their businesses there. Each area is granted in them high-quality infrastructure, regulations and laws tailored to meet the diverse requirements of entrepreneurs.';
    document.getElementById('service2-title').textContent = 'Visa services and golden residency';
    document.getElementById('service2-description').textContent = 'Visas enable individuals to enter and reside in the UAE for a specified period of time. It also allows them to access various services in the UAE, such as health care, education and employment. It ensures that individuals are protected within the laws and regulations applicable in the United Arab Emirates and that they benefit from assistance, legal if necessary mother t.';
    document.getElementById('service3-title').textContent = 'Opening a bank account for companies';
    document.getElementById('service3-description').textContent = 'Opening a Corporate Bank Account To do business in the United States, you need to open a dedicated corporate bank account on Specifically. Under the law, business owners are prohibited from carrying out commercial activities from their personal accounts. the account Sari is usually the type that is recommended to open because it is ideal in terms of procedures and large amounts can be transferred through it.';
    document.getElementById('service4-title').textContent = 'Establishing companies in Saudi Arabia';
    document.getElementById('service5-title').textContent = 'Clearing government transactions';
    document.getElementById('section-heading-about').textContent = 'About Us';
    document.getElementById('section-subheading-about').textContent = 'Who We Are';
    document.getElementById('about-text').innerHTML = `
      <p>
        We are proud to be the leader in helping startups build their successful businesses. Establishing a company can be confusing at first, especially when you start in a new country. For this reason, we are here to guide you every step along the way thanks to our experience spanning more than 11 years. We have helped over 30,000 entrepreneurs start their businesses in the UAE alone. Our qualified team of consulting specialists can provide assistance at all stages of establishing companies. We understand that every entrepreneur has a unique personality and ambition, so we offer customized solutions to meet your needs. Whether you are looking to start a new company, or expand your existing business activities, or even if you need some advice, we are here to help. If you are ready to embark on this adventure and realize your practical dreams and turn them into reality, do not hesitate to contact us at ALMUAYID Foundation.
      </p>
    `;
    document.getElementById('partners-heading').textContent = 'Our Partners';
    document.getElementById('contact-heading').textContent = 'Contact Us';
    document.getElementById('subheading1').textContent = 'Do you want to start your own company?';
    document.getElementById('subheading2').textContent = 'Then you are in the right place... Book your free consultation with one of our specialized experts to start achieving your dreams and practical successes.';
    document.getElementById('address-heading').textContent = 'Address :-';
    document.getElementById('address-line1').textContent = 'Al Makhawi Building';
    document.getElementById('address-line2').textContent = 'Oud Metha - Dubai';
    document.getElementById('address-line3').textContent = 'United Arab Emirates';
    document.getElementById('contact-info').textContent = 'Contact :-';
    document.getElementById('email-label').textContent = 'Email :-';
    document.getElementById('email').innerHTML = '<a style="text-decoration: none" href="mailto:info@almuayid.com" target="_blank">info@almuayid.com</a>';
    document.getElementById('phone-label').textContent = 'Phone :-';
    document.getElementById('phone').innerHTML = '<a style="text-decoration: none" href="tel:+971 50 540 3582" target="_blank">+971 50 540 3582</a>';
    document.getElementById('whatsapp-label').textContent = 'Whatsapp :-';
    document.getElementById('whatsapp').innerHTML = '<a style="text-decoration: none" href="https://wa.me/+971 50 540 3582?text=Hello%20there!" target="_blank">+971 50 540 3582</a>';
  }

  function translateToArabic() {
    document.getElementById('why-we').textContent = 'لماذا نحن';
    document.getElementById('services').textContent = 'خدماتنا';
    document.getElementById('about-us').textContent = 'عنا';
    document.getElementById('our-partners').textContent = 'شركائنا';
    document.getElementById('contact').textContent = 'تواصل معنا';
    document.getElementById('welcome').innerHTML = 'مرحبًابك فى  <span style="color: #21566f; font-weight: bold" id="almuayid">المؤيد</span>';
    document.getElementById('nice-to-meet-you').textContent = 'نحن سعداء دائما بلقائك';
    document.getElementById('tell-me-more').textContent = 'اعرف المزيد';
    document.getElementById('section-heading-how').textContent = 'كيفية تنشئ شركتك';
    document.getElementById('section-subheading-how').textContent = 'خبراء في إنشاء الشركات';
    document.getElementById('section-content-how').innerHTML = `
      <p>
      إنّ تأسيس الشركة هو ببساطة إنشاء كيان تجاري داخل دولة الإمارات العربية المتحدة. وتتضمن هذه العملية تسجيل الشركة لدى الجهات الرسمية والحصول على التراخيص اللازمة والامتثال لمختلف المتطلبات القانونية وتقدم دولة الإمارات العربية المتحدة عدة خيارات لتأسيس الشركات، بما في ذلك الشركات العاملة في البر الرئيسي والمناطق الحرة والشركات الأجنبية الخارجية ويعتمد اختيار التكوين المثالي على عدة عوامل، بما في ذلك طبيعة العمل التجاري والموقع المطلوب ومستوى الملكية الأجنبية المسموح بها وقد يبدو تأسيس الشركة أمراً شاقا إذا لم يكن هناك تخطيط وتوجيه مناسبان، لهذا فإنّ خبرائنا مستعدون لتقديم الاستشارة الكاملة ومرافقتك في جميع المرحل      </p>
    `;
    document.getElementById('section-heading-services').textContent = 'الخدمات';
    document.getElementById('section-subheading-service').textContent = 'بعض خدماتنا';
    document.getElementById('service1-title').textContent = 'تأسيس الشركات في الامارات';
    document.getElementById('service1-description').textContent = 'عززت دولة الإمارات العربية مكانتها عززت دولة الإمارات العربية مكانتها كواحدة من أفضل الوجهات التي يسعى إليها المستثمرون لتأسيس أعمالهم أو فروع لشركاتهم. كما وفرت ثلاثة أنواع من المناطق الاقتصادية للشركات لإنشاء وتطوير أعمالها فيها. تمنح كل منطقة فيهم بنية تحتية عالية الجودة، وأنظمة وقوانين مخصصة لتلبي المتطلبات المتنوعة لروّاد الأعمال.';
    document.getElementById('service2-title').textContent = 'خدمات التأشيرات و اقامة ذهبية';
    document.getElementById('service2-description').textContent = 'تمكّن التأشيرات الأفراد من الدخول والإقامة في الإمارات العربية المتحدة لفترة زمنية محددة كما تتيح لهم الحصول على خدمات مختلفة في الإمارات العربية المتحدة، مثل الرعاية الصحية والتعليم والتوظيف و تضمن الحماية للأفراد ضمن القوانين واللوائح المعمول بها في دولة الإمارات العربية المتحدة والاستفادة من المساعدة القانونية إذا لزم الأمر.';
    document.getElementById('service3-title').textContent = 'فتح حساب بنكي للشركات';
    document.getElementById('service3-description').textContent = 'فتح حساب بنكي للشركات للقيام بأعمال تجارية المتحدة، فأنت بحاجة إلى فتح حساب مصرفي مخصص للشركات على وجه التحديد. وبموجب القانون يُحظرعلى أصحاب الأعمال القيام بأنشطة تجارية من حساباتهم الشخصية. الحساب الجاري عادةً هو النوع الذي يُنصح بفتحه لأنّه مثالي من ناحية الإجراءات كما أنّه يمكن تحويل مبالغ كبيرة من خلاله.';
    document.getElementById('service4-title').textContent = 'تأسيس شركات في المملكة العربية السعودية';
    document.getElementById('service5-title').textContent = 'تخليص المعاملات الحكومية';
    document.getElementById('section-heading-about').textContent = 'معلومات عنا';
    document.getElementById('section-subheading-about').textContent = 'من نحن';
    document.getElementById('about-text').innerHTML = `
      <p>
        نحن فخورون بأن نكون القائد في مساعدة الشركات الناشئة على بناء أعمالها الناجحة. يمكن أن يكون تأسيس شركة أمرًا مربكًا في البداية، خاصة عندما تبدأ في بلد جديد. لهذا السبب، نحن هنا لنرشدك في كل خطوة على الطريق بفضل تجربتنا التي تمتد لأكثر من 11 عامًا. لقد ساعدنا أكثر من 30،000 رائد أعمال على بدء أعمالهم في دولة الإمارات وحدها. يمكن لفريقنا المؤهل من متخصصي الاستشارات تقديم المساعدة في جميع مراحل إنشاء الشركات. نحن نفهم أن كل رائد أعمال لديه شخصية فريدة وطموح، لذلك نقدم حلولًا مخصصة لتلبية احتياجاتك. سواء كنت تبحث عن بدء شركة جديدة، أو توسيع نشاطات عملك الحالية، أو حتى إذا كنت بحاجة إلى بعض النصائح، نحن هنا للمساعدة. إذا كنت مستعدًا للانطلاق في هذه المغامرة وتحقيق أحلامك العملية وتحويلها إلى واقع، فلا تتردد في الاتصال بنا في مؤسسة المؤيد.
      </p>
    `;
    document.getElementById('partners-heading').textContent = 'شركاؤنا';
    document.getElementById('contact-heading').textContent = 'اتصل بنا';
    document.getElementById('subheading1').textContent = 'هل ترغب في بدء شركتك الخاصة؟';
    document.getElementById('subheading2').textContent = 'إذًا أنت في المكان المناسب... احجز استشارتك المجانية مع أحد خبرائنا المتخصصين لبدء تحقيق أحلامك ونجاحاتك العملية.';
    document.getElementById('address-heading').textContent = 'العنوان :-';
    document.getElementById('address-line1').textContent = 'بناء المخاوي';
    document.getElementById('address-line2').textContent = 'عود ميثاء - دبي';
    document.getElementById('address-line3').textContent = 'الإمارات العربية المتحدة';
    document.getElementById('contact-info').textContent = 'تواصل :-';
    document.getElementById('email-label').textContent = 'البريد الإلكتروني :-';
    document.getElementById('email').innerHTML = '<a style="text-decoration: none" href="mailto:info@almuayid.com" target="_blank">info@almuayid.com</a>';
    document.getElementById('phone-label').textContent = 'الهاتف :-';
    document.getElementById('phone').innerHTML = '<a style="text-decoration: none" href="tel:+971 50 540 3582" target="_blank">+971 50 540 3582</a>';
    document.getElementById('whatsapp-label').textContent = 'واتساب :-';
    document.getElementById('whatsapp').innerHTML = '<a style="text-decoration: none" href="https://wa.me/+971 50 540 3582?text=Hello%20there!" target="_blank">+971 50 540 3582</a>';

  }
function updateLogo(logoName) {
    const logoImage = document.querySelector('.navbar-brand img');
    logoImage.src = `assets/img/${logoName}`;
  }