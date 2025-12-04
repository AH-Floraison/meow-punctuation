export type Locale = "zh" | "en";

export type CopyMap = Record<Locale, string>;

export type Strength = {
  id: string;
  title: CopyMap;
  description: CopyMap;
  bullets?: CopyMap[];
};

export type AdoptionStep = {
  title: CopyMap;
  description: CopyMap;
};

export type Announcement = {
  label: CopyMap;
  href?: string;
};

export type KittenCard = {
  id: string;
  name: CopyMap;
  status: CopyMap;
  description: CopyMap;
  traits: CopyMap[];
  media: string;
};

export type StoryCallout = {
  title: CopyMap;
  description: CopyMap;
  action: CopyMap;
};

export type Testimonial = {
  quote: CopyMap;
  author: CopyMap;
  detail: CopyMap;
};

export const contact = {
  phone: "07455403442",
  wechat: "Katieb07455403442",
};

export const announcements: Announcement[] = [
  {
    label: {
      zh: "12% 学生优惠 · 使用 uni 邮箱即可领取",
      en: "12% student privilege with your uni email",
    },
  },
  {
    label: {
      zh: "满 £40 24 小时内免运寄送新家礼包",
      en: "Complimentary 24h delivery care kit on orders over £40",
    },
  },
  {
    label: {
      zh: "私信微信获取 VIP 领养礼包 / VIP Gift Pack via WeChat",
      en: "Message us on WeChat for a VIP adoption welcome kit",
    },
  },
];

export const strengths: Strength[] = [
  {
    id: "systems",
    title: {
      zh: "国际三大系统注册",
      en: "Registered with CFA / TICA / WCF",
    },
    description: {
      zh: "血统透明、记录权威，为未来赛场打下基础。",
      en: "Transparent pedigrees and authoritative records for show success.",
    },
  },
  {
    id: "scale",
    title: {
      zh: "精品规模，品质优先",
      en: "Boutique Scale, Quality First",
    },
    description: {
      zh: "每年只规划少量胎，给予充足陪伴与训练。",
      en: "Limited litters each year ensure ample care and socialization.",
    },
  },
  {
    id: "health",
    title: {
      zh: "健康为先 · 全面筛查",
      en: "Health First · Comprehensive Screening",
    },
    description: {
      zh: "遗传病检测、心脏骨骼评估与年度体检，守护健康起点。",
      en: "Genetic tests, heart & skeletal evaluations, and annual exams safeguard every kitten.",
    },
    bullets: [
      {
        zh: "遗传病基因检测",
        en: "Hereditary genetic tests",
      },
      {
        zh: "心脏与骨骼评估",
        en: "Cardiac and skeletal evaluations",
      },
      {
        zh: "年度常规健康检查",
        en: "Annual comprehensive health exams",
      },
    ],
  },
  {
    id: "social",
    title: {
      zh: "家庭化社交训练",
      en: "Family-Based Socialization",
    },
    description: {
      zh: "真实家庭环境中成长，早早适应触摸与互动。",
      en: "Raised in a real home environment to normalize touch and daily sounds.",
    },
    bullets: [
      {
        zh: "接受抚摸、被抱与梳理",
        en: "Handled, cuddled, and groomed daily",
      },
      {
        zh: "习惯家庭声响与节奏",
        en: "Accustomed to household sounds and rhythms",
      },
      {
        zh: "与人温柔互动",
        en: "Engage in gentle human interaction",
      },
    ],
  },
  {
    id: "structure",
    title: {
      zh: "注重赛级外貌结构",
      en: "Show-Standard Type",
    },
    description: {
      zh: "从头部结构、骨量、比例与短腿标准严苛挑选。",
      en: "Careful selection for head type, bone, balance, and signature short legs.",
    },
  },
  {
    id: "transparent",
    title: {
      zh: "透明负责的送养流程",
      en: "Transparent, Responsible Adoption",
    },
    description: {
      zh: "芯片、疫苗、保险、驱虫、证书与终身咨询一应俱全。",
      en: "Microchips, vaccines, insurance guidance, deworming, papers, and lifetime support included.",
    },
  },
];

