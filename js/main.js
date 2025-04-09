// 導航欄滾動效果
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 100) {
        nav.style.backgroundColor = '#1a252f';
    } else {
        nav.style.backgroundColor = '#2c3e50';
    }
});

// 登入按鈕點擊事件
document.querySelector('.login-btn button').addEventListener('click', function() {
    // 這裡可以添加登入邏輯
    alert('登入功能開發中...');
});

// 特色卡片動畫效果
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 漢堡選單控制
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('show');
    });

    // 點擊導航連結時關閉選單
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('show');
        });
    });
});

// 在移動設備上初始化漢堡選單
if (window.innerWidth <= 768) {
    createMobileNav();
}

// 視窗大小改變時重新初始化漢堡選單
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        if (window.innerWidth <= 768 && !mobileMenuBtn) {
            createMobileNav();
        } else if (window.innerWidth > 768 && mobileMenuBtn) {
            mobileMenuBtn.remove();
            const nav = document.querySelector('.main-nav');
            nav.classList.remove('show');
        }
    }, 250); // 添加延遲以避免過於頻繁的重新計算
}); 