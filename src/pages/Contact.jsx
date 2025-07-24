import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      titleEn: 'Email',
      value: 'ahmedelmasry5576@gmail.com',
      link: 'mailto:ahmedelmasry5576@gmail.com',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: Phone,
      title: 'الهاتف',
      titleEn: 'Phone',
      value: '+20 155 090 1395',
      link: 'tel:+201550901395',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: MapPin,
      title: 'الموقع',
      titleEn: 'Location',
      value: 'مصر',
      valueEn: 'Egypt',
      link: '#',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Ahmedferon74',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white',
      bgColor: 'hover:bg-gray-100 dark:hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ahmed-karam-227960241',
      icon: Linkedin,
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/201550901395',
      icon: MessageCircle,
      color: 'hover:text-green-600',
      bgColor: 'hover:bg-green-50 dark:hover:bg-green-900/20'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/ahmedferon',
      icon: Send,
      color: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const response = await fetch("https://formsubmit.co/ahmedferon479@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _captcha: "false",
        _template: "table",
        _autoresponse: "تم استلام رسالتك، وسنرد عليك قريبًا."
      }),
    });

    if (!response.ok) throw new Error("خطأ في الإرسال");

    setSubmitStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};


  const workingHours = [
    { day: 'الأحد - الخميس', dayEn: 'Sunday - Thursday', hours: '9:00 ص - 6:00 م' },
    { day: 'الجمعة', dayEn: 'Friday', hours: '2:00 م - 6:00 م' },
    { day: 'السبت', dayEn: 'Saturday', hours: 'مغلق' }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {t('contactDescription')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            {/* Contact Methods */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                معلومات التواصل
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-4 rtl:space-x-reverse p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-300 group"
                    >
                      <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {isRTL ? info.title : info.titleEn}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {info.valueEn && !isRTL ? info.valueEn : info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                تابعني على
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center space-x-2 rtl:space-x-reverse p-4 rounded-xl bg-gray-50 dark:bg-slate-700 ${social.bgColor} ${social.color} transition-all duration-300 transform hover:scale-105`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                <Clock className="w-6 h-6 inline-block mr-2 rtl:ml-2 rtl:mr-0 text-blue-500" />
                ساعات العمل
              </h2>
              
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    <span className="text-gray-700 dark:text-gray-300">
                      {isRTL ? schedule.day : schedule.dayEn}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                أرسل رسالة
              </h2>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-green-700 dark:text-green-300">
                    تم إرسال رسالتك بنجاح! سأرد عليك في أقرب وقت ممكن.
                  </span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-2 rtl:space-x-reverse">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-700 dark:text-red-300">
                    حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="اسمك الكامل"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="بريدك الإلكتروني"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('subject')} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="موضوع الرسالة"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 rtl:space-x-reverse px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>جاري الإرسال...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('sendMessage')}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            مستعد لبدء مشروعك؟
          </h2>
          <p className="text-xl mb-6 opacity-90">
            لا تتردد في التواصل معي لمناقشة مشروعك القادم. أنا هنا لمساعدتك في تحويل أفكارك إلى واقع رقمي.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ahmedelmasry5576@gmail.com"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>راسلني الآن</span>
            </a>
            <a
              href="https://wa.me/201550901395"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>واتساب</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

