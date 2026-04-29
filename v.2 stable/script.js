const translations = {
    en: {
        searchPlaceholder: "Search for car parts (e.g. Toyota Brake Pads)",
        langLabel: "Language",
        accountLabel: "Login / Signup",
        accountMain: "My account",
        cartLabel: "Shopping",
        cartMain: "Cart",
        heroTitle: "The smarter way to buy parts.",
        heroSub: "Quality car parts, delivered anywhere in Egypt.",
        orderNow: "Order Now",
        orderSub: "Search by VIN or Model",
        trackOrder: "Track Order",
        trackSub: "Check delivery status"
    },
    ar: {
        searchPlaceholder: "ابحث عن قطع غيار (مثلاً: تيل فرامل تويوتا)",
        langLabel: "اللغة",
        accountLabel: "تسجيل الدخول / الاشتراك",
        accountMain: "حسابي",
        cartLabel: "تسوق",
        cartMain: "السلة",
        heroTitle: "الطريقة الأذكى لشراء قطع الغيار.",
        heroSub: "قطع غيار عالية الجودة، تُسلم في أي مكان في مصر.",
        orderNow: "اطلب الآن",
        orderSub: "ابحث برقم الشاسيه أو الموديل",
        trackOrder: "تتبع طلبك",
        trackSub: "تحقق من حالة التوصيل"
    }
};

function setLanguage(lang) {
    // 1. Save to LocalStorage (modern version of cookies)
    localStorage.setItem('preferredLanguage', lang);

    // 2. Update UI text
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });

    // 3. Update Input Placeholder
    const searchInput = document.querySelector('[data-i18n-placeholder]');
    searchInput.placeholder = translations[lang].searchPlaceholder;

    // 4. Update Header Main Text
    document.getElementById('current-lang').textContent = lang === 'en' ? 'English' : 'العربية';

    // 5. Handle RTL (Right-to-Left) for Arabic
    if (lang === 'ar') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Load saved language or default to English
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLang);

    // Language Dropdown Click Logic
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            setLanguage(lang);
            
            // Close menu
            document.querySelector('.dropdown-menu').style.display = 'none';
            setTimeout(() => {
                document.querySelector('.dropdown-menu').style.removeProperty('display');
            }, 300);
        });
    });
});