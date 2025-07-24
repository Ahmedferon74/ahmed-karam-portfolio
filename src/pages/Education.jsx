import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star, Trophy } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';

const Education = () => {
  const { t, isRTL } = useLanguage();

  const education = [
    {
      degree: 'بكالوريوس علوم الحاسوب',
      degreeEn: 'Bachelor of Computer Science',
      school: 'الجامعة العربية المفتوحة',
      schoolEn: 'Arab Open University',
      period: '2022 - 2026 (متوقع)',
      periodEn: '2022 - 2026 (Expected)',
      location: 'مصر',
      locationEn: 'Egypt',
      grade: 'جيد جدا',
      gradeEn: 'Very good',
      description: 'تخصص في هندسة البرمجيات وتطوير التطبيقات مع التركيز على التقنيات الحديثة',
      descriptionEn: 'Specialization in software engineering and application development with focus on modern technologies',
      courses: [
        'هندسة البرمجيات',
        'قواعد البيانات',
        'تطوير تطبيقات الويب',
        'الخوارزميات وهياكل البيانات',
        'أمن المعلومات',
        'إدارة المشاريع التقنية'
      ],
      coursesEn: [
        'Software Engineering',
        'Database Systems',
        'Web Application Development',
        'Algorithms and Data Structures',
        'Information Security',
        'Technical Project Management'
      ],
      current: true
    }
  ];

  const onlineCourses = [
    {
      title: 'React - The Complete Guide',
      platform: 'Udemy',
      instructor: 'Maximilian Schwarzmüller',
      duration: '40 ساعة',
      durationEn: '40 hours',
      completed: '2023',
      certificate: true,
      rating: 4.9
    },
    {
      title: 'Firebase Masterclass',
      platform: 'Coursera',
      instructor: 'Google Cloud',
      duration: '25 ساعة',
      durationEn: '25 hours',
      completed: '2023',
      certificate: true,
      rating: 4.8
    },
    {
      title: 'Advanced JavaScript Concepts',
      platform: 'freeCodeCamp',
      instructor: 'freeCodeCamp Team',
      duration: '30 ساعة',
      durationEn: '30 hours',
      completed: '2022',
      certificate: true,
      rating: 4.7
    },
    {
      title: 'UI/UX Design Fundamentals',
      platform: 'Coursera',
      instructor: 'Google',
      duration: '20 ساعة',
      durationEn: '20 hours',
      completed: '2022',
      certificate: true,
      rating: 4.6
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'أفضل مشروع تخرج',
      titleEn: 'Best Graduation Project',
      description: 'حصلت على جائزة أفضل مشروع تخرج لمشروع منصة Human Bonding',
      descriptionEn: 'Received the best graduation project award for the Human Bonding platform project',
      year: '2025',
      color: 'text-yellow-500'
    },
    
    
  ];

  const skills = [
    { name: 'البرمجة', level: 90 },
    { name: 'حل المشكلات', level: 85 },
    { name: 'التفكير النقدي', level: 88 },
    { name: 'العمل الجماعي', level: 92 },
    { name: 'إدارة الوقت', level: 87 },
    { name: 'التعلم الذاتي', level: 95 }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('educationTitle')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            رحلتي التعليمية في عالم علوم الحاسوب والتطوير مع التركيز على التعلم المستمر والتطوير الذاتي
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        {/* Formal Education */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            التعليم الأكاديمي
          </h2>
          
          {education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl mb-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                {/* Main Info */}
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mr-4 rtl:ml-4 rtl:mr-0">
                      <GraduationCap className="w-8 h-8 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {isRTL ? edu.degree : edu.degreeEn}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                        {isRTL ? edu.school : edu.schoolEn}
                      </p>
                    </div>
                    {edu.current && (
                      <span className="ml-4 rtl:mr-4 rtl:ml-0 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold">
                        حالياً
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {isRTL ? edu.description : edu.descriptionEn}
                  </p>

                  {/* Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>{isRTL ? edu.period : edu.periodEn}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span>{isRTL ? edu.location : edu.locationEn}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Award className="w-4 h-4 text-green-500" />
                      <span>{isRTL ? edu.grade : edu.gradeEn}</span>
                    </div>
                  </div>

                  {/* Courses */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      المقررات الرئيسية:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {(isRTL ? edu.courses : edu.coursesEn).map((course, i) => (
                        <div key={i} className="flex items-center space-x-2 rtl:space-x-reverse text-gray-700 dark:text-gray-300">
                          <BookOpen className="w-4 h-4 text-blue-500" />
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Online Courses */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            الدورات التدريبية عبر الإنترنت
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {onlineCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {course.title}
                  </h3>
                  {course.certificate && (
                    <Award className="w-5 h-5 text-yellow-500" />
                  )}
                </div>
                
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {course.platform}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  المدرب: {course.instructor}
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>المدة: {isRTL ? course.duration : course.durationEn}</span>
                  <span>مكتمل: {course.completed}</span>
                </div>
                
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    {course.rating}/5
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            الإنجازات الأكاديمية
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <Icon className={`w-16 h-16 ${achievement.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {isRTL ? achievement.title : achievement.titleEn}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {isRTL ? achievement.description : achievement.descriptionEn}
                  </p>
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                    {achievement.year}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Academic Skills */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            المهارات الأكاديمية
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
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">فلسفتي في التعلم</h2>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            أؤمن بأن التعلم عملية مستمرة لا تنتهي. الجمع بين التعليم الأكاديمي الرسمي والتعلم الذاتي والخبرة العملية هو المفتاح للنجاح في عالم التكنولوجيا المتطور باستمرار.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <div className="text-2xl font-bold mb-2">التعلم النظري</div>
              <p className="opacity-90">أساس قوي من المعرفة الأكاديمية</p>
            </div>
            <div>
              <Trophy className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <div className="text-2xl font-bold mb-2">التطبيق العملي</div>
              <p className="opacity-90">تطبيق المعرفة في مشاريع حقيقية</p>
            </div>
            <div>
              <Star className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <div className="text-2xl font-bold mb-2">التطوير المستمر</div>
              <p className="opacity-90">مواكبة أحدث التطورات والتقنيات</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

