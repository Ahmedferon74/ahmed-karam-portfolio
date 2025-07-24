import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Ahmedferon74',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ahmed-karam-227960241',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      url: 'mailto:ahmedelmasry5576@gmail.com',
      icon: Mail,
      color: 'hover:text-red-500'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/201550901395',
      icon: Phone,
      color: 'hover:text-green-500'
    }
  ];

  const quickLinks = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/projects', label: t('projects') },
    { path: '/contact', label: t('contact') }
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              أحمد كرم
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t('aboutDescription')}
            </p>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              روابط سريعة
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              معلومات التواصل
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-600 dark:text-gray-300">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-sm">ahmedelmasry5576@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-600 dark:text-gray-300">
                <Phone className="w-4 h-4 text-green-500" />
                <span className="text-sm">+20 155 090 1395</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-600 dark:text-gray-300">
                <MapPin className="w-4 h-4 text-red-500" />
                <span className="text-sm">مصر</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} أحمد كرم. {t('allRightsReserved')}.
            </p>
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600 dark:text-gray-300 text-sm">
              <span>صُنع بـ</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>في مصر</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

