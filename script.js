// 1. 导航栏切换页面内容
const navItems = document.querySelectorAll('.nav-item');
const contentPages = document.querySelectorAll('.content-page');

navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        // 排除“我的个人网页”链接（不切换内容）
        if (this.classList.contains('personal-link')) return;
        
        e.preventDefault();
        // 移除所有导航项的active类
        navItems.forEach(i => i.classList.remove('active'));
        // 给当前点击项添加active类
        this.classList.add('active');
        
        // 隐藏所有内容页
        contentPages.forEach(page => page.classList.remove('active'));
        // 显示对应内容页
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// 2. 搜索框回车功能
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const keyword = this.value.trim();
        if (keyword) {
            alert(`你搜索了：${keyword}`);
        } else {
            alert('请输入搜索内容');
        }
    }
});

// 3. 留言板提交功能
const msgSubmit = document.querySelector('.msg-submit');
const msgName = document.querySelector('.msg-name');
const msgContent = document.querySelector('.msg-content');
const msgList = document.querySelector('.message-list');

msgSubmit.addEventListener('click', function() {
    const name = msgName.value.trim();
    const content = msgContent.value.trim();
    
    if (!name || !content) {
        alert('请填写姓名和留言内容');
        return;
    }
    
    // 创建留言项
    const msgItem = document.createElement('div');
    msgItem.className = 'message-item';
    msgItem.innerHTML = `<span>${name}</span>：${content}`;
    
    // 添加到留言列表
    msgList.appendChild(msgItem);
    
    // 清空输入框
    msgName.value = '';
    msgContent.value = '';
});