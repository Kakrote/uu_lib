// ============================================
// TOP BAR DATA
// ============================================
export const topBarLinks = [
  { label: "Our Team", href: "#" },
  { label: "Library Tour", href: "#" },
  { label: "Web OPAC", href: "#" },
  { label: "LRC E-Newsletter", href: "#" },
  { label: "Remote Access", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "BU Home", href: "#" },
  { label: "Admin Login", href: "#" },
]

// ============================================
// SITE HEADER DATA
// ============================================
export const headerLogo = {
  src: "/images/icons/university.png",
  alt: "Bennett University",
  width: 150,
  height: 60,
}

export const mainNavigation = [
  { label: "Home", href: "#", active: true },
  {
    label: "About Us",
    href: "#",
    hasDropdown: true,
  },
  {
    label: "Services",
    href: "#",
    hasDropdown: true,
  },
  {
    label: "Resources",
    href: "#",
    hasDropdown: true,
  },
  { label: "D&S @ BU", href: "#" },
  { label: "Research Support", href: "#" },
  { label: "Events", href: "#" },
  { label: "Contact Us", href: "#" },
]

// ============================================
// HERO SECTION DATA
// ============================================
export const heroMedia = {
  backgroundMediaUrl: "https://youtu.be/7PIji8OubXU?si=9UJ5KIAIfX8YfmYs",
  posterImageUrl: "/images/screencapture-library-bennett-edu-in-2025-12-19-11-43-48.png",
}

export const libraryHours = [
  {
    title: "Regular Days (Monday–Sunday)",
    time: "8:00 AM – 11:00 PM",
    color: "#fdfdff",
  },
  {
    title: "Extended Hours (During Exams)",
    time: "8:00 AM – 4:00 AM",
    color: "#6BC533",
  },
  {
    title: "Holidays",
    time: "9:00 AM – 5:00 PM",
    color: "#FFA200",
  },
  {
    title: "Circulation Service",
    time: "Available",
    color: "#E32424",
  },
]

export const libraryServices = [
  {
    icon: "BookOpen",
    text: "Book Issue/Renew: 8:00 AM – 11:00 PM",
  },
  {
    icon: "MapPin",
    text: "Book Return: 24/7 (Through RFID Book Drop Box)",
  },
]

// ============================================
// COLLECTION STATS DATA
// ============================================
export const collectionStats = {
  title: "Our Collection at a Glance",
  subtitle: "A vast repository of knowledge at your fingertips",
  items: [
    { icon: "BookOpen", count: "36,160+", label: "Print Collection" },
    { icon: "Globe", count: "2,50,000+", label: "E-Books" },
    { icon: "BookOpen", count: "9,341+", label: "E-Journals" },
    { icon: "BookOpen", count: "22+", label: "Magazines" },
    { icon: "BookOpen", count: "22+", label: "Databases" },
  ],
}

// ============================================
// NEW ARRIVALS DATA
// ============================================
export const newArrivalsBooks = [
  {
    name: "Think and Grow Rich-1",
    img: "/images/tagr.webp",
    description:
      "A practical classic about mindset, habits, and goal-setting to help you build a clear plan for success.",
  },
  {
    name: "Think and Grow Rich-2",
    img: "/images/tagr.webp",
    description:
      "A practical classic about mindset, habits, and goal-setting to help you build a clear plan for success.",
  },
  {
    name: "Think and Grow Rich-3",
    img: "/images/tagr.webp",
    description:
      "A practical classic about mindset, habits, and goal-setting to help you build a clear plan for success.",
  },
  {
    name: "Think and Grow Rich-4",
    img: "/images/tagr.webp",
    description:
      "A practical classic about mindset, habits, and goal-setting to help you build a clear plan for success.",
  },
  {
    name: "Think and Grow Rich-5",
    img: "/images/tagr.webp",
    description:
      "A practical classic about mindset, habits, and goal-setting to help you build a clear plan for success.",
  },
  {
    name: "Think and Grow Rich-6",
    img: "/images/tagr.webp",
    description:
      "A practical classic about mindset, habits, and goal-setting to help you build a clear plan for success.",
  },
]

// Legacy new arrivals titles (for orbit section)
export const newArrivalsTitles = [
  "Thinking Through Graphic History",
  "Transforming Typography",
  "Turner's Apparitions",
  "Stochastic Images",
  "Advanced Design",
  "Creative Coding",
]

