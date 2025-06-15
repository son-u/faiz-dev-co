import {
  FaClipboardCheck,
  FaSmile,
  FaAward,
  FaClock,
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { AiOutlineCode } from "react-icons/ai";
import ApichaCover from "../assets/images/Featured/Apicha_Cover.png";
import ApichaSlideUp from "../assets/images/Featured/Apicha-slide-up.png";
import ForesthillCover from "../assets/images/Featured/forest-hill-cover.png";
import ForesthillSlideUp from "../assets/images/Featured/Forest-Hill-slideup.png";
import SunniSlideUp from "../assets/images/Featured/Sunni-slide-up.webp";
import SunniCover from "../assets/images/Featured/Sunni_cover.webp";
// images for TabSwitcher
import expTab from "../assets/images/illustrations/experience.png";
import flexibilityTab from "../assets/images/illustrations/flexibility.png";
import resultTab from "../assets/images/illustrations/results.png";
// Testimonial Images
import T1 from "../assets/images/testimonials/T-1.png";
import T2 from "../assets/images/testimonials/T-2.png";
import T3 from "../assets/images/testimonials/T-3.png";
import T4 from "../assets/images/testimonials/T-4.png";
import T5 from "../assets/images/testimonials/T-5.png";
import T6 from "../assets/images/testimonials/T-6.png";
import T7 from "../assets/images/testimonials/T-7.png";
import T8 from "../assets/images/testimonials/T-8.png";
import T9 from "../assets/images/testimonials/T-9.png";
import T10 from "../assets/images/testimonials/T-10.png";
import T11 from "../assets/images/testimonials/T-11.png";
import T12 from "../assets/images/testimonials/T-12.png";
import T13 from "../assets/images/testimonials/T-13.png";
import T14 from "../assets/images/testimonials/T-14.png";
import T15 from "../assets/images/testimonials/T-15.png";
import T16 from "../assets/images/testimonials/T-16.png";
import T17 from "../assets/images/testimonials/T-17.png";
import T18 from "../assets/images/testimonials/T-18.png";
import T19 from "../assets/images/testimonials/T-19.png";
import T20 from "../assets/images/testimonials/T-20.png";
import T21 from "../assets/images/testimonials/T-21.png";
import T22 from "../assets/images/testimonials/T-22.png";
import T23 from "../assets/images/testimonials/T-23.png";
import T24 from "../assets/images/testimonials/T-24.png";
import T25 from "../assets/images/testimonials/T-25.png";

// Portfolio Images
import P1 from "../assets/images/portfolio/p-1.png";
import P2 from "../assets/images/portfolio/p-2.png";
import P3 from "../assets/images/portfolio/p-3.png";
import P4 from "../assets/images/portfolio/p-4.png";
import P5 from "../assets/images/portfolio/p-5.png";
import P6 from "../assets/images/portfolio/p-6.png";
import P7 from "../assets/images/portfolio/p-7.png";
import P8 from "../assets/images/portfolio/p-8.png";
import P9 from "../assets/images/portfolio/p-9.png";
import P10 from "../assets/images/portfolio/p-10.png";
import P11 from "../assets/images/portfolio/p-11.png";
import P12 from "../assets/images/portfolio/p-12.png";
import P13 from "../assets/images/portfolio/p-13.png";
import P14 from "../assets/images/portfolio/p-14.png";
import P15 from "../assets/images/portfolio/p-15.png";
import P16 from "../assets/images/portfolio/p-16.jpg";
import P17 from "../assets/images/portfolio/p-17.jpg";
import P18 from "../assets/images/portfolio/p-18.jpg";
import P19 from "../assets/images/portfolio/p-19.jpg";
import P20 from "../assets/images/portfolio/p-20.jpg";
import P21 from "../assets/images/portfolio/p-21.jpg";
import P22 from "../assets/images/portfolio/p-22.jpg";
import P23 from "../assets/images/portfolio/p-23.jpg";
import P24 from "../assets/images/portfolio/p-24.png";
import P25 from "../assets/images/portfolio/p-25.jpg";
import P26 from "../assets/images/portfolio/p-26.png";
import P27 from "../assets/images/portfolio/p-27.png";
import P28 from "../assets/images/portfolio/p-28.png";
import P29 from "../assets/images/portfolio/p-29.png";

//Images for Services
import webDesign from "../assets/images/services/web-design.png";
import webDevelopment from "../assets/images/services/web-development.png";
import marketing from "../assets/images/services/marketing.png";
import wordpress from "../assets/images/services/wordpress.png";
import shopify from "../assets/images/services/shopify.png";
import ecommerce from "../assets/images/services/ecommerce-website.png";
//Images for founders img
import sonuPotrait from "../assets/images/others/sonu_potrait.webp";
import faizPotrait from "../assets/images/others/faiz_potrait.webp";

export const featuredProjects = [
  {
    id: 1,
    projectName: "Apicha Health Care",
    website: "apicha.org",
    backgroundImage: ApichaCover,
    hoverImage: ApichaSlideUp,
  },
  {
    id: 2,
    projectName: "Forest Hill Real Estate",
    website: "foresthillsdubai.com",
    backgroundImage: ForesthillCover,
    hoverImage: ForesthillSlideUp,
  },
  {
    id: 3,
    projectName: "The Sunni Store",
    website: "thesunnistore.com",
    backgroundImage: SunniCover,
    hoverImage: SunniSlideUp,
  },
];

export const tabsData = [
  {
    id: 0,
    title: "Experience",
    number: 1,
    paragraphs: [
      "Our experienced professionals apply extensive industry knowledge and skills to every project.",
      "We use our industry insights to deliver solutions surpassing expectations and propelling success.",
    ],
    image: expTab,
  },
  {
    id: 1,
    title: "Flexibility",
    number: 2,
    paragraphs: [
      "Our adaptable strategy meets each client's unique needs, regardless of project complexity.",
      "We swiftly adjust to evolving requirements, ensuring efficient and effective project delivery.",
    ],
    image: flexibilityTab,
  },
  {
    id: 2,
    title: "Results",
    number: 3,
    paragraphs: [
      "We deliver measurable outcomes that create genuine impact for your business.",
      "Our history of success is evident through numerous satisfied client stories.",
    ],
    image: resultTab,
  },
];

export const clientLogos = [
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
  T21,
  T22,
  T23,
  T24,
  T25,
];

export const recentProjects = [P1, P2, P3, P4, P5, P6, P7];

export const statsData = [
  {
    icon: FaClipboardCheck,
    end: 32,
    duration: 2,
    label: "Projects Done",
  },
  {
    icon: FaSmile,
    end: 45,
    duration: 2,
    label: "Happy Clients",
  },
  {
    icon: FaAward,
    end: 90,
    duration: 2,
    label: "Appreciations",
  },
  {
    icon: FaClock,
    end: 1600,
    duration: 2,
    label: "Support Hours",
  },
];

export const servicesData = [
  {
    id: 1,
    icon: webDesign,
    alt: "web-design",
    title: "Web Design",
    description:
      "Crafting visually appealing and user-friendly interfaces to enhance digital presence and engagement.",
  },
  {
    id: 2,
    icon: webDevelopment,
    alt: "web-development",
    title: "Web Development",
    description:
      "Building robust and scalable web solutions with modern technologies.",
  },
  {
    id: 3,
    icon: marketing,
    alt: "marketing",
    title: "Digital Marketing",
    description:
      "Enhancing your online presence and reach through strategic digital marketing.",
  },
  {
    id: 4,
    icon: wordpress,
    alt: "wordpress",
    title: "WordPress Solutions",
    description:
      "Developing customizable WordPress sites to meet your business needs.",
  },
  {
    id: 5,
    icon: shopify,
    alt: "shopify",
    title: "Shopify Development",
    description: "Creating engaging e-commerce experiences on Shopify.",
  },
  {
    id: 6,
    icon: ecommerce,
    alt: "ecommerce-website",
    title: "Ecommerce Solutions",
    description:
      "Developing feature-rich and user-friendly ecommerce platforms.",
  },
];

// Shared call-to-action for all plans
const commonCTA = {
  text: "Enquire now",
  link: "#contact",
};

export const pricingPlans = {
  wordpress: [
    {
      id: "wp-starter",
      title: "Starter",
      description:
        "Ideal For Maintaining A Seamless Online Presence, Perfect For Individuals And Small Businesses.",
      price: 9499,
      period: "Lifetime",
      features: [
        { text: "Up to 5 Pages" },
        { text: "5-7 Day Delivery" },
        { text: "Clean, modern design" },
        { text: "2 Months Free Site Maintenance" },
        { text: "Form & Contact Section" },
        { text: "Basic SEO setup" },
        { text: "Google Analytics" },
        { text: "2 revisions included" },
        {
          text: "Astra Pro",
          limited: true,
          info: "Available on Standard & Premium only",
        },
        {
          text: "Elementor Pro",
          limited: true,
          info: "Available on Standard & Premium only",
        },
      ],
      cta: commonCTA,
    },
    {
      id: "wp-standard",
      title: "Standard",
      description:
        "Suitable For Growing Businesses Seeking Enhanced Functionality And Performance.",
      price: 14499,
      period: "Lifetime",
      features: [
        { text: "Up to 10 Pages" },
        { text: "10-15 Day Delivery" },
        { text: "Astra Pro + Elementor Pro" },
        { text: "Custom-branded Design" },
        { text: "eCommerce Functionality" },
        { text: "Payment Gateway Integration" },
        { text: "3 Months Free Hosting" },
        { text: "3 Months Free Site Maintenance" },
        { text: "SEO setup & Google Analytics" },
        { text: "Up to 8 products (Assistance)" },
        { text: "Priority WhatsApp support" },
        { text: "4 revisions included" },
      ],
      cta: commonCTA,
    },
    {
      id: "wp-premium",
      title: "Premium",
      description:
        "Unlock unlimited pages, premium Astra & Elementor Pro, advanced integrations and optimizations for scalable WordPress.",
      price: 19499,
      period: "Lifetime",
      features: [
        { text: "Unlimited Pages" },
        { text: "18-25 Day Delivery" },
        { text: "Astra Pro + Elementor Pro" },
        { text: "Fully Professional Design" },
        { text: "Advanced eCommerce Functionality" },
        { text: "Payment Gateway Integration" },
        { text: "6 Months Free Hosting" },
        { text: "6 Months Free Site Maintenance" },
        { text: "Advanced SEO Setup" },
        { text: "Real-time Monitoring and Analytics" },
        { text: "Priority WhatsApp & email support" },
        { text: "Extended Revisions" },
        { text: "Custom Training & Handover Session" },
      ],
      cta: commonCTA,
    },
  ],

  custom: [
    {
      id: "custom-standard",
      title: "Standard",
      description:
        "Ideal For Small Businesses Or Personal Brands That Need A Fast, Custom-Built Website Without Complex Features.",
      price: 15499,
      period: "Lifetime",
      features: [
        { text: "HTML, CSS, JS & PHP" },
        { text: "Up to 5 dynamic pages" },
        { text: "7-10 Day Delivery" },
        { text: "Clean and modern UI/UX" },
        { text: "Contact form with PHP backend" },
        { text: "Basic SEO setup" },
        { text: "Google Analytics integration" },
        { text: "3 Months Free Hosting" },
        { text: "3 Months Free Site Maintenance" },
        { text: "Priority WhatsApp support" },
        { text: "2 revisions included" },
      ],
      cta: commonCTA,
    },
    {
      id: "custom-professional",
      title: "Professional",
      description:
        "Great For Scaling E-Commerce Businesses With Powerful Features, Secure Payments And Full Admin Access.",
      price: 45000,
      period: "Lifetime",
      features: [
        { text: "Built with MERN Stack" },
        { text: "Up to 10 dynamic pages" },
        { text: "18-20 Day Delivery" },
        { text: "Fully Professional Design" },
        { text: "Advanced eCommerce Functionality" },
        { text: "JWT-based login & customer dashboard" },
        { text: "Admin Dashboard" },
        { text: "Admin CRUD + bulk import/export" },
        { text: "Payment Gateway Integration" },
        { text: "6 Months Free Site Maintenance" },
        { text: "Advanced SEO Setup" },
        { text: "Real-time Monitoring and Analytics" },
        { text: "Priority WhatsApp & email support" },
        { text: "4 Revisions Included" },
      ],
      cta: commonCTA,
    },
    {
      id: "custom-custom",
      title: "Custom",
      description:
        "Have Unique Requirements? Our Expert Team Collaborates With You To Build A Fully Custom-Coded Solution Tailored To Your Exact Needs.",
      price: null,
      period: null,
      features: [],
      cta: commonCTA,
      isCustomContact: true,
    },
  ],
};

export const testimonialsData = [
  {
    id: 1,
    image: T1,
    name: "Viva Aesthetic Clinic",
    position: "Redesign of Website",
    text: "Faiz Dev & Co. delivered exceptional results, transforming our hospital's online presence into a user-friendly experience.",
  },
  {
    id: 2,
    image: T2,
    name: "Tidy Here",
    position: "Web Development",
    text: "Faiz created a sleek, professional design that enhanced our brand's credibility and visibility.",
  },
  {
    id: 3,
    image: T3,
    name: "Shalby Hospital",
    position: "Redesign of Website",
    text: "Highly recommend Faiz Dev Agency for creating patient-focused, modern healthcare websites tailored to unique needs.",
  },
  {
    id: 4,
    image: T4,
    name: "SG Cleaning Service",
    position: "Web Development",
    text: "Customer inquiries have doubled since our modern, user-friendly site launched—great results!",
  },
  {
    id: 5,
    image: T5,
    name: "QI Spine Clinic",
    position: "Web Development",
    text: "Efficient, professional service! Our patients appreciate the intuitive design and smooth navigation on our website.",
  },
  {
    id: 6,
    image: T6,
    name: "NYC Hospital",
    position: "Redesign of Website",
    text: "Our clinic's website is now modern, functional, and enhances patient engagement with seamless appointment bookings with Faiz.",
  },
  {
    id: 7,
    image: T7,
    name: "Next Level Real Estate",
    position: "Web Development",
    text: "Our site's design perfectly showcases properties while driving higher traffic and client inquiries with Faiz Agency.",
  },
  {
    id: 8,
    image: T8,
    name: "Mediclinic",
    position: "Web Development",
    text: "Exceptional design tailored to healthcare needs; patients love the intuitive and professional interface.",
  },
  {
    id: 9,
    image: T9,
    name: "Maid to Clean",
    position: "Web Development",
    text: "Highly recommend Faiz for professional, clean website designs that truly elevate cleaning service businesses.",
  },
  {
    id: 10,
    image: T10,
    name: "Maidpro",
    position: "Web Development",
    text: "Effortlessly showcases our cleaning packages; clients appreciate the seamless navigation and clear service details.",
  },
  {
    id: 11,
    image: T11,
    name: "Hertz",
    position: "Redesign of Website",
    text: "Booking cars has never been easier, thanks to Faiz Dev's fast and stylish website redesign.",
  },
];

export const foundersData = [
  {
    id: 1,
    name: "Sonu Sharma",
    role: "Full Stack Developer",
    post: "Co Founder",
    image: sonuPotrait,
    social: {
      linkedin: "https://linkedin.com/in/sonu-sharma007/",
      github: "https://github.com/son-u",
    },
    variant: "first",
  },
  {
    id: 2,
    name: "Faiz Imam",
    role: "Front-End Developer",
    post: "Co Founder",
    image: faizPotrait,
    social: {
      linkedin: "https://www.linkedin.com/in/faiz-imam/",
      github: "https://github.com/IsacSmile",
    },
    variant: "second",
  },
];

// Data for WhyChooseUS cards
export const chooseUs = [
  {
    id: 1,
    Icon: FaLightbulb,
    title: "Innovative Solutions",
    description:
      "We leverage the latest technologies to deliver creative, forward-thinking designs that set your brand apart.",
    extraClass: "whychooseus__card--rotated",
  },
  {
    id: 2,
    Icon: FaRocket,
    title: "Fast Performance",
    description:
      "Our cutting-edge techniques ensure that your website is optimized for speed and efficiency.",
  },
  {
    id: 3,
    Icon: FaUsers,
    title: "Customer Focus",
    description:
      "We build digital experiences centered around your audience’s needs to foster engagement and loyalty.",
  },
  {
    id: 4,
    Icon: FaCheckCircle,
    title: "Quality Assurance",
    description:
      "Our commitment to quality means every project meets the highest standards of design and functionality.",
  },
];

// Data for PortfolioCards
export const portfolioData = [
  {
    id: 1,
    category: "real-estate",
    title: "Next Level Real Estate",
    imageSrc: P1,
    description:
      "Innovative solutions for buying, selling, and managing properties with ease.",
    link: "https://www.nextlevelrealestate.ae",
  },
  {
    id: 2,
    category: "healthcare",
    title: "Brokylyn Helthcare",
    imageSrc: P2,
    description:
      "Exceptional healthcare services for the Brooklyn community, prioritizing wellness and care.",
    link: "https://www.brooklynplaza.org",
  },
  {
    id: 3,
    category: "healthcare",
    title: "NYC Healthcare",
    imageSrc: P3,
    description:
      "Comprehensive healthcare for NYC residents, ensuring better health and peace of mind.",
    link: "https://www.nychealthandhospitals.org",
  },
  {
    id: 4,
    category: "healthcare",
    title: "Mediclinic",
    imageSrc: P4,
    description:
      "Advanced healthcare services tailored to your medical needs with expert care.",
    link: "https://www.mediclinic.ae",
  },
  {
    id: 5,
    category: "real-estate",
    title: "Ex Arabia",
    imageSrc: P5,
    description:
      "Premium real estate solutions in Arabian markets, offering unmatched service.",
    link: "https://exarabiauae.com",
  },
  {
    id: 6,
    category: "tours-travels",
    title: "BCD Travels",
    imageSrc: P6,
    description:
      "Plan your perfect vacation with expert travel packages and great deals.",
    link: "https://bcdtravel.es",
  },
  {
    id: 7,
    category: "others",
    title: "Breezy",
    imageSrc: P7,
    description:
      "Effortless services for a more breezy and organized lifestyle.",
    link: "https://breezyhomeservices.com.au",
  },
  {
    id: 8,
    category: "others",
    title: "Maid to Clean",
    imageSrc: P8,
    description:
      "Top-notch cleaning services ensuring sparkling spaces for your home or office.",
    link: "https://www.maidtoclean.com.au",
  },
  {
    id: 9,
    category: "others",
    title: "SG Cleaning",
    imageSrc: P9,
    description:
      "Expert cleaning services delivering spotless results for every corner of your space.",
    link: "https://sgcleaningservices.com",
  },
  {
    id: 10,
    category: "others",
    title: "Tidy Here",
    imageSrc: P10,
    description:
      "Professional cleaning services for a neat and tidy living environment.",
    link: "https://tidyhere.com",
  },
  {
    id: 11,
    category: "others",
    title: "Maidpro",
    imageSrc: P11,
    description:
      "Reliable maid services for your home cleaning and organizational needs.",
    link: "https://www.maidpro.com",
  },
  {
    id: 12,
    category: "tours-travels",
    title: "SixT Rental",
    imageSrc: P12,
    description:
      "Affordable car rental services for hassle-free travel experiences worldwide.",
    link: "#",
  },
  {
    id: 13,
    category: "real-estate",
    title: "Enterprise",
    imageSrc: P13,
    description:
      "Trustworthy real estate management and development services for modern enterprises.",
    link: "https://www.enterprise.com",
  },
  {
    id: 14,
    category: "tours-travels",
    title: "Budget",
    imageSrc: P14,
    description:
      "Budget-friendly travel packages tailored to your adventures and explorations.",
    link: "https://www.budget.com",
  },
  {
    id: 15,
    category: "tours-travels",
    title: "Hertz",
    imageSrc: P15,
    description:
      "Quality car rentals for your business or leisure travels across destinations.",
    link: "https://www.hertz.com",
  },
  {
    id: 16,
    category: "real-estate",
    title: "Cushman & Wakefield",
    imageSrc: P16,
    description:
      "Global leaders in real estate services providing expert market insights and opportunities.",
    link: "https://www.cushwake.ae",
  },
  {
    id: 17,
    category: "real-estate",
    title: "CRE Real Estate",
    imageSrc: P17,
    description:
      "Focused on innovative commercial real estate solutions for businesses worldwide.",
    link: "#",
  },
  {
    id: 18,
    category: "real-estate",
    title: "Forest Hill",
    imageSrc: P18,
    description:
      "Exclusive real estate opportunities in Forest Hill for discerning buyers.",
    link: "https://foresthillsdubai.com",
  },
  {
    id: 19,
    category: "healthcare",
    title: "QI Spine Clinic",
    imageSrc: P19,
    description:
      "Specialized spine care and treatment for improved mobility and health.",
    link: "https://www.qispine.com",
  },
  {
    id: 20,
    category: "healthcare",
    title: "Viva Clinic",
    imageSrc: P20,
    description:
      "Dedicated healthcare services ensuring vibrant and healthy lives.",
    link: "https://vivaaestheticclinic.com",
  },
  {
    id: 21,
    category: "healthcare",
    title: "Shaly Hospital",
    imageSrc: P21,
    description:
      "Comprehensive medical services for all health needs under one roof.",
    link: "https://www.shalby.org",
  },
  {
    id: 22,
    category: "healthcare",
    title: "Apicha Health",
    imageSrc: P22,
    description:
      "Focused on delivering quality care and community-based healthcare solutions.",
    link: "https://www.apicha.org",
  },
  {
    id: 23,
    category: "healthcare",
    title: "Kaya Clinic",
    imageSrc: P23,
    description:
      "Advanced skin and healthcare treatments for radiant well-being.",
    link: "https://www.kayaskinclinic.com/uae/en/",
  },
  {
    id: 24,
    category: "tours-travels",
    title: "Day OFF Tours",
    imageSrc: P24,
    description: "Memorable day tours tailored for relaxation and exploration.",
    link: "https://dayofftourandtravel.com",
  },
  {
    id: 25,
    category: "others",
    title: "We Clean",
    imageSrc: P25,
    description:
      "Efficient cleaning services tailored for residential and commercial spaces.",
    link: "#",
  },
  {
    id: 26,
    category: "others",
    title: "Aman's Portfolio",
    imageSrc: P26,
    description: "A creative showcase of designs and projects by Aman.",
    link: "https://isacsmile.github.io/Aman_Sharma/",
  },
  {
    id: 27,
    category: "others",
    title: "Umrah",
    imageSrc: P27,
    description: "Easy Umrah and hajj pilgramage servies accross India.",
    link: "https://easyumrahtour.com/",
  },
  {
    id: 28,
    category: "tours-travels",
    title: "Tickets To Adventure",
    imageSrc: P28,
    description:
      "Seamless domestic and international tours with flights and hotel bookings.",
    link: "https://ticketstoadventure.com/",
  },
  {
    id: 29,
    category: "others",
    title: "Maghay Mela Utsav",
    imageSrc: P29,
    description:
      "Annual Kurseong Maghay Mela: music, dance, tea, oranges, sports, unity.",
    link: "https://maghaymelautsav.com/",
  },
];

// Data for faq
export const faqData = [
  {
    question: "What services does your agency offer?",
    answer:
      "We provide end-to-end web solutions, including design, development, digital marketing, branding, and e-commerce services.",
  },
  {
    question: "How do you ensure project success?",
    answer:
      "Our team follows a rigorous process from initial concept to final delivery, ensuring quality at every step.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope, but we work efficiently to deliver high-quality solutions within agreed timeframes.",
  },
  {
    question: "Do you offer support after project delivery?",
    answer:
      "Yes, we offer comprehensive support and maintenance services to ensure your digital presence remains robust.",
  },
];

// careersData

export const careersData = [
  {
    id: "cold-calling",
    category: "Marketing & Communication",
    title: "Cold Calling",
    location: "India",
    isRemote: true,
    postedDate: "June 5, 2025",
    applyLink: "https://forms.gle/UfjwXe8AEUPQjDGi6",
    icon: GrAnnounce,
  },
  {
    id: "wordpress-developer",
    category: "Developer",
    title: "WordPress Developer",
    location: "India",
    isRemote: true,
    postedDate: "June 5, 2025",
    applyLink: "https://forms.gle/UfjwXe8AEUPQjDGi6",
    icon: AiOutlineCode,
  },
  {
    id: "php-developer",
    category: "Developer",
    title: "PHP Developer",
    location: "India",
    isRemote: true,
    postedDate: "June 5, 2025",
    applyLink: "https://forms.gle/UfjwXe8AEUPQjDGi6",
    icon: AiOutlineCode,
  },
  {
    id: "mern-developer",
    category: "Developer",
    title: "MERN Developer",
    location: "India",
    isRemote: true,
    postedDate: "June 5, 2025",
    applyLink: "https://forms.gle/UfjwXe8AEUPQjDGi6",
    icon: AiOutlineCode,
  },
];
