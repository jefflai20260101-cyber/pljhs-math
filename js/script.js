document.addEventListener('DOMContentLoaded', () => {
    // 簡單的導覽列滾動效果
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.6)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
        }
    });

    // 假預告單元點擊提示
    const disabledCards = document.querySelectorAll('.lesson-card.disabled');
    disabledCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            alert('🍃 這個有趣的數學單元還在修築中喔！敬請期待！');
        });
    });

    // 平滑捲動
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
