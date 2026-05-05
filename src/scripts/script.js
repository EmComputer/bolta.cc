// Language Switcher Logic
window.setLanguage = function(lang) {
    localStorage.setItem('preferredLanguage', lang);
    const currentPath = window.location.pathname;
    
    if (lang === 'ar') {
        if (!currentPath.startsWith('/ar')) {
            window.location.href = '/ar' + currentPath;
        }
    } else {
        if (currentPath.startsWith('/ar')) {
            window.location.href = currentPath.replace('/ar', '') || '/';
        }
    }
};

// Tab Switching Logic for TOS
window.showTab = function(id) {
    document.querySelectorAll('.tos-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tos-nav button').forEach(b => b.classList.remove('active'));
    
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
};