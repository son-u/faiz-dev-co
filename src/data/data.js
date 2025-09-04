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
import ApichaCover from "../assets/images/Featured/Apicha_Cover.webp";
import ApichaSlideUp from "../assets/images/Featured/Apicha-slide-up.webp";
import ForesthillCover from "../assets/images/Featured/forest-hill-cover.webp";
import ForesthillSlideUp from "../assets/images/Featured/Forest-Hill-slideup.webp";
import SunniSlideUp from "../assets/images/Featured/Sunni-slide-up.webp";
import SunniCover from "../assets/images/Featured/Sunni_cover.webp";
// images for TabSwitcher
import expTab from "../assets/images/illustrations/experience.svg";
import flexibilityTab from "../assets/images/illustrations/flexibility.svg";
import resultTab from "../assets/images/illustrations/results.svg";
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

//Images for Services
import webDesign from "../assets/images/services/web-design.webp";
import webDevelopment from "../assets/images/services/web-development.webp";
import marketing from "../assets/images/services/marketing.webp";
import wordpress from "../assets/images/services/wordpress.webp";
import shopify from "../assets/images/services/shopify.webp";
import ecommerce from "../assets/images/services/ecommerce-website.webp";
//Images for founders img
import sonuPotrait from "../assets/images/others/sonu_potrait.jpg";
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
    isActive: true,
    applyLink: "https://forms.gle/UfjwXe8AEUPQjDGi6",
    icon: GrAnnounce,
  },
  {
    id: "wordpress-developer",
    category: "Developer",
    title: "WordPress Developer",
    location: "India",
    isRemote: true,
    isActive: true,
    applyLink: "https://forms.gle/UfjwXe8AEUPQjDGi6",
    icon: AiOutlineCode,
  },
  {
    id: "php-developer",
    category: "Developer",
    title: "PHP Developer",
    location: "India",
    isRemote: true,
    isActive: true,
    applyLink: "https://forms.gle/UfjwXe8AEUPQjDGi6",
    icon: AiOutlineCode,
  },
  {
    id: "mern-developer",
    category: "Developer",
    title: "MERN Developer",
    location: "India",
    isRemote: true,
    isActive: true,
    applyLink: "https://forms.gle/UfjwXe8AEUPQjDGi6",
    icon: AiOutlineCode,
  },
];
