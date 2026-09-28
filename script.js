// ====================
// شريط التنقل المتغير عند التمرير
// ====================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ====================
// قائمة الجوال
// ====================
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // إغلاق القائمة عند النقر على أي رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ====================
// تأثير الكتابة (Typing Effect)
// ====================
const typingText = document.getElementById('typingText');
if (typingText) {
    const words = ['مطور تطبيقات Flutter', 'مطور مواقع ويب', 'خبير Firebase', 'مقدم حلول تقنية'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';

    function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            currentText = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        typingText.textContent = currentText;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        } else {
            const speed = isDeleting ? 80 : 120;
            setTimeout(typeEffect, speed);
        }
    }

    typeEffect();
}

// ====================
// عد الأرقام في قسم الإحصائيات
// ====================
const statNumbers = document.querySelectorAll('.stat-number');

const animateStats = () => {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 50;
        let current = 0;

        const updateNumber = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = target;
            }
        };

        updateNumber();
    });
};

const statsSection = document.querySelector('.stats');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
}

// ====================
// ظهور العناصر عند التمرير (Scroll Reveal)
// ====================
const revealElements = document.querySelectorAll('.service-card, .portfolio-item, .about-content, .contact-wrapper');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.classList.add('hidden');
    revealObserver.observe(el);
});

// ====================
// رسالة ترحيب في الكونسول
// ====================
console.log(`
===========================================
  المهندس مازن عبد المعز - مطور تطبيقات ومواقع
  🚀 Flutter | Firebase | Web Development
===========================================
`);