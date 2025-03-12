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
import ApichaCover from "../assets/images/Featured/Apicha_Cover.png";
import ApichaSlideUp from "../assets/images/Featured/Apicha-slide-up.png";
import DayoffCover from "../assets/images/Featured/Day_Off_cover.png";
import DayoffSlideUp from "../assets/images/Featured/Day0ff-slide-up.png";
import ForesthillCover from "../assets/images/Featured/forest-hill-cover.png";
import ForesthillSlideUp from "../assets/images/Featured/Forest-Hill-slideup.png";
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
//Images for Services
import webDesign from "../assets/images/services/web-design.png";
import webDevelopment from "../assets/images/services/web-development.png";
import marketing from "../assets/images/services/marketing.png";
import wordpress from "../assets/images/services/wordpress.png";
import shopify from "../assets/images/services/shopify.png";
import ecommerce from "../assets/images/services/ecommerce-website.png";
//Images for founders img
import avatar from "../assets/images/others/avatar.jpg";

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
    projectName: "Day Off Tours & Travels",
    website: "dayofftourandtravel.com",
    backgroundImage: DayoffCover,
    hoverImage: DayoffSlideUp,
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

export const pricingPlans = [
  {
    title: "Starter",
    description:
      "Ideal for maintaining a seamless online presence, perfect for individuals and small businesses.",
    price: 79,
    period: "year",
    features: [
      "Upto 6 Pages",
      "4-6 Day Delivery",
      "1 Year Free Hosting",
      "Modern Site",
      "Multi Device Responsive",
      "3 Months Free Site Maintenance",
      "Form & Contact Section",
      "Basic SEO",
      "Google Analytics",
    ],
    cta: {
      text: "Enquire now",
      link: "#contact",
    },
  },
  {
    title: "Standard",
    description:
      "Suitable for growing businesses seeking enhanced functionality and performance.",
    price: 119,
    period: "year",
    features: [
      "Upto 10 Pages",
      "14-20 Day Delivery",
      "1 Year Free Hosting",
      "eCommerce Functionality",
      "Multi Device Responsive",
      "3 Months Free Site Maintenance",
      "Payment Integration",
      "Basic SEO",
      "Google Analytics",
    ],
    cta: {
      text: "Enquire now",
      link: "#contact",
    },
  },
  {
    title: "Premium",
    description:
      "Designed for established businesses with advanced needs and comprehensive solutions.",
    price: 159,
    period: "year",
    features: [
      "Unlimited Pages",
      "24-30 Day Delivery",
      "1 Year Free Hosting",
      "eCommerce Functionality",
      "Multi Device Responsive",
      "6 Months Free Site Maintenance",
      "Payment Integration",
      "Advanced SEO",
      "Real-time Monitoring and Analytics",
    ],
    cta: {
      text: "Enquire now",
      link: "#contact",
    },
  },
];

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
    image: avatar,
    social: {
      linkedin: "/linkedin-sonu",
      github: "/github-sonu",
    },
    variant: "first",
  },
  {
    id: 2,
    name: "Faiz Imam",
    role: "Front-End Developer",
    post: "Co Founder",
    image: avatar,
    social: {
      linkedin: "/linkedin-faiz",
      github: "/github-faiz",
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