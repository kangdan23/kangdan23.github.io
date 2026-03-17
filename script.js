// 中英文内容数据
const content = {
    zh: {
        // 导航栏
        logoText: "康丹",
        langText: "English",
        
        // 个人信息
        name: "康丹",
        title: "华东政法大学 · 经济学",
        school: "华东政法大学",
        email: "kang_dan@qq.com",
        location: "甘肃天水市",
        class: "班级 23012",
        
        // 研究兴趣
        interest1: "经济学",
        interest2: "数据分析",
        interest3: "金融分析",
        
        // 个人简介
        aboutTitle: "个人简介",
        aboutContent: "我是康丹，华东政法大学大三学生，班级23012，来自美丽的甘肃天水市。我是一个热爱生活、积极向上的人，喜欢在舞蹈中感受生命的韵律与活力。我相信保持好奇心和对知识的渴望是前进的动力，期待在经济学和数据分析领域深耕，用数据解读经济现象，用智慧创造价值。",
        trait1: "热爱生活",
        trait2: "积极向上",
        trait3: "热爱舞蹈",
        trait4: "勤于思考",
        
        // 教育背景
        eduTitle: "教育背景",
        eduCurrent: "2023年 - 至今",
        eduSchoolName: "华东政法大学",
        eduMajor: "经济学 · 大三在读",
        coursesTitle: "主修课程",
        
        // 实践经历
        expTitle: "实践经历",
        expCompany: "东方财富股份信息有限公司",
        expTime: "2024年暑期",
        expDesc1: "• 参与金融数据分析项目，协助处理市场数据",
        expDesc2: "• 学习证券投资分析工具和平台操作",
        expDesc3: "• 协助团队进行投资研究报告的数据整理",
        expDesc4: "• 了解金融科技在证券行业的应用",
        
        // 技能专长
        skillsTitle: "技能专长",
        techSkillsTitle: "技术技能",
        proSkillsTitle: "专业能力",
        softSkillsTitle: "软技能",
        skill1: "数据分析与建模",
        skill2: "金融分析",
        skill3: "计量经济学应用",
        skill4: "写作与报告",
        skill5: "团队协作",
        skill6: "沟通表达",
        
        // 兴趣爱好
        hobbyTitle: "兴趣爱好",
        hobby1: "舞蹈",
        hobby2: "阅读",
        hobby3: "数据分析",
        hobby4: "旅行探索",
        hobby1Desc: "在节奏中感受生命的韵律",
        hobby2Desc: "经济与文学作品的探索",
        hobby3Desc: "用数据解读经济现象",
        hobby4Desc: "发现世界的不同面貌",
        
        // 页脚
        updateDate: "最后更新日期：2025年4月5日",
        footerText: "© 2025 康丹 · 个人主页 | 基于 GitHub Pages 构建",
        contactLink: "联系我",
        githubLink: "GitHub"
    },
    
    en: {
        // 导航栏
        logoText: "Kang Dan",
        langText: "中文",
        
        // 个人信息
        name: "Kang Dan",
        title: "East China University of Political Science and Law · Economics",
        school: "East China University of Political Science and Law",
        email: "kang_dan@qq.com",
        location: "Tianshui, Gansu",
        class: "Class 23012",
        
        // 研究兴趣
        interest1: "Economics",
        interest2: "Data Analysis",
        interest3: "Financial Analysis",
        
        // 个人简介
        aboutTitle: "About Me",
        aboutContent: "I'm Kang Dan, a junior student at East China University of Political Science and Law, Class 23012, originally from the beautiful city of Tianshui, Gansu. I'm a passionate and positive individual who finds joy and vitality in dancing. I believe maintaining curiosity and a thirst for knowledge are the driving forces for progress. I look forward to delving deeper into economics and data analysis, using data to interpret economic phenomena and wisdom to create value.",
        trait1: "Life-loving",
        trait2: "Positive",
        trait3: "Dance Enthusiast",
        trait4: "Thoughtful",
        
        // 教育背景
        eduTitle: "Education",
        eduCurrent: "2023 - Present",
        eduSchoolName: "East China University of Political Science and Law",
        eduMajor: "Economics · Junior",
        coursesTitle: "Major Courses",
        
        // 实践经历
        expTitle: "Experience",
        expCompany: "East Money Information Co., Ltd.",
        expTime: "Summer 2024",
        expDesc1: "• Participated in financial data analysis projects, assisted in processing market data",
        expDesc2: "• Learned securities investment analysis tools and platform operations",
        expDesc3: "• Assisted the team in data organization for investment research reports",
        expDesc4: "• Understood the application of fintech in the securities industry",
        
        // 技能专长
        skillsTitle: "Skills & Expertise",
        techSkillsTitle: "Technical Skills",
        proSkillsTitle: "Professional Skills",
        softSkillsTitle: "Soft Skills",
        skill1: "Data Analysis & Modeling",
        skill2: "Financial Analysis",
        skill3: "Econometrics Application",
        skill4: "Writing & Reporting",
        skill5: "Team Collaboration",
        skill6: "Communication",
        
        // 兴趣爱好
        hobbyTitle: "Hobbies & Interests",
        hobby1: "Dancing",
        hobby2: "Reading",
        hobby3: "Data Analysis",
        hobby4: "Travel Exploration",
        hobby1Desc: "Feeling the rhythm of life in movement",
        hobby2Desc: "Exploring economics and literature",
        hobby3Desc: "Interpreting economic phenomena with data",
        hobby4Desc: "Discovering different facets of the world",
        
        // 页脚
        updateDate: "Last Updated: April 5, 2025",
        footerText: "© 2025 Kang Dan · Personal Website | Built with GitHub Pages",
        contactLink: "Contact Me",
        githubLink: "GitHub"
    }
};

