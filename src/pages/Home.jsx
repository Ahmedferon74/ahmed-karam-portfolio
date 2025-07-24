import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Eye, Code, Palette, Smartphone } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';
import profileImage from '../assets/my-profile.jpg';
import backgroundImage from '../assets/background.jpg';

const Home = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Code,
      title: 'تطوير الويب',
      description: 'تطوير مواقع وتطبيقات ويب حديثة باستخدام أحدث التقنيات',
      color: 'text-blue-500'
    },
    {
      icon: Palette,
      title: 'التصميم الإبداعي',
      description: 'تصميم واجهات مستخدم جذابة وتجربة مستخدم متميزة',
      color: 'text-purple-500'
    },
    {
      icon: Smartphone,
      title: 'التصميم المتجاوب',
      description: 'مواقع تعمل بشكل مثالي على جميع الأجهزة والشاشات',
      color: 'text-green-500'
    }
  ];

  const stats = [
    { number: '4+', label: 'مشاريع مكتملة' },
    { number: '3+', label: 'سنوات خبرة' },
    { number: '10+', label: 'عملاء راضون' },
    { number: '500+', label: 'كوب قهوة' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="relative inline-block">
              <img 
                src={profileImage} 
                alt="Ahmed Karam"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-white shadow-2xl animate-float"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse"></div>
            </div>
          </div>
          
          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            {t('welcomeTitle')}
          </h1>
          
          <div className="relative mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-300 font-semibold mb-4 animate-fade-in-up delay-200">
              {t('jobTitle')}
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300">
            {t('heroDescription')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-400">
            <a
              href="/Ahmed-Karam-CV.pdf"
              download
              className="group flex items-center space-x-3 rtl:space-x-reverse px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span className="font-semibold">{t('downloadCV')}</span>
            </a>
            
            <Link
              to="/projects"
              className="group flex items-center space-x-3 rtl:space-x-reverse px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <Eye className="w-5 h-5 group-hover:animate-pulse" />
              <span className="font-semibold">{t('viewProjects')}</span>
              <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ما أقدمه لك
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gray-50 dark:bg-slate-700 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 ${feature.color} bg-current/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 animate-counter">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            هل لديك مشروع في ذهنك؟
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            أنا متاح للعمل على مشاريع جديدة ومثيرة. دعنا نتحدث حول كيف يمكنني مساعدتك في تحقيق أهدافك.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-3 rtl:space-x-reverse px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <span className="font-semibold">تواصل معي الآن</span>
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

