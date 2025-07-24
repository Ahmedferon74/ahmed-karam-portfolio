import React from 'react';
import { Calendar, MapPin, CheckCircle, Briefcase, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';

const Experience = () => {
  const { t, isRTL } = useLanguage();

  const experiences = [
    {
      title: 'مطور ويب ومصمم',
      titleEn: 'Web Developer & Designer',
      company: 'مستقل',
      companyEn: 'Freelancer',
      period: '2020 - الآن',
      periodEn: '2020 - Present',
      location: 'مصر',
      locationEn: 'Egypt',
      type: 'دوام كامل',
      typeEn: 'Full-time',
      description: 'تطوير وتصميم مواقع وتطبيقات ويب متطورة للعملاء في مختلف القطاعات مع التركيز على الحلول المبتكرة والتقنيات الحديثة',
      descriptionEn: 'Developing and designing advanced websites and web applications for clients in various sectors, focusing on innovative solutions and modern technologies',
      achievements: [
        'تطوير منصة Human Bonding للتبرعات الشفافة والمحترمة',
        'إنشاء تطبيق التبرع بالدم مع المطابقة الفورية باستخدام Firebase و Maps API',
        'تطوير تقويم الشفاء بالذكاء الاصطناعي لمساعدة المدمنين على تتبع التقدم',
        'بناء نظام إعادة توزيع الطعام لتوجيه الطعام الفائض للمحتاجين',
        'تحسين أداء التطبيقات وتجربة المستخدم بنسبة 40%',
        'العمل مع أكثر من 10 عملاء راضين عن الخدمات المقدمة'
      ],
      achievementsEn: [
        'Developed Human Bonding platform for transparent and respectful donations',
        'Created blood donation app with instant matching using Firebase and Maps API',
        'Developed AI recovery calendar to help addicts track their progress',
        'Built food redistribution system to direct surplus food to those in need',
        'Improved application performance and user experience by 40%',
        'Worked with more than 10 satisfied clients'
      ],
      technologies: ['React', 'Firebase', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS', 'Google Maps API'],
      current: true
    }
  ];

  const skills = [
    { name: 'تطوير الواجهات الأمامية', level: 90, color: 'bg-blue-500' },
    { name: 'React.js', level: 85, color: 'bg-cyan-500' },
    { name: 'Firebase', level: 80, color: 'bg-orange-500' },
    { name: 'JavaScript', level: 88, color: 'bg-yellow-500' },
    { name: 'UI/UX Design', level: 75, color: 'bg-purple-500' },
    { name: 'تطوير المشاريع', level: 85, color: 'bg-green-500' }
  ];

  const stats = [
    { icon: Briefcase, value: '4+', label: 'مشاريع مكتملة', color: 'text-blue-500' },
    { icon: Award, value: '10+', label: 'عملاء راضون', color: 'text-green-500' },
    { icon: TrendingUp, value: '3+', label: 'سنوات خبرة', color: 'text-purple-500' },
    { icon: CheckCircle, value: '100%', label: 'معدل النجاح', color: 'text-orange-500' }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('experienceTitle')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            رحلتي المهنية في عالم تطوير الويب والتصميم مع التركيز على الابتكار والجودة
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <Icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            الخبرات العملية
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>
                
                {/* Experience Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pl-12' : 'md:ml-auto md:pr-12'}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {isRTL ? exp.title : exp.titleEn}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2">
                          {isRTL ? exp.company : exp.companyEn}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {isRTL ? exp.description : exp.descriptionEn}
                        </p>
                      </div>
                      {exp.current && (
                        <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold">
                          حالياً
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span>{isRTL ? exp.period : exp.periodEn}</span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <MapPin className="w-4 h-4 text-red-500" />
                        <span>{isRTL ? exp.location : exp.locationEn}</span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Briefcase className="w-4 h-4 text-green-500" />
                        <span>{isRTL ? exp.type : exp.typeEn}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        {t('achievements')}:
                      </h4>
                      <ul className="space-y-2">
                        {(isRTL ? exp.achievements : exp.achievementsEn).map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2 rtl:space-x-reverse text-gray-700 dark:text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        التقنيات المستخدمة:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Progress */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            مستوى المهارات
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-900 dark:text-white font-semibold">
                    {skill.name}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div 
                    className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            مهتم بالعمل معي؟
          </h2>
          <p className="text-xl mb-6 opacity-90">
            أنا متاح للعمل على مشاريع جديدة ومثيرة. دعنا نناقش كيف يمكنني مساعدتك
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 rtl:space-x-reverse px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            <span>تواصل معي</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;

