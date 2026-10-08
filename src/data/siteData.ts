export const siteData = {
  name: "GuiriFit",
  tagline: "Get healthy get strong get GuiriFit",
  description: "Personal Training and HIIT-style group classes for all ages, abilities, and fitness levels in Granada, Spain",
  address: "Granada, Spain",
  phone: "+34 630 074 083",
  email: "info@guirifit.com",
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
    icon: "ri-phone-line",
    title: "Phone",
    content: siteData.phone,
    link: `tel:${siteData.phone}`,
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
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Classes", href: "/classes" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
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
    title: "Group Classes",
    description:
      "Train with other GuiriFit members in small groups of 4–8 people to help motivate and support each other.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Outdoor Training",
    description:
      "During the spring and autumn months I offer outdoor training at a local calisthenics park where you can get your daily dose of vitamin D and fresh air.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Bodyweight & Free Weight Focus",
    description:
      "Using bodyweight and free weights, I focus on functional strength training to improve your everyday life.",
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
    name: "HIIT Training",
    description: "High-intensity interval training for maximum calorie burn",
    detailedDescription: "Push your limits with our high-intensity interval training. This class alternates between intense bursts of activity and fixed periods of rest, maximizing calorie burn and improving cardiovascular fitness. Perfect for those looking to torch calories and build endurance.",
    duration: "45 min",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
    benefits: ["Burn up to 600 calories", "Improve cardiovascular health", "Build endurance", "Time-efficient workout"],
    trainer: "Mike Chen",
    whatToExpect: "Dynamic movements, short rest periods, high energy atmosphere",
  },
  {
    name: "Yoga & Flexibility",
    description: "Improve flexibility, balance, and mental wellness",
    detailedDescription: "Find your inner peace while improving flexibility and strength. Our yoga classes combine traditional poses with modern techniques to enhance balance, reduce stress, and increase mobility. Suitable for all levels, from beginners to advanced practitioners.",
    duration: "60 min",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop&q=80",
    benefits: ["Increase flexibility", "Reduce stress", "Improve balance", "Enhance mental clarity"],
    trainer: "Sarah Johnson",
    whatToExpect: "Gentle stretches, breathing exercises, meditation, peaceful environment",
  },
  {
    name: "Strength Training",
    description: "Build muscle and increase strength with guided workouts",
    detailedDescription: "Build lean muscle and increase your strength with our comprehensive strength training program. Our expert trainers guide you through proper form and technique using free weights, machines, and bodyweight exercises. Perfect for building a strong, toned physique.",
    duration: "60 min",
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    benefits: ["Build muscle mass", "Increase strength", "Improve bone density", "Boost metabolism"],
    trainer: "John Smith",
    whatToExpect: "Progressive weight training, form correction, personalized guidance",
  },
  {
    name: "Cardio Blast",
    description: "Heart-pumping cardio session to boost your endurance",
    detailedDescription: "Get your heart pumping with our high-energy cardio class. Combining various cardio exercises including running, jumping, and dance movements, this class will boost your endurance, improve heart health, and help you shed those extra pounds.",
    duration: "45 min",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
    benefits: ["Improve heart health", "Burn calories", "Boost endurance", "Increase energy levels"],
    trainer: "Mike Chen",
    whatToExpect: "Energetic music, varied movements, supportive group atmosphere",
  },
  {
    name: "Pilates",
    description: "Core strengthening and body alignment exercises",
    detailedDescription: "Strengthen your core and improve your posture with our Pilates classes. Focus on controlled movements that target deep core muscles, improve alignment, and enhance overall body awareness. Great for rehabilitation and building long, lean muscles.",
    duration: "50 min",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
    benefits: ["Strengthen core", "Improve posture", "Enhance flexibility", "Reduce back pain"],
    trainer: "Sarah Johnson",
    whatToExpect: "Controlled movements, focus on form, mind-body connection",
  },
  {
    name: "CrossFit",
    description: "Functional movements performed at high intensity",
    detailedDescription: "Experience the ultimate functional fitness challenge with our CrossFit classes. Combining weightlifting, gymnastics, and cardio, each workout is different and designed to push you to new limits. Build strength, endurance, and mental toughness.",
    duration: "60 min",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
    benefits: ["Build functional strength", "Improve all-around fitness", "Challenge yourself", "Join a community"],
    trainer: "John Smith",
    whatToExpect: "Varied workouts, high intensity, supportive community, measurable progress",
  },
];

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
    question: "Do I need to be fit to join?",
    answer: "Not at all! We welcome members of all fitness levels. Our trainers will help you start at your own pace and gradually build your strength and endurance.",
  },
  {
    question: "What should I bring to the gym?",
    answer: "Just bring a water bottle, towel, and comfortable workout clothes. We provide all equipment, lockers, and shower facilities.",
  },
  {
    question: "Can I try the gym before committing?",
    answer: "Yes! We offer a free 7-day trial pass so you can experience our facilities, classes, and community before making a commitment.",
  },
  {
    question: "Are personal trainers included?",
    answer: "Personal training is available as an add-on service. Premium and Elite memberships include consultation sessions, and Elite members get unlimited personal training.",
  },
  {
    question: "What are your operating hours?",
    answer: "We're open 24/7 for Premium and Elite members. Basic members have access during staffed hours (5 AM - 11 PM).",
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we have free parking available for all members. The parking lot is well-lit and secure.",
  },
];

const guiriFitSlotTimes = new Set(["9:00 AM", "10:00 AM", "4:00 PM", "5:00 PM"]);

function createScheduleSlot(time: string) {
  const isGuiriFit = guiriFitSlotTimes.has(time);
  return {
    time,
    class: isGuiriFit ? "GuiriFit" : "Open Availability",
    type: isGuiriFit ? "Group Class" : "Personal Training",
  };
}

const dailySchedule = [
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
].map(createScheduleSlot);

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
  { time: "10:00 AM", class: "GuiriFit", type: "Group Class" },
  { time: "11:00 AM", class: "GuiriFit", type: "Group Class" },
  { time: "11:00 AM", class: "Open Availability", type: "Personal Training" },
  { time: "12:00 PM", class: "Open Availability", type: "Personal Training" },
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
    specialization: "HIIT, CrossFit, TRX (Suspension Training), Circuit Training, and Kettlebells",
    experience: "25+ years",
    bio: "I am a newly certified gym coach and personal trainer specialized in helping people of all ages and fitness levels achieve their goals. I have spent my entire life training in multiple forms of fitness, including HIIT, HYROX, CrossFit, Calisthenics, TRX, Kettlebells, Circuit Training, Distance Running, Muay Thai Kickboxing, and Yoga. I am also currently working towards my nutrition certification.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&q=80",
    certifications: ["EPTI Masters Certificate: Gym Coach & Personal Trainer", "Kettlebell Instructor", "Suspension Training Instructor", "Padwork Instructor", "Circuit Training Instructor"],
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

