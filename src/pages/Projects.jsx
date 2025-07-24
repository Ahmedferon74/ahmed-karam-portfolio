import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Search } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';

const Projects = () => {
  const { t, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Projects data - يمكن للمستخدم إضافة الصور والروابط هنا فقط
  const projects = [
    {
      id: 1,
      title: 'منصة Human Bonding',
      titleEn: 'Human Bonding Platform',
      description: 'نظام تبرعات شفاف ومحترم يربط بين المتبرعين والمحتاجين مع نظام تتبع شامل للتبرعات',
      descriptionEn: 'A transparent and respectful donation system connecting donors with those in need, featuring comprehensive donation tracking',
      image: '/images/projects/human-bonding.jpg', // يمكن استبدالها بصورة حقيقية
      technologies: ['React', 'Firebase', 'Firestore', 'Tailwind CSS'],
      category: 'web',
      liveUrl: 'https://donation-frontend-one.vercel.app/login', // يمكن إضافة الرابط الحقيقي هنا
      githubUrl: 'https://donation-frontend-one.vercel.app/login', // يمكن إضافة رابط GitHub هنا
      featured: true,
      status: 'مكتمل',
      statusEn: 'Completed',
      duration: '4 أشهر',
      durationEn: '4 months'
    },
    {
      id: 2,
      title: 'تطبيق التبرع بالدم',
      titleEn: 'Blood Donation App',
      description: 'تطبيق للمطابقة الفورية بين المتبرعين والمحتاجين للدم مع تحديد المواقع الجغرافية',
      descriptionEn: 'An app for instant matching between blood donors and recipients with geographical location services',
      image: '/api/placeholder/600/400', // يمكن استبدالها بصورة حقيقية
      technologies: ['React', 'Firebase', 'Google Maps API', 'Geolocation'],
      category: 'web',
      liveUrl: '#', // يمكن إضافة الرابط الحقيقي هنا
      githubUrl: '#', // يمكن إضافة رابط GitHub هنا
      featured: true,
      status: 'قيد التطوير',
      statusEn: 'In Development',
      duration: '3 أشهر',
      durationEn: '3 months'
    },
    {
      id: 3,
      title: 'تقويم الشفاء بالذكاء الاصطناعي',
      titleEn: 'AI Recovery Calendar',
      description: 'يساعد المدمنين على تتبع تقدمهم في رحلة الشفاء مع تذكيرات ذكية ودعم نفسي',
      descriptionEn: 'Helps addicts track their recovery progress with smart reminders and psychological support',
      image: '/images/projects/AI-Recovery-Calendar.jpg', // يمكن استبدالها بصورة حقيقية
      technologies: ['React', 'AI/ML', 'Firebase', 'Node.js'],
      category: 'web',
      liveUrl: 'https://donation-frontend-one.vercel.app/addection', // يمكن إضافة الرابط الحقيقي هنا
      githubUrl: 'https://donation-frontend-one.vercel.app/addection', // يمكن إضافة رابط GitHub هنا
      featured: false,
      status: 'قيد التطوير',
      statusEn: 'In Development',
      duration: '5 أشهر',
      durationEn: '5 months'
    },
    {
      id: 4,
      title: 'نظام إعادة توزيع الطعام',
      titleEn: 'Food Redistribution System',
      description: 'تقنية ذكية لتوجيه الطعام الفائض من المطاعم والفنادق إلى المحتاجين',
      descriptionEn: 'Smart technology to redirect surplus food from restaurants and hotels to those in need',
      image: '/images/projects/Food-Redistribution-System.jpg', // يمكن استبدالها بصورة حقيقية
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'web',
      liveUrl: 'https://donation-frontend-one.vercel.app/donate', // يمكن إضافة الرابط الحقيقي هنا
      githubUrl: 'https://donation-frontend-one.vercel.app/donate', // يمكن إضافة رابط GitHub هنا
      featured: false,
      status: 'مكتمل',
      statusEn: 'Completed',
      duration: '6 أشهر',
      durationEn: '6 months'
    },
    {
      id: 5,
      title: 'موقع شخصي احترافي',
      titleEn: 'Professional Portfolio Website',
      description: 'موقع سيرة ذاتية تفاعلي ومتجاوب مع تصميم حديث وأنيميشن متقدم',
      descriptionEn: 'Interactive and responsive portfolio website with modern design and advanced animations',
      image: '/images/projects/Professional-Portfolio-Website.jpg', // يمكن استبدالها بصورة حقيقية
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      category: 'web',
      liveUrl: 'https://ahmedferon74.github.io/my-portfolio/', // يمكن إضافة الرابط الحقيقي هنا
      githubUrl: 'https://ahmedferon74.github.io/my-portfolio/', // يمكن إضافة رابط GitHub هنا
      featured: true,
      status: 'مكتمل',
      statusEn: 'Completed',
      duration: '2 أشهر',
      durationEn: '2 months'
    },
    {
      id: 6,
      title: 'تطبيق منصه الكورسات',
      titleEn: 'Course platform application',
      description: 'موقع يتيح لك تعلم البرمجه من الصفر وتخصصات كثيره ويمكنه ان يدلك بشكل صحيح ويوجهك الى الطريق الصحيح وباستخدام الذكاء الاصتناعى',
      descriptionEn: 'A website that allows you to learn programming from scratch and offers many specializations, and can guide you correctly and direct you to the right path using artificial intelligence.',
      image: '/images/projects/Course platform application.jpg',// يمكن استبدالها بصورة حقيقية
      technologies: ['React', 'Firebase', 'Material-UI', 'Chart.js'],
      category: 'web',
      liveUrl: '#', // يمكن إضافة الرابط الحقيقي هنا
      githubUrl: '#', // يمكن إضافة رابط GitHub هنا
      featured: false,
      status: 'قيد التطوير',
      statusEn: 'In Development',
      duration: '3 أشهر',
      durationEn: '3 months'
    }
  ];

  const categories = [
    { id: 'all', label: t('allProjects'), labelEn: 'All Projects' },
    { id: 'web', label: t('webApps'), labelEn: 'Web Apps' },
    { id: 'mobile', label: t('mobileApps'), labelEn: 'Mobile Apps' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const ProjectCard = ({ project }) => (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
          project.status === 'مكتمل' 
            ? 'bg-green-500 text-white' 
            : 'bg-yellow-500 text-black'
        }`}>
          {isRTL ? project.status : project.statusEn}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold">
            مميز
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {isRTL ? project.title : project.titleEn}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {isRTL ? project.description : project.descriptionEn}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Duration */}
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          المدة: {isRTL ? project.duration : project.durationEn}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            <span>{t('viewProject')}</span>
          </a>
          
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('projectsTitle')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {t('projectsDescription')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-2 mr-2" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {isRTL ? category.label : category.labelEn}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 rtl:right-3 rtl:left-auto top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="البحث في المشاريع..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 rtl:pr-10 rtl:pl-4 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              لا توجد مشاريع
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              جرب تغيير المرشحات أو مصطلح البحث
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              هل أعجبتك مشاريعي؟
            </h2>
            <p className="text-xl mb-6 opacity-90">
              دعنا نعمل معًا على مشروعك القادم
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
    </div>
  );
};

export default Projects;

