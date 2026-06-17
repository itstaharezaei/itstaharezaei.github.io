// ========== REGISTER GSAP PLUGINS ==========
gsap.registerPlugin(ScrollTrigger);

// ========== SCROLL TO TOP ==========
const footerScrollBtn = document.getElementById('footerScrollBtn');
if (footerScrollBtn) {
    footerScrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========== SVG PARTICLES ANIMATION ==========
gsap.to('.p1', {
    x: 80, y: -40, scale: 1.6, opacity: 0.22, ease: 'sine.inOut',
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
});
gsap.to('.p2', {
    x: -60, y: 50, scale: 1.8, opacity: 0.18, ease: 'sine.inOut',
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
});
gsap.to('.p3', {
    x: 50, y: -60, scale: 1.4, opacity: 0.16, ease: 'sine.inOut',
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
});
gsap.to('.p4', {
    x: -50, y: 35, scale: 2, opacity: 0.2, ease: 'sine.inOut',
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
});
gsap.to('.p5', {
    x: 65, y: -25, scale: 1.5, opacity: 0.16, ease: 'sine.inOut',
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
});
gsap.to('.p6', {
    x: -80, y: 65, scale: 1.8, opacity: 0.18, ease: 'sine.inOut',
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
});
gsap.to('.p7', {
    x: -55, y: -50, scale: 1.6, opacity: 0.16, ease: 'sine.inOut',
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
});
gsap.to('.p8', {
    x: 70, y: 40, scale: 2, opacity: 0.14, ease: 'sine.inOut',
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
});
gsap.to('.p9', {
    x: -40, y: -35, scale: 1.4, opacity: 0.18, ease: 'sine.inOut',
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
});
gsap.to('.p10', {
    x: 55, y: 25, scale: 1.8, opacity: 0.16, ease: 'sine.inOut',
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
});

document.querySelectorAll('.line').forEach((line, i) => {
    gsap.to(line, {
        opacity: 0.12, strokeWidth: 1, ease: 'sine.inOut',
        scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
    });
    gsap.to(line, {
        opacity: 0.02, strokeWidth: 0.2, ease: 'sine.inOut',
        scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
    });
});

gsap.to('.r1', {
    r: 16, opacity: 0.1, ease: 'sine.inOut',
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
});
gsap.to('.r2', {
    r: 20, opacity: 0.08, ease: 'sine.inOut',
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
});
gsap.to('.r3', {
    r: 24, opacity: 0.06, ease: 'sine.inOut',
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
});
gsap.to('.r4', {
    r: 14, opacity: 0.08, ease: 'sine.inOut',
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
});

gsap.to('.bg-particles svg', {
    opacity: 0.14, ease: 'sine.inOut',
    scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 }
});

// ========== FORM SUBMIT ==========
document.getElementById('sendMessageBtn')?.addEventListener('click', function(e) {
    e.preventDefault();
    const name = document.getElementById('contactNameInput').value.trim();
    const email = document.getElementById('contactEmailInput').value.trim();
    const message = document.getElementById('contactMessageInput').value.trim();
    if (!name || !email || !message) { alert('Please fill in all fields.'); return; }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address (e.g., name@domain.com)');
        document.getElementById('contactEmailInput').focus();
        document.getElementById('contactEmailInput').style.borderColor = '#ef4444';
        setTimeout(() => document.getElementById('contactEmailInput').style.borderColor = '', 3000);
        return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    fetch('https://formspree.io/f/xbdeblzy', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            alert('✅ Your message has been sent successfully!');
            document.getElementById('contactNameInput').value = '';
            document.getElementById('contactEmailInput').value = '';
            document.getElementById('contactMessageInput').value = '';
        } else {
            alert('❌ Something went wrong. Please try again.');
        }
    })
    .catch(error => {
        alert('❌ Network error. Please check your connection.');
        console.error('Form error:', error);
    });
});

// ========== SIDEBAR TOGGLE ==========
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}
if (hamburgerBtn) hamburgerBtn.addEventListener('click', openSidebar);
if (overlay) overlay.addEventListener('click', closeSidebar);
document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// ========== THEME ==========
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light');
        updateThemeIcon('light');
    } else {
        document.body.classList.remove('light');
        updateThemeIcon('dark');
    }
}
function updateThemeIcon(theme) {
    const icons = document.querySelectorAll('.theme-icon');
    icons.forEach(icon => {
        if (theme === 'light') icon.style.backgroundImage = "url('icons/moon.svg')";
        else icon.style.backgroundImage = "url('icons/sun.svg')";
    });
    if (icons[0]) {
        gsap.fromTo(icons[0], { rotation: 0, scale: 1 }, {
            rotation: 360, scale: 1.1, duration: 0.4, ease: 'back.out(0.6)'
        });
    }
}
function toggleTheme() {
    if (document.body.classList.contains('light')) {
        document.body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
        updateThemeIcon('dark');
    } else {
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light');
        updateThemeIcon('light');
    }
    ScrollTrigger.refresh();
}
document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
document.getElementById('mobileThemeToggle')?.addEventListener('click', toggleTheme);

