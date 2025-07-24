# أحمد كرم - موقع السيرة الذاتية الاحترافي

موقع سيرة ذاتية احترافي ومتجاوب مطور باستخدام React و Vite مع تصميم حديث وأنيميشن متقدم.

## 🌟 المميزات

- **تصميم متجاوب**: يعمل بشكل مثالي على جميع الأجهزة
- **دعم اللغتين**: العربية والإنجليزية مع تبديل سهل
- **وضع داكن/فاتح**: تبديل بين الأوضاع حسب التفضيل
- **صفحات متعددة**: الرئيسية، نبذة عني، المهارات، الخبرات، التعليم، المشاريع، التواصل
- **أنيميشن متقدم**: تأثيرات بصرية جذابة وسلسة
- **نموذج تواصل**: إرسال رسائل مباشرة
- **تصميم احترافي**: واجهة مستخدم حديثة وجذابة

## 🚀 التقنيات المستخدمة

- **React 18**: مكتبة JavaScript للواجهات
- **Vite**: أداة بناء سريعة ومتطورة
- **Tailwind CSS**: إطار عمل CSS للتصميم
- **React Router**: للتنقل بين الصفحات
- **Lucide React**: مكتبة الأيقونات
- **Context API**: لإدارة الحالة العامة

## 📁 هيكل المشروع

```
ahmed-karam-portfolio/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── background.jpg
│   │   └── my-profile.jpg
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── LanguageProvider.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## 🛠️ التثبيت والتشغيل

### المتطلبات
- Node.js (الإصدار 16 أو أحدث)
- npm أو pnpm أو yarn

### خطوات التثبيت

1. **استنساخ المستودع**
```bash
git clone https://github.com/yourusername/ahmed-karam-portfolio.git
cd ahmed-karam-portfolio
```

2. **تثبيت التبعيات**
```bash
# باستخدام npm
npm install

# أو باستخدام pnpm
pnpm install

# أو باستخدام yarn
yarn install
```

3. **تشغيل وضع التطوير**
```bash
# باستخدام npm
npm run dev

# أو باستخدام pnpm
pnpm run dev

# أو باستخدام yarn
yarn dev
```

4. **بناء المشروع للإنتاج**
```bash
# باستخدام npm
npm run build

# أو باستخدام pnpm
pnpm run build

# أو باستخدام yarn
yarn build
```

5. **معاينة البناء**
```bash
# باستخدام npm
npm run preview

# أو باستخدام pnpm
pnpm run preview

# أو باستخدام yarn
yarn preview
```

## 🎨 التخصيص

### إضافة مشاريع جديدة
1. افتح ملف `src/pages/Projects.jsx`
2. أضف مشروعك الجديد إلى مصفوفة `projects`
3. أضف صورة المشروع إلى مجلد `src/assets/`
4. حدث رابط المشروع و GitHub

### تحديث المعلومات الشخصية
- **الصفحة الرئيسية**: `src/pages/Home.jsx`
- **نبذة عني**: `src/pages/About.jsx`
- **المهارات**: `src/pages/Skills.jsx`
- **الخبرات**: `src/pages/Experience.jsx`
- **التعليم**: `src/pages/Education.jsx`
- **التواصل**: `src/pages/Contact.jsx`

### تغيير الألوان والتصميم
- الألوان الأساسية في `src/App.css`
- استخدم فئات Tailwind CSS للتخصيص السريع

## 📱 الاستجابة

الموقع مُحسَّن للعمل على:
- 📱 الهواتف المحمولة
- 📱 الأجهزة اللوحية
- 💻 أجهزة الكمبيوتر المحمولة
- 🖥️ أجهزة الكمبيوتر المكتبية

## 🌐 النشر

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# ارفع مجلد dist إلى Netlify
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

## 📞 التواصل

- **البريد الإلكتروني**: ahmedelmasry5576@gmail.com
- **الهاتف**: +20 155 090 1395
- **LinkedIn**: [Ahmed Karam](https://www.linkedin.com/in/ahmed-karam-227960241)
- **GitHub**: [Ahmedferon74](https://github.com/Ahmedferon74)

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

## 🙏 شكر وتقدير

- شكر خاص لجميع المساهمين في مكتبات React و Tailwind CSS
- الشكر لمجتمع المطورين العرب على الدعم والإلهام

---

**صُنع بـ ❤️ في مصر**

