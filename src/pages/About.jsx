import React from 'react';
import { Calendar, MapPin, Mail, Phone, Download, Award, Heart, Coffee } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';
import profileImage from '../assets/my-profile.jpg';

const About = () => {
  const { t, isRTL } = useLanguage();

  const personalInfo = {
    name: 'أحمد كرم',
    nameEn: 'Ahmed Karam',
    title: 'مطور ويب ومصمم',
    titleEn: 'Web Developer & Designer',
    email: 'ahmedelmasry5576@gmail.com',
    phone: '+20 155 090 1395',
    location: 'مصر',
    locationEn: 'Egypt',
    birthDate: '1995',
    experience: '3+ سنوات',
    experienceEn: '3+ years'
  };

  const aboutText = {
    ar: `مرحباً! أنا أحمد كرم، مطور ويب شغوف ومصمم مبدع من مصر. أحب تحويل الأفكار إلى تجارب رقمية جميلة وفعالة.

    بدأت رحلتي في عالم البرمجة منذ أكثر من 3 سنوات، وخلال هذه الفترة طورت العديد من المشاريع المتنوعة التي تهدف إلى حل مشاكل حقيقية في المجتمع. من منصة Human Bonding للتبرعات الشفافة إلى تطبيق التبرع بالدم الذي يربط المتبرعين بالمحتاجين.

    أؤمن بقوة التكنولوجيا في تحسين حياة الناس، ولذلك أركز على تطوير حلول تقنية تجمع بين الجمال والوظيفة. أستخدم أحدث التقنيات مثل React، Firebase، وGoogle Maps API لإنشاء تطبيقات ويب متطورة ومتجاوبة.

    عندما لا أكون أمام الكمبيوتر، أحب قراءة الكتب التقنية، ومتابعة أحدث التطورات في عالم التكنولوجيا، وأحياناً أستمتع بكوب من القهوة أثناء التفكير في مشاريع جديدة.`,
    
    en: `Hello! I'm Ahmed Karam, a passionate web developer and creative designer from Egypt. I love turning ideas into beautiful and effective digital experiences.

    I started my journey in the programming world more than 3 years ago, and during this time I have developed many diverse projects that aim to solve real problems in society. From the Human Bonding platform for transparent donations to the blood donation app that connects donors with those in need.

    I strongly believe in the power of technology to improve people's lives, so I focus on developing technical solutions that combine beauty and function. I use the latest technologies like React, Firebase, and Google Maps API to create advanced and responsive web applications.

    When I'm not in front of the computer, I love reading technical books, following the latest developments in the world of technology, and sometimes enjoying a cup of coffee while thinking about new projects.`
  };

  const interests = [
    { icon: '💻', label: 'البرمجة', labelEn: 'Programming' },
    { icon: '🎨', label: 'التصميم', labelEn: 'Design' },
    { icon: '📚', label: 'القراءة', labelEn: 'Reading' },
    { icon: '☕', label: 'القهوة', labelEn: 'Coffee' },
    { icon: '🚀', label: 'التكنولوجيا', labelEn: 'Technology' },
    { icon: '🎵', label: 'الموسيقى', labelEn: 'Music' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'الجودة',
      titleEn: 'Quality',
      description: 'أسعى دائماً لتقديم أفضل جودة في كل مشروع',
      descriptionEn: 'I always strive to deliver the best quality in every project'
    },
    {
      icon: '🤝',
      title: 'التعاون',
      titleEn: 'Collaboration',
      description: 'أؤمن بقوة العمل الجماعي والتواصل الفعال',
      descriptionEn: 'I believe in the power of teamwork and effective communication'
    },
    {
      icon: '💡',
      title: 'الإبداع',
      titleEn: 'Innovation',
      description: 'أحب إيجاد حلول إبداعية للمشاكل المعقدة',
      descriptionEn: 'I love finding creative solutions to complex problems'
    },
    {
      icon: '📈',
      title: 'التطوير المستمر',
      titleEn: 'Continuous Learning',
      description: 'أتعلم باستمرار لمواكبة أحدث التطورات',
      descriptionEn: 'I continuously learn to keep up with the latest developments'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('aboutTitle')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl sticky top-24">
              {/* Profile Image */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img 
                    src={profileImage} 
                    alt="Ahmed Karam"
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-slate-800"></div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">
                  {isRTL ? personalInfo.name : personalInfo.nameEn}
                </h2>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">
                  {isRTL ? personalInfo.title : personalInfo.titleEn}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-600 dark:text-gray-300">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span className="text-sm">{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-600 dark:text-gray-300">
                  <Phone className="w-5 h-5 text-green-500" />
                  <span className="text-sm">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="text-sm">{isRTL ? personalInfo.location : personalInfo.locationEn}</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-600 dark:text-gray-300">
                  <Award className="w-5 h-5 text-purple-500" />
                  <span className="text-sm">{isRTL ? personalInfo.experience : personalInfo.experienceEn} خبرة</span>
                </div>
              </div>

              {/* Download CV Button */}
              <div className="mt-8">
                <a
                  href="/ahmed-karam-cv.pdf"
                  download
                  className="w-full flex items-center justify-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  <span>{t('downloadCV')}</span>
                </a>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                قصتي
              </h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {isRTL ? aboutText.ar : aboutText.en}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            اهتماماتي
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-3">{interest.icon}</div>
                <p className="text-gray-900 dark:text-white font-semibold">
                  {isRTL ? interest.label : interest.labelEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            قيمي ومبادئي
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {isRTL ? value.title : value.titleEn}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {isRTL ? value.description : value.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">حقائق ممتعة عني</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Coffee className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <p className="opacity-90">كوب قهوة استهلكته أثناء البرمجة</p>
            </div>
            <div>
              <Heart className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <div className="text-3xl font-bold mb-2">∞</div>
              <p className="opacity-90">حبي للبرمجة والتطوير</p>
            </div>
            <div>
              <Award className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <div className="text-3xl font-bold mb-2">4+</div>
              <p className="opacity-90">مشاريع مكتملة بنجاح</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