// ========== NAVIGATION ==========
document.querySelectorAll('.nav-menu a[data-section], .sidebar-nav a[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.getAttribute('data-section');
        const targetId = section === 'hero' ? 'heroSection' :
                        section === 'about' ? 'aboutSection' :
                        section === 'skills' ? 'skillsSection' :
                        section === 'services' ? 'servicesSection' :
                        section === 'experience' ? 'experienceSection' : 'contactSection';
        const target = document.getElementById(targetId);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ========== HEADER SCROLL ==========
window.addEventListener('scroll', () => {
    const header = document.getElementById('stickyHeader');
    if (header) {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    }
});

// ========== CURSOR GLOW ==========
const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursorGlow, { x: e.clientX, y: e.clientY, duration: 0.3, ease: 'power2.out' });
});

// ========== HERO ANIMATIONS ==========
gsap.from('.hero-left', { x: -50, opacity: 0, duration: 0.8, delay: 0.2 });
gsap.from('.hero-right', { x: 50, opacity: 0, duration: 0.8, delay: 0.3 });
gsap.from('#aboutSection', {
    y: 40, opacity: 0, duration: 0.7,
    scrollTrigger: { trigger: '#aboutSection', start: 'top 85%' }
});

// ========== SOCIAL BUTTONS ==========
document.getElementById('githubBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('GitHub: https://github.com/taharezaeidev-afk');
});
document.getElementById('linkedinBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('LinkedIn profile link');
});
document.getElementById('telegramBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Telegram: @taharezaei');
});
document.getElementById('instagramBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Instagram: @taharezaei');
});

document.getElementById('mobileGithubBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('GitHub: https://github.com/taharezaeidev-afk');
});
document.getElementById('mobileLinkedinBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('LinkedIn profile link');
});
document.getElementById('mobileTelegramBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Telegram: @taharezaei');
});
document.getElementById('mobileInstagramBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Instagram: @taharezaei');
});

