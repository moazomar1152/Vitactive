// القائمة المتنقلة
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // إغلاق القائمة عند النقر على الروابط
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // تأثيرات التمرير
    const scrollElements = document.querySelectorAll('.fade-in, .slide-in-right, .slide-in-left, .scale-in');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('active');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('active');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // تفعيل تأثيرات التمرير عند تحميل الصفحة
    setTimeout(handleScrollAnimation, 100);
    
    // تفعيل تأثيرات التمرير عند التمرير
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // تأثير التمرير المتوازي
    const parallaxBgs = document.querySelectorAll('.parallax-bg');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxBgs.forEach(bg => {
            const speed = 0.3;
            const yPos = -(scrolled * speed);
            bg.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    // تأثير الجزيئات
    const particleContainers = document.querySelectorAll('.bg-particles');
    
    particleContainers.forEach(container => {
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // تعيين موقع عشوائي
            const x = Math.floor(Math.random() * containerWidth);
            const y = Math.floor(Math.random() * containerHeight);
            
            // تعيين حجم عشوائي
            const size = Math.floor(Math.random() * 5) + 2;
            
            // تعيين شفافية عشوائية
            const opacity = Math.random() * 0.5 + 0.1;
            
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.opacity = opacity;
            
            container.appendChild(particle);
        }
    });
    
    // تفعيل الأسئلة الشائعة
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // إغلاق جميع الأسئلة الأخرى
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // تبديل حالة السؤال الحالي
            item.classList.toggle('active');
        });
    });
    
    // نموذج الاتصال
    const contactForm = document.querySelector('.contact-form');
    const contactSuccess = document.querySelector('.contact-success');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // محاكاة إرسال النموذج
            setTimeout(() => {
                contactSuccess.classList.add('show');
                contactForm.reset();
                
                // إخفاء رسالة النجاح بعد 5 ثوانٍ
                setTimeout(() => {
                    contactSuccess.classList.remove('show');
                }, 5000);
            }, 1000);
        });
    }
    
    // تصفية المنتجات
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // إزالة الفلتر النشط
                filterBtns.forEach(otherBtn => {
                    otherBtn.classList.remove('active');
                });
                
                // تفعيل الفلتر الحالي
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                // عرض/إخفاء المنتجات بناءً على الفلتر
                productCards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                    } else {
                        if (card.classList.contains(filter)) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // تثبيت الترويسة عند التمرير
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // تمرير سلس للروابط الداخلية
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // تفعيل جميع تأثيرات الحركة عند تحميل الصفحة
    const heroElements = document.querySelectorAll('.hero-content > *');
    
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('active');
        }, 300 * index);
    });
});