// 当前语言状态
let currentLang = 'zh';

// 语言切换函数
function toggleLanguage() {
    // 切换语言
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    
    // 更新页面内容
    updateContent();
    
    // 更新按钮文本
    document.getElementById('lang-text').textContent = currentLang === 'zh' ? 'English' : '中文';
    
    // 更新页面标题
    document.title = currentLang === 'zh' ? '康丹 | 个人主页' : 'Kang Dan | Personal Website';
    
    // 添加切换动画
    document.body.style.opacity = '0.8';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 300);
}

// 更新页面内容的函数
function updateContent() {
    const langData = content[currentLang];
    
    // 更新导航栏
    document.getElementById('logo-text').textContent = langData.logoText;
    document.getElementById('lang-text').textContent = langData.langText;
    
    // 更新个人信息
    document.getElementById('name').textContent = langData.name;
    document.getElementById('title').textContent = langData.title;
    document.getElementById('school').textContent = langData.school;
    document.getElementById('email').textContent = langData.email;
    document.getElementById('location').textContent = langData.location;
    document.getElementById('class').textContent = langData.class;
    
    // 更新研究兴趣
    document.getElementById('interest1').textContent = langData.interest1;
    document.getElementById('interest2').textContent = langData.interest2;
    document.getElementById('interest3').textContent = langData.interest3;
    
    // 更新个人简介
    document.getElementById('about-title').textContent = langData.aboutTitle;
    document.getElementById('about-content').textContent = langData.aboutContent;
    document.getElementById('trait1').textContent = langData.trait1;
    document.getElementById('trait2').textContent = langData.trait2;
    document.getElementById('trait3').textContent = langData.trait3;
    document.getElementById('trait4').textContent = langData.trait4;
    
    // 更新教育背景
    document.getElementById('edu-title').textContent = langData.eduTitle;
    document.getElementById('edu-current').textContent = langData.eduCurrent;
    document.getElementById('edu-school-name').textContent = langData.eduSchoolName;
    document.getElementById('edu-major').textContent = langData.eduMajor;
    document.getElementById('courses-title').textContent = langData.coursesTitle;
    
    // 更新实践经历
    document.getElementById('exp-title').textContent = langData.expTitle;
    document.getElementById('exp-company').textContent = langData.expCompany;
    document.getElementById('exp-time').textContent = langData.expTime;
    document.getElementById('exp-desc1').textContent = langData.expDesc1;
    document.getElementById('exp-desc2').textContent = langData.expDesc2;
    document.getElementById('exp-desc3').textContent = langData.expDesc3;
    document.getElementById('exp-desc4').textContent = langData.expDesc4;
    
    // 更新技能
    document.getElementById('skills-title').textContent = langData.skillsTitle;
    document.getElementById('tech-skills-title').innerHTML = `<i class="fas fa-code"></i> ${langData.techSkillsTitle}`;
    document.getElementById('pro-skills-title').innerHTML = `<i class="fas fa-chart-line"></i> ${langData.proSkillsTitle}`;
    document.getElementById('soft-skills-title').innerHTML = `<i class="fas fa-comments"></i> ${langData.softSkillsTitle}`;
    document.getElementById('skill1').textContent = langData.skill1;
    document.getElementById('skill2').textContent = langData.skill2;
    document.getElementById('skill3').textContent = langData.skill3;
    document.getElementById('skill4').textContent = langData.skill4;
    document.getElementById('skill5').textContent = langData.skill5;
    document.getElementById('skill6').textContent = langData.skill6;
    
    // 更新兴趣爱好
    document.getElementById('hobby-title').textContent = langData.hobbyTitle;
    document.getElementById('hobby1').textContent = langData.hobby1;
    document.getElementById('hobby2').textContent = langData.hobby2;
    document.getElementById('hobby3').textContent = langData.hobby3;
    document.getElementById('hobby4').textContent = langData.hobby4;
    document.getElementById('hobby1-desc').textContent = langData.hobby1Desc;
    document.getElementById('hobby2-desc').textContent = langData.hobby2Desc;
    document.getElementById('hobby3-desc').textContent = langData.hobby3Desc;
    document.getElementById('hobby4-desc').textContent = langData.hobby4Desc;
    
    // 更新页脚
    document.getElementById('update-date').innerHTML = `<i class="far fa-calendar-alt"></i> ${langData.updateDate}`;
    document.getElementById('footer-text').textContent = langData.footerText;
    document.getElementById('contact-link').innerHTML = `<i class="fas fa-envelope"></i> ${langData.contactLink}`;
    document.getElementById('github-link').innerHTML = `<i class="fab fa-github"></i> ${langData.githubLink}`;
}

// 技能条动画
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 绑定语言切换按钮事件
    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
    
    // 初始内容设置为中文
    updateContent();
    
    // 初始化技能条动画
    setTimeout(animateSkills, 500);
    
    // 添加卡片悬停效果
    const cards = document.querySelectorAll('.content-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
        });
    });
    
    // 添加课程标签点击效果
    const courseTags = document.querySelectorAll('.course-tag');
    courseTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // 添加链接交互
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.getAttribute('href') === '#') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                alert(currentLang === 'zh' ? '功能即将上线！' : 'Coming soon!');
            });
        }
    });
});