// ========== COPY LINK ==========
document.getElementById('copyLinkBtn')?.addEventListener('click', () => {
    const linkText = document.getElementById('websiteLink').innerText;
    navigator.clipboard.writeText(linkText).then(() => {
        const btn = document.getElementById('copyLinkBtn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="copy-icon" style="background-image: url(\'icons/copy.svg\');"></span> Copied!';
        setTimeout(() => btn.innerHTML = originalText, 2000);
    });
});

document.getElementById('mobileCopyLinkBtn')?.addEventListener('click', () => {
    const linkText = document.getElementById('mobileWebsiteLink').innerText;
    navigator.clipboard.writeText(linkText).then(() => {
        const btn = document.getElementById('mobileCopyLinkBtn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="mobile-copy-icon" style="background-image: url(\'icons/copy.svg\');"></span> Copied!';
        setTimeout(() => btn.innerHTML = originalText, 2000);
    });
});

// ========== DOWNLOAD CV ==========
document.getElementById('downloadCvBtn')?.addEventListener('click', () => alert('PDF download ready'));

// ========== CONTACT ME ==========
document.getElementById('contactMeBtn')?.addEventListener('click', () => {
    document.getElementById('contactSection').scrollIntoView({ behavior: 'smooth' });
});

// ========== DATA ==========
const projectsDataEn = [
    { year: '2026', title: 'Real-time WebSocket Engine', description: 'High-performance WebSocket server handling 3000+ concurrent connections with race condition prevention and room-based messaging.', tech: ['Node.js', 'WebSocket', 'Redis'], githubLink: 'https://github.com/taharezaeidev-afk/websocket-engine' },
    { year: '2026', title: 'Defense in Depth API', description: 'Express API with layered security: rate limiting, input sanitization, Helmet, CORS, and request monitoring.', tech: ['Express', 'Helmet', 'Redis'], githubLink: 'https://github.com/taharezaeidev-afk/defense-api' },
    { year: '2026', title: 'Race Condition Simulator', description: 'Simulates concurrent database transactions to detect and fix lost updates & race conditions.', tech: ['PostgreSQL', 'Node.js', 'Redis'], githubLink: 'https://github.com/taharezaeidev-afk/race-simulator' },
    { year: '2026', title: 'Blockchain Explorer', description: 'Simple blockchain explorer for Ethereum testnet with transaction tracking and contract verification.', tech: ['Solidity', 'Web3.js', 'React'], githubLink: 'https://github.com/taharezaeidev-afk/blockchain-explorer' },
    { year: '2026', title: 'Microservices Gateway', description: 'API Gateway for microservices architecture with rate limiting, authentication, and request routing.', tech: ['Node.js', 'Redis', 'JWT'], githubLink: '#' },
    { year: '2026', title: 'Load Balancer Simulator', description: 'Simulates round-robin and least-connections load balancing algorithms with real-time metrics.', tech: ['Node.js', 'Socket.io'], githubLink: '#' }
];

const projectsDataFa = [
    { year: '۲۰۲۶', title: 'موتور وب‌سوکت بی‌درنگ', description: 'سرور WebSocket با کارایی بالا که ۳۰۰۰+ اتصال همزمان را با جلوگیری از race condition و پیام‌رسانی اتاقی مدیریت می‌کند.', tech: ['Node.js', 'WebSocket', 'Redis'], githubLink: 'https://github.com/taharezaeidev-afk/websocket-engine' },
    { year: '۲۰۲۶', title: 'API دفاع در عمق', description: 'API اکسپرس با امنیت لایه‌ای: محدودیت نرخ، پالایش ورودی، Helmet، CORS و نظارت درخواست.', tech: ['Express', 'Helmet', 'Redis'], githubLink: 'https://github.com/taharezaeidev-afk/defense-api' },
    { year: '۲۰۲۶', title: 'شبیه‌ساز race condition', description: 'شبیه‌سازی تراکنش‌های همزمان دیتابیس برای تشخیص و رفع به‌روزرسانی‌های از دست رفته و race conditions.', tech: ['PostgreSQL', 'Node.js', 'Redis'], githubLink: 'https://github.com/taharezaeidev-afk/race-simulator' },
    { year: '۲۰۲۶', title: 'کاوشگر بلاکچین', description: 'کاوشگر بلاکچین ساده برای شبکه آزمایشی اتریوم با ردیابی تراکنش و تأیید قرارداد.', tech: ['Solidity', 'Web3.js', 'React'], githubLink: 'https://github.com/taharezaeidev-afk/blockchain-explorer' },
    { year: '۲۰۲۶', title: 'درگاه میکروسرویس‌ها', description: 'درگاه API برای معماری میکروسرویس با محدودیت نرخ، احراز هویت و مسیریابی درخواست.', tech: ['Node.js', 'Redis', 'JWT'], githubLink: '#' },
    { year: '۲۰۲۶', title: 'شبیه‌ساز متعادل‌کننده بار', description: 'شبیه‌سازی الگوریتم‌های round-robin و least-connections با متریک‌های بی‌درنگ.', tech: ['Node.js', 'Socket.io'], githubLink: '#' }
];

const skillsData = {
    en: {
        backend: { title: 'Backend', skills: [{ name: 'Node.js / Express', percent: 88 }, { name: 'WebSocket / Socket.io', percent: 82 }, { name: 'REST / GraphQL', percent: 85 }] },
        database: { title: 'Database & Cache', skills: [{ name: 'PostgreSQL', percent: 80 }, { name: 'MongoDB', percent: 75 }, { name: 'Redis', percent: 78 }] },
        devops: { title: 'DevOps & Tools', skills: [{ name: 'Docker / Linux', percent: 70 }, { name: 'GitHub Actions', percent: 72 }, { name: 'VPS / Cloud', percent: 68 }] },
        security: { title: 'Security & Arch', skills: [{ name: 'Defense in Depth', percent: 85 }, { name: 'Race Condition', percent: 88 }, { name: 'Blockchain Basics', percent: 55 }] }
    },
    fa: {
        backend: { title: 'بک‌اند', skills: [{ name: 'Node.js / Express', percent: 88 }, { name: 'WebSocket / Socket.io', percent: 82 }, { name: 'REST / GraphQL', percent: 85 }] },
        database: { title: 'دیتابیس و کش', skills: [{ name: 'PostgreSQL', percent: 80 }, { name: 'MongoDB', percent: 75 }, { name: 'Redis', percent: 78 }] },
        devops: { title: 'دوآپس و ابزارها', skills: [{ name: 'Docker / Linux', percent: 70 }, { name: 'GitHub Actions', percent: 72 }, { name: 'VPS / Cloud', percent: 68 }] },
        security: { title: 'امنیت و معماری', skills: [{ name: 'دفاع در عمق', percent: 85 }, { name: 'Race Condition', percent: 88 }, { name: 'مبانی بلاکچین', percent: 55 }] }
    }
};

const servicesDataEn = [
    { title: 'Backend Development', desc: 'Building fast, secure and scalable APIs with Node.js, Express, WebSocket, and microservices architecture. Full lifecycle from design to deployment and monitoring.' },
    { title: 'Database Design', desc: 'Designing efficient schemas, indexing strategies, and query optimization with PostgreSQL, MongoDB, and Redis. Ensuring data integrity and high performance under load.' },
    { title: 'System Architecture', desc: 'Deep understanding of event loop, race condition handling, and defense in depth for high availability systems. Scalable microservices and fault-tolerant design.' },
    { title: 'Server & Deployment', desc: 'Managing VPS, Docker, CI/CD pipelines, and ensuring stable, secure server performance with Linux. Automation and infrastructure as code practices.' },
    { title: 'Real-time Systems', desc: 'Building WebSocket servers, live chat engines, and real-time data synchronization with low latency. Handling concurrent connections efficiently.' },
    { title: 'API Integration', desc: 'RESTful and GraphQL API design, third-party integrations, and scalable service communication. Documentation and versioning best practices.' },
    { title: 'Performance Optimization', desc: 'Profiling, caching strategies, database query tuning, and memory optimization for high-load systems. Reducing latency and improving throughput.' },
    { title: 'Security Auditing', desc: 'Security layer implementation, vulnerability assessment, and defense in depth architecture. Preventing common attacks and ensuring data protection.' },
    { title: 'Legacy Refactoring', desc: 'Modernizing legacy codebases, migrating to new architectures, and improving maintainability. Reducing technical debt and increasing reliability.' },
    { title: 'Technical Consulting', desc: 'System design review, technology stack advice, and architectural decision guidance. Helping teams make informed technical choices for long-term success.' }
];

const servicesDataFa = [
    { title: 'توسعه بک‌اند', desc: 'ساخت API‌های سریع، امن و مقیاس‌پذیر با Node.js، Express، WebSocket و معماری میکروسرویس. چرخه کامل از طراحی تا استقرار و نظارت.' },
    { title: 'طراحی دیتابیس', desc: 'طراحی شمای کارآمد، استراتژی‌های ایندکس و بهینه‌سازی کوئری با PostgreSQL، MongoDB و Redis. تضمین یکپارچگی داده و عملکرد بالا تحت بار.' },
    { title: 'معماری سیستم', desc: 'درک عمیق از event loop، مدیریت race condition و دفاع در عمق برای سیستم‌های با دسترسی بالا. طراحی مقیاس‌پذیر و تحمل‌پذیر در برابر خطا.' },
    { title: 'سرور و استقرار', desc: 'مدیریت VPS، Docker، خطوط لوله CI/CD و تضمین عملکرد پایدار و امن سرور با لینوکس. اتوماسیون و زیرساخت به عنوان کد.' },
    { title: 'سیستم‌های بلادرنگ', desc: 'ساخت سرورهای WebSocket، موتورهای چت زنده و همگام‌سازی داده‌های بلادرنگ با تأخیر کم. مدیریت همزمان اتصالات به صورت کارآمد.' },
    { title: 'ادغام API', desc: 'طراحی RESTful و GraphQL API، ادغام شخص ثالث و ارتباط سرویس مقیاس‌پذیر. مستندسازی و بهترین شیوه‌های نسخه‌گذاری.' },
    { title: 'بهینه‌سازی عملکرد', desc: 'پروفایلینگ، استراتژی‌های کش، تنظیم کوئری دیتابیس و بهینه‌سازی حافظه برای سیستم‌های با بار بالا. کاهش تأخیر و افزایش توان عملیاتی.' },
    { title: 'حسابرسی امنیت', desc: 'پیاده‌سازی لایه امنیتی، ارزیابی آسیب‌پذیری و معماری دفاع در عمق. جلوگیری از حملات رایج و تضمین حفاظت از داده.' },
    { title: 'بازسازی میراث', desc: 'مدرن‌سازی کدهای قدیمی، مهاجرت به معماری‌های جدید و بهبود قابلیت نگهداری. کاهش بدهی فنی و افزایش قابلیت اطمینان.' },
    { title: 'مشاوره فنی', desc: 'بررسی طراحی سیستم، توصیه پشته فناوری و راهنمایی تصمیمات معماری. کمک به تیم‌ها برای انتخاب‌های فنی آگاهانه برای موفقیت بلندمدت.' }
];

// ========== GLOBALS ==========
let currentLang = 'en';
let currentProjectsData = projectsDataEn;
let currentServicesData = servicesDataEn;
let currentSkillsData = skillsData.en;
let isExpanded = false;
let typedInstance = null;
let skillsSliderIndex = 0;
let skillsSliderTotal = 0;
let autoSlideInterval = null;
let isDragging = false;
let startX = 0;
let isMobileMode = false;
let sliderAnimationId = null;
let currentTranslateX = 0;
let isServicesPaused = false;
let servicesSliderElement = null;
let servicesTotalWidth = 0;
let servicesCurrentDirection = -1;
const ORIGINAL_SERVICES_COUNT = 10;

// ========== HELPERS ==========
function getTechIcon(tech) {
    const iconMap = {
        'Node.js': 'nodejs.svg', 'WebSocket': 'websocket.svg', 'Redis': 'redis.svg',
        'Express': 'express.svg', 'Helmet': 'helmet.svg', 'PostgreSQL': 'postgresql.svg',
        'Solidity': 'solidity.svg', 'Web3.js': 'web3.svg', 'React': 'react.svg',
        'JWT': 'jwt.svg', 'Socket.io': 'socketio.svg'
    };
    return iconMap[tech] || 'code.svg';
}

function addRandomHighlights(text) {
    const highlightClasses = ['highlight-yellow', 'highlight-blue', 'highlight-green', 'highlight-red'];
    const words = text.split(' ');
    return words.map(word => {
        if (word.length < 4 || Math.random() > 0.2) return word;
        return `<span class="${highlightClasses[Math.floor(Math.random() * highlightClasses.length)]}">${word}</span>`;
    }).join(' ');
}

// ========== RENDER SKILLS ==========
function renderSkills() {
    const container = document.getElementById('skillsGrid');
    if (!container) return;
    container.innerHTML = '';
    for (const key in currentSkillsData) {
        const category = currentSkillsData[key];
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `<h3>${category.title}</h3>`;
        category.skills.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'skill-item';
            skillDiv.innerHTML = `<div class="skill-name"><span>${skill.name}</span><span>${skill.percent}%</span></div><div class="skill-bar"><div class="skill-fill" data-width="${skill.percent}"></div></div>`;
            card.appendChild(skillDiv);
        });
        container.appendChild(card);
    }
    isMobileMode = window.innerWidth <= 800;
    if (isMobileMode) {
        if (window.skillsObserver) window.skillsObserver.disconnect();
        initMobileSlider();
    } else {
        const nav = document.getElementById('skillsSliderNav');
        if (nav) nav.style.display = 'none';
        setTimeout(() => {
            document.querySelectorAll('.skill-fill').forEach(bar => {
                bar.style.width = bar.getAttribute('data-width') + '%';
            });
        }, 100);
    }
}

