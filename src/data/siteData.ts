export const siteData = {
  name: "GuiriFit",
  tagline: "Get healthy get strong get GuiriFit",
  description: "Functional Fitness based personal and group training for abilities and skill levels in Granada",
  address: "Granada, Spain",
  phone: "+34 746 055 787",
  email: "info@guirifit.com",
  /** WhatsApp community group invite (https://chat.whatsapp.com/...) */
  whatsappCommunityInviteUrl:
    "https://chat.whatsapp.com/Gt1XWCRsf48ADmvBlGZXlf?s=cl&p=i&mlu=4&ilr=4&iam=2",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
};

export const socialLinks = [
  { name: "facebook", icon: "ri-facebook-fill", label: "Facebook" },
  { name: "instagram", icon: "ri-instagram-fill", label: "Instagram" },
  { name: "youtube", icon: "ri-youtube-fill", label: "YouTube" },
];

/** Set true when profile URLs are ready; links use `siteData.social`. */
export const socialLinksEnabled = false;

export const socialMediaComingSoonNote = "Social Media to come eventually...";

export const contactInfo = [
  {
    icon: "ri-map-pin-line",
    title: "Address",
    content: siteData.address,
    link: null,
  },
  {
    icon: "ri-whatsapp-line",
    title: "WhatsApp",
    content: siteData.phone,
    link: `https://wa.me/${siteData.phone.replace(/\D/g, "")}`,
  },
  {
    icon: "ri-mail-line",
    title: "Email",
    content: siteData.email,
    link: `mailto:${siteData.email}`,
  },
];

