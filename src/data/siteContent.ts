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
      title: 'Zaytun Graphite | Isostatic Graphite for Global Industry',
      description: 'A modern industrial landing page for high-performance isostatic graphite serving PV, semiconductor, EDM, and advanced manufacturing markets.'
    },
    ui: {
      challengeLabel: 'Challenge',
      responseLabel: 'Response',
      graphiteGradeLabel: 'Graphite grade',
      dubaiMarker: 'Dubai',
      chinaMarker: 'China'
    },
    header: {
      brand: 'Zaytun Graphite',
      nav: [
        { label: 'About', href: '#about' },
        { label: 'Products', href: '#products' },
        { label: 'Applications', href: '#applications' },
        { label: 'Technology', href: '#technology' },
        { label: 'Contact', href: '#contact' }
      ],
      languages: {
        en: 'EN',
        ar: 'AR',
        zh: '中文'
      }
    },
    hero: {
      eyebrow: 'Dubai commercial hub. China manufacturing base.',
      title: 'High-Performance Isostatic Graphite. Delivered Global.',
      description: 'From PV to semiconductors, aerospace to EDM, Zaytun Graphite pairs production scale, process discipline, and responsive export support for demanding industrial buyers.',
      primaryCta: { label: 'Request a Quote', href: '#contact' },
      secondaryCta: { label: 'Explore Products', href: '#products' },
      locationNote: 'Located for MENA access, backed by large-scale manufacturing in China.'
    },
    statsIntro: {
      eyebrow: 'Trusted at industrial scale',
      title: 'Built around consistency, throughput, and buyer confidence.',
      description: 'The first release focuses on the numbers that matter most to technical and procurement teams.'
    },
    stats: [
      { value: '20+', label: 'years of graphite innovation' },
      { value: '38,400', label: 'tons annual output' },
      { value: '34%', label: 'national fine-graphite market share' },
      { value: '100+', label: 'PV customers served' }
    ],
    painPointsIntro: {
      eyebrow: 'Buyer priorities',
      title: 'Solve the issues that directly affect yield, service life, and delivery schedules.',
      description: 'The page frames the company around practical outcomes instead of generic technical claims.'
    },
    painPoints: [
      {
        title: 'Purity that protects yield',
        problem: 'Impurity variation can reduce process stability in high-value applications.',
        solution: 'Ultra-high purity materials targeting 50 PPM or below help protect yield-sensitive production.'
      },
      {
        title: 'Longer hot-zone life',
        problem: 'Short component life increases downtime and replacement cost.',
        solution: 'High bulk density and strong mechanical performance support longer service life under demanding conditions.'
      },
      {
        title: 'Lead times you can plan around',
        problem: 'Unreliable supply chains delay production and strain inventory planning.',
        solution: 'Large-scale output and strategic stock help support faster response across export markets.'
      }
    ],
    productsIntro: {
      eyebrow: 'Featured grades',
      title: 'Core graphite grades for thermal, electrical, and precision industrial use.',
      description: 'The launch page highlights four representative products with enough detail to support early buyer conversations.'
    },
    products: [
      {
        name: 'WX-5',
        summary: 'A high-density isostatic graphite grade positioned for demanding thermal-field applications.',
        specs: ['Ultra-fine structure', 'High strength profile', 'Stable thermal behavior']
      },
      {
        name: 'WX-3',
        summary: 'A balanced grade for buyers who need reliable purity, machinability, and production consistency.',
        specs: ['Fine grain', 'Controlled impurity level', 'Strong process repeatability']
      },
      {
        name: 'EDM-200',
        summary: 'A graphite grade aimed at EDM tooling where accuracy and wear behavior matter.',
        specs: ['Precision machining support', 'Low wear tendency', 'Consistent electrode performance']
      },
      {
        name: 'SEM-HP',
        summary: 'A high-purity option designed for semiconductor-adjacent process environments.',
        specs: ['High purity positioning', 'Process cleanliness focus', 'Export-ready supply support']
      }
    ],
    applicationsIntro: {
      eyebrow: 'Industries served',
      title: 'One material platform supporting multiple advanced manufacturing sectors.',
      description: 'The landing page should make the company feel relevant across a broad industrial buyer set without becoming a full catalog.'
    },
    applications: [
      { name: 'Photovoltaics', description: 'Graphite solutions for thermal-field and PV production environments.' },
      { name: 'Semiconductors', description: 'High-purity support for process-sensitive manufacturing.' },
      { name: 'EDM Mold Making', description: 'Precision graphite grades for electrode applications.' },
      { name: 'Nuclear', description: 'Performance-focused materials for specialized engineering use cases.' },
      { name: 'Metallurgy', description: 'Durable graphite components for heat-intensive industrial processes.' },
      { name: 'Aerospace', description: 'Reliable materials for advanced, high-specification manufacturing chains.' }
    ],
    technologyIntro: {
      eyebrow: 'Process and quality',
      title: 'Technical credibility should come from process control, traceability, and disciplined quality messaging.',
      description: 'The launch page uses concise proof-oriented statements instead of overwhelming visitors with dense documentation.'
    },
    technologyPoints: [
      'Isostatic processing positioned around stability, density, and repeatable quality.',
      'Quality systems messaging centered on inspection, traceability, and consistent batch control.',
      'Production presentation should emphasize real manufacturing capability over abstract technology visuals.'
    ],
    globalServiceIntro: {
      eyebrow: 'Global service model',
      title: 'Manufactured in China. Positioned through Dubai for regional coordination and export responsiveness.',
      description: 'This section explains the Dubai role without pretending the launch site already includes a full logistics platform.'
    },
    globalServicePoints: [
      'Dubai supports commercial coordination across MENA, Africa, and Europe.',
      'China-based manufacturing provides the scale and process depth behind supply continuity.',
      'Messaging should reinforce faster regional access through Jebel Ali-linked export positioning.'
    ],
    proofIntro: {
      eyebrow: 'Illustrative proof points',
      title: 'Short buyer-facing outcomes that reinforce capability without naming real customers.',
      description: 'These remain intentionally generic placeholders until real case material is available.'
    },
    proofPoints: [
      {
        title: 'PV thermal-field performance',
        detail: 'Illustrative customer outcome: hot-zone service life improved by roughly 30% after switching to a higher-performance grade.'
      },
      {
        title: 'Purity-sensitive qualification support',
        detail: 'Illustrative customer outcome: process validation improved after tighter impurity control and more stable batch consistency.'
      }
    ],
    contactIntro: {
      eyebrow: 'Start the conversation',
      title: 'Built for serious inquiries, sourcing conversations, and export-ready follow-up.',
      description: 'Version one uses direct contact paths instead of a connected form so the page can stay lean and credible.'
    },
    contacts: [
      { label: 'Sales Email', value: 'contact@zaytun-ind.com', href: 'mailto:contact@zaytun-ind.com' },
      { label: 'Technical Support', value: 'tech@zaytun-ind.com', href: 'mailto:tech@zaytun-ind.com' }
      // { label: 'Phone', value: '+971 4 000 0000', href: 'tel:+97140000000' },
      // { label: 'WhatsApp', value: '+971 50 000 0000', href: 'https://wa.me/971500000000' }
    ],
    footer: {
      dubaiLabel: 'Dubai Office',
      dubaiValue: 'Dubai Silicon Oasis, Dubai, UAE',
      chinaLabel: 'Manufacturing Base',
      chinaValue: 'China graphite production and export operations',
      supportLabel: 'Support',
      supportValue: 'contact@zaytun-ind.com',
      socialLabel: '',
      socialValue: '',
      copyright: '© 2026 Zaytun Graphite. All rights reserved.'
    }
  },
  ar: {
    meta: {
      title: 'زيتون جرافيت | جرافيت متساوي الضغط للصناعة العالمية',
      description: 'صفحة صناعية حديثة لمنتجات الجرافيت متساوي الضغط الموجهة لقطاعات الطاقة الشمسية وأشباه الموصلات والتصنيع المتقدم.'
    },
    ui: {
      challengeLabel: 'التحدي',
      responseLabel: 'الاستجابة',
      graphiteGradeLabel: 'درجة الجرافيت',
      dubaiMarker: 'دبي',
      chinaMarker: 'الصين'
    },
    header: {
      brand: 'زيتون جرافيت',
      nav: [
        { label: 'من نحن', href: '#about' },
        { label: 'المنتجات', href: '#products' },
        { label: 'التطبيقات', href: '#applications' },
        { label: 'التقنية', href: '#technology' },
        { label: 'اتصل بنا', href: '#contact' }
      ],
      languages: {
        en: 'EN',
        ar: 'AR',
        zh: '中文'
      }
    },
    hero: {
      eyebrow: 'مركز تجاري في دبي وقاعدة تصنيع في الصين.',
      title: 'جرافيت متساوي الضغط عالي الأداء. توريد عالمي موثوق.',
      description: 'من الطاقة الشمسية إلى أشباه الموصلات، ومن الطيران إلى EDM، تجمع زيتون جرافيت بين القدرة الإنتاجية والانضباط التشغيلي والدعم التصديري السريع للمشترين الصناعيين.',
      primaryCta: { label: 'اطلب عرض سعر', href: '#contact' },
      secondaryCta: { label: 'استكشف المنتجات', href: '#products' },
      locationNote: 'وصول أسرع إلى أسواق الشرق الأوسط وشمال أفريقيا بدعم من تصنيع واسع النطاق في الصين.'
    },
    statsIntro: {
      eyebrow: 'ثقة على نطاق صناعي',
      title: 'التركيز على الثبات والإنتاجية وما يمنح فرق الشراء الثقة.',
      description: 'الإصدار الأول يبرز الأرقام التي تهم الفرق الفنية وفرق التوريد.'
    },
    stats: [
      { value: '20+', label: 'سنة من خبرة الجرافيت' },
      { value: '38,400', label: 'طن إنتاج سنوي' },
      { value: '34%', label: 'حصة سوقية وطنية للجرافيت الدقيق' },
      { value: '100+', label: 'عميل في قطاع الطاقة الشمسية' }
    ],
    painPointsIntro: {
      eyebrow: 'أولويات المشتري',
      title: 'معالجة العوامل التي تؤثر مباشرة على العائد التشغيلي والعمر الافتراضي ومواعيد التوريد.',
      description: 'تقدم الصفحة الشركة من خلال نتائج عملية بدلاً من ادعاءات تقنية عامة.'
    },
    painPoints: [
      {
        title: 'نقاء يحافظ على العائد',
        problem: 'تفاوت الشوائب قد يقلل من استقرار العمليات في التطبيقات عالية القيمة.',
        solution: 'مواد عالية النقاء تستهدف 50 جزءاً في المليون أو أقل لحماية العمليات الحساسة للعائد.'
      },
      {
        title: 'عمر أطول للمناطق الحرارية',
        problem: 'قصر عمر المكونات يزيد التوقفات وتكاليف الاستبدال.',
        solution: 'الكثافة العالية والأداء الميكانيكي القوي يدعمان عمراً تشغيلياً أطول في الظروف الصعبة.'
      },
      {
        title: 'مواعيد توريد يمكن التخطيط لها',
        problem: 'سلاسل التوريد غير المستقرة تؤخر الإنتاج وتضغط على المخزون.',
        solution: 'القدرة الإنتاجية الكبيرة والمخزون الاستراتيجي يدعمان استجابة أسرع للأسواق التصديرية.'
      }
    ],
    productsIntro: {
      eyebrow: 'درجات مختارة',
      title: 'درجات جرافيت أساسية للتطبيقات الحرارية والكهربائية والصناعية الدقيقة.',
      description: 'تعرض الصفحة أربع درجات تمثيلية تكفي لبدء محادثات الشراء الفنية.'
    },
    products: [
      {
        name: 'WX-5',
        summary: 'درجة جرافيت عالية الكثافة للتطبيقات الحرارية المتطلبة.',
        specs: ['بنية دقيقة جداً', 'مستوى قوة مرتفع', 'استقرار حراري موثوق']
      },
      {
        name: 'WX-3',
        summary: 'خيار متوازن للنقاء وقابلية التشغيل وثبات الإنتاج.',
        specs: ['حبيبات دقيقة', 'تحكم في الشوائب', 'ثبات عال في التكرار']
      },
      {
        name: 'EDM-200',
        summary: 'درجة موجهة لأدوات EDM حيث الدقة وسلوك التآكل مهمان.',
        specs: ['دعم للتشغيل الدقيق', 'ميل منخفض للتآكل', 'أداء ثابت للأقطاب']
      },
      {
        name: 'SEM-HP',
        summary: 'خيار عالي النقاء لبيئات التصنيع المرتبطة بأشباه الموصلات.',
        specs: ['تموضع عالي النقاء', 'تركيز على نظافة العمليات', 'دعم توريد جاهز للتصدير']
      }
    ],
    applicationsIntro: {
      eyebrow: 'القطاعات المخدومة',
      title: 'منصة مواد واحدة تدعم عدداً من قطاعات التصنيع المتقدم.',
      description: 'تعطي الصفحة انطباعاً بملاءمة الشركة لعدة قطاعات من دون أن تتحول إلى كتالوج كامل.'
    },
    applications: [
      { name: 'الطاقة الشمسية', description: 'حلول جرافيت لبيئات الإنتاج والحقول الحرارية.' },
      { name: 'أشباه الموصلات', description: 'دعم عالي النقاء للعمليات الحساسة.' },
      { name: 'قوالب EDM', description: 'درجات دقيقة لتطبيقات الأقطاب.' },
      { name: 'الطاقة النووية', description: 'مواد موجهة لاستخدامات هندسية متخصصة.' },
      { name: 'علم المعادن', description: 'مكونات جرافيت متينة للعمليات الحرارية المكثفة.' },
      { name: 'الطيران', description: 'مواد موثوقة لسلاسل تصنيع عالية المواصفات.' }
    ],
    technologyIntro: {
      eyebrow: 'العملية والجودة',
      title: 'المصداقية التقنية يجب أن تظهر من خلال التحكم في العملية والتتبع ورسائل الجودة المنضبطة.',
      description: 'يعتمد الإصدار الأول على عبارات موجزة قائمة على الثقة بدلاً من وثائق كثيفة.'
    },
    technologyPoints: [
      'التموضع حول المعالجة المتساوية الضغط من أجل الثبات والكثافة وجودة قابلة للتكرار.',
      'رسائل الجودة تركز على الفحص والتتبع والتحكم المستمر في الدفعات.',
      'العرض البصري يجب أن يبرز القدرة التصنيعية الحقيقية لا الرسومات التقنية المجردة.'
    ],
    globalServiceIntro: {
      eyebrow: 'نموذج الخدمة العالمي',
      title: 'تصنيع في الصين وتموضع في دبي لتنسيق الأعمال وتسريع الاستجابة التصديرية.',
      description: 'يوضح هذا القسم دور دبي من دون الإيحاء بوجود منصة لوجستية كاملة في الإصدار الأول.'
    },
    globalServicePoints: [
      'دبي تدعم التنسيق التجاري عبر الشرق الأوسط وأفريقيا وأوروبا.',
      'التصنيع في الصين يوفر الحجم والعمق التشغيلي لاستمرارية الإمداد.',
      'الرسالة التسويقية تؤكد سرعة الوصول الإقليمي عبر تموضع تصديري مرتبط بجبل علي.'
    ],
    proofIntro: {
      eyebrow: 'أمثلة توضيحية',
      title: 'نتائج موجزة تعزز الثقة من دون ذكر أسماء عملاء حقيقيين.',
      description: 'تبقى هذه الأمثلة مؤقتة وعامة حتى تتوفر مواد حالات حقيقية.'
    },
    proofPoints: [
      {
        title: 'أداء الحقول الحرارية للطاقة الشمسية',
        detail: 'نتيجة توضيحية: تحسن عمر الخدمة بنحو 30% بعد التحول إلى درجة أعلى أداء.'
      },
      {
        title: 'دعم الاعتماد في البيئات الحساسة للنقاء',
        detail: 'نتيجة توضيحية: تحسن التحقق التشغيلي مع تشديد التحكم في الشوائب وثبات الدفعات.'
      }
    ],
    contactIntro: {
      eyebrow: 'ابدأ التواصل',
      title: 'واجهة مهيأة للاستفسارات الجادة والمحادثات الفنية وطلبات التوريد التصديرية.',
      description: 'يعتمد الإصدار الأول على وسائل اتصال مباشرة بدلاً من نموذج متصل للحفاظ على بساطة وموثوقية الصفحة.'
    },
    contacts: [
      { label: 'بريد المبيعات', value: 'contact@zaytun-ind.com', href: 'mailto:contact@zaytun-ind.com' },
      { label: 'الدعم الفني', value: 'tech@zaytun-ind.com', href: 'mailto:tech@zaytun-ind.com' }
      // { label: 'الهاتف', value: '+971 4 000 0000', href: 'tel:+97140000000' },
      // { label: 'واتساب', value: '+971 50 000 0000', href: 'https://wa.me/971500000000' }
    ],
    footer: {
      dubaiLabel: 'مكتب دبي',
      dubaiValue: 'واحة دبي للسيليكون، دبي، الإمارات',
      chinaLabel: 'قاعدة التصنيع',
      chinaValue: 'عمليات إنتاج الجرافيت والتصدير في الصين',
      supportLabel: 'الدعم',
      supportValue: 'tech@zaytun-ind.com',
      socialLabel: '',
      socialValue: '',
      copyright: '© 2026 زيتون جرافيت. جميع الحقوق محفوظة.'
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