// ========== MOBILE SKILLS SLIDER ==========
function initMobileSlider() {
    const container = document.getElementById('skillsGrid');
    const cards = document.querySelectorAll('.skill-card');
    const nav = document.getElementById('skillsSliderNav');
    if (!container || cards.length === 0) return;
    skillsSliderTotal = cards.length;
    skillsSliderIndex = 0;
    const isRtl = currentLang === 'fa';
    if (nav) {
        nav.innerHTML = '';
        nav.style.display = 'flex';
        for (let i = 0; i < skillsSliderTotal; i++) {
            const dot = document.createElement('div');
            dot.className = 'slider-dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => { goToSlide(i); resetAutoSlideTimer(); });
            nav.appendChild(dot);
        }
    }
    const containerWidth = container.clientWidth;
    const cardWidth = containerWidth * 0.85;
    cards.forEach((card, idx) => {
        card.style.flex = `0 0 ${cardWidth}px`;
        if (isRtl) {
            card.style.marginLeft = '16px';
            card.style.marginRight = '0';
        } else {
            card.style.marginRight = '16px';
            card.style.marginLeft = '0';
        }
        card.style.display = 'block';
        card.style.visibility = 'visible';
        card.style.opacity = '1';
    });
    container.style.transform = 'translateX(0px)';
    container.removeEventListener('touchstart', handleTouchStart);
    container.removeEventListener('touchmove', handleTouchMove);
    container.removeEventListener('touchend', handleTouchEnd);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);
    animateCurrentSlideSkills();
    startAutoSlide();
}