export const navigation = [
  { name: "About Me", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Hours", href: "/hours" },
  { name: "Pricing", href: "/pricing" },
];

export const features = [
  {
    title: "Personal Training",
    description:
      "Receive one-on-one training directly from Coach Shawn, specifically tailored to your goals and fitness level.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Group Training",
    description:
      "Want to train with your friends and family? I offer private classes for small groups of 2-4 people.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Outdoor Training (Seasonal)",
    description:
      "Train with other GuiriFit members, make new friends, and motivate each other to achieve your goals.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Online Coaching",
    description:
      "Want to train at your own pace and on your own schedule? I offer online coaching for those who prefer to train on their own.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Nutrition Support",
    description:
      "Get personalized nutrition plans to complement your workouts and help you achieve your goals.",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Community",
    description:
      "Join a supportive community of fellow expats, guiris, and local fitness enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80",
  },
];

export const classes = [
  {
    name: "Personal Training",
    slug: "personal-training",
    description: "1-on-1 training with Coach Shawn.",
    detailedDescription: "Have specific goals in mind? I'll help you achieve them with a personalized training plan that is tailored to your needs and fitness level.",
    duration: "60 min",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
    benefits: ["Personalized training plan", "Goal-specific workouts", "Set to your schedule", "Nutrition guidance included"],
    trainer: "Coach Shawn",
    whatToExpect: "I'll establish your goals, assess your current fitness level, and create a personalized training plan tailored to your needs and abilities.",
  },
  {
    name: "Group Training",
    slug: "group-training",
    description: "Private classes for small groups of 2-4 people.",
    detailedDescription: "Want to train with friends and/or family? This is a great way to hold each other accountable and make training more fun and social.",
    duration: "60 min",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
    benefits: ["Private training", "Group accountability", "Customized to the group", "Fun and engaging"],
    trainer: "Coach Shawn",
    whatToExpect: "I'll establish the groups goals and assess the current fitness level of all participants, and create a personalized training plan tailored to the groups needs and abilities.",
  },
  {
    name: "Outdoor Training",
    slug: "outdoor-training",
    description: "Seasonal larger group training in a local Calisthenics park.",
    detailedDescription: "Seasonal outdoor training in a local Calisthenics park with other GuiriFit members, make new friends, motivate each other, and get some vitamin D while doing it.",
    duration: "60 min",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    benefits: ["Outdoor training", "Group accountability", "Fun and engaging", "Different workouts daily"],
    trainer: "Coach Shawn",
    whatToExpect: "This is where it all started! The outdoor seasonal training provides escalations for all exercises to accommodate for all fitness and experience levels. It's based in functional fitness and HIIT-style circuit training with a new routine every day.",
  },
  {
    name: "Online Coaching",
    slug: "online-coaching",
    description: "Fitness plans tailored to you with feedback and support from Coach Shawn.",
    detailedDescription: "Want to train at your own pace and on your own schedule? I'll create a personalized training plan tailored to your needs and abilities, and you can train at your own pace and on your own schedule, recording your progress and reviewing your form and technique with me.",
    duration: "30 min per week",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
    benefits: ["Personalized training plan", "Goal-specific workouts", "Set to your schedule", "Nutrition guidance included"],
    trainer: "Coach Shawn",
    whatToExpect: "I'll establish your goals, assess your current fitness level, and create a personalized training plan tailored to your needs and abilities.",
  },
  {
    name: "Nutrition Support",
    slug: "nutrition-support",
    description: "Personalized nutrition plans to complement your workouts and help you achieve your goals.",
    detailedDescription: "Getting healthy is a lot more than just working out. Whether you're looking to lose weight, gain muscle, or improve your overall health, I'll help you create a personalized nutrition plan tailored to you that is sustainable and realistic.",
    duration: "60 min",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
    benefits: ["Personalized nutrition", "Goal-specific meals", "Sustainable (No fad diets)", "Based on your lifestyle"],
    trainer: "Coach Shawn",
    whatToExpect: "We'll start with a questionnaire to assess your current diet and lifestyle, and then I'll create a personalized nutrition plan tailored to your goals that is sustainable and realistic and (ideally) based around things you already enjoy. We'll then meet to discuss the plan and make any adjustments as needed.",
  },
  {
    name: "Community",
    slug: "community",
    description: "Join a supportive community of fellow expats, guiris, and local fitness enthusiasts.",
    detailedDescription: "Many gyms and fitness studios are focused only on the physical aspect of fitness, but I believe that a strong community with motivation from your peers, and no egos is the key to health and happiness. I want to create a community of people who are supportive of each other and who are committed to living a healthy and fit lifestyle.",
    duration: "Lifetime",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
    benefits: ["Supportive community", "Make new friends", "Motivation from peers", "No judgment"],
    trainer: "Your Peers",
    whatToExpect: "This isn't a class, there's no cost here. The community is built around all of you. We have a WhatsApp group where we can all share our progress, ask questions, support each other, and plan group events such as hikes, dinner & tapas outings, and more!",
  },
];

export const serviceComingSoonMessage = "Online Options Coming Soon";

const serviceComingSoonSlugs = new Set(["online-coaching"]);

export function isServiceComingSoon(slug: string): boolean {
  return serviceComingSoonSlugs.has(slug);
}

export function serviceCta(
  slug: string,
  _variant?: "home" | "detail",
): { label: string; href: string; external: boolean } {
  if (slug === "community") {
    return {
      label: "Join us on WhatsApp",
      href: siteData.whatsappCommunityInviteUrl || "/contact",
      external: Boolean(siteData.whatsappCommunityInviteUrl),
    };
  }
  return {
    label: "Get Started",
    href: "/contact",
    external: false,
  };
}

export const pricingPlans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    features: [
      "Access to gym facilities",
      "Basic equipment usage",
      "Locker room access",
      "Free parking",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$59",
    period: "/month",
    features: [
      "Everything in Basic",
      "Group classes included",
      "Personal trainer consultation",
      "Nutrition guidance",
      "24/7 access",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "$99",
    period: "/month",
    features: [
      "Everything in Premium",
      "Unlimited personal training",
      "Custom meal plans",
      "Priority class booking",
      "Spa & recovery access",
    ],
    popular: false,
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Member for 2 years",
    content: "FitZone has completely transformed my fitness journey. The trainers are amazing and the community is so supportive!",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Member for 1 year",
    content: "Best gym in town! The equipment is top-notch and the 24/7 access fits perfectly with my schedule.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Member for 6 months",
    content: "I love the variety of classes offered. The HIIT sessions are intense but so rewarding. Highly recommend!",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "Do I need to be fit to train with you?",
    answer: "Not at all! I welcome anyone and everyone of all fitness levels. In fact, I specialize in getting people started on their fitness journey and gradually building their mobility, strength, endurance, and confidence.",
  },
  {
    question: "What do I need to bring?",
    answer: "Not much! Just bring plenty of water, a towel, comfortable workout clothes, and lots of energy! Depending on the training type, you're welcome to bring your own equipment, but I'll have plenty of extras available.",
  },
  {
    question: "Is there a trial period before committing?",
    answer: "I offer a free 20 minute online (or in-person if you prefer) consultation to see if I'm a good fit for you and your goals. Additionally, during the spring and fall outdoor training times, the first session is free if you haven't trained with me before.",
  },
  {
    question: "Should I eat before or after my session?",
    answer:
      "Short answer: Both!\n\nLong answer: I recommend eating a small meal that has plenty of carbs and protein 1-2 hours before your session to provide energy. After your session, I recommend eating a full protein-rich meal to help your body recover and build muscle.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Hours change with the season—Spring and Fall (outdoor) vs Summer and Winter (studio). You can see what spots are available by checking the schedule here. I will also respond to any WhatsApp messages or emails within 24 hours.",
    answerLink: { href: "/hours", label: "here" },
  },
  {
    question: "I want to train with a partner, can we do that?",
    answer: "Of course! I offer private classes for small groups of 2-4 people, and larger outdoor training sessions for up to 10 people during the spring and fall. This is a great way to train with a friend or family member and hold each other accountable.",
  },
  {
    question: "Do you offer nutrition coaching?",
    answer: "I am in the process of getting my nutrition certification, but have years of experience and knowledge in nutrition and meal planning, and I am happy to help you with your nutrition goals. You'll (most likely) be happy to hear that I am not a supporter of the 'fad diets' and will help you create a sustainable and realistic plan for your goals.",
  },
];

function scheduleSlot(
  time: string,
  className: "GuiriFit" | "Open Availability" | "Outdoor Training",
) {
  return {
    time,
    class: className,
  };
}

/** Summer & Winter (studio) — Mon–Fri */
const summerWinterWeekdays = [
  scheduleSlot("08:00–13:00", "Open Availability"),
  scheduleSlot("16:00–20:00", "Open Availability"),
];

const saturdayOpenAvailability = [
  scheduleSlot("10:00–14:00", "Open Availability"),
];

export const classSchedule = summerWinterWeekdays;

export const successStories = [
  {
    name: "Jessica Martinez",
    age: 32,
    duration: "8 months",
    result: "Lost 45 lbs",
    story: "I was skeptical at first, but FitZone changed my life. The supportive trainers and community kept me motivated. I've never felt better!",
    beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=600&fit=crop&q=80",
  },
  {
    name: "David Thompson",
    age: 28,
    duration: "6 months",
    result: "Gained 20 lbs muscle",
    story: "The strength training program and nutrition guidance helped me build the physique I always wanted. The trainers are true professionals.",
    beforeImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=600&fit=crop&q=80",
  },
  {
    name: "Lisa Anderson",
    age: 35,
    duration: "1 year",
    result: "Completed first marathon",
    story: "From never running to completing a marathon - FitZone's cardio programs and group classes gave me the endurance and confidence I needed.",
    beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80",
  },
];

function buildWeekSchedule(weekdaySlots: ReturnType<typeof scheduleSlot>[]) {
  return {
    monday: weekdaySlots,
    tuesday: weekdaySlots,
    wednesday: weekdaySlots,
    thursday: weekdaySlots,
    friday: weekdaySlots,
    saturday: saturdayOpenAvailability,
    sunday: [],
  };
}

export const fullSchedule = buildWeekSchedule(summerWinterWeekdays);

/** Spring & Fall (outdoor season) — Mon–Fri */
const springFallWeekdays = [
  scheduleSlot("08:00–10:30", "Open Availability"),
  scheduleSlot("11:00–12:00", "Outdoor Training"),
  scheduleSlot("16:00–17:00", "Outdoor Training"),
  scheduleSlot("17:30–20:00", "Open Availability"),
];

export const outdoorFullSchedule = buildWeekSchedule(springFallWeekdays);

export const trainers = [
  {
    name: "Shawn Jenkins",
    role: "Coach & Personal Trainer",
    specialization: "Functional Fitness and HIIT-Style Circuit Training",
    experience: "25+ years of fitness experience",
    bio: "I am a newly certified gym coach and personal trainer specialized in helping people of all ages and fitness levels achieve their goals. I have spent my entire life training in multiple forms of fitness, including HIIT, HYROX, CrossFit, Calisthenics, TRX, Kettlebells, Circuit Training, Distance Running, Muay Thai Kickboxing, and Yoga. I am also currently working towards my nutrition certification.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&q=80",
    certifications: {
      institute: "European Personal Training Institute (EPTI)",
      logo: "epti",
      credentials: [
        "Master Gym Instructor",
        "Master Personal Trainer",
        "Kettlebell Trainer",
        "Suspension (TRX) Trainer",
        "Circuit Trainer",
        "Padwork & Boxing Trainer",
        "Outdoor Trainer",
      ],
    },
    currentlyStudying: [
      {
        institute: "CrossFit",
        logo: "crossfit",
        credentials: ["Level 1 Instructor"],
      },
      {
        institute: "National Academy of Sports Medicine (NASM)",
        logo: "nasm",
        credentials: ["Nutrition Coach"],
      },
    ],
  },
];

export const history = [
  {
    year: "1998",
    title: "My humble beginnings",
    description: "I started running Cross Country and Strength Training in High School, and have been obsessed with fitness ever since.",
  },
  {
    year: "2002",
    title: "Upping my game",
    description: "I continued to learn about fitness and started learning about HIIT and proper form for heavy lifting to build muscle and strength.",
  },
  {
    year: "2008",
    title: "Getting competitive",
    description: "Introduced 24/7 access for Premium and Elite members, making fitness accessible around the clock.",
  },
  {
    year: "2013",
    title: "Life in an office",
    description: "Reached 500 active members and expanded our trainer team to 20 certified professionals.",
  },
  {
    year: "2022",
    title: "Learning to train hard again",
    description: "Launched online class booking and virtual training options to adapt to changing needs.",
  },
  {
    year: "2026",
    title: "Turning my passion into a business",
    description: "I am now a certified gym coach and personal trainer specialized in helping people of all ages and fitness levels achieve their goals. I have spent my entire life training in multiple forms of fitness, including HIIT, HYROX, CrossFit, Calisthenics, TRX, Kettlebells, Circuit Training, Distance Running, Muay Thai Kickboxing, and Yoga. I am also currently working towards my nutrition certification.",
  },
];

export type PaymentPlanOption = {
  type: string;
  description: string;
};

export type PaymentPlanCategory = {
  title: string;
  plans: PaymentPlanOption[];
  /** When set, plans are shown greyed with an overlay note (e.g. pricing TBD). */
  comingSoonNote?: string;
};

export type TrainingPackageRow = {
  package: string;
  sessionsPerMonth: number | string;
  effectivePerSession: string;
  discount?: string;
  total: string;
};

export type NutritionServiceRow = {
  service: string;
  whatsIncluded: string;
  price: string;
};

export const nutritionSupportPackages = {
  subtitle:
    "One-time educational consultation • Not medical nutrition advice",
  footnote:
    "Standalone follow-ups only available to clients who completed the core review.",
  disclaimer:
    "This is an educational service provided by a certified fitness professional with 25+ years of experience in training and nutrition fundamentals. I am not a licensed dietitian or clinical nutritionist (dietista-nutricionista). Recommendations are general guidelines for healthy adults and are not intended to diagnose, treat, or manage medical conditions. Clients with diabetes, kidney disease, cardiovascular conditions, eating disorders, or pregnancy should consult a qualified healthcare provider or registered dietitian before making dietary changes. Results vary and depend on individual adherence.",
  rows: [
    {
      service: "Eating Habits Review",
      whatsIncluded:
        "60 min session: habit audit, food-label education, body metrics & BMI, personalised adjustments based on tastes",
      price: "€75",
    },
    {
      service: "Follow-Up (Optional)",
      whatsIncluded:
        "30 min, 2–4 weeks later: what stuck, what slipped, revised recommendations",
      price: "€30",
    },
    {
      service: "Both Together",
      whatsIncluded: "Core review + follow-up",
      price: "€95",
    },
  ] satisfies NutritionServiceRow[],
};

export const personalTrainingPackages = {
  footnote:
    "*Monthly = 4-week blocks. Expiry: 5-pack (90 days), 10-pack (120 days). Contact me directly for plans of more than 3×/week Monthly or if you wish to integrate in off-day training plans.",
  rows: [
    {
      package: "Drop-in / Single",
      sessionsPerMonth: 1,
      effectivePerSession: "€30.00",
      discount: "—",
      total: "€30",
    },
    {
      package: "5-Pack",
      sessionsPerMonth: 5,
      effectivePerSession: "€27.00",
      discount: "10%",
      total: "€135",
    },
    {
      package: "10-Pack",
      sessionsPerMonth: 10,
      effectivePerSession: "€25.50",
      discount: "15%",
      total: "€255",
    },
    {
      package: "1×/week Monthly",
      sessionsPerMonth: 4,
      effectivePerSession: "€29.00",
      discount: "3%",
      total: "€116",
    },
    {
      package: "2×/week Monthly",
      sessionsPerMonth: 8,
      effectivePerSession: "€27.00",
      discount: "10%",
      total: "€216",
    },
    {
      package: "3×/week Monthly",
      sessionsPerMonth: 12,
      effectivePerSession: "€24.50",
      discount: "18%",
      total: "€295",
    },
  ] satisfies TrainingPackageRow[],
};

export type GroupTrainingPricingTable = {
  title: string;
  rows: TrainingPackageRow[];
};

export const groupTrainingPackages = {
  subtitle: "2-4 people • Lower cost per person • Better results together",
  footnote:
    "*Monthly = 4-week blocks. Expiry: 5-pack (90 days), 10-pack (120 days). Contact me directly for plans of more than 3×/week Monthly or if you wish to integrate in off-day training plans.",
  totalColumnLabel: "Total /person",
  tables: [
    {
      title: "Duo (2 people)",
      rows: [
        {
          package: "Drop-in",
          sessionsPerMonth: 1,
          effectivePerSession: "€22.00",
          discount: "—",
          total: "€22",
        },
        {
          package: "5-Pack",
          sessionsPerMonth: 5,
          effectivePerSession: "€20.00",
          discount: "9%",
          total: "€100",
        },
        {
          package: "10-Pack",
          sessionsPerMonth: 10,
          effectivePerSession: "€19.00",
          discount: "14%",
          total: "€190",
        },
        {
          package: "1×/week Monthly",
          sessionsPerMonth: 4,
          effectivePerSession: "€21.00",
          discount: "5%",
          total: "€84",
        },
        {
          package: "2×/week Monthly",
          sessionsPerMonth: 8,
          effectivePerSession: "€20.00",
          discount: "9%",
          total: "€160",
        },
        {
          package: "3×/week Monthly",
          sessionsPerMonth: 12,
          effectivePerSession: "€18.50",
          discount: "16%",
          total: "€222",
        },
      ],
    },
    {
      title: "Trio (3 people)",
      rows: [
        {
          package: "Drop-in",
          sessionsPerMonth: 1,
          effectivePerSession: "€17.00",
          discount: "—",
          total: "€17",
        },
        {
          package: "5-Pack",
          sessionsPerMonth: 5,
          effectivePerSession: "€15.50",
          discount: "9%",
          total: "€77.50",
        },
        {
          package: "10-Pack",
          sessionsPerMonth: 10,
          effectivePerSession: "€14.50",
          discount: "15%",
          total: "€145",
        },
        {
          package: "1×/week Monthly",
          sessionsPerMonth: 4,
          effectivePerSession: "€16.00",
          discount: "6%",
          total: "€64",
        },
        {
          package: "2×/week Monthly",
          sessionsPerMonth: 8,
          effectivePerSession: "€15.50",
          discount: "9%",
          total: "€124",
        },
        {
          package: "3×/week Monthly",
          sessionsPerMonth: 12,
          effectivePerSession: "€14.00",
          discount: "18%",
          total: "€168",
        },
      ],
    },
    {
      title: "Quad (4 people)",
      rows: [
        {
          package: "Drop-in",
          sessionsPerMonth: 1,
          effectivePerSession: "€14.00",
          discount: "—",
          total: "€14",
        },
        {
          package: "5-Pack",
          sessionsPerMonth: 5,
          effectivePerSession: "€13.00",
          discount: "7%",
          total: "€65",
        },
        {
          package: "10-Pack",
          sessionsPerMonth: 10,
          effectivePerSession: "€12.00",
          discount: "14%",
          total: "€120",
        },
        {
          package: "1×/week Monthly",
          sessionsPerMonth: 4,
          effectivePerSession: "€13.50",
          discount: "4%",
          total: "€54",
        },
        {
          package: "2×/week Monthly",
          sessionsPerMonth: 8,
          effectivePerSession: "€13.00",
          discount: "7%",
          total: "€104",
        },
        {
          package: "3×/week Monthly",
          sessionsPerMonth: 12,
          effectivePerSession: "€11.50",
          discount: "18%",
          total: "€138",
        },
      ],
    },
  ] satisfies GroupTrainingPricingTable[],
};

export const outdoorTrainingPackages = {
  subtitle: "Spring and Fall • Max 12 participants • Monthly rates only",
  rows: [
    {
      package: "Drop-in",
      sessionsPerMonth: 1,
      effectivePerSession: "€10.00",
      discount: "—",
      total: "€10",
    },
    {
      package: "1×/week",
      sessionsPerMonth: 4,
      effectivePerSession: "€7.50",
      discount: "25%",
      total: "€30",
    },
    {
      package: "2×/week",
      sessionsPerMonth: 8,
      effectivePerSession: "€6.25",
      discount: "38%",
      total: "€50",
    },
    {
      package: "3×/week",
      sessionsPerMonth: 12,
      effectivePerSession: "€5.83",
      discount: "42%",
      total: "€70",
    },
    {
      package: "Unlimited (5×/wk)",
      sessionsPerMonth: "~20",
      effectivePerSession: "€4.25",
      discount: "58%",
      total: "€85",
    },
  ] satisfies TrainingPackageRow[],
};

export const paymentOptions = {
  methods: ["Bizum", "Venmo", "PayPal", "Apple Pay", "Google Pay", "Bank transfer"],
  categories: [
    {
      title: "Online Coaching",
      comingSoonNote: "All options TBD",
      plans: [
        { type: "Drop-In", description: "Single check-in and program tune-up" },
        {
          type: "Monthly",
          description: "Custom plan with weekly feedback and messaging support",
        },
        {
          type: "10-Week Block",
          description: "Structured program with regular form reviews",
        },
        {
          type: "Annual",
          description: "Year-round remote coaching — contact for details",
        },
        {
          type: "Add-On",
          description: "Combine with in-person training for a hybrid package",
        },
      ],
    },
  ] satisfies PaymentPlanCategory[],
  freeSeasonalClass: {
    title: "Free Seasonal Group Class",
    description: "First-time clients can try one seasonal class for free!",
  },
  freeConsultation: {
    title: "Free 20 minute Consultation",
    description: "Only valid to Personal and Group Training options.",
  },
};

export const pricingFaqs = [
  {
    question: "Can I change or cancel my monthly membership at any time?",
    answer:
      "Yes, you can change or cancel your membership at any time with one week's notice prior to the end of the month. No long-term contracts required.",
  },
  {
    question:
      "If I'm signed up for Personal or Group training, are seasonal outdoor classes included?",
    answer: "No, these are separate options.",
  },
  {
    question: "Can I pay by Credit Card?",
    answer: "Currently no, but that option may come in the future!",
  },
];

