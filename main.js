// 导航栏点击高亮
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// 风景图片点击放大预览（简单实现）
const allPics = document.querySelectorAll('img.intro-pic, img.charm-pic');
allPics.forEach(pic => {
    pic.addEventListener('click', function() {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '999';

        const bigPic = document.createElement('img');
        bigPic.src = this.src;
        bigPic.style.maxWidth = '90%';
        bigPic.style.maxHeight = '90%';

        overlay.appendChild(bigPic);
        document.body.appendChild(overlay);

        // 点击遮罩关闭
        overlay.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
    });
});