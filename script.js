const translations = {
    en: {
        searchPlaceholder: "Search for car parts (e.g. Toyota Brake Pads)",
        langLabel: "Language",
        accountLabel: "Login / Signup",
        accountMain: "My account",
        cartMain: "Cart",
        heroTitle: "The smarter way to buy parts.",
        heroSub: "Quality car parts, delivered anywhere in Egypt.",
        orderNow: "Order Now",
        orderSub: "Search by VIN or Model",
        trackOrder: "Track Order",
        trackSub: "Check delivery status",
        footerDesc: "Reliable spare parts in Egypt.",
        contactUs: "Contact",
        location: "Alexandria, Egypt",
        quickLinks: "Links",
        aboutUs: "About",
        privacyPolicy: "Privacy",
        terms: "Terms"
    },
    ar: {
        searchPlaceholder: "ابحث عن قطع غيار (مثلاً: تيل فرامل تويوتا)",
        langLabel: "اللغة",
        accountLabel: "تسجيل الدخول / الاشتراك",
        accountMain: "حسابي",
        cartMain: "السلة",
        heroTitle: "الطريقة الأذكى لشراء قطع الغيار.",
        heroSub: "قطع غيار عالية الجودة، تُسلم في أي مكان في مصر.",
        orderNow: "اطلب الآن",
        orderSub: "ابحث برقم الشاسيه أو الموديل",
        trackOrder: "تتبع طلبك",
        trackSub: "تحقق من حالة التوصيل",
        footerDesc: "قطع غيار موثوقة في مصر.",
        contactUs: "اتصال",
        location: "الإسكندرية، مصر",
        quickLinks: "روابط",
        aboutUs: "من نحن",
        privacyPolicy: "الخصوصية",
        terms: "الشروط"
    }
};

function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    const searchInput = document.querySelector('[data-i18n-placeholder]');
    if (searchInput) {
        searchInput.placeholder = translations[lang].searchPlaceholder;
    }

    const currentLangText = document.getElementById('current-lang');
    if (currentLangText) {
        currentLangText.textContent = lang === 'en' ? 'English' : 'العربية';
    }

    if (lang === 'ar') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLang);

    const dropdownLinks = document.querySelectorAll('.dropdown-link');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});