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
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
};

export const socialLinks = [
  { name: "facebook", icon: "ri-facebook-fill", label: "Facebook" },
  { name: "instagram", icon: "ri-instagram-fill", label: "Instagram" },
  { name: "twitter", icon: "ri-twitter-x-fill", label: "Twitter" },
  { name: "youtube", icon: "ri-youtube-fill", label: "YouTube" },
];

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
  {
    icon: "ri-time-line",
    title: "Hours",
    content: ["Open 24/7 for Premium and Elite members", "Basic members: 5 AM - 11 PM daily"],
    link: null,
  },
];

export const navigation = [
  { name: "About", href: "/about" },
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

export function serviceCta(
  slug: string,
  variant: "home" | "detail",
): { label: string; href: string; external: boolean } {
  if (slug === "community") {
    return {
      label: "Join us on WhatsApp",
      href: siteData.whatsappCommunityInviteUrl || "/contact",
      external: Boolean(siteData.whatsappCommunityInviteUrl),
    };
  }
  return {
    label: variant === "detail" ? "Book This Class" : "Book Now",
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
      "I'm available for training 07:00-12:00, and 16:00-19:00 Monday-Friday, and 10:00-14:00 on Saturdays. You can see what spots are available by checking the schedule here. I will also respond to any WhatsApp messages or emails within 24 hours.",
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
  className: "GuiriFit" | "Open Availability",
) {
  return {
    time,
    class: className,
  };
}

const dailySchedule = [
  scheduleSlot("7:00–8:50 AM", "Open Availability"),
  scheduleSlot("9:00–10:00 AM", "GuiriFit"),
  scheduleSlot("10:10–11:10 AM", "GuiriFit"),
  scheduleSlot("1:30–4:20 PM", "Open Availability"),
  scheduleSlot("4:30–5:30 PM", "GuiriFit"),
  scheduleSlot("5:40–6:40 PM", "GuiriFit"),
  scheduleSlot("6:50–8:00 PM", "Open Availability"),
];

export const classSchedule = dailySchedule;

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

const saturdaySchedule = [
  scheduleSlot("10:00–11:00 AM", "GuiriFit"),
  scheduleSlot("11:10 AM–12:10 PM", "GuiriFit"),
  scheduleSlot("12:20–2:30 PM", "Open Availability"),
];

export const fullSchedule = {
  monday: dailySchedule,
  tuesday: dailySchedule,
  wednesday: dailySchedule,
  thursday: dailySchedule,
  friday: dailySchedule,
  saturday: saturdaySchedule,
  sunday: [],
};

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
};

export const paymentOptions = {
  methods: ["Bizum", "Venmo", "PayPal", "Apple Pay", "Google Pay", "Bank transfer"],
  categories: [
    {
      title: "Group Classes",
      plans: [
        { type: "Drop-In", description: "Pay 10€ per session" },
        {
          type: "10-Pack",
          description: "Pay 90€ for 10 sessions, train when you want",
        },
        {
          type: "Monthly",
          description: "Pay month-to-month with no long-term commitment",
        },
        {
          type: "Annual",
          description: "Save 15% with annual payment — best value!",
        },
        {
          type: "Family Plan",
          description: "Special rates for families — contact us for details",
        },
      ],
    },
    {
      title: "Personal Training",
      plans: [
        { type: "Drop-In", description: "Pay per 1-on-1 session" },
        {
          type: "10-Pack",
          description: "Prepay for 10 personal training sessions",
        },
        {
          type: "Monthly",
          description: "Month-to-month personal training with flexible scheduling",
        },
        {
          type: "Annual",
          description: "Save 15% with annual prepayment — best value!",
        },
        {
          type: "Partner Plan",
          description: "Train with a partner — contact us for shared-session rates",
        },
      ],
    },
  ] satisfies PaymentPlanCategory[],
  guarantee: "7-day money-back guarantee on all memberships",
  trial: "Free 7-day trial available for new members",
};

