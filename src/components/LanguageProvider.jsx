import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'نبذة عني',
    skills: 'المهارات',
    experience: 'الخبرات',
    education: 'التعليم',
    projects: 'المشاريع',
    contact: 'تواصل معي',
    
    // Home Page
    welcomeTitle: 'مرحباً، أنا أحمد كرم',
    jobTitle: 'مطور ويب ومصمم',
    heroDescription: 'مطور ويب شغوف أحب تحويل الكود إلى تجارب مستخدم جميلة. أحب بناء أشياء تعيش على الويب باستخدام التقنيات الحديثة.',
    downloadCV: 'تحميل السيرة الذاتية',
    viewProjects: 'عرض المشاريع',
    
    // About Page
    aboutTitle: 'نبذة عني',
    aboutDescription: 'مطور ويب شغوف بخبرة في تطوير تطبيقات الويب الحديثة باستخدام React، Node.js، وتقنيات الويب المتقدمة.',
    
    // Skills Page
    skillsTitle: 'المهارات التقنية',
    frontendDev: 'تطوير الواجهات الأمامية',
    backendDev: 'تطوير الخادم',
    tools: 'الأدوات والعمليات',
    design: 'التصميم',
    
    // Experience Page
    experienceTitle: 'الخبرات العملية',
    achievements: 'الإنجازات الرئيسية',
    
    // Education Page
    educationTitle: 'التعليم',
    
    // Projects Page
    projectsTitle: 'المشاريع المميزة',
    projectsDescription: 'مجموعة مختارة من أفضل أعمالي في تطوير الويب والتطبيقات',
    allProjects: 'جميع المشاريع',
    webApps: 'تطبيقات الويب',
    mobileApps: 'تطبيقات الجوال',
    viewProject: 'عرض المشروع',
    viewCode: 'عرض الكود',
    
    // Contact Page
    contactTitle: 'تواصل معي',
    contactDescription: 'هل لديك مشروع في ذهنك؟ أنا متاح للعمل على مشاريع جديدة ومثيرة.',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    subject: 'الموضوع',
    message: 'الرسالة',
    sendMessage: 'إرسال الرسالة',
    
    // Footer
    allRightsReserved: 'جميع الحقوق محفوظة',
    
    // Common
    loading: 'جاري التحميل...',
    error: 'حدث خطأ',
    success: 'تم بنجاح'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    projects: 'Projects',
    contact: 'Contact',
    
    // Home Page
    welcomeTitle: 'Hello, I\'m Ahmed Karam',
    jobTitle: 'Web Developer & Designer',
    heroDescription: 'A passionate web developer who loves turning code into beautiful user experiences. I love building things that live on the web using modern technologies.',
    downloadCV: 'Download CV',
    viewProjects: 'View Projects',
    
    // About Page
    aboutTitle: 'About Me',
    aboutDescription: 'A passionate web developer with experience in developing modern web applications using React, Node.js, and advanced web technologies.',
    
    // Skills Page
    skillsTitle: 'Technical Skills',
    frontendDev: 'Frontend Development',
    backendDev: 'Backend Development',
    tools: 'Tools & DevOps',
    design: 'Design',
    
    // Experience Page
    experienceTitle: 'Work Experience',
    achievements: 'Key Achievements',
    
    // Education Page
    educationTitle: 'Education',
    
    // Projects Page
    projectsTitle: 'Featured Projects',
    projectsDescription: 'A curated selection of my best work in web development and applications',
    allProjects: 'All Projects',
    webApps: 'Web Apps',
    mobileApps: 'Mobile Apps',
    viewProject: 'View Project',
    viewCode: 'View Code',
    
    // Contact Page
    contactTitle: 'Get In Touch',
    contactDescription: 'Have a project in mind? I\'m available for new and exciting projects.',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    sendMessage: 'Send Message',
    
    // Footer
    allRightsReserved: 'All rights reserved',
    
    // Common
    loading: 'Loading...',
    error: 'An error occurred',
    success: 'Success'
  }
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');
  const [isRTL, setIsRTL] = useState(true);

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    setIsRTL(newLang === 'ar');
    
    // Update document direction
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    isRTL,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

