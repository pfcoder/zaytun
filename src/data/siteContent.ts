import type { Language, SiteContent } from '../lib/types';

export const languages = ['en', 'ar'] as const;
export const defaultLanguage: Language = 'en';
export const directionByLanguage: Record<Language, 'ltr' | 'rtl'> = {
  en: 'ltr',
  ar: 'rtl',
  zh: 'ltr'
};

export const siteContent: Record<Language, SiteContent> = {
  en: {
    meta: {
      title: 'Zaytun L.L.C-FZ | Isostatic Graphite Parts, CNC Machining, Seals, Molds, Crucibles UAE',
      description: 'Zaytun L.L.C-FZ provides isostatic graphite parts, CNC machining, seals, molds, crucibles, and custom graphite components in Dubai and across the UAE.'
    },
    ui: {
      challengeLabel: 'Feature',
      responseLabel: 'Details',
      graphiteGradeLabel: 'Product line',
      dubaiMarker: 'Dubai',
      chinaMarker: 'Factory'
    },
    header: {
      brand: 'Zaytun L.L.C-FZ',
      nav: [
        { label: 'Home', href: '#top' },
        { label: 'About Us', href: '#about' },
        { label: 'Products', href: '#products' },
        { label: 'Machining Capabilities', href: '#technology' },
        { label: 'Applications', href: '#applications' },
        { label: 'Why Choose Us', href: '#why-choose-us' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact Us', href: '#contact' }
      ],
      languages: {
        en: 'EN',
        ar: 'عربي',
        zh: '中文'
      }
    },
    hero: {
      eyebrow: 'Zaytun L.L.C-FZ',
      title: 'Isostatic Graphite Precision Parts Manufactured in Dubai',
      description: 'Custom CNC machining for graphite seals, bearings, molds, crucibles, EDM electrodes, and industrial graphite components with fast local response.',
      primaryCta: { label: 'Get Quote', href: '#contact' },
      secondaryCta: { label: 'View Products', href: '#products' },
      locationNote: 'Local factory support for UAE, Saudi Arabia, GCC, and Middle East industrial buyers.'
    },
    statsIntro: {
      eyebrow: 'About Us',
      title: 'Precision isostatic graphite machining for civilian and industrial applications.',
      description: 'Based in Dubai, UAE, Zaytun L.L.C-FZ specializes in high-performance isostatic graphite products, custom CNC machining, and fast delivery for clients across the UAE, Saudi Arabia, GCC, and the wider Middle East.'
    },
    stats: [
      { value: '±0.01mm', label: 'High Precision CNC tolerance' },
      { value: 'Dubai', label: 'Local production and fast quotation' },
      { value: 'High Purity', label: 'Premium isostatic graphite materials' },
      { value: 'GCC', label: 'Regional support across UAE and the Middle East' }
    ],
    painPointsIntro: {
      eyebrow: 'Why Choose Us',
      title: 'Practical strengths for buyers who need precision, speed, and dependable local support.',
      description: 'This section turns the company advantages into concise buying reasons for technical teams and procurement teams.'
    },
    painPoints: [
      {
        title: 'Dubai Local Factory',
        problem: 'Local UAE presence for faster coordination.',
        solution: 'Direct communication from Dubai supports faster quotations, smoother revisions, and easier project follow-up.'
      },
      {
        title: 'Fast Delivery & Response',
        problem: 'Shorter turnaround for urgent industrial requirements.',
        solution: 'Responsive quoting and local follow-up help buyers move from drawing review to delivery faster.'
      },
      {
        title: 'High Precision CNC Machining',
        problem: 'Tolerances down to ±0.01 mm for critical graphite parts.',
        solution: 'CNC milling, turning, drilling, grinding, and polishing are configured for precision graphite machining.'
      },
      {
        title: 'Customized Solutions',
        problem: 'Production based on customer drawings and technical requirements.',
        solution: 'Any size, shape, and geometry can be machined for both small-batch and mass-production orders.'
      },
      {
        title: 'Stable Quality & Competitive Price',
        problem: 'Reliable output without inflated sourcing cost.',
        solution: 'High-purity isostatic graphite, controlled machining, and practical pricing help buyers balance quality and budget.'
      },
      {
        title: 'Professional Technical Support',
        problem: 'Better communication on drawings, applications, and processing details.',
        solution: 'Technical guidance is available for seals, molds, crucibles, electrodes, and custom industrial graphite parts.'
      }
    ],
    productsIntro: {
      eyebrow: 'Products',
      title: 'Six core product categories for industrial graphite machining and supply.',
      description: 'The homepage focuses on the main product families buyers ask for most often, from sealing parts to custom machined graphite components.'
    },
    products: [
      {
        name: 'Graphite Seals & Bearings',
        summary: 'Mechanical seals, seal rings, bushings, slides, and bearings designed for self-lubricating, high-temperature, and corrosion-resistant performance.',
        specs: ['Used in pumps and desalination systems', 'Supports water treatment and HVAC equipment', 'Suitable for marine and industrial duty']
      },
      {
        name: 'Graphite Molds for Jewelry & Casting',
        summary: 'Jewelry casting molds, gold and silver molds, plus continuous casting molds for copper and aluminum applications.',
        specs: ['High surface smoothness', 'Easy demolding', 'Long service life']
      },
      {
        name: 'EDM Graphite Electrodes',
        summary: 'High-precision graphite electrodes for mold making, automotive parts, and precision metal machining.',
        specs: ['Low wear loss', 'High machining efficiency', 'Stable EDM performance']
      },
      {
        name: 'Graphite Crucibles & Melting Tools',
        summary: 'High-purity graphite crucibles and melting tools for metal melting, gold refining, jewelry casting, and laboratory use.',
        specs: ['High purity material', 'Ultra-high temperature resistance', 'Suitable for precious metal processing']
      },
      {
        name: 'Industrial Graphite Components',
        summary: 'Graphite parts for heat dissipation, furnaces, insulation, conductivity, and industrial structural support.',
        specs: ['Heat dissipation parts', 'Furnace and insulation components', 'Conductive and structural parts']
      },
      {
        name: 'Custom Graphite Parts',
        summary: 'Custom CNC machining according to customer drawings for specialized graphite components.',
        specs: ['Any size and shape accepted', 'Built to technical requirements', 'Small and mass production available']
      }
    ],
    applicationsIntro: {
      eyebrow: 'Applications',
      title: 'Graphite solutions for process industries, casting, machinery, and thermal applications.',
      description: 'The page shows where Zaytun products are used so buyers can quickly connect each product line to their operating environment.'
    },
    applications: [
      { name: 'Oil & Gas', description: 'Graphite components for sealing, wear resistance, and high-temperature operating conditions.' },
      { name: 'Water Desalination & Treatment', description: 'Seal rings, bearings, and related graphite parts for pumps and treatment systems.' },
      { name: 'Jewelry & Gold Casting', description: 'Graphite molds and crucibles for precious metal melting, refining, and casting.' },
      { name: 'Mechanical Equipment', description: 'Bushings, slides, bearings, and custom parts for industrial machinery.' },
      { name: 'Automotive', description: 'Precision EDM electrodes and graphite machining for component and tooling workflows.' },
      { name: 'Electronics & Heat Dissipation', description: 'Graphite parts used where thermal performance and conductivity matter.' },
      { name: 'Industrial Furnaces', description: 'Furnace parts, insulation components, and heat-resistant graphite products.' },
      { name: 'Chemical & Corrosion Resistance', description: 'Self-lubricating and corrosion-resistant graphite parts for harsh process environments.' }
    ],
    technologyIntro: {
      eyebrow: 'Machining Capabilities',
      title: 'Precision CNC processing for high-purity isostatic graphite parts.',
      description: 'The capabilities section focuses on the actual machining services and production flexibility available to graphite buyers.'
    },
    technologyPoints: [
      'CNC milling, turning, drilling, grinding, and polishing',
      'Precision tolerance: ±0.01 mm',
      'Materials: high purity isostatic graphite',
      'Custom design and rapid prototyping',
      'Small batch and mass production',
      'Full-size processing supported'
    ],
    globalServiceIntro: {
      eyebrow: 'Our Factory',
      title: 'Local graphite machining support from Dubai with custom production flexibility.',
      description: 'This section reinforces the factory role, response speed, and project support without turning the page into a full technical catalog.'
    },
    globalServicePoints: [
      'Based in JAFZA and Dubai Industrial City for faster local business coordination.',
      'Supports custom machining from customer drawings for seals, molds, crucibles, and industrial components.',
      'Flexible for both urgent small batches and long-run production requirements.'
    ],
    proofIntro: {
      eyebrow: 'Projects',
      title: 'Precision graphite machining projects for Dubai and Middle East clients.',
      description: 'Representative project themes show the practical product categories and applications supported by Zaytun L.L.C-FZ.'
    },
    proofPoints: [
      {
        title: 'Mechanical seal and bearing machining',
        detail: 'Custom-machined graphite seal rings, bushings, slides, and bearings for pumps, desalination, and industrial equipment.'
      },
      {
        title: 'Jewelry casting molds and crucibles',
        detail: 'Graphite molds for gold and silver casting together with crucibles and melting tools for refining and production use.'
      },
      {
        title: 'EDM and industrial graphite components',
        detail: 'Precision EDM electrodes and structural graphite parts produced to drawing for automotive, furnace, and thermal applications.'
      }
    ],
    contactIntro: {
      eyebrow: 'Contact Us',
      title: 'Request a quote or send your drawing for custom graphite machining.',
      description: 'Reach out for graphite seals, molds, crucibles, EDM electrodes, or custom machined parts. English and Arabic support are both available.'
    },
    contacts: [
      { label: 'Address', value: 'JAFZA / Dubai Industrial City, UAE', href: 'https://maps.google.com/?q=JAFZA%20Dubai%20Industrial%20City%20UAE' },
      { label: 'Email', value: 'contact@zaytun-ind.com', href: 'mailto:contact@zaytun-ind.com' },
      { label: 'Working Hours', value: 'Saturday – Thursday: 8:00 AM – 06:00 PM', href: '#contact' },
      { label: 'Languages', value: 'EN / عربي', href: '#top' }
    ],
    footer: {
      dubaiLabel: 'Address',
      dubaiValue: 'JAFZA / Dubai Industrial City, UAE',
      chinaLabel: 'Email',
      chinaValue: 'contact@zaytun-ind.com',
      supportLabel: 'Working Hours',
      supportValue: 'Saturday – Thursday: 8:00 AM – 06:00 PM',
      socialLabel: '',
      socialValue: '',
      copyright: '© 2026 Zaytun L.L.C-FZ. All Rights Reserved. Isostatic Graphite Precision CNC Machining | Dubai - UAE'
    }
  },
  ar: {
    meta: {
      title: 'زيتون ذ.م.م | قطع جرافيت متساوي الضغط ، تصنيع سى ان سى ، أختام ، قوالب ، أوعية الإمارات',
      description: 'زيتون ذ.م.م تقدم قطع جرافيت متساوي الضغط، وتصنيع سى ان سى، وأختام، وقوالب، وأوعية، وقطع جرافيت مخصصة في دبي وعبر الإمارات.'
    },
    ui: {
      challengeLabel: 'الميزة',
      responseLabel: 'التفاصيل',
      graphiteGradeLabel: 'فئة المنتج',
      dubaiMarker: 'دبي',
      chinaMarker: 'المصنع'
    },
    header: {
      brand: 'زيتون ذ.م.م',
      nav: [
        { label: 'الرئيسية', href: '#top' },
        { label: 'من نحن', href: '#about' },
        { label: 'المنتجات', href: '#products' },
        { label: 'قدرات التصنيع', href: '#technology' },
        { label: 'التطبيقات', href: '#applications' },
        { label: 'لماذا تختارنا', href: '#why-choose-us' },
        { label: 'المشاريع', href: '#projects' },
        { label: 'اتصل بنا', href: '#contact' }
      ],
      languages: {
        en: 'EN',
        ar: 'عربي',
        zh: '中文'
      }
    },
    hero: {
      eyebrow: 'زيتون ذ.م.م',
      title: 'قطع جرافيت متساوي الضغط الدقيقة تصنيعها في دبي',
      description: 'تصنيع سى ان سى مخصص لأختام الجرافيت والمحامل والقوالب والأوعية وأقطاب EDM ومكونات الجرافيت الصناعية مع استجابة محلية سريعة.',
      primaryCta: { label: 'الحصول على عرض سعر', href: '#contact' },
      secondaryCta: { label: 'عرض المنتجات', href: '#products' },
      locationNote: 'دعم مصنع محلي لعملاء الإمارات والسعودية والخليج ومنطقة الشرق الأوسط.'
    },
    statsIntro: {
      eyebrow: 'من نحن',
      title: 'تصنيع دقيق للجرافيت متساوي الضغط للاستخدامات المدنية والصناعية.',
      description: 'تقع زيتون ذ.م.م في دبي، الإمارات العربية المتحدة، وهي مصنع محلي متخصص في التصنيع الدقيق بسى ان سى لمنتجات الجرافيت المتساوي الضغط عالي الأداء مع خدمات مخصصة وتسليم سريع لعملاء الإمارات والسعودية والخليج وجميع منطقة الشرق الأوسط.'
    },
    stats: [
      { value: '±0.01 مم', label: 'دقة تصنيع سى ان سى عالية' },
      { value: 'دبي', label: 'إنتاج محلي وعرض سعر سريع' },
      { value: 'نقاء عال', label: 'جرافيت متساوي الضغط عالي الجودة' },
      { value: 'الخليج', label: 'دعم إقليمي للإمارات والشرق الأوسط' }
    ],
    painPointsIntro: {
      eyebrow: 'لماذا تختارنا',
      title: 'مزايا عملية للمشترين الذين يحتاجون إلى دقة وسرعة ودعم محلي موثوق.',
      description: 'هذا القسم يحول مزايا الشركة إلى أسباب شراء واضحة للفرق الفنية وفرق المشتريات.'
    },
    painPoints: [
      {
        title: 'مصنع محلي في دبي',
        problem: 'وجود محلي في الإمارات لتنسيق أسرع.',
        solution: 'التواصل المباشر من دبي يدعم عروض أسعار أسرع ومراجعات أسهل ومتابعة أوضح للمشاريع.'
      },
      {
        title: 'تسليم سريع واستجابة فورية',
        problem: 'زمن أقصر للطلبات الصناعية العاجلة.',
        solution: 'الاستجابة السريعة في التسعير والمتابعة المحلية تساعد العملاء على الانتقال من الرسم الفني إلى التسليم بسرعة أكبر.'
      },
      {
        title: 'تصنيع سى ان سى دقيق عالي',
        problem: 'دقة تصل إلى ±0.01 ملليمتر لقطع الجرافيت الحرجة.',
        solution: 'يتم تنفيذ التفريز والدوران والحفر والطحن والصقل لتلبية متطلبات التصنيع الدقيق للجرافيت.'
      },
      {
        title: 'حلول مخصصة',
        problem: 'إنتاج حسب رسومات العملاء والمتطلبات الفنية.',
        solution: 'يمكن تصنيع أي حجم أو شكل أو هندسة معقدة للطلبات الصغيرة والإنتاج الكمي.'
      },
      {
        title: 'جودة مستقرة وسعر تنافسي',
        problem: 'مخرجات موثوقة دون رفع غير ضروري في التكلفة.',
        solution: 'الجرافيت عالي النقاء والتصنيع المنضبط والتسعير العملي تساعد العملاء على موازنة الجودة والميزانية.'
      },
      {
        title: 'دعم فني محترف',
        problem: 'تواصل أفضل حول الرسومات والتطبيقات وتفاصيل المعالجة.',
        solution: 'يتوفر دعم فني للأختام والقوالب والأوعية والأقطاب وقطع الجرافيت الصناعية المخصصة.'
      }
    ],
    productsIntro: {
      eyebrow: 'المنتجات',
      title: 'ست فئات رئيسية لمنتجات الجرافيت الصناعية والتصنيع المخصص.',
      description: 'تركز الصفحة الرئيسية على عائلات المنتجات الأساسية التي يطلبها المشترون غالباً، من قطع الإحكام إلى مكونات الجرافيت المصنعة حسب الطلب.'
    },
    products: [
      {
        name: 'أختام ومحامل جرافيت',
        summary: 'أختام ميكانيكية وحلقات أختام وبطانات ومنزلقات ومحامل مصممة للتشحيم الذاتي ومقاومة الحرارة والتآكل.',
        specs: ['تستخدم في المضخات وأنظمة إزالة الملح', 'مناسبة لمعالجة المياه ومعدات التكييف', 'ملائمة للمعدات البحرية والصناعية']
      },
      {
        name: 'قوالب جرافيت للمجوهرات والصب',
        summary: 'قوالب صب للمجوهرات والذهب والفضة، إضافة إلى قوالب الصب المستمر للنحاس والألومنيوم.',
        specs: ['نعومة سطح عالية', 'سهولة الفصل', 'عمر خدمة طويل']
      },
      {
        name: 'أقطاب جرافيت لتصنيع EDM',
        summary: 'أقطاب جرافيت دقيقة لصناعة القوالب وقطع السيارات وتشغيل المعادن بدقة عالية.',
        specs: ['فقد منخفض', 'كفاءة تشغيل عالية', 'أداء ثابت في EDM']
      },
      {
        name: 'أوعية جرافيت وأدوات الذوبان',
        summary: 'أوعية جرافيت عالية النقاء وأدوات ذوبان لاستخدامات صهر المعادن وتنقية الذهب وصب المجوهرات والاستخدام المعملي.',
        specs: ['مادة عالية النقاء', 'مقاومة لدرجات حرارة عالية جداً', 'مناسبة لمعالجة المعادن الثمينة']
      },
      {
        name: 'مكونات جرافيت صناعية',
        summary: 'قطع جرافيت لتبديد الحرارة والأفران والعزل والتوصيل والدعم الهيكلي الصناعي.',
        specs: ['قطع تبديد حرارة', 'مكونات للأفران والعزل', 'قطع موصلة وهيكلية']
      },
      {
        name: 'قطع جرافيت مخصصة',
        summary: 'تصنيع سى ان سى مخصص حسب رسومات العملاء لقطع جرافيت متخصصة.',
        specs: ['أي حجم أو شكل مقبول', 'تصنيع وفق المتطلبات الفنية', 'إنتاج صغير وكبير متاح']
      }
    ],
    applicationsIntro: {
      eyebrow: 'مجالات الاستخدام',
      title: 'حلول جرافيت لقطاعات العمليات الصناعية والصب والمعدات والتطبيقات الحرارية.',
      description: 'يوضح هذا القسم أماكن استخدام منتجات زيتون حتى يتمكن المشترون من ربط كل فئة منتج ببيئة التشغيل الخاصة بهم بسرعة.'
    },
    applications: [
      { name: 'النفط والغاز', description: 'مكونات جرافيت للإحكام ومقاومة التآكل والعمل في درجات الحرارة العالية.' },
      { name: 'إزالة الملح ومعالجة المياه', description: 'حلقات أختام ومحامل وقطع جرافيت للمضخات وأنظمة المعالجة.' },
      { name: 'المجوهرات وصب الذهب', description: 'قوالب جرافيت وأوعية لصهر المعادن الثمينة وتنقيتها وصبها.' },
      { name: 'المعدات الميكانيكية', description: 'بطانات ومنزلقات ومحامل وقطع مخصصة للمعدات الصناعية.' },
      { name: 'السيارات', description: 'أقطاب EDM دقيقة وتصنيع جرافيت للقوالب وعمليات المكونات.' },
      { name: 'الإلكترونيات وتبديد الحرارة', description: 'قطع جرافيت تستخدم عندما تكون الإدارة الحرارية والتوصيل مهمة.' },
      { name: 'الأفران الصناعية', description: 'قطع للأفران وعناصر عزل ومنتجات جرافيت مقاومة للحرارة.' },
      { name: 'الكيمياء والمقاومة للتآكل', description: 'قطع جرافيت ذات تشحيم ذاتي ومقاومة للتآكل لبيئات التشغيل القاسية.' }
    ],
    technologyIntro: {
      eyebrow: 'قدرات التصنيع',
      title: 'معالجة دقيقة بسى ان سى لقطع الجرافيت متساوي الضغط عالية النقاء.',
      description: 'يركز قسم القدرات على خدمات التصنيع الفعلية ومرونة الإنتاج المتاحة لمشتري الجرافيت.'
    },
    technologyPoints: [
      'تصنيع سى ان سى بالتحريك والدوران والحفر والطحن والصقل',
      'دقة التصنيع: ±0.01 ملليمتر',
      'المواد: جرافيت متساوي الضغط عالي النقاء',
      'تصميم مخصص ونماذج أولية سريعة',
      'إنتاج دفعات صغيرة وإنتاج ضخم',
      'دعم تصنيع كافة الأحجام'
    ],
    globalServiceIntro: {
      eyebrow: 'مصنعنا',
      title: 'دعم محلي لتصنيع الجرافيت من دبي مع مرونة في الإنتاج المخصص.',
      description: 'يعزز هذا القسم دور المصنع وسرعة الاستجابة ودعم المشاريع دون تحويل الصفحة إلى كتالوج تقني كامل.'
    },
    globalServicePoints: [
      'العمل من خلال جبل علي ومدينة دبي الصناعية لتنسيق أعمال محلي أسرع.',
      'دعم التصنيع المخصص حسب الرسومات للأختام والقوالب والأوعية والمكونات الصناعية.',
      'مرونة للطلبات العاجلة الصغيرة ومتطلبات الإنتاج المستمر طويلة المدى.'
    ],
    proofIntro: {
      eyebrow: 'المشاريع',
      title: 'مشاريع تصنيع قطع جرافيت دقيقة لعملاء دبي والشرق الأوسط.',
      description: 'تعرض أمثلة المشاريع فئات المنتجات والتطبيقات العملية التي تدعمها زيتون ذ.م.م.'
    },
    proofPoints: [
      {
        title: 'تصنيع أختام ومحامل ميكانيكية',
        detail: 'تصنيع حلقات أختام وبطانات ومنزلقات ومحامل جرافيت للمضخات وإزالة الملح والمعدات الصناعية.'
      },
      {
        title: 'قوالب مجوهرات وأوعية صهر',
        detail: 'قوالب جرافيت لصب الذهب والفضة مع أوعية وأدوات ذوبان لاستخدامات التنقية والإنتاج.'
      },
      {
        title: 'أقطاب EDM ومكونات صناعية',
        detail: 'إنتاج أقطاب EDM دقيقة وقطع جرافيت هيكلية حسب الرسومات لتطبيقات السيارات والأفران والتبديد الحراري.'
      }
    ],
    contactIntro: {
      eyebrow: 'اتصل بنا',
      title: 'اطلب عرض سعر أو أرسل الرسم الفني للتصنيع المخصص.',
      description: 'تواصل معنا بخصوص أختام الجرافيت والقوالب والأوعية وأقطاب EDM وقطع الجرافيت المصنعة حسب الطلب. الدعم متاح بالإنجليزية والعربية.'
    },
    contacts: [
      { label: 'العنوان', value: 'جافزا / مدينة دبي الصناعية، الإمارات', href: 'https://maps.google.com/?q=JAFZA%20Dubai%20Industrial%20City%20UAE' },
      { label: 'البريد الإلكتروني', value: 'contact@zaytun-ind.com', href: 'mailto:contact@zaytun-ind.com' },
      { label: 'ساعات العمل', value: 'السبت إلى الخميس: 8:00 صباحاً – 06:00 مساءً', href: '#contact' },
      { label: 'اللغات', value: 'EN / عربي', href: '#top' }
    ],
    footer: {
      dubaiLabel: 'العنوان',
      dubaiValue: 'جافزا / مدينة دبي الصناعية، الإمارات',
      chinaLabel: 'البريد الإلكتروني',
      chinaValue: 'contact@zaytun-ind.com',
      supportLabel: 'ساعات العمل',
      supportValue: 'السبت إلى الخميس: 8:00 صباحاً – 06:00 مساءً',
      socialLabel: '',
      socialValue: '',
      copyright: '© 2026 زيتون ذ.م.م. جميع الحقوق محفوظة. تصنيع جرافيت متساوي الضغط دقيق بسى ان سى | دبي - الإمارات العربية المتحدة'
    }
  },
  zh: {
    meta: {
      title: 'Zaytun Graphite | 面向全球工业的等静压石墨',
      description: '面向光伏、半导体、EDM 与先进制造领域的现代工业型等静压石墨落地页。'
    },
    ui: {
      challengeLabel: '挑战',
      responseLabel: '解决方案',
      graphiteGradeLabel: '石墨牌号',
      dubaiMarker: '迪拜',
      chinaMarker: '中国'
    },
    header: {
      brand: 'Zaytun Graphite',
      nav: [
        { label: '关于我们', href: '#about' },
        { label: '产品', href: '#products' },
        { label: '应用', href: '#applications' },
        { label: '技术', href: '#technology' },
        { label: '联系', href: '#contact' }
      ],
      languages: {
        en: 'EN',
        ar: 'AR',
        zh: '中文'
      }
    },
    hero: {
      eyebrow: '迪拜商务枢纽，中国制造基地。',
      title: '高性能等静压石墨，面向全球稳定交付。',
      description: '从光伏到半导体，从航空航天到 EDM，Zaytun Graphite 以产能规模、工艺纪律和快速出口响应服务高要求工业客户。',
      primaryCta: { label: '获取报价', href: '#contact' },
      secondaryCta: { label: '查看产品', href: '#products' },
      locationNote: '面向中东与北非的商务响应，由中国大规模制造能力支撑。'
    },
    statsIntro: {
      eyebrow: '工业级信任',
      title: '围绕稳定性、产能与采购信心而构建。',
      description: '首版聚焦技术团队和采购团队最关心的关键数字。'
    },
    stats: [
      { value: '20+', label: '年石墨创新经验' },
      { value: '38,400', label: '吨年产能' },
      { value: '34%', label: '全国细颗粒石墨市场份额' },
      { value: '100+', label: '服务光伏客户' }
    ],
    painPointsIntro: {
      eyebrow: '客户关注点',
      title: '直接回应影响良率、寿命和交付周期的核心问题。',
      description: '页面以实际业务结果来定义公司价值，而不是泛泛的技术表述。'
    },
    painPoints: [
      {
        title: '纯度稳定，保护良率',
        problem: '杂质波动会影响高价值工艺场景下的稳定性。',
        solution: '面向 50 PPM 或更低水平的高纯材料，有助于保护对良率敏感的生产过程。'
      },
      {
        title: '更长的热场寿命',
        problem: '部件寿命偏短会增加停机和更换成本。',
        solution: '更高体积密度和更强机械性能有助于在严苛条件下延长使用周期。'
      },
      {
        title: '可规划的交付周期',
        problem: '不稳定的供应链会拖慢生产并增加库存压力。',
        solution: '大规模产能和战略库存有助于提升出口市场响应速度。'
      }
    ],
    productsIntro: {
      eyebrow: '核心牌号',
      title: '面向热工、电加工与高端工业场景的核心石墨材料。',
      description: '首版展示四个代表性产品，为初步技术和采购沟通提供足够信息。'
    },
    products: [
      {
        name: 'WX-5',
        summary: '面向高要求热场应用的高密度等静压石墨牌号。',
        specs: ['超细结构', '高强度表现', '稳定热性能']
      },
      {
        name: 'WX-3',
        summary: '兼顾纯度、加工性与生产一致性的平衡型牌号。',
        specs: ['细颗粒', '杂质控制', '工艺重复性强']
      },
      {
        name: 'EDM-200',
        summary: '适用于 EDM 工具场景，关注精度与损耗表现。',
        specs: ['支持精密加工', '低损耗倾向', '电极性能稳定']
      },
      {
        name: 'SEM-HP',
        summary: '面向半导体相关工艺环境的高纯选项。',
        specs: ['高纯定位', '强调工艺洁净度', '具备出口供应支持']
      }
    ],
    applicationsIntro: {
      eyebrow: '应用行业',
      title: '一套材料平台，服务多个先进制造行业。',
      description: '页面需要体现广泛行业适配能力，但不把首版做成完整产品目录。'
    },
    applications: [
      { name: '光伏', description: '面向热场与光伏制造环境的石墨解决方案。' },
      { name: '半导体', description: '为高纯度敏感工艺提供支持。' },
      { name: 'EDM 模具', description: '适用于电极应用的精密石墨牌号。' },
      { name: '核能', description: '面向专业工程应用的性能型材料。' },
      { name: '冶金', description: '适用于高热工业工艺的耐用石墨部件。' },
      { name: '航空航天', description: '服务高规格制造链条的可靠材料。' }
    ],
    technologyIntro: {
      eyebrow: '工艺与质量',
      title: '技术可信度应来自工艺控制、可追溯性与克制的质量表达。',
      description: '首版使用简洁、可信的表述，而不是堆叠过重的技术文档。'
    },
    technologyPoints: [
      '围绕等静压工艺传达稳定性、密度与可重复质量。',
      '质量表达聚焦检测、追溯与批次一致性控制。',
      '视觉展示应突出真实制造能力，而非抽象科技图形。'
    ],
    globalServiceIntro: {
      eyebrow: '全球服务模式',
      title: '中国制造，迪拜协同，面向区域物流与国际客户响应。',
      description: '这一部分解释迪拜的商务与区域协调角色，而不提前扩展为完整物流平台。'
    },
    globalServicePoints: [
      '迪拜承担面向中东、非洲和欧洲的商务协调角色。',
      '中国制造基地提供供应连续性所需的规模与工艺深度。',
      '通过杰贝阿里相关出口叙事强化区域交付优势。'
    ],
    proofIntro: {
      eyebrow: '示意性成果',
      title: '用简短结果增强可信度，但不使用真实客户名称。',
      description: '在获得真实案例前，这些内容保持为通用占位。'
    },
    proofPoints: [
      {
        title: '光伏热场性能提升',
        detail: '示意成果：切换至更高性能牌号后，热场寿命提升约 30%。'
      },
      {
        title: '高纯工艺验证支持',
        detail: '示意成果：通过更严格的杂质控制与批次稳定性，工艺验证表现得到改善。'
      }
    ],
    contactIntro: {
      eyebrow: '开始沟通',
      title: '服务严肃询盘、技术交流与出口采购需求。',
      description: '首版使用直接联系路径，而不是接入式表单，以保持页面轻量和可信。'
    },
    contacts: [
      { label: '销售邮箱', value: 'contact@zaytun-ind.com', href: 'mailto:contact@zaytun-ind.com' },
      { label: '技术支持', value: 'tech@zaytun-ind.com', href: 'mailto:tech@zaytun-ind.com' },
      // { label: '电话', value: '+971 4 000 0000', href: 'tel:+97140000000' }
      // { label: 'WhatsApp', value: '+971 50 000 0000', href: 'https://wa.me/971500000000' }
    ],
    footer: {
      dubaiLabel: '迪拜办公室',
      dubaiValue: 'Dubai Silicon Oasis, Dubai, UAE',
      chinaLabel: '制造基地',
      chinaValue: '中国石墨制造与出口运营',
      supportLabel: '支持',
      supportValue: 'tech@zaytun-ind.com',
      socialLabel: '',
      socialValue: '',
      copyright: '© 2026 Zaytun Graphite. 版权所有。'
    }
  }
};