export const adoptionSteps: AdoptionStep[] = [
  {
    title: { zh: "初步咨询", en: "Initial Inquiry" },
    description: {
      zh: "了解家庭需求、生活节奏与理想性格匹配。",
      en: "Discuss lifestyle, expectations, and ideal temperament.",
    },
  },
  {
    title: { zh: "专属匹配", en: "Curated Match" },
    description: {
      zh: "根据品种特征与猫咪性格推荐合适的小猫。",
      en: "Recommend kittens that fit your preferred traits and temperament.",
    },
  },
  {
    title: { zh: "健康核验", en: "Health Assurance" },
    description: {
      zh: "提供检测记录、疫苗与体检资料，确保透明。",
      en: "Share test results, vaccination logs, and vet reports.",
    },
  },
  {
    title: { zh: "家庭准备", en: "Home Preparation" },
    description: {
      zh: "提供用品清单与适应指南，帮助布置温暖新家。",
      en: "Provide supply checklists and acclimation guides for a smooth arrival.",
    },
  },
  {
    title: { zh: "正式交接", en: "Handover Day" },
    description: {
      zh: "芯片、证书、疫苗手册与照护建议完整交接。",
      en: "Deliver microchip info, certificates, vaccine booklets, and care tips.",
    },
  },
  {
    title: { zh: "终身支持", en: "Lifetime Support" },
    description: {
      zh: "不限时咨询与复训建议，持续陪伴每个家庭。",
      en: "Ongoing advice and refresher training whenever you need it.",
    },
  },
];

export const breeds = [
  {
    name: { zh: "米努特 Minuet", en: "Minuet" },
    focus: {
      zh: "短腿、圆润脸型与大眼神情。",
      en: "Short legs, rounded faces, expressive eyes.",
    },
    temperament: {
      zh: "温柔、黏人、喜爱与人互动。",
      en: "Tender, people-oriented, loves gentle interaction.",
    },
  },
  {
    name: { zh: "曼基康 Munchkin", en: "Munchkin" },
    focus: {
      zh: "平衡骨量与敏捷度，强调健康腿部结构。",
      en: "Balanced bone structure with agile, healthy limbs.",
    },
    temperament: {
      zh: "活泼好奇、适应力强、与家庭成员友好。",
      en: "Playful, curious, adaptable, and family-friendly.",
    },
  },
];

export const brandStory = {
  headline: {
    zh: "喵标点喵屋 · Meow Punctuation Cattery",
    en: "Meow Punctuation Cattery · Official Story",
  },
  intro: {
    zh: "喵标点喵屋（The Punctuation Cattery）是一家致力于繁育 Minuet（米努特）的精品猫舍。我们相信，在生命的故事里，猫咪是最温柔的标点——轻轻停在你心里，让日常有了节奏，也有了暖意。",
    en: "Meow Punctuation Cattery is a boutique program dedicated to Minuet cats. We believe every feline is the gentlest punctuation in life's story—resting in your heart, adding rhythm and warmth to everyday moments.",
  },
  certifications: {
    zh: "作为 CFA / TICA / WCF 国际认证的专业猫舍，喵标点喵屋坚持“小而精”的育种理念，用科学、用温柔，也用一点点可爱，育出健康、漂亮、性格稳定的小猫。",
    en: "As a CFA / TICA / WCF registered cattery, we stay intentionally small, blending science, tenderness, and a touch of whimsy to raise healthy, beautiful, even-tempered kittens.",
  },
  closing: {
    zh: "喵标点喵屋的每一只小猫，都是一句话里最温柔的标点。它们不喧闹，却能改变你的生活节奏。愿它们落在你心里时，带来停顿、治愈与温暖。欢迎来到喵标点喵屋，在这里，你会遇见属于你的那一小点幸福。",
    en: "Each kitten from Meow Punctuation is the gentlest mark in any sentence. Quiet yet transformative, they change your rhythm with calm, healing warmth. Welcome—may you find your own tiny punctuation of happiness here.",
  },
};

export const hero = {
  title: {
    zh: "喵标点喵屋 · The Punctuation Mark",
    en: "Meow Punctuation Cattery",
  },
  subtitle: {
    zh: "Minuet & Munchkin 的精品之家",
    en: "Boutique Minuet & Munchkin Cattery",
  },
  description: {
    zh: "猫咪是生活里最温柔的标点，让日常有了节奏与暖意。",
    en: "Cats are the gentlest punctuation—bringing warmth and rhythm to everyday life.",
  },
  ctas: {
    primary: { zh: "联系我们", en: "Contact Us" },
    secondary: { zh: "了解猫舍", en: "Meet the Cattery" },
  },
};

export const faq = [
  {
    question: {
      zh: "如何排队领养？",
      en: "How do I join the adoption waitlist?",
    },
    answer: {
      zh: "添加微信后填写家庭问卷，我们会根据品种偏好与生活方式匹配猫咪，并以透明的顺序通知。",
      en: "Add us on WeChat, complete the family questionnaire, and we will match kittens based on your preferences, notifying you transparently in order.",
    },
  },
  {
    question: {
      zh: "可以参观猫舍吗？",
      en: "Can I visit the cattery?",
    },
    answer: {
      zh: "为保障猫咪健康，参观采用预约制，仅限确认领养的家庭。",
      en: "To protect feline health, visits are by appointment and reserved for approved adopters.",
    },
  },
  {
    question: {
      zh: "疫苗和驱虫怎么安排？",
      en: "How are vaccines and deworming handled?",
    },
    answer: {
      zh: "小猫出窝前已完成芯片、核心疫苗、驱虫与体检，并附完整记录。",
      en: "Before go-home day, kittens receive microchips, core vaccines, deworming, and vet checks with full documentation.",
    },
  },
];

