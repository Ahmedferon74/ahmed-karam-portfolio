import React from 'react';
import { Code, Palette, Database, Wrench, Smartphone, Globe } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';

const Skills = () => {
  const { t, isRTL } = useLanguage();

  const skillCategories = [
    {
      icon: Code,
      title: 'تطوير الواجهات الأمامية',
      titleEn: 'Frontend Development',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript (ES6+)', level: 88 },
        { name: 'React.js', level: 85 },
        { name: 'TailwindCSS', level: 90 },
        { name: 'Bootstrap', level: 85 }
      ]
    },
    {
      icon: Database,
      title: 'تطوير الخادم',
      titleEn: 'Backend Development',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      skills: [
        { name: 'Firebase', level: 85 },
        { name: 'Firestore', level: 80 },
        { name: 'Node.js', level: 75 }
      ]
    },
    {
      icon: Wrench,
      title: 'الأدوات والعمليات',
      titleEn: 'Tools & DevOps',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Google Maps API', level: 80 },
        { name: 'Vite', level: 85 },
        { name: 'npm/yarn', level: 85 }
      ]
    },
    {
      icon: Palette,
      title: 'التصميم',
      titleEn: 'Design',
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      skills: [
        { name: 'UI/UX Design Fundamentals', level: 80 },
        { name: 'Responsive Web Design', level: 90 },
        { name: 'Adobe Photoshop', level: 70 },
        { name: 'Figma', level: 75 }
      ]
    }
  ];

  const certifications = [
    {
      title: 'React Professional Certificate',
      issuer: 'Meta',
      date: '2023',
      credentialId: 'META-REACT-2023-001',
      icon: '⚛️'
    },
    {
      title: 'Firebase Certified Developer',
      issuer: 'Google',
      date: '2023',
      credentialId: 'FIREBASE-DEV-2023-001',
      icon: '🔥'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2022',
      credentialId: 'FCC-JS-2022-001',
      icon: '📜'
    }
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('skillsTitle')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            مجموعة شاملة من المهارات التقنية والإبداعية التي اكتسبتها خلال رحلتي في عالم التطوير
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mr-4 rtl:ml-4 rtl:mr-0`}>
                    <Icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {isRTL ? category.title : category.titleEn}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {category.skills.length} مهارات
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Expertise */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            خبراتي التقنية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center shadow-xl">
              <Globe className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                تطوير الويب الحديث
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                خبرة في تطوير تطبيقات الويب المتقدمة باستخدام أحدث التقنيات والأطر العمل
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center shadow-xl">
              <Smartphone className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                التصميم المتجاوب
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                إنشاء مواقع تعمل بشكل مثالي على جميع الأجهزة من الهواتف إلى أجهزة الكمبيوتر
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center shadow-xl">
              <Database className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                إدارة البيانات
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                خبرة في التعامل مع قواعد البيانات وإدارة البيانات باستخدام Firebase وFirestore
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            الشهادات المهنية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                    {cert.date}
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 text-xs">
                    ID: {cert.credentialId}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">رحلة التعلم المستمر</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            أؤمن بأن التعلم رحلة لا تنتهي. أسعى باستمرار لتطوير مهاراتي ومواكبة أحدث التطورات في عالم التكنولوجيا
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">3+</div>
              <p className="opacity-90">سنوات من الخبرة</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="opacity-90">تقنية متقنة</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">∞</div>
              <p className="opacity-90">شغف للتعلم</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