function animateCurrentSlideSkills() {
    const cards = document.querySelectorAll('.skill-card');
    if (cards.length === 0) return;
    const activeCard = cards[skillsSliderIndex];
    if (activeCard) {
        activeCard.querySelectorAll('.skill-fill').forEach(fill => {
            fill.style.width = fill.getAttribute('data-width') + '%';
        });
    }
}

function goToSlide(index) {
    if (!isMobileMode) return;
    const cards = document.querySelectorAll('.skill-card');
    const container = document.getElementById('skillsGrid');
    const dots = document.querySelectorAll('.slider-dot');
    if (!container || cards.length === 0) return;
    if (index < 0) index = skillsSliderTotal - 1;
    if (index >= skillsSliderTotal) index = 0;
    skillsSliderIndex = index;
    const cardWidth = cards[0].offsetWidth + 16;
    let newTranslate = currentLang === 'fa' ? skillsSliderIndex * cardWidth : -skillsSliderIndex * cardWidth;
    container.style.transform = `translateX(${newTranslate}px)`;
    dots.forEach((dot, i) => {
        if (i === skillsSliderIndex) dot.classList.add('active');
        else dot.classList.remove('active');
    });
    animateCurrentSlideSkills();
    resetAutoSlideTimer();
}

function nextSlide() { goToSlide(skillsSliderIndex + 1); }

function startAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    if (!isMobileMode) return;
    autoSlideInterval = setInterval(() => {
        if (!isDragging && window.innerWidth <= 800) nextSlide();
    }, 4000);
}

function stopAutoSlide() {
    if (autoSlideInterval) { clearInterval(autoSlideInterval); autoSlideInterval = null; }
}

function resetAutoSlideTimer() {
    if (!isMobileMode) return;
    stopAutoSlide();
    startAutoSlide();
}

function handleTouchStart(e) {
    if (!isMobileMode) return;
    isDragging = true;
    startX = e.touches[0].clientX;
    stopAutoSlide();
}
function handleTouchMove(e) {
    if (!isMobileMode || !isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) {
        if (currentLang === 'fa') {
            if (diff > 0) goToSlide(skillsSliderIndex - 1);
            else goToSlide(skillsSliderIndex + 1);
        } else {
            if (diff > 0) goToSlide(skillsSliderIndex + 1);
            else goToSlide(skillsSliderIndex - 1);
        }
        isDragging = false;
        startAutoSlide();
    }
}
function handleTouchEnd() { isDragging = false; startAutoSlide(); }