export const storyCallouts: StoryCallout[] = [
  {
    title: {
      zh: "与猫共鸣",
      en: "Made for Cats",
    },
    description: {
      zh: "以家庭节奏设计训练方式，让小短腿在真实生活里自信成长。",
      en: "Household-based training keeps little short legs confident in real life.",
    },
    action: {
      zh: "了解日常训练",
      en: "Explore Social Training",
    },
  },
  {
    title: {
      zh: "为爱猫人而生",
      en: "For Cat Lovers",
    },
    description: {
      zh: "透明档案、每周视频与交接守则，让领养像购物一样轻松安心。",
      en: "Transparent dossiers, weekly clips, and handover playbooks make adoption effortless.",
    },
    action: {
      zh: "查看流程",
      en: "See the Journey",
    },
  },
  {
    title: {
      zh: "向地球致敬",
      en: "Planet Friendly",
    },
    description: {
      zh: "使用环保用品、可降解猫砂与可循环打包，留下更轻的脚印。",
      en: "Eco supplies, biodegradable litter, and reusable packing for a lighter pawprint.",
    },
    action: {
      zh: "阅读承诺",
      en: "Read Commitments",
    },
  },
];

export const kittens: KittenCard[] = [
  {
    id: "aurora",
    name: { zh: "Aurora · 银白妹", en: "Aurora · Silver Queen" },
    status: { zh: "预约开放", en: "Accepting Requests" },
    description: {
      zh: "银白偏蓝色调，甜系大眼，8 周龄社交训练中。",
      en: "Bluish silver coat with sweet round eyes; 8-week social training underway.",
    },
    traits: [
      {
        zh: "短腿 Minuet",
        en: "Short-legged Minuet",
      },
      {
        zh: "CFA 注册",
        en: "CFA Registered",
      },
      {
        zh: "含全套健康档案",
        en: "Full health dossier",
      },
    ],
    media: "/images/cats/minuet/aurora.jpg",
  },
  {
    id: "comma",
    name: { zh: "Comma · 小逗号", en: "Comma · Little Pause" },
    status: { zh: "预订进行中", en: "Reserved in Progress" },
    description: {
      zh: "经典银虎斑，性格亲人，适合有儿童的家庭。",
      en: "Classic silver tabby, ultra social, perfect for families with children.",
    },
    traits: [
      {
        zh: "曼基康血线",
        en: "Munchkin lines",
      },
      {
        zh: "终身咨询",
        en: "Lifetime coaching",
      },
    ],
    media: "/images/cats/munchkin/comma.jpg",
  },
  {
    id: "semicolon",
    name: { zh: "Semicolon · 半句", en: "Semicolon · Half Verse" },
    status: { zh: "待放名单", en: "Waitlist" },
    description: {
      zh: "银底渐层配薄荷眼，安静治愈系，预计 12 周可回家。",
      en: "Silver shaded with mint eyes, calm and soothing; go-home at 12 weeks.",
    },
    traits: [
      {
        zh: "WCF 证书",
        en: "WCF pedigree",
      },
      {
        zh: "上门交接",
        en: "In-home handover",
      },
    ],
    media: "/images/cats/minuet/semicolon.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: {
      zh: "“交接表格、疫苗记录和日常作息都整理好了，上手超顺。”",
      en: '"Every handover doc, vaccine log, and routine schedule was ready—seamless onboarding."',
    },
    author: {
      zh: "London · Chloe",
      en: "London · Chloe",
    },
    detail: {
      zh: "家有两只小孩，渴望稳定友好的猫咪。Comma 到家后很快成为家庭节奏的一部分。",
      en: "With two kids, we needed a stable cat—Comma synced with our rhythm instantly.",
    },
  },
  {
    quote: {
      zh: "“每周视频回访让我远程也能看到成长，真正透明。”",
      en: '"Weekly videos kept me close even when I was abroad—truly transparent."',
    },
    author: {
      zh: "Manchester · Aria",
      en: "Manchester · Aria",
    },
    detail: {
      zh: "远程领养 Aurora，视频与报告让我提前熟悉她的性格。",
      en: "Adopted Aurora remotely; clips and reports helped me bond ahead of time.",
    },
  },
  {
    quote: {
      zh: "“短腿宝宝骨量很好，体检报告详细又专业。”",
      en: '"Short-leg baby has excellent bone structure; vet reports were detailed and pro."',
    },
    author: {
      zh: "Bristol · Marcus",
      en: "Bristol · Marcus",
    },
    detail: {
      zh: "术前骨骼评估与基因检测齐全，放心选择。",
      en: "Skeletal screenings and genetic panels completed before reservation—total peace of mind.",
    },
  },
];