// ============================================
// POPULAR RESOURCES DATA
// ============================================
export const popularResources = [
  "ACM",
  "Pressreader",
  "ProQuest",
  "National Collections",
  "SCC Online",
  "Star Journals",
  "Scopus",
  "Springer Nature",
]

// ============================================
// KEY SERVICES DATA
// ============================================
export const keyServices = [
  { icon: "BookOpen", title: "Online GD Room Booking", color: "#3048cd" },
  { icon: "Globe", title: "Remote Access", color: "#E32424" },
  { icon: "Lightbulb", title: "Resource Guide", color: "#FFA200" },
  { icon: "BookOpen", title: "Research Support", color: "#6BC533" },
  { icon: "BookOpen", title: "Plagiarism Checking (Turnitin)", color: "#4453CD" },
  { icon: "BookOpen", title: "Faculty Profiling (Altius)", color: "#E32424" },
  { icon: "BookOpen", title: "Resource Sharing", color: "#FFA200" },
  { icon: "BookOpen", title: "IT Facilities", color: "#6BC533" },
  { icon: "BookOpen", title: "Borrowing Facility", color: "#3048cd" },
  { icon: "BookOpen", title: "Reference Service", color: "#E32424" },
  { icon: "BookOpen", title: "Library Membership", color: "#FFA200" },
  { icon: "BookOpen", title: "Inter Library Loan Service", color: "#6BC533" },
]

// ============================================
// HELP SECTION DATA
// ============================================
export const helpSection = {
  title: "Need help? Our team is here for you.",
  description:
    "Whether you need assistance with research, finding resources, or utilizing library services, we are ready to help.",
  buttonText: "CONTACT US",
  buttonColor: "#E32424",
  buttonHoverColor: "#c01f1f",
}

// ============================================
// STUDENT TESTIMONIALS DATA
// ============================================
export const testimonialsConfig = {
  apiUrl: "https://uucms.uudoon.in/api/image-categories/?format=json&name=WhatourStudentSays",
  autoAdvanceInterval: 4000, // 4 seconds
  sectionTitle: "What Our Students Say",
}

// ============================================
// FOOTER DATA
// ============================================
export const footerUsefulResources = [
  { label: "Frequently Asked Questions (FAQs)", href: "#" },
  { label: "Turnitin", href: "#" },
  { label: "DElegate@BU", href: "#" },
  { label: "Tutorials", href: "#" },
  { label: "LRC Rules", href: "#" },
  { label: "OPAC (Book Catalogue)", href: "#" },
]

export const footerQuickLinks = [
  { label: "National Digital Library of India", href: "#" },
  { label: "ShodhGanga (a reservoir of Indian theses)", href: "#" },
  { label: "ShodhGangotri (Indian Research in Progress)", href: "#" },
  { label: "E-ShodhSindhu", href: "#" },
  { label: "Free e-Books", href: "#" },
  { label: "SWAYAM (Free MOOC Courses)", href: "#" },
]

export const contactInfo = {
  title: "Learning Resource Centre (LRC)",
  subtitle: "Bennett University",
  address: {
    line1: "Plot No-8-11, Tech Zone II,",
    line2: "Greater Noida, UP-201310",
  },
  email: "library@bennett.edu.in",
  phone: "+91-120-6617100",
  socialLinks: [
    { platform: "Facebook", url: "#", icon: "Facebook" },
    { platform: "Instagram", url: "#", icon: "Instagram" },
    { platform: "LinkedIn", url: "#", icon: "Linkedin" },
    { platform: "YouTube", url: "#", icon: "Youtube" },
  ],
}

export const copyrightText = "© 2025 – Learning Resource Centre, Bennett University, Greater Noida. All Rights Reserved."

// ============================================
// COLOR PALETTE
// ============================================
export const colors = {
  primary: "#3048cd",
  secondary: "#6BC533",
  danger: "#E32424",
  warning: "#FFA200",
  dark: "#2A2A2F",
  darkBlue: "#324997",
  lightGray: "#F2F2F5",
  textGray: "#C7C9D9",
  white: "#ffffff",
}

// ============================================
// THEME COLORS
// ============================================
export const themeColors = {
  background: "#ffffff",
  collectionStatsBg: "#3048cd",
  popularResourcesBg: "#F2F2F5",
  footerBg: "#2A2A2F",
  topBarBg: "#324997",
}