// ========== RENDER TIMELINE ==========
function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;
    container.innerHTML = '';
    currentProjectsData.forEach((project, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-left"><div class="timeline-dot"></div></div>
            <div class="timeline-right" data-github="${project.githubLink}">
                <div class="year-badge">${project.year}</div>
                <div class="project-title">${project.title}</div>
                <div class="project-description">${project.description}</div>
                <div class="tech-stack" id="tech-stack-${index}"></div>
            </div>
        `;
        container.appendChild(timelineItem);
        const techContainer = document.getElementById(`tech-stack-${index}`);
        if (techContainer) {
            project.tech.forEach(tech => {
                const badge = document.createElement('span');
                badge.className = 'tech-badge';
                badge.innerHTML = `<img class="tech-icon" src="icons/${getTechIcon(tech)}" alt="${tech}" style="width:12px;height:12px;object-fit:contain;"> ${tech}`;
                techContainer.appendChild(badge);
            });
        }
    });
    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item, idx) => {
        if (idx < 3) item.classList.remove('hidden-item');
        else item.classList.add('hidden-item');
    });
    document.querySelectorAll('.timeline-right').forEach(card => {
        card.addEventListener('click', function() {
            const githubLink = this.getAttribute('data-github');
            if (githubLink && githubLink !== '#') window.open(githubLink, '_blank');
        });
    });
}

// ========== BUILD SERVICES ==========
function buildServices() {
    const container = document.getElementById('servicesSlider');
    if (!container) return;
    container.innerHTML = '';
    currentServicesData.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `<h3>${service.title}</h3><p>${addRandomHighlights(service.desc)}</p>`;
        container.appendChild(card);
    });
    const originalCards = [...container.children];
    for (let i = 0; i < 2; i++) {
        originalCards.forEach(card => container.appendChild(card.cloneNode(true)));
    }
    requestAnimationFrame(() => {
        const allCards = Array.from(container.children);
        if (allCards.length >= ORIGINAL_SERVICES_COUNT) {
            let calculatedWidth = 0;
            for (let i = 0; i < ORIGINAL_SERVICES_COUNT; i++) {
                calculatedWidth += allCards[i].offsetWidth + 24;
            }
            servicesTotalWidth = calculatedWidth;
            currentTranslateX = 0;
            if (servicesSliderElement) servicesSliderElement.style.transform = `translateX(${currentTranslateX}px)`;
        }
    });
}

// ========== START INFINITE SLIDER ==========
function startInfiniteSlider() {
    servicesCurrentDirection = currentLang === 'en' ? -1 : 1;
    if (sliderAnimationId) cancelAnimationFrame(sliderAnimationId);
    const slider = document.getElementById('servicesSlider');
    if (!slider) return;
    servicesSliderElement = slider;
    if (servicesTotalWidth === 0) {
        const firstTen = Array.from(slider.children).slice(0, ORIGINAL_SERVICES_COUNT);
        servicesTotalWidth = firstTen.length === ORIGINAL_SERVICES_COUNT ?
            firstTen.reduce((w, card) => w + card.offsetWidth + 24, 0) : 3400;
    }
    currentTranslateX = 0;
    slider.style.transform = 'translateX(0px)';
    function animate() {
        if (!isServicesPaused && servicesSliderElement && servicesTotalWidth > 0) {
            currentTranslateX += 0.6 * servicesCurrentDirection;
            if (servicesCurrentDirection === -1 && Math.abs(currentTranslateX) >= servicesTotalWidth) {
                currentTranslateX = 0;
            } else if (servicesCurrentDirection === 1 && currentTranslateX >= servicesTotalWidth) {
                currentTranslateX = 0;
            } else if (servicesCurrentDirection === 1 && currentTranslateX < 0) {
                currentTranslateX = servicesTotalWidth;
            }
            servicesSliderElement.style.transform = `translateX(${currentTranslateX}px)`;
        }
        sliderAnimationId = requestAnimationFrame(animate);
    }
    animate();
}

function stopServicesSliderOnHover() {
    const wrapper = document.querySelector('.services-slider-wrapper');
    if (!wrapper) return;
    wrapper.addEventListener('mouseenter', () => { isServicesPaused = true; });
    wrapper.addEventListener('mouseleave', () => { isServicesPaused = false; });
}

// ========== TOGGLE TIMELINE ==========
function toggleTimeline() {
    const btnIcon = document.getElementById('btnIcon');
    const btnText = document.getElementById('btnText');
    const btn = document.getElementById('showMoreBtn');
    const items = document.querySelectorAll('.timeline-item');
    const hiddenItems = Array.from(items).filter((_, idx) => idx >= 3);
    if (!isExpanded) {
        gsap.to(btn, {
            y: 30, opacity: 0, duration: 0.2,
            onComplete: () => {
                hiddenItems.forEach((item, idx) => {
                    item.classList.remove('hidden-item');
                    gsap.set(item, { y: -20, opacity: 0 });
                    gsap.to(item, {
                        y: 0, opacity: 1, duration: 0.35, delay: idx * 0.08, ease: 'back.out(0.5)',
                        onComplete: () => {
                            if (idx === hiddenItems.length - 1) {
                                gsap.set(btn, { y: 30, opacity: 0 });
                                gsap.to(btn, { y: 0, opacity: 1, duration: 0.3, ease: 'back.out(0.5)' });
                            }
                        }
                    });
                });
            }
        });
        btnIcon.style.backgroundImage = "url('icons/chevron-up.svg')";
        btnText.innerText = currentLang === 'en' ? 'Show Less' : 'نمایش کمتر';
        isExpanded = true;
    } else {
        gsap.to(btn, {
            y: 30, opacity: 0, duration: 0.2,
            onComplete: () => {
                hiddenItems.forEach((item, idx) => {
                    gsap.to(item, {
                        y: -20, opacity: 0, duration: 0.3, delay: (hiddenItems.length - 1 - idx) * 0.05,
                        onComplete: () => {
                            item.classList.add('hidden-item');
                            gsap.set(item, { y: 0, opacity: 1 });
                            if (idx === hiddenItems.length - 1) {
                                gsap.set(btn, { y: 30, opacity: 0 });
                                gsap.to(btn, { y: 0, opacity: 1, duration: 0.3, ease: 'back.out(0.5)' });
                            }
                        }
                    });
                });
                if (hiddenItems.length === 0) {
                    gsap.set(btn, { y: 30, opacity: 0 });
                    gsap.to(btn, { y: 0, opacity: 1, duration: 0.3 });
                }
            }
        });
        btnIcon.style.backgroundImage = "url('icons/chevron-down.svg')";
        btnText.innerText = currentLang === 'en' ? 'Show More' : 'نمایش بیشتر';
        isExpanded = false;
    }
}

// ========== TYPED.JS ==========
function initTyped(stringsArray) {
    if (typedInstance) typedInstance.destroy();
    typedInstance = new Typed('#typedString', {
        strings: stringsArray,
        typeSpeed: 65,
        backSpeed: 35,
        loop: true,
        backDelay: 1600,
        startDelay: 300,
        cursorChar: '|'
    });
}

// ========== UPDATE UI ==========
function updateUIText(lang) {
    currentLang = lang;
    if (lang === 'en') {
        currentProjectsData = projectsDataEn;
        currentServicesData = servicesDataEn;
        currentSkillsData = skillsData.en;
        document.getElementById('logoText').innerText = 'Taha Rezaei';
        document.getElementById('mobileLogoText').innerText = 'Taha Rezaei';
        document.querySelectorAll('#navHome, #mobileNavHome').forEach(el => { if (el) el.innerText = 'Home'; });
        document.querySelectorAll('#navAbout, #mobileNavAbout').forEach(el => { if (el) el.innerText = 'About'; });
        document.querySelectorAll('#navSkills, #mobileNavSkills').forEach(el => { if (el) el.innerText = 'Skills'; });
        document.querySelectorAll('#navServices, #mobileNavServices').forEach(el => { if (el) el.innerText = 'Services'; });
        document.querySelectorAll('#navExperience, #mobileNavExperience').forEach(el => { if (el) el.innerText = 'Experience'; });
        document.querySelectorAll('#navContact, #mobileNavContact').forEach(el => { if (el) el.innerText = 'Contact'; });
        document.getElementById('heroTitle').innerText = 'Taha Rezaei';
        document.getElementById('downloadCvText').innerText = 'Download CV';
        document.getElementById('contactMeText').innerText = 'Contact Me';
        document.getElementById('contactEmailText').innerHTML = 'taha.rezaei.dev@gmail.com';
        document.getElementById('contactLocationText').innerHTML = 'Iran, Khorasan Razavi, Quchan';
        document.getElementById('aboutTitle').innerHTML = `<span class="section-icon" style="background-image: url('icons/about.svg');"></span><span>About Me</span>`;
        document.getElementById('aboutText1').innerHTML = "I'm a backend architect who refuses to stay on the surface. I deeply understand event loops, race conditions, and defense in depth. I don't just write code — I build resilient systems.";
        document.getElementById('aboutText2').innerHTML = "Currently diving deep into blockchain security, smart contract auditing, and consensus mechanisms. Always curious, always building.";
        document.getElementById('skillsTitle').innerHTML = `<span class="section-icon" style="background-image: url('icons/technical.svg');"></span><span>Technical Arsenal</span>`;
        document.getElementById('servicesTitle').innerHTML = `<span class="section-icon" style="background-image: url('icons/services.svg');"></span><span>Services</span>`;
        document.getElementById('experienceTitle').innerHTML = `<span class="section-icon" style="background-image: url('icons/experience.svg');"></span><span>Experience & Projects</span>`;
        document.getElementById('contactSectionTitle').innerHTML = `<span class="section-icon" style="background-image: url('icons/connect.svg');"></span><span>Contact</span>`;
        document.getElementById('contactNameInput').placeholder = 'Your name';
        document.getElementById('contactEmailInput').placeholder = 'Your email';
        document.getElementById('contactMessageInput').placeholder = 'Your message...';
        document.getElementById('sendMessageBtn').innerHTML = 'Send Message →';
        document.querySelector('.footer-text').innerHTML = '© 2026 Taha Rezaei — Backend Architect / Building resilient systems';
        document.getElementById('btnText').innerText = isExpanded ? 'Show Less' : 'Show More';
        if (document.getElementById('mobileGithubBtn')) {
            document.getElementById('mobileGithubBtn').innerHTML = '<span class="mobile-social-icon" style="background-image: url(\'icons/github.svg\');"></span> GitHub';
            document.getElementById('mobileLinkedinBtn').innerHTML = '<span class="mobile-social-icon" style="background-image: url(\'icons/linkedin.svg\');"></span> LinkedIn';
            document.getElementById('mobileTelegramBtn').innerHTML = '<span class="mobile-social-icon" style="background-image: url(\'icons/telegram.svg\');"></span> Telegram';
            document.getElementById('mobileInstagramBtn').innerHTML = '<span class="mobile-social-icon" style="background-image: url(\'icons/instagram.svg\');"></span> Instagram';
        }
        initTyped(['Backend Architect', 'Systems Engineer', 'Defense in Depth Lover']);
        document.body.classList.remove('rtl');
    } else {
        currentProjectsData = projectsDataFa;
        currentServicesData = servicesDataFa;
        currentSkillsData = skillsData.fa;
        document.getElementById('logoText').innerText = 'طاها رضایی';
        document.getElementById('mobileLogoText').innerText = 'طاها رضایی';
        document.querySelectorAll('#navHome, #mobileNavHome').forEach(el => { if (el) el.innerText = 'خانه'; });
        document.querySelectorAll('#navAbout, #mobileNavAbout').forEach(el => { if (el) el.innerText = 'درباره من'; });
        document.querySelectorAll('#navSkills, #mobileNavSkills').forEach(el => { if (el) el.innerText = 'مهارت‌ها'; });
        document.querySelectorAll('#navServices, #mobileNavServices').forEach(el => { if (el) el.innerText = 'خدمات'; });
        document.querySelectorAll('#navExperience, #mobileNavExperience').forEach(el => { if (el) el.innerText = 'تجربه'; });
        document.querySelectorAll('#navContact, #mobileNavContact').forEach(el => { if (el) el.innerText = 'ارتباط'; });
        document.getElementById('heroTitle').innerText = 'طاها رضایی';
        document.getElementById('downloadCvText').innerText = 'دانلود رزومه';
        document.getElementById('contactMeText').innerText = 'تماس با من';
        document.getElementById('contactEmailText').innerHTML = 'taha.rezaei.dev@gmail.com';
        document.getElementById('contactLocationText').innerHTML = 'ایران، خراسان رضوی، قوچان';
        document.getElementById('aboutTitle').innerHTML = `<span class="section-icon" style="background-image: url('icons/about.svg');"></span><span>▸ درباره من</span>`;
        document.getElementById('aboutText1').innerHTML = "من یک معمار بک‌اند هستم که سطحی‌نگری را قبول ندارد. حلقه رویداد، race condition و دفاع در عمق را عمیقاً درک می‌کنم. فقط کد نمی‌نویسم — سیستم‌های مقاوم می‌سازم.";
        document.getElementById('aboutText2').innerHTML = "در حال حاضر در حال یادگیری عمیق امنیت بلاکچین، حسابرسی قراردادهای هوشمند و مکانیسم‌های اجماع هستم. همیشه کنجکاو، همیشه در حال ساختن.";
        document.getElementById('skillsTitle').innerHTML = `<span class="section-icon" style="background-image: url('icons/technical.svg');"></span><span>زرادخانه فنی</span>`;
        document.getElementById('servicesTitle').innerHTML = `<span class="section-icon" style="background-image: url('icons/services.svg');"></span><span>خدمات</span>`;
        document.getElementById('experienceTitle').innerHTML = `<span class="section-icon" style="background-image: url('icons/experience.svg');"></span><span>تجربه و پروژه‌ها</span>`;
        document.getElementById('contactSectionTitle').innerHTML = `<span class="section-icon" style="background-image: url('icons/connect.svg');"></span><span>ارتباط</span>`;
        document.getElementById('contactNameInput').placeholder = 'نام شما';
        document.getElementById('contactEmailInput').placeholder = 'ایمیل شما';
        document.getElementById('contactMessageInput').placeholder = 'پیام شما...';
        document.getElementById('sendMessageBtn').innerHTML = 'ارسال پیام →';
        document.querySelector('.footer-text').innerHTML = '© ۲۰۲۶ طاها رضایی — معمار بک‌اند / سازنده سیستم‌های مقاوم';
        document.getElementById('btnText').innerText = isExpanded ? 'نمایش کمتر' : 'نمایش بیشتر';
        if (document.getElementById('mobileGithubBtn')) {
            document.getElementById('mobileGithubBtn').innerHTML = '<span class="mobile-social-icon" style="background-image: url(\'icons/github.svg\');"></span> گیت‌هاب';
            document.getElementById('mobileLinkedinBtn').innerHTML = '<span class="mobile-social-icon" style="background-image: url(\'icons/linkedin.svg\');"></span> لینکدین';
            document.getElementById('mobileTelegramBtn').innerHTML = '<span class="mobile-social-icon" style="background-image: url(\'icons/telegram.svg\');"></span> تلگرام';
            document.getElementById('mobileInstagramBtn').innerHTML = '<span class="mobile-social-icon" style="background-image: url(\'icons/instagram.svg\');"></span> اینستاگرام';
        }
        initTyped(['معمار بک‌اند', 'مهندس سیستم', 'عاشق دفاع در عمق']);
        document.body.classList.add('rtl');
    }
    renderSkills();
    renderTimeline();
    buildServices();
    setTimeout(() => {
        if (sliderAnimationId) cancelAnimationFrame(sliderAnimationId);
        startInfiniteSlider();
    }, 150);
    setTimeout(() => {
        ScrollTrigger.refresh();
        gsap.fromTo('.contact-card', { opacity: 0, y: 50 }, {
            scrollTrigger: { trigger: '#contactSection', start: 'top 85%' },
            opacity: 1, y: 0, duration: 0.6, ease: 'back.out(0.4)'
        });
        gsap.fromTo('.timeline-item:not(.hidden-item) .timeline-right', { opacity: 0, x: -30 }, {
            scrollTrigger: { trigger: '#experienceSection', start: 'top 85%' },
            opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(0.4)'
        });
    }, 200);
}

// ========== LANGUAGE SWITCH ==========
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const newLang = this.getAttribute('data-lang');
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll(`.lang-btn[data-lang="${newLang}"]`).forEach(b => b.classList.add('active'));
        updateUIText(newLang);
    });
});

// ========== RESIZE ==========
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const wasMobile = isMobileMode;
        const nowMobile = window.innerWidth <= 800;
        if (wasMobile !== nowMobile) {
            stopAutoSlide();
            renderSkills();
        } else if (nowMobile) {
            const container = document.getElementById('skillsGrid');
            const cards = document.querySelectorAll('.skill-card');
            if (container && cards.length > 0) {
                const cardWidth = container.clientWidth * 0.85;
                const isRtl = currentLang === 'fa';
                cards.forEach(card => {
                    card.style.flex = `0 0 ${cardWidth}px`;
                    if (isRtl) {
                        card.style.marginLeft = '16px';
                        card.style.marginRight = '0';
                    } else {
                        card.style.marginRight = '16px';
                        card.style.marginLeft = '0';
                    }
                });
                goToSlide(skillsSliderIndex);
            }
        }
    }, 250);
});

// ========== EVENT LISTENERS ==========
document.getElementById('showMoreBtn')?.addEventListener('click', toggleTimeline);

// ========== INIT ==========
initTheme();
renderSkills();
renderTimeline();
buildServices();
startInfiniteSlider();
stopServicesSliderOnHover();
updateUIText('en');
