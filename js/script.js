// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // 导航栏滚动效果
  const navbar = document.querySelector('.navbar');
  const heroSection = document.querySelector('.hero');
  
  if (navbar && heroSection) {
    const heroHeight = heroSection.offsetHeight;
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(47, 47, 47, 0.95)';
        navbar.style.color = '#FAF9F6';
      } else {
        navbar.style.backgroundColor = 'rgba(250, 249, 246, 0.95)';
        navbar.style.color = '#2F2F2F';
      }
    });
  }

  // 切换主题模式
  const themeSwitch = document.querySelector('.theme-switch');
  if (themeSwitch) {
    themeSwitch.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        themeSwitch.textContent = '☀️';
      } else {
        themeSwitch.textContent = '🌙';
      }
    });
  }

  // 语言切换
  const langSwitch = document.querySelector('.lang-switch');
  if (langSwitch) {
    langSwitch.addEventListener('click', function() {
      if (langSwitch.textContent === 'EN') {
        langSwitch.textContent = 'CN';
        // 这里添加实际语言切换逻辑
      } else {
        langSwitch.textContent = 'EN';
        // 这里添加实际语言切换逻辑
      }
    });
  }

  // 按钮波纹效果
  const buttons = document.querySelectorAll('button:not(.tag)');
  buttons.forEach(button => {
    button.classList.add('ripple-button');
    button.addEventListener('click', createRipple);
  });

  function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  // 材料标签交互
  const materialTags = document.querySelectorAll('.material-tags .tag');
  if (materialTags.length > 0) {
    materialTags.forEach(tag => {
      tag.addEventListener('click', function() {
        materialTags.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // 标签缝合动画效果
        const tagText = this.textContent;
        const filterDisplay = document.createElement('div');
        filterDisplay.classList.add('active-filter');
        filterDisplay.textContent = `已筛选: ${tagText}`;
        
        const filterContainer = document.querySelector('.material-tags');
        const existingFilter = document.querySelector('.active-filter');
        
        if (existingFilter) {
          filterContainer.removeChild(existingFilter);
        }
        
        if (tagText !== '全部') {
          filterContainer.appendChild(filterDisplay);
        }
        
        // 这里添加实际过滤逻辑
        filterProjects(tagText);
      });
    });
  }

  // 模拟项目过滤功能
  function filterProjects(category) {
    console.log(`Filtering projects by: ${category}`);
    // 实际项目中这里会根据类别过滤DOM元素或从服务器请求数据
  }

  // 生成3D展示墙
  initShowcase3D();

  // 生成项目展示卡片
  generateProjectCards();

  // 聊天界面交互
  initChatInterface();
  
  // 确保聊天界面加载完成后有默认消息
  setTimeout(function() {
    const chatMessages = document.querySelector('#chat-messages');
    if (chatMessages && chatMessages.children.length === 0) {
      console.log("Chat interface still empty after initialization, retrying...");
      initChatInterface();
    }
  }, 500);

  // 视差滚动效果
  initParallaxEffect();

  // 初始化对接进度面板
  initTrackingPanel();

  // 初始化统计数字动画
  animateStats();
  
  // 确保标题不会因滚动或动画而移动
  const sectionHeaders = document.querySelectorAll('.section-header');
  sectionHeaders.forEach(header => {
    // 为标题元素添加固定位置类
    header.classList.add('stable-position');
  });

  // 对所有标题应用固定样式
  const allHeadings = document.querySelectorAll('h2, h3');
  allHeadings.forEach(heading => {
    heading.style.minHeight = heading.offsetHeight + 'px';
  });

  // 初始化导航栏
  initNavbar();
  
  // 初始化语言切换
  initLanguageSwitch();
  
  // 初始化深色模式
  initDarkMode();
  
  // 初始化聊天界面
  initChatInterface();
  
  // 初始化对接进度面板
  initTrackingPanel();
  
  // 为页面添加平滑滚动
  addSmoothScrolling();
  
  // 滚动监听，高亮当前活动的导航菜单项
  initScrollSpy();

  // 初始化项目档案馆
  initProjectArchive();
  
  // 初始化灵感孵化器
  initInspirationIncubator();
  
  // 添加工作坊区域的ID
  addWorkshopSectionIds();
  
  // 初始化解构实验室导航
  initWorkshopNavigation();
  
  // 初始化纤维会议模块
  initCommunitySection();
  
  // 初始化擂台冠军荣誉区域
  initArenaChampions();
  
  // 添加区域IDs
  addWorkshopSectionIds();
  addCommunityModuleIds();

  // 初始化下拉菜单动画 (Initialize dropdown menu animations)
  initDropdownAnimations();

  // 初始化导航功能
  initNavigation();

  // 初始化聊天机器人
  initChatbot();
});

// 3D展示墙初始化
function initShowcase3D() {
  const container = document.querySelector('.showcase-container');
  if (!container) return;

  // 移除占位符
  const placeholder = container.querySelector('.placeholder-3d');
  if (placeholder) {
    container.removeChild(placeholder);
  }

  // 创建3D展示墙 - 简化版模拟
  // 在完整实现中，这里应该使用Three.js库
  
  // 创建6个展示卡片作为立方体的面
  const cube = document.createElement('div');
  cube.classList.add('showcase-cube');
  
  for (let i = 0; i < 6; i++) {
    const face = document.createElement('div');
    face.classList.add('cube-face', `face-${i+1}`);
    
    const image = document.createElement('img');
    image.src = `assets/project-${i+1}.jpg`;
    image.alt = `改造项目 ${i+1}`;
    
    face.appendChild(image);
    cube.appendChild(face);
    
    // 点击展开详情
    face.addEventListener('click', function() {
      showProjectDetail(i+1);
    });
  }
  
  container.appendChild(cube);
  
  // 添加拖动交互
  let isDragging = false;
  let previousX = 0;
  let previousY = 0;
  let rotX = 0;
  let rotY = 0;
  
  container.addEventListener('mousedown', function(e) {
    isDragging = true;
    previousX = e.clientX;
    previousY = e.clientY;
    container.style.cursor = 'grabbing';
  });
  
  window.addEventListener('mousemove', function(e) {
    if (isDragging) {
      const dx = e.clientX - previousX;
      const dy = e.clientY - previousY;
      
      rotY += dx * 0.5;
      rotX -= dy * 0.5;
      
      cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      
      previousX = e.clientX;
      previousY = e.clientY;
    }
  });
  
  window.addEventListener('mouseup', function() {
    isDragging = false;
    container.style.cursor = 'grab';
  });
}

// 项目详情弹窗
function showProjectDetail(projectId) {
  // 创建模态框
  const modal = document.createElement('div');
  modal.classList.add('project-modal');
  
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  
  // 添加关闭按钮
  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-modal');
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', function() {
    document.body.removeChild(modal);
  });
  
  // 添加项目内容
  const projectContent = document.createElement('div');
  projectContent.classList.add('project-detail');
  
  const projectTitle = document.createElement('h3');
  projectTitle.textContent = `改造项目 ${projectId}`;
  
  const beforeAfterContainer = document.createElement('div');
  beforeAfterContainer.classList.add('before-after-slider');
  
  // 这里简化实现，实际项目中应该使用更复杂的滑块对比组件
  const beforeImg = document.createElement('img');
  beforeImg.src = `assets/project-${projectId}-before.jpg`;
  beforeImg.alt = '改造前';
  
  const afterImg = document.createElement('img');
  afterImg.src = `assets/project-${projectId}-after.jpg`;
  afterImg.alt = '改造后';
  
  beforeAfterContainer.appendChild(beforeImg);
  beforeAfterContainer.appendChild(afterImg);
  
  const projectDesc = document.createElement('p');
  projectDesc.textContent = '这是一个旧牛仔裤改造项目，通过拼接剪裁和手工装饰，将废旧牛仔裤变成时尚单肩包。采用零浪费设计原则，甚至将拉链和纽扣也重新利用。';
  
  const designSketch = document.createElement('img');
  designSketch.classList.add('design-sketch');
  designSketch.src = `assets/sketch-${projectId}.jpg`;
  designSketch.alt = '设计草图';
  
  projectContent.appendChild(projectTitle);
  projectContent.appendChild(beforeAfterContainer);
  projectContent.appendChild(projectDesc);
  projectContent.appendChild(designSketch);
  
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(projectContent);
  modal.appendChild(modalContent);
  
  document.body.appendChild(modal);
}

// 生成项目卡片
function generateProjectCards() {
  const projectsGrid = document.querySelector('.projects-grid');
  if (!projectsGrid) return;
  
  // 模拟数据
  const projectsData = [
    { id: 1, title: '牛仔外套改造', material: '牛仔', difficulty: 4, imageUrl: 'assets/project-1.jpg' },
    { id: 2, title: '丝质围巾变裙', material: '丝绸', difficulty: 3, imageUrl: 'assets/project-2.jpg' },
    { id: 3, title: '亚麻衬衫翻新', material: '棉麻', difficulty: 2, imageUrl: 'assets/project-3.jpg' },
    { id: 4, title: '皮夹克改造', material: '皮革', difficulty: 5, imageUrl: 'assets/project-4.jpg' },
    { id: 5, title: '针织衫重构', material: '针织', difficulty: 3, imageUrl: 'assets/project-5.jpg' },
    { id: 6, title: '牛仔裤变包', material: '牛仔', difficulty: 4, imageUrl: 'assets/project-6.jpg' },
    { id: 7, title: '丝巾再造', material: '丝绸', difficulty: 2, imageUrl: 'assets/project-7.jpg' },
    { id: 8, title: '棉布拼接', material: '棉麻', difficulty: 3, imageUrl: 'assets/project-8.jpg' }
  ];
  
  projectsData.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card', 'card-3d');
    card.dataset.material = project.material;
    
    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');
    
    // 卡片正面
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    
    const image = document.createElement('img');
    image.src = project.imageUrl;
    image.alt = project.title;
    
    const title = document.createElement('h4');
    title.textContent = project.title;
    
    const difficultyContainer = document.createElement('div');
    difficultyContainer.classList.add('difficulty-stars');
    
    // 添加难度星级
    for (let i = 0; i < 5; i++) {
      const star = document.createElement('span');
      star.classList.add('star');
      if (i < project.difficulty) {
        star.classList.add('filled');
      }
      difficultyContainer.appendChild(star);
    }
    
    cardFront.appendChild(image);
    cardFront.appendChild(title);
    cardFront.appendChild(difficultyContainer);
    
    // 卡片背面
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    
    const materialChart = document.createElement('div');
    materialChart.classList.add('material-chart');
    materialChart.innerHTML = `<h5>材料成分</h5>
      <div class="chart-container">
        <canvas class="radar-chart" width="150" height="150"></canvas>
      </div>
      <p>主要材质: ${project.material}</p>`;
    
    const storyPreview = document.createElement('div');
    storyPreview.classList.add('story-preview');
    storyPreview.innerHTML = `<p>这是一个关于如何给旧衣物赋予新生命的故事，点击查看完整改造过程...</p>`;
    
    const viewButton = document.createElement('button');
    viewButton.classList.add('view-button');
    viewButton.textContent = '查看详情';
    viewButton.addEventListener('click', function() {
      showProjectDetail(project.id);
    });
    
    cardBack.appendChild(materialChart);
    cardBack.appendChild(storyPreview);
    cardBack.appendChild(viewButton);
    
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    
    projectsGrid.appendChild(card);
  });
}

// 聊天界面交互
function initChatInterface() {
  console.log("Initializing chat interface...");
  
  const chatInterface = document.querySelector('.chat-interface');
  if (!chatInterface) {
    console.error("Chat interface not found");
    return;
  }
  
  const chatMessages = document.querySelector('#chat-messages');
  const chatInput = document.querySelector('.chat-input input');
  const sendButton = document.querySelector('.send-button');
  const chatSidebar = document.querySelector('.chat-sidebar');
  
  if (!chatMessages || !chatInput || !sendButton) {
    console.error("Chat components missing:", {
      messages: !!chatMessages,
      input: !!chatInput,
      button: !!sendButton
    });
    return;
  }
  
  console.log("Chat components found, continuing initialization");
  
  // 变量用于存储当前会话状态
  let currentSessionId = localStorage.getItem('currentSessionId');
  let currentSessionTitle = "新对话";
  let previousTopics = {
    fabric: false,
    clothing: false,
    price: false,
    contact: false,
    seller: false,
    buyer: false
  };
  
  // 初始化聊天界面
  if (chatSidebar) {
    initChatHistory(chatSidebar);
  }
  
  // 如果有当前会话ID，加载该会话
  if (currentSessionId) {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || {};
    if (chatHistory[currentSessionId]) {
      loadSession(currentSessionId);
    } else {
      // 如果保存的会话ID不存在历史记录中，创建新会话
      startNewSession();
    }
  } else {
    // 无会话ID，创建新会话
    startNewSession();
  }
  
  // 检查聊天界面是否为空，如果是则重新初始化
  checkChatInterfaceEmpty();
  
  // 添加事件监听器
  if (sendButton) {
    sendButton.addEventListener('click', sendMessage);
  }
  
  if (chatInput) {
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
    
    // 添加输入时的动态效果
    chatInput.addEventListener('focus', function() {
      if (this.parentElement) {
        this.parentElement.classList.add('input-active');
      }
    });
    
    chatInput.addEventListener('blur', function() {
      if (this.parentElement) {
        this.parentElement.classList.remove('input-active');
      }
    });
  }
  
  // 初始调整高度
  adjustChatHeight();
  
  // 监听窗口大小变化，重新调整高度
  window.addEventListener('resize', adjustChatHeight);
  
  // 如果聊天框为空，添加一个新会话
  function checkChatInterfaceEmpty() {
    if (!chatMessages || chatMessages.children.length === 0) {
      console.log("Chat interface is empty, reinitializing...");
      startNewSession();
    }
  }

  // 发送消息
  function sendMessage() {
    if (!chatInput || !chatMessages) {
      console.error("Cannot send message: UI elements not found");
      return;
    }
    
    const message = chatInput.value.trim();
    if (message === '') return;
    
    console.log("Sending message:", message);
    
    // 创建用户消息
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.textContent = message;
    
    chatMessages.appendChild(userMessage);
    
    // 清空输入框
    chatInput.value = '';
    
    // 滚动到底部
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // 确保聊天界面高度适应内容
    adjustChatHeight();
    
    // 保存用户消息到当前会话
    saveMessageToHistory(currentSessionId, 'user', message);
    
    // 如果这是新会话的第一条消息，根据内容生成标题
    if (currentSessionTitle === "新对话") {
      currentSessionTitle = generateSessionTitle(message);
      updateSessionList();
    }
    
    // 模拟系统回复
    setTimeout(function() {
      // 获取自动回复
      const autoReply = getAutoReply(message);
      
      // 创建系统消息
      const systemMessage = document.createElement('div');
      systemMessage.classList.add('message', 'system-message');
      
      const needleIcon = document.createElement('span');
      needleIcon.classList.add('needle-icon');
      needleIcon.innerHTML = '🧵';
      
      const messageText = document.createElement('span');
      systemMessage.appendChild(needleIcon);
      systemMessage.appendChild(messageText);
      
      chatMessages.appendChild(systemMessage);
      
      // 添加内容
      messageText.innerHTML = autoReply;
      
      // 保存系统回复到当前会话
      saveMessageToHistory(currentSessionId, 'system', autoReply);
      
      // 添加打字动画效果
      addTypingAnimation(messageText);
      
      // 滚动到底部
      chatMessages.scrollTop = chatMessages.scrollHeight;
      
      // 再次调整聊天界面高度
      adjustChatHeight();
      
      // 基于系统回复再次更新对接进度
      updateTrackingFromChat(autoReply);
    }, 1000);
  }

  // 生成唯一的会话ID
  function generateSessionId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
  
  // 根据用户首条消息内容生成会话标题
  function generateSessionTitle(message) {
    // 提取消息的前10个字符作为标题，如果消息太短则全部使用
    const titleText = message.length > 10 ? message.substring(0, 10) + '...' : message;
    return titleText;
  }
  
  // 保存消息到本地存储
  function saveMessageToHistory(sessionId, sender, content) {
    // 从本地存储获取已有历史记录
    let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || {};
    
    // 如果会话不存在，则创建新会话
    if (!chatHistory[sessionId]) {
      chatHistory[sessionId] = {
        id: sessionId,
        title: currentSessionTitle,
        date: new Date().toISOString(),
        messages: []
      };
    }
    
    // 添加新消息
    chatHistory[sessionId].messages.push({
      sender: sender,
      content: content,
      timestamp: new Date().toISOString()
    });
    
    // 更新最后活动时间
    chatHistory[sessionId].lastActive = new Date().toISOString();
    
    // 更新会话标题（如果已生成）
    if (currentSessionTitle !== "新对话") {
      chatHistory[sessionId].title = currentSessionTitle;
    }
    
    // 保存回本地存储
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    
    // 更新当前会话ID到localStorage
    localStorage.setItem('currentSessionId', sessionId);
    
    // 更新会话列表
    updateSessionList();
  }
  
  // 添加打字动画效果
  function addTypingAnimation(element) {
    const text = element.innerHTML;
    element.innerHTML = '';
    let i = 0;
    
    function typeWriter() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        // 随机打字速度，让效果更自然
        setTimeout(typeWriter, Math.random() * 10 + 20);
      }
    }
    
    // 考虑到文本较长且有HTML标签，这里简化不使用真实的打字效果
    element.innerHTML = text;
    element.style.opacity = '0';
    setTimeout(() => {
      element.style.transition = 'opacity 0.5s';
      element.style.opacity = '1';
    }, 100);
  }
  
  // 初始化聊天历史
  function initChatHistory(sidebar) {
    // 确保历史会话标题已添加
    if (!sidebar.querySelector('.sidebar-header')) {
      const header = document.createElement('div');
      header.classList.add('sidebar-header');
      header.innerHTML = '历史会话<span class="current-time"></span>';
      sidebar.appendChild(header);
    }
    
    // 更新当前北京时间显示
    updateCurrentTime();
    
    // 更新会话列表
    updateSessionList();
    
    // 每秒更新一次时间
    setInterval(updateCurrentTime, 1000);
  }
  
  // 更新当前北京时间显示
  function updateCurrentTime() {
    const now = new Date();
    now.setTime(now.getTime() + (8 * 60 * 60 * 1000)); // 调整为UTC+8
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    
    const timeElement = chatSidebar.querySelector('.sidebar-header .current-time');
    if (timeElement) {
      timeElement.textContent = `北京时间 ${currentTime}`;
    }
  }
  
  // 格式化日期为更友好的格式
  function formatDate(dateString) {
    const date = new Date(dateString);
    // 调整为北京时间
    date.setTime(date.getTime() + (8 * 60 * 60 * 1000));
    
    const now = new Date();
    now.setTime(now.getTime() + (8 * 60 * 60 * 1000));
    
    const today = new Date(now);
    today.setUTCHours(0, 0, 0, 0);
    
    const yesterday = new Date(today);
    yesterday.setUTCDate(yesterday.getUTCDate() - 1);
    
    // 检查是否是今天
    if (date >= today) {
      const hours = String(date.getUTCHours()).padStart(2, '0');
      const minutes = String(date.getUTCMinutes()).padStart(2, '0');
      return `今天 ${hours}:${minutes}`;
    }
    
    // 检查是否是昨天
    if (date >= yesterday && date < today) {
      return "昨天";
    }
    
    // 一周内显示星期
    const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const diffDays = Math.floor((today - date) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 7) {
      return weekDays[date.getUTCDay()];
    }
    
    // 更早的日期显示完整日期
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  // 更新会话列表
  function updateSessionList() {
    // 从本地存储获取历史记录
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || {};
    
    // 获取所有会话并按最后活动时间排序
    const sessions = Object.values(chatHistory).sort((a, b) => 
      new Date(b.lastActive || b.date) - new Date(a.lastActive || a.date)
    );
    
    // 清空已有的历史会话项目
    chatSidebar.querySelectorAll('.session-item').forEach(item => item.remove());
    
    // 如果没有历史会话记录，添加新会话按钮
    if (sessions.length === 0) {
      const newChatButton = document.createElement('div');
      newChatButton.classList.add('session-item', 'new-chat');
      newChatButton.innerHTML = '<div class="session-title">开始新对话</div>';
      
      newChatButton.addEventListener('click', () => {
        startNewSession();
      });
      
      chatSidebar.appendChild(newChatButton);
      return;
    }
    
    // 添加新会话按钮
    const newChatButton = document.createElement('div');
    newChatButton.classList.add('session-item', 'new-chat');
    newChatButton.innerHTML = '<div class="session-title">开始新对话</div>';
    
    newChatButton.addEventListener('click', () => {
      startNewSession();
    });
    
    chatSidebar.appendChild(newChatButton);
    
    // 添加历史会话
    sessions.forEach(session => {
      const sessionItem = document.createElement('div');
      sessionItem.classList.add('session-item');
      sessionItem.dataset.sessionId = session.id;
      
      if (session.id === currentSessionId) {
        sessionItem.classList.add('active');
      }
      
      const sessionTitle = document.createElement('div');
      sessionTitle.classList.add('session-title');
      sessionTitle.textContent = session.title || "无标题对话";
      
      const sessionDate = document.createElement('div');
      sessionDate.classList.add('session-date');
      
      const formattedDate = formatDate(session.lastActive || session.date);
      sessionDate.innerHTML = `<span class="date-icon">🕒</span> ${formattedDate}`;
      
      // 完整日期作为悬停提示
      const fullDate = new Date(session.lastActive || session.date);
      fullDate.setTime(fullDate.getTime() + (8 * 60 * 60 * 1000)); // 调整为北京时间
      
      const fullDateStr = `${fullDate.getUTCFullYear()}-${String(fullDate.getUTCMonth() + 1).padStart(2, '0')}-${String(fullDate.getUTCDate()).padStart(2, '0')} ${String(fullDate.getUTCHours()).padStart(2, '0')}:${String(fullDate.getUTCMinutes()).padStart(2, '0')}`;
      sessionDate.title = fullDateStr;
      
      // 添加删除按钮
      const deleteButton = document.createElement('span');
      deleteButton.classList.add('delete-session');
      deleteButton.innerHTML = '✕';
      deleteButton.title = '删除对话';
      deleteButton.onclick = (e) => {
        e.stopPropagation(); // 阻止事件冒泡，避免触发会话点击事件
        deleteSession(session.id);
      };
      
      sessionItem.appendChild(sessionTitle);
      sessionItem.appendChild(sessionDate);
      sessionItem.appendChild(deleteButton);
      
      // 点击切换会话
      sessionItem.addEventListener('click', () => {
        loadSession(session.id);
      });
      
      chatSidebar.appendChild(sessionItem);
    });
  }
  
  // 删除会话
  function deleteSession(sessionId) {
    if (confirm('确认删除这个对话记录吗？此操作无法撤销。')) {
      // 从本地存储中获取会话数据
      const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || {};
      
      // 删除指定会话
      if (chatHistory[sessionId]) {
        delete chatHistory[sessionId];
        
        // 保存更新后的会话数据
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
        
        // 如果删除的是当前会话，则开始新会话
        if (sessionId === currentSessionId) {
          startNewSession();
        } else {
          // 仅更新会话列表
          updateSessionList();
        }
      }
    }
  }
  
  // 加载指定会话
  function loadSession(sessionId) {
    console.log("Loading session:", sessionId);
    
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || {};
    
    if (!chatHistory[sessionId]) {
      console.error("Session not found:", sessionId);
      startNewSession();
      return;
    }
    
    // 更新当前会话
    currentSessionId = sessionId;
    localStorage.setItem('currentSessionId', currentSessionId);
    
    // 更新会话标题
    currentSessionTitle = chatHistory[sessionId].title || "未命名对话";
    
    // 清空当前消息区域
    if (chatMessages) {
      chatMessages.innerHTML = '';
      
      // 恢复历史消息
      if (chatHistory[sessionId].messages && chatHistory[sessionId].messages.length > 0) {
        chatHistory[sessionId].messages.forEach(msgObj => {
          const messageElement = document.createElement('div');
          
          if (msgObj.sender === 'user') {
            messageElement.classList.add('message', 'user-message');
            messageElement.textContent = msgObj.content;
          } else {
            messageElement.classList.add('message', 'system-message');
            
            const needleIcon = document.createElement('span');
            needleIcon.classList.add('needle-icon');
            needleIcon.innerHTML = '🧵';
            
            const messageText = document.createElement('span');
            messageText.innerHTML = msgObj.content;
            
            messageElement.appendChild(needleIcon);
            messageElement.appendChild(messageText);
          }
          
          chatMessages.appendChild(messageElement);
        });
      } else {
        // 如果没有消息，添加默认欢迎消息
        const systemMessage = document.createElement('div');
        systemMessage.classList.add('message', 'system-message');
        
        const needleIcon = document.createElement('span');
        needleIcon.classList.add('needle-icon');
        needleIcon.innerHTML = '🧵';
        
        const messageText = document.createElement('span');
        messageText.innerHTML = '欢迎回来！有什么我可以帮助您的吗？';
        
        systemMessage.appendChild(needleIcon);
        systemMessage.appendChild(messageText);
        
        chatMessages.appendChild(systemMessage);
        
        // 保存欢迎消息
        saveMessageToHistory(currentSessionId, 'system', messageText.innerHTML);
      }
      
      // 更新会话列表中的活动状态
      updateSessionList();
      
      // 滚动到底部
      chatMessages.scrollTop = chatMessages.scrollHeight;
      
      // 调整聊天界面高度
      adjustChatHeight();
    } else {
      console.error("Chat messages container not found when loading session");
    }
  }
  
  // 开始新会话
  function startNewSession() {
    console.log("Starting new session");
    
    // 生成新的会话ID
    currentSessionId = generateSessionId();
    localStorage.setItem('currentSessionId', currentSessionId);
    
    currentSessionTitle = "新对话";
    
    // 清空消息区域
    if (chatMessages) {
      chatMessages.innerHTML = '';
      
      // 添加默认欢迎消息
      const systemMessage = document.createElement('div');
      systemMessage.classList.add('message', 'system-message');
      
      const needleIcon = document.createElement('span');
      needleIcon.classList.add('needle-icon');
      needleIcon.innerHTML = '🧵';
      
      const messageText = document.createElement('span');
      messageText.innerHTML = '欢迎来到Fashion Reborn服装改造艺术空间！我是您的顾问，有任何关于清理库存、收购库存，改造成衣或面料的问题都可以咨询我。如需直接联系，请添加微信：<strong>JJ1598929032</strong>';
      
      systemMessage.appendChild(needleIcon);
      systemMessage.appendChild(messageText);
      
      chatMessages.appendChild(systemMessage);
      
      // 保存欢迎消息到历史记录
      saveMessageToHistory(currentSessionId, 'system', messageText.innerHTML);
      
      // 更新会话列表
      updateSessionList();
      
      // 滚动到底部
      chatMessages.scrollTop = chatMessages.scrollHeight;
      
      // 调整高度
      adjustChatHeight();
    } else {
      console.error("Chat messages container not found");
    }
  }
  
  // 调整聊天界面高度以适应内容
  function adjustChatHeight() {
    // 确保我们有必要的DOM元素
    if (!chatInterface || !chatMessages) {
      console.error("Cannot adjust chat height: Required elements not found");
      return;
    }
    
    // 确保对话框内容完全显示
    chatMessages.style.maxHeight = '520px'; // 保持最大高度限制
    
    // 确保整个聊天界面不遮挡对接进度面板
    const trackingPanel = document.querySelector('.tracking-panel');
    if (trackingPanel) {
      const chatBottom = chatInterface.getBoundingClientRect().bottom;
      const trackingTop = trackingPanel.getBoundingClientRect().top;
      
      // 如果聊天界面底部超出跟踪面板顶部，增加上边距
      if (chatBottom > trackingTop) {
        const currentMargin = parseInt(getComputedStyle(trackingPanel).marginTop) || 0;
        trackingPanel.style.marginTop = (currentMargin + (chatBottom - trackingTop) + 20) + 'px';
      }
    }
    
    // 为消息添加动画效果
    const messages = document.querySelectorAll('.message');
    messages.forEach((message, index) => {
      if (!message.style.animationDelay) {
        message.style.animationDelay = `${index * 0.1}s`;
      }
    });
  }

  // 初始化下拉菜单动画 (Initialize dropdown menu animations)
  initDropdownAnimations();
});

// 视差滚动效果
function initParallaxEffect() {
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      // 排除标题元素，只对内容区域应用视差效果
      const contentElements = section.querySelectorAll('.showcase-container, .projects-grid, .community-market, .challenge-entries, .resources-grid');
      
      contentElements.forEach(element => {
        const distance = element.getBoundingClientRect().top;
        const speed = 0.1;
        
        if (Math.abs(distance) < window.innerHeight) {
          // 只在元素进入视口时应用微小的视差效果，避免影响布局
          const translate = distance * speed;
          element.style.transform = `translateY(${translate}px)`;
        }
      });
      
      // 确保标题元素保持稳定
      const sectionHeader = section.querySelector('.section-header');
      if (sectionHeader) {
        sectionHeader.style.transform = 'none';
      }
    });
  });
}

// 对接进度面板功能
function initTrackingPanel() {
  const trackingPanel = document.querySelector('.process-flow');
  if (!trackingPanel) return;

  // 初始化进度流程图 - 从localStorage获取当前状态
  let currentTrackingData = JSON.parse(localStorage.getItem('trackingData'));
  
  // 如果没有保存的跟踪数据或者是新会话，初始化默认数据
  if (!currentTrackingData) {
    currentTrackingData = {
      currentStage: 1,
      stages: [
        { id: 1, name: '需求提交', status: 'pending', timestamp: new Date().toISOString() },
        { id: 2, name: '匹配库存', status: 'pending', timestamp: null },
        { id: 3, name: '卖家确认', status: 'pending', timestamp: null },
        { id: 4, name: '买家确认', status: 'pending', timestamp: null },
        { id: 5, name: '确认对接', status: 'pending', timestamp: null }
      ],
      lastUpdated: new Date().toISOString(),
      isSeller: false,
      isBuyer: false,
      needType: '',
      productType: '',
      quantity: '',
      budgetRange: ''
    };
    
    // 保存初始数据
    localStorage.setItem('trackingData', JSON.stringify(currentTrackingData));
  }
  
  // 清空默认内容
  trackingPanel.innerHTML = '';
  
  // 创建进度条
  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');
  
  // 添加各个阶段
  currentTrackingData.stages.forEach(stage => {
    const stageElement = document.createElement('div');
    stageElement.classList.add('progress-stage', `status-${stage.status}`);
    stageElement.dataset.stageId = stage.id;
    
    const stageNumber = document.createElement('div');
    stageNumber.classList.add('stage-number');
    stageNumber.textContent = stage.id;
    
    const stageName = document.createElement('div');
    stageName.classList.add('stage-name');
    stageName.textContent = stage.name;
    
    stageElement.appendChild(stageNumber);
    stageElement.appendChild(stageName);
    
    // 点击阶段显示详情
    stageElement.addEventListener('click', () => showStageDetail(stage, currentTrackingData));
    
    progressBar.appendChild(stageElement);
    
    // 添加连接线（除了最后一个阶段）
    if (stage.id < currentTrackingData.stages.length) {
      const connector = document.createElement('div');
      connector.classList.add('stage-connector', `status-${stage.status}`);
      progressBar.appendChild(connector);
    }
  });
  
  trackingPanel.appendChild(progressBar);
  
  // 添加说明文字
  const statusInfo = document.createElement('div');
  statusInfo.classList.add('status-info');
  
  // 找到当前活跃的阶段
  const activeStage = currentTrackingData.stages.find(stage => stage.status === 'active');
  const stageName = activeStage ? activeStage.name : '准备中';
  
  // 计算最后更新时间
  const lastUpdateTime = getTimeDifference(new Date(currentTrackingData.lastUpdated), new Date());
  
  statusInfo.innerHTML = `当前状态：<span class="status-active">${stageName}</span> · 更新于 ${lastUpdateTime}`;
  trackingPanel.appendChild(statusInfo);
  
  // 添加进度概要
  const progressSummary = document.createElement('div');
  progressSummary.classList.add('progress-summary');
  
  // 根据用户身份显示不同的进度概要
  const isSeller = currentTrackingData.isSeller;
  const isBuyer = currentTrackingData.isBuyer;
  
  // 获取买卖需求类型
  const needTypeDisplay = currentTrackingData.needType ? currentTrackingData.needType : '等待确认';
  const productTypeDisplay = currentTrackingData.productType ? currentTrackingData.productType : '等待确认';
  
  let summaryHTML = '';
  if (isSeller) {
    summaryHTML = `
      <h4>出售信息摘要</h4>
      <ul>
        <li>商品类型: ${productTypeDisplay}</li>
        <li>库存数量: ${currentTrackingData.quantity || '等待确认'}</li>
        <li>对接进度: ${Math.round((getCompletedStages(currentTrackingData.stages) / 5) * 100)}%</li>
      </ul>
    `;
  } else if (isBuyer) {
    summaryHTML = `
      <h4>采购信息摘要</h4>
      <ul>
        <li>需求类型: ${needTypeDisplay}</li>
        <li>产品类型: ${productTypeDisplay}</li>
        <li>预算范围: ${currentTrackingData.budgetRange || '等待确认'}</li>
        <li>对接进度: ${Math.round((getCompletedStages(currentTrackingData.stages) / 5) * 100)}%</li>
      </ul>
    `;
  } else {
    summaryHTML = `
      <h4>对接信息摘要</h4>
      <ul>
        <li>请在聊天中说明您是需要出售还是采购</li>
        <li>对接进度: ${Math.round((getCompletedStages(currentTrackingData.stages) / 5) * 100)}%</li>
      </ul>
    `;
  }
  
  progressSummary.innerHTML = summaryHTML;
  trackingPanel.appendChild(progressSummary);
  
  // 添加刷新按钮
  const refreshButton = document.createElement('button');
  refreshButton.classList.add('refresh-tracking');
  refreshButton.textContent = '请求更新进度';
  refreshButton.addEventListener('click', function() {
    // 请求平台更新进度
    updateTrackingProgress();
    
    // 添加刷新动画
    this.classList.add('refreshing');
    // 更改按钮文本
    this.textContent = '正在请求平台确认...';
    setTimeout(() => {
      this.classList.remove('refreshing');
      this.textContent = '请求更新进度';
    }, 2000);
  });
  
  // 添加平台确认说明
  const confirmNote = document.createElement('div');
  confirmNote.classList.add('platform-note');
  confirmNote.innerHTML = '提示：所有进度更新需要平台确认后才能生效';
  
  trackingPanel.appendChild(refreshButton);
  trackingPanel.appendChild(confirmNote);
}

// 根据聊天内容更新对接进度
function updateTrackingFromChat(message, isSeller, isBuyer) {
  // 获取当前进度数据
  let trackingData = JSON.parse(localStorage.getItem('trackingData'));
  
  if (!trackingData) {
    // 如果没有数据，初始化默认数据
    trackingData = {
      currentStage: 1,
      stages: [
        { id: 1, name: '需求提交', status: 'pending', timestamp: new Date().toISOString() },
        { id: 2, name: '匹配库存', status: 'pending', timestamp: null },
        { id: 3, name: '卖家确认', status: 'pending', timestamp: null },
        { id: 4, name: '买家确认', status: 'pending', timestamp: null },
        { id: 5, name: '确认对接', status: 'pending', timestamp: null }
      ],
      lastUpdated: new Date().toISOString(),
      isSeller: false,
      isBuyer: false,
      needType: '',
      productType: '',
      quantity: '',
      budgetRange: ''
    };
  }
  
  // 更新买卖身份
  if (isSeller !== undefined) {
    trackingData.isSeller = isSeller;
  }
  
  if (isBuyer !== undefined) {
    trackingData.isBuyer = isBuyer;
  }
  
  // 处理阶段1：需求提交
  if (trackingData.stages[0].status !== 'completed') {
    // 只要有消息，就认为需求已提交
    trackingData.stages[0].status = 'completed';
    trackingData.stages[0].timestamp = new Date().toISOString();
    
    // 进入第二阶段
    trackingData.stages[1].status = 'active';
    trackingData.currentStage = 2;
  }
  
  // 提取产品类型信息
  const productTypes = ['牛仔', '丝绸', '棉麻', '羊毛', '尼龙', '涤纶'];
  for (const type of productTypes) {
    if (message.includes(type)) {
      trackingData.productType = type;
      break;
    }
  }
  
  // 提取需求类型
  if (message.includes('面料') || message.includes('布料') || message.includes('布')) {
    trackingData.needType = '面料';
  } else if (message.includes('服装') || message.includes('衣服') || message.includes('成衣')) {
    trackingData.needType = '服装';
  }
  
  // 提取数量信息
  const quantityMatch = message.match(/(\d+)([件条米吨个])/);
  if (quantityMatch) {
    trackingData.quantity = quantityMatch[0];
  }
  
  // 提取价格/预算信息
  if (message.includes('价格') || message.includes('多少钱') || message.includes('预算')) {
    const priceMatch = message.match(/(\d+)[-~到至](\d+)[元块]/);
    if (priceMatch) {
      trackingData.budgetRange = priceMatch[0];
    }
  }
  
  // 阶段2：匹配库存 - 根据关键词判断
  if (trackingData.currentStage === 2 && trackingData.stages[1].status === 'active') {
    // 当用户提供了具体的产品和需求类型时，进入到下一阶段
    if (trackingData.productType && trackingData.needType) {
      if (message.includes('匹配') || message.includes('库存') || message.includes('资源') || 
          message.includes('找到') || message.includes('有货') || containsSpecificProductInfo(message)) {
        trackingData.stages[1].status = 'completed';
        trackingData.stages[1].timestamp = new Date().toISOString();
        
        // 根据用户身份决定下一步
        if (trackingData.isSeller) {
          // 卖家寻找买家，进入到买家确认阶段
          trackingData.stages[3].status = 'active';
          trackingData.currentStage = 4;
        } else if (trackingData.isBuyer) {
          // 买家寻找卖家，进入到卖家确认阶段
          trackingData.stages[2].status = 'active';
          trackingData.currentStage = 3;
        }
      }
    }
  }
  
  // 阶段3：卖家确认
  if (trackingData.currentStage === 3 && trackingData.stages[2].status === 'active') {
    if (message.includes('卖家确认') || message.includes('供应商确认') || message.includes('已确认') || 
        message.includes('可以供应') || message.includes('有库存')) {
      trackingData.stages[2].status = 'completed';
      trackingData.stages[2].timestamp = new Date().toISOString();
      
      // 进入买家确认阶段
      trackingData.stages[3].status = 'active';
      trackingData.currentStage = 4;
    }
  }
  
  // 阶段4：买家确认
  if (trackingData.currentStage === 4 && trackingData.stages[3].status === 'active') {
    if (message.includes('买家确认') || message.includes('客户确认') || message.includes('确认购买') || 
        message.includes('接受') || message.includes('满意')) {
      trackingData.stages[3].status = 'completed';
      trackingData.stages[3].timestamp = new Date().toISOString();
      
      // 进入最终确认阶段
      trackingData.stages[4].status = 'active';
      trackingData.currentStage = 5;
    }
  }
  
  // 阶段5：确认对接
  if (trackingData.currentStage === 5 && trackingData.stages[4].status === 'active') {
    if (message.includes('交易成功') || message.includes('已对接') || message.includes('成交') || 
        message.includes('已完成') || message.includes('感谢合作')) {
      trackingData.stages[4].status = 'completed';
      trackingData.stages[4].timestamp = new Date().toISOString();
    }
  }
  
  // 更新最后更新时间
  trackingData.lastUpdated = new Date().toISOString();
  
  // 保存更新后的数据
  localStorage.setItem('trackingData', JSON.stringify(trackingData));
  
  // 重新初始化进度面板以显示最新状态
  initTrackingPanel();
}

// 显示阶段详细信息
function showStageDetail(stage, trackingData) {
  const wechatContact = '<strong>JJ1598929032</strong>';
  const modal = document.createElement('div');
  modal.classList.add('progress-modal');
  
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  
  // 添加关闭按钮
  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-modal');
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', function() {
    document.body.removeChild(modal);
  });
  
  // 阶段详情内容
  const stageContent = document.createElement('div');
  stageContent.classList.add('stage-detail');
  
  const stageTitle = document.createElement('h3');
  stageTitle.innerHTML = `阶段 ${stage.id}: ${stage.name} <span class="stage-status status-${stage.status}">${getStatusText(stage.status)}</span>`;
  
  const stageTimestamp = document.createElement('div');
  stageTimestamp.classList.add('stage-timestamp');
  if (stage.timestamp) {
    const date = new Date(stage.timestamp);
    stageTimestamp.textContent = `更新时间: ${formatDateTime(date)}`;
  } else {
    stageTimestamp.textContent = '尚未开始';
  }
  
  const stageDescription = document.createElement('p');
  let descriptionText = '';
  
  // 根据不同阶段和用户身份显示不同内容
  const isSeller = trackingData.isSeller;
  const isBuyer = trackingData.isBuyer;
  
  switch(stage.id) {
    case 1:
      if (stage.status === 'completed') {
        descriptionText = `您的${isSeller ? '出售' : isBuyer ? '采购' : ''}需求已成功提交！我们的系统正在进行初步分析，以便更好地匹配合适的${isSeller ? '买家' : '资源'}。如需补充具体要求或查询进度，请添加客服微信：${wechatContact}`;
      } else {
        descriptionText = `请在聊天框中说明您的${isSeller ? '出售' : isBuyer ? '采购' : '需求'}意向，系统将自动为您匹配${isSeller ? '买家' : '资源'}。您可以随时添加客服微信：${wechatContact} 获取帮助。`;
      }
      break;
    case 2:
      if (stage.status === 'completed') {
        descriptionText = `系统已成功为您匹配到符合要求的${isSeller ? '潜在买家' : '库存资源'}。现在进入${isSeller ? '买家' : '卖家'}确认阶段。如需了解匹配详情，请添加微信：${wechatContact}`;
      } else if (stage.status === 'active') {
        descriptionText = `系统正在根据您提供的要求匹配${isSeller ? '买家资源' : '库存'}。这个过程通常需要12小时内完成。如需加快进度或提供更详细的需求，请立即添加微信：${wechatContact}`;
      } else {
        descriptionText = `此阶段尚未开始。系统将在需求提交后自动为您匹配${isSeller ? '买家' : '库存资源'}。`;
      }
      break;
    case 3:
      if (stage.status === 'completed') {
        descriptionText = `卖家已确认库存有效，现在等待买家最终确认。如有任何问题，请添加微信：${wechatContact}`;
      } else if (stage.status === 'active') {
        descriptionText = `我们已找到符合要求的库存，正在等待卖家确认。通常会在24小时内得到回复。如想优先处理或了解更多详情，请添加微信：${wechatContact}`;
      } else {
        descriptionText = `此阶段尚未开始。系统将在匹配到合适库存后联系卖家确认。`;
      }
      break;
    case 4:
      if (stage.status === 'completed') {
        descriptionText = `买家已确认购买意向，现在进入最终确认阶段。请添加微信：${wechatContact} 完成交易细节确认。`;
      } else if (stage.status === 'active') {
        descriptionText = `卖家已确认库存有效，等待您的最终确认。为确保交易顺利进行，请添加微信：${wechatContact} 进行后续沟通`;
      } else {
        descriptionText = `此阶段尚未开始。系统将在卖家确认后联系买家最终确认。`;
      }
      break;
    case 5:
      if (stage.status === 'completed') {
        descriptionText = `恭喜！交易已成功对接。请通过微信：${wechatContact} 完成后续交易流程。`;
      } else if (stage.status === 'active') {
        descriptionText = `恭喜！双方已达成对接意向。为保障交易安全和顺利完成后续流程，请立即添加微信：${wechatContact} 获取详细指导`;
      } else {
        descriptionText = `此阶段尚未开始。系统将在买家确认后进入最终对接确认阶段。`;
      }
      break;
    default:
      descriptionText = `当前阶段状态更新中。如需及时了解最新进展，请添加客服微信：${wechatContact}`;
  }
  
  stageDescription.innerHTML = descriptionText;
  
  const nextStepsTitle = document.createElement('h4');
  nextStepsTitle.textContent = '下一步操作';
  
  const nextStepsList = document.createElement('ul');
  const nextSteps = getNextSteps(stage.id, stage.status, trackingData);
  
  nextSteps.forEach(step => {
    const listItem = document.createElement('li');
    listItem.innerHTML = step;
    nextStepsList.appendChild(listItem);
  });
  
  // 添加平台确认提示
  const platformConfirmNote = document.createElement('div');
  platformConfirmNote.classList.add('platform-confirmation-note');
  platformConfirmNote.innerHTML = `<i>注意：对接进度由平台根据实际情况确认更新，阶段进度无法手动修改。如需加速进度，请添加客服微信：${wechatContact}</i>`;
  
  stageContent.appendChild(stageTitle);
  stageContent.appendChild(stageTimestamp);
  stageContent.appendChild(stageDescription);
  stageContent.appendChild(nextStepsTitle);
  stageContent.appendChild(nextStepsList);
  stageContent.appendChild(platformConfirmNote);
  
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(stageContent);
  modal.appendChild(modalContent);
  
  document.body.appendChild(modal);
}

// 更新对接进度
function updateTrackingProgress() {
  let trackingData = JSON.parse(localStorage.getItem('trackingData'));
  
  if (!trackingData) return;
  
  // 获取当前活跃阶段
  let currentActiveIndex = trackingData.stages.findIndex(stage => stage.status === 'active');
  
  // 显示进度更新中消息
  showProgressUpdateMessage();
  
  // 模拟平台确认过程（实际环境中应通过后端API获取确认结果）
  setTimeout(() => {
    // 平台审核确认后，更新进度
    // 注意：在实际环境中，这个确认过程应该来自服务器
    const platformConfirmed = Math.random() > 0.5; // 模拟平台确认结果
    
    if (platformConfirmed && currentActiveIndex !== -1 && currentActiveIndex < trackingData.stages.length - 1) {
      // 当前阶段完成
      trackingData.stages[currentActiveIndex].status = 'completed';
      trackingData.stages[currentActiveIndex].timestamp = new Date().toISOString();
      
      // 下一阶段激活
      trackingData.stages[currentActiveIndex + 1].status = 'active';
      trackingData.currentStage = currentActiveIndex + 2; // +2是因为stage id从1开始
      
      // 显示成功消息
      showNotification("进度已更新", "平台已确认您的进度更新", "success");
    } else {
      // 平台未确认
      showNotification("进度更新等待中", "您的进度更新请求正在等待平台确认", "info");
    }
    
    // 随机更新其他信息
    if (!trackingData.productType && Math.random() > 0.7) {
      const products = ['牛仔', '丝绸', '棉麻', '羊毛'];
      trackingData.productType = products[Math.floor(Math.random() * products.length)];
    }
    
    if (!trackingData.needType && Math.random() > 0.7) {
      trackingData.needType = Math.random() > 0.5 ? '面料' : '服装';
    }
    
    if (!trackingData.quantity && trackingData.isSeller && Math.random() > 0.7) {
      const units = ['件', '米', '条'];
      trackingData.quantity = `${Math.floor(Math.random() * 1000) + 10}${units[Math.floor(Math.random() * units.length)]}`;
    }
    
    if (!trackingData.budgetRange && trackingData.isBuyer && Math.random() > 0.7) {
      const min = Math.floor(Math.random() * 500) + 50;
      const max = min + Math.floor(Math.random() * 500) + 50;
      trackingData.budgetRange = `${min}-${max}元`;
    }
    
    // 更新最后更新时间
    trackingData.lastUpdated = new Date().toISOString();
    
    // 保存更新后的数据
    localStorage.setItem('trackingData', JSON.stringify(trackingData));
    
    // 重新初始化进度面板
    initTrackingPanel();
  }, 2000); // 模拟平台确认延迟
}

// 显示进度更新中的消息
function showProgressUpdateMessage() {
  const notification = document.createElement('div');
  notification.classList.add('progress-notification', 'updating');
  notification.innerHTML = `
    <div class="notification-icon">
      <div class="loading-spinner"></div>
    </div>
    <div class="notification-content">
      <h4>进度更新请求已提交</h4>
      <p>正在等待平台确认，这可能需要一些时间...</p>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // 1.5秒后移除通知
  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 500);
  }, 1500);
}

// 显示通知
function showNotification(title, message, type = "info") {
  const notification = document.createElement('div');
  notification.classList.add('progress-notification', type);
  
  let icon = '';
  if (type === 'success') {
    icon = '<div class="notification-icon success">✓</div>';
  } else if (type === 'error') {
    icon = '<div class="notification-icon error">✗</div>';
  } else {
    icon = '<div class="notification-icon info">i</div>';
  }
  
  notification.innerHTML = `
    ${icon}
    <div class="notification-content">
      <h4>${title}</h4>
      <p>${message}</p>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // 3秒后移除通知
  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 500);
  }, 3000);
}

// 获取状态文本描述
function getStatusText(status) {
  switch(status) {
    case 'pending': return '等待中';
    case 'active': return '进行中';
    case 'completed': return '已完成';
    default: return '未知状态';
  }
}

// 格式化日期时间
function formatDateTime(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// 获取时间差异的友好描述
function getTimeDifference(oldDate, newDate) {
  const diffMs = newDate - oldDate;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  
  if (diffSec < 60) {
    return '刚刚';
  } else if (diffMin < 60) {
    return `${diffMin}分钟前`;
  } else if (diffHour < 24) {
    return `${diffHour}小时前`;
  } else if (diffDay < 30) {
    return `${diffDay}天前`;
  } else {
    const month = String(oldDate.getMonth() + 1).padStart(2, '0');
    const day = String(oldDate.getDate()).padStart(2, '0');
    return `${month}-${day}`;
  }
}

// 获取已完成阶段的数量
function getCompletedStages(stages) {
  return stages.filter(stage => stage.status === 'completed').length;
}

// 判断消息是否包含具体产品信息
function containsSpecificProductInfo(message) {
  // 匹配具体的产品描述
  const patterns = [
    /\d+[件条米吨]/,  // 匹配数量单位
    /款式|型号|规格|尺寸|颜色|成分/,  // 匹配产品属性
    /牌|品牌|厂家|生产商/,  // 匹配品牌信息
    /价格|报价|元\/[米件条]/  // 匹配价格信息
  ];
  
  return patterns.some(pattern => pattern.test(message));
}

// 根据不同阶段和用户身份获取下一步操作指引
function getNextSteps(stageId, stageStatus, trackingData) {
  const wechatContact = '<strong>JJ1598929032</strong>';
  const isSeller = trackingData.isSeller;
  const isBuyer = trackingData.isBuyer;
  
  // 如果阶段已完成，返回空步骤列表
  if (stageStatus === 'completed') {
    return [`此阶段已完成，请继续推进下一阶段`, `如有问题请添加微信：${wechatContact} 咨询`];
  }
  
  // 如果阶段未开始，返回等待指引
  if (stageStatus === 'pending') {
    return [`请等待前序阶段完成后再进行此阶段`, `如需加速进度，请添加微信：${wechatContact}`];
  }
  
  // 阶段处于活跃状态，根据不同情况返回指引
  if (isSeller) {
    switch(stageId) {
      case 1:
        return [
          `详细描述您要出售的产品类型、数量和期望价格`,
          `提供产品图片或详细规格说明`,
          `添加微信：${wechatContact} 加速对接进程`
        ];
      case 2:
        return [
          `耐心等待系统为您匹配潜在买家`,
          `完善您的产品细节信息以提高匹配率`,
          `添加微信：${wechatContact} 获取实时匹配进度`
        ];
      case 3:
        return [
          `准备好详细的产品说明和价格资料`,
          `确认您的发货能力和库存情况`,
          `添加微信：${wechatContact} 了解买家需求细节`
        ];
      case 4:
        return [
          `准备详细的产品资料和报价单`,
          `确认您的仓库库存和物流配送方案`,
          `添加微信：${wechatContact} 与买家直接沟通`
        ];
      case 5:
        return [
          `确认交易细节和付款方式`,
          `准备产品发货和售后服务方案`,
          `必须添加微信：${wechatContact} 完成最终交易`
        ];
      default:
        return [`添加微信：${wechatContact} 获取指导`];
    }
  } else if (isBuyer) {
    switch(stageId) {
      case 1:
        return [
          `详细描述您需要的产品类型、数量和预算`,
          `说明您对产品质量和规格的要求`,
          `添加微信：${wechatContact} 加速对接进程`
        ];
      case 2:
        return [
          `耐心等待系统为您匹配合适库存`,
          `完善您的需求细节以提高匹配精准度`,
          `添加微信：${wechatContact} 获取实时匹配进度`
        ];
      case 3:
        return [
          `准备好与卖家沟通的具体问题`,
          `确认您的采购预算和付款方式`,
          `添加微信：${wechatContact} 了解卖家确认进度`
        ];
      case 4:
        return [
          `仔细评估卖家提供的产品信息`,
          `确认产品是否满足您的需求`,
          `添加微信：${wechatContact} 与卖家直接沟通`
        ];
      case 5:
        return [
          `确认交易细节和收货地址`,
          `准备付款和验收产品`,
          `必须添加微信：${wechatContact} 完成最终交易`
        ];
      default:
        return [`添加微信：${wechatContact} 获取指导`];
    }
  } else {
    // 用户身份未确定
    switch(stageId) {
      case 1:
        return [
          `请在聊天框中说明您是希望出售还是采购`,
          `详细描述您的需求或产品信息`,
          `添加微信：${wechatContact} 获取专业指导`
        ];
      default:
        return [
          `请先明确您的身份（买家/卖家）`,
          `添加微信：${wechatContact} 获取帮助`
        ];
    }
  }
}

// 为动画添加稳定性修复
function animateStats() {
  const statValues = document.querySelectorAll('.stat-value');
  
  statValues.forEach(statValue => {
    const targetValue = parseInt(statValue.textContent, 10);
    let currentValue = 0;
    const duration = 2000;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const stepValue = targetValue / totalSteps;
    
    function updateValue() {
      currentValue += stepValue;
      
      if (currentValue < targetValue) {
        statValue.textContent = Math.floor(currentValue);
        requestAnimationFrame(updateValue);
      } else {
        statValue.textContent = targetValue;
        
        // 添加以防止数字变化导致布局移动
        statValue.style.minWidth = statValue.offsetWidth + 'px';
      }
    }
    
    // 当元素进入视口时启动动画
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateValue();
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(statValue);
  });
}

// 导航栏初始化与滚动效果
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  
  // 滚动监听
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // 导航菜单项点击激活效果
  const navLinks = document.querySelectorAll('.main-nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // 获取目标部分的ID
      const targetId = this.getAttribute('href');
      
      // 仅对页内锚点链接进行处理
      if (targetId.startsWith('#')) {
        e.preventDefault();
        
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          // 平滑滚动到目标部分
          window.scrollTo({
            top: targetSection.offsetTop - 70, // 减去导航栏高度
            behavior: 'smooth'
          });
          
          // 更新URL锚点，但不跳转
          history.pushState(null, null, targetId);
          
          // 移除所有active类
          navLinks.forEach(item => {
            item.parentElement.classList.remove('active');
          });
          
          // 为当前点击项添加active类
          this.parentElement.classList.add('active');
        }
      }
    });
  });
}

// 添加滚动监听，高亮当前视图中的部分
function initScrollSpy() {
  // 获取所有主要部分
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a');
  
  // 添加滚动监听
  window.addEventListener('scroll', function() {
    // 当前滚动位置
    const scrollPosition = window.scrollY + 100; // 添加一些偏移以提前激活
    
    // 检查每个部分的位置
    sections.forEach(section => {
      // 获取部分的顶部和底部位置
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      // 检查当前滚动位置是否在该部分
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        // 找到对应的导航链接
        const targetId = '#' + section.getAttribute('id');
        
        // 移除所有active类
        navLinks.forEach(link => {
          link.parentElement.classList.remove('active');
          
          // 为当前部分的链接添加active类
          if (link.getAttribute('href') === targetId) {
            link.parentElement.classList.add('active');
          }
        });
      }
    });
  });
}

// 平滑滚动效果
function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      
      if (target) {
        e.preventDefault();
        
        window.scrollTo({
          top: target.offsetTop - 70, // 减去导航栏高度
          behavior: 'smooth'
        });
        
        // 更新URL锚点，但不跳转
        history.pushState(null, null, targetId);
      }
    });
  });
} 

// 初始化项目档案馆交互
function initProjectArchive() {
  // 视图切换
  const viewBtns = document.querySelectorAll('.view-btn');
  const archiveViews = document.querySelectorAll('.archive-view');
  
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 移除所有活跃状态
      viewBtns.forEach(b => b.classList.remove('active'));
      archiveViews.forEach(view => view.classList.remove('active'));
      
      // 添加活跃状态
      btn.classList.add('active');
      const viewType = btn.getAttribute('data-view');
      document.querySelector(`.${viewType}-view`).classList.add('active');
    });
  });
  
  // 模拟加载时间线数据
  setTimeout(() => {
    loadTimelineData();
  }, 1500);
  
  // 模拟加载资源数据
  setTimeout(() => {
    loadResourcesData();
  }, 2000);
  
  // 初始化设计DNA模态框
  initDesignDnaModal();
  
  // 初始化对比拖放功能
  initComparisonDropzones();
}

// 加载时间线数据
function loadTimelineData() {
  const timelineContainer = document.getElementById('spiral-timeline');
  if (!timelineContainer) return;
  
  // 清除加载动画
  timelineContainer.innerHTML = '';
  
  // 创建螺旋时间轴
  const projects = [
    { id: 1, year: 2018, title: '牛仔外套改造', image: 'images/projects/project-1.jpg' },
    { id: 2, year: 2019, title: '旧西装重构', image: 'images/projects/project-2.jpg' },
    { id: 3, year: 2020, title: '丝巾连衣裙', image: 'images/projects/project-3.jpg' },
    { id: 4, year: 2021, title: '条纹衬衫变身', image: 'images/projects/project-4.jpg' },
    { id: 5, year: 2022, title: '复古毛衣再造', image: 'images/projects/project-5.jpg' },
    { id: 6, year: 2023, title: '羊毛格纹大衣', image: 'images/projects/project-6.jpg' }
  ];
  
  // 创建螺旋轨道
  const spiralTrack = document.createElement('div');
  spiralTrack.className = 'spiral-track';
  timelineContainer.appendChild(spiralTrack);
  
  // 添加时间节点
  projects.forEach((project, index) => {
    const angle = (index / projects.length) * 2 * Math.PI;
    const radius = 200 - (index * 20);
    const x = 300 + radius * Math.cos(angle);
    const y = 300 + radius * Math.sin(angle);
    
    const projectNode = document.createElement('div');
    projectNode.className = 'project-node';
    projectNode.setAttribute('data-project-id', project.id);
    projectNode.style.left = `${x}px`;
    projectNode.style.top = `${y}px`;
    
    const projectYear = document.createElement('span');
    projectYear.className = 'project-year';
    projectYear.textContent = project.year;
    
    const projectImage = document.createElement('div');
    projectImage.className = 'project-image';
    projectImage.style.backgroundImage = `url(${project.image})`;
    
    projectNode.appendChild(projectYear);
    projectNode.appendChild(projectImage);
    
    // 添加点击事件，打开设计DNA模态框
    projectNode.addEventListener('click', () => {
      openDesignDnaModal(project);
    });
    
    timelineContainer.appendChild(projectNode);
  });
  
  // 添加连接线
  for (let i = 0; i < projects.length - 1; i++) {
    const startAngle = (i / projects.length) * 2 * Math.PI;
    const endAngle = ((i + 1) / projects.length) * 2 * Math.PI;
    const startRadius = 200 - (i * 20);
    const endRadius = 200 - ((i + 1) * 20);
    
    const startX = 300 + startRadius * Math.cos(startAngle);
    const startY = 300 + startRadius * Math.sin(startAngle);
    const endX = 300 + endRadius * Math.cos(endAngle);
    const endY = 300 + endRadius * Math.sin(endAngle);
    
    const connector = document.createElement('div');
    connector.className = 'connector';
    
    const length = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
    const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
    
    connector.style.width = `${length}px`;
    connector.style.left = `${startX}px`;
    connector.style.top = `${startY}px`;
    connector.style.transform = `rotate(${angle}deg)`;
    
    timelineContainer.appendChild(connector);
  }
  
  // 添加CSS
  const style = document.createElement('style');
  style.textContent = `
    .spiral-track {
      position: absolute;
      width: 600px;
      height: 600px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    
    .project-node {
      position: absolute;
      width: 60px;
      height: 60px;
      margin-left: -30px;
      margin-top: -30px;
      border-radius: 50%;
      background-color: white;
      box-shadow: var(--shadow-small);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 2;
    }
    
    .project-node:hover {
      transform: scale(1.2);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      z-index: 3;
    }
    
    .project-year {
      font-size: 0.7rem;
      font-weight: bold;
      color: var(--color-accent);
    }
    
    .project-image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      margin-top: 3px;
    }
    
    .connector {
      position: absolute;
      height: 2px;
      background: linear-gradient(to right, var(--color-gold), var(--color-accent));
      transform-origin: left center;
      z-index: 1;
    }
  `;
  document.head.appendChild(style);
}

// 初始化设计DNA模态框
function initDesignDnaModal() {
  const modal = document.getElementById('design-dna-modal');
  if (!modal) return;
  
  // 关闭按钮
  const closeBtn = modal.querySelector('.close-modal');
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });
  
  // 点击模态框外部关闭
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

// 打开设计DNA模态框
function openDesignDnaModal(project) {
  const modal = document.getElementById('design-dna-modal');
  if (!modal) return;
  
  // 填充项目信息
  document.getElementById('project-title').textContent = project.title;
  document.getElementById('project-image').src = project.image;
  document.getElementById('project-year').textContent = project.year;
  
  // 模拟设计师信息
  document.getElementById('project-designer').textContent = getRandomDesigner();
  
  // 模拟材料信息
  document.getElementById('project-material').textContent = getRandomMaterial();
  
  // 生成关键词云
  generateKeywordCloud();
  
  // 生成技术继承关系图
  generateTechniqueInheritance();
  
  // 生成项目统计图表
  generateProjectCharts();
  
  // 显示模态框
  modal.classList.add('active');
}

// 生成关键词云
function generateKeywordCloud() {
  const keywordCloud = document.getElementById('inspiration-keywords');
  if (!keywordCloud) return;
  
  // 清除现有内容
  keywordCloud.innerHTML = '';
  
  // 关键词样本
  const keywords = [
    '复古', '可持续', '未来主义', '都市', '民族风', 
    '极简', '浪漫', '工装', '休闲', '优雅', 
    '街头', '复古运动', '摩登', '生态', '手工艺'
  ];
  
  // 随机选择5-10个关键词
  const selectedCount = 5 + Math.floor(Math.random() * 6);
  const selectedKeywords = [];
  
  while (selectedKeywords.length < selectedCount) {
    const randomIndex = Math.floor(Math.random() * keywords.length);
    const keyword = keywords[randomIndex];
    
    if (!selectedKeywords.includes(keyword)) {
      selectedKeywords.push(keyword);
    }
  }
  
  // 创建关键词元素
  selectedKeywords.forEach(keyword => {
    const keywordElement = document.createElement('span');
    keywordElement.className = 'keyword';
    keywordElement.textContent = keyword;
    
    // 随机字体大小
    const fontSize = 0.8 + Math.random() * 0.7;
    keywordElement.style.fontSize = `${fontSize}rem`;
    
    keywordCloud.appendChild(keywordElement);
  });
}

// 生成技术继承关系图
function generateTechniqueInheritance() {
  const inheritanceDiagram = document.getElementById('technique-diagram');
  if (!inheritanceDiagram) return;
  
  // 这里需要引入一个可视化库来创建继承关系图
  // 例如D3.js或ECharts
  // 为了简化，这里仅显示一个占位消息
  
  inheritanceDiagram.innerHTML = `
    <div style="text-align: center; padding: 50px 0;">
      <i class="fas fa-project-diagram" style="font-size: 3rem; color: var(--color-accent); opacity: 0.7;"></i>
      <p style="margin-top: 15px; color: var(--color-primary); opacity: 0.7;">技术继承关系图</p>
    </div>
  `;
}

// 生成项目统计图表
function generateProjectCharts() {
  const materialChart = document.getElementById('material-chart');
  const timeChart = document.getElementById('time-chart');
  
  if (!materialChart || !timeChart) return;
  
  // 这里需要引入一个图表库来创建可视化
  // 例如Chart.js或ECharts
  // 为了简化，这里仅显示占位消息
  
  materialChart.innerHTML = `
    <div style="text-align: center; padding: 50px 0;">
      <i class="fas fa-chart-pie" style="font-size: 2rem; color: var(--color-accent); opacity: 0.7;"></i>
      <p style="margin-top: 15px; color: var(--color-primary); opacity: 0.7;">材料成本分析图表</p>
    </div>
  `;
  
  timeChart.innerHTML = `
    <div style="text-align: center; padding: 50px 0;">
      <i class="fas fa-chart-bar" style="font-size: 2rem; color: var(--color-accent); opacity: 0.7;"></i>
      <p style="margin-top: 15px; color: var(--color-primary); opacity: 0.7;">工时热力分布图</p>
    </div>
  `;
}

// 初始化对比研究拖放区
function initComparisonDropzones() {
  const dropzoneLeft = document.getElementById('dropzone-left');
  const dropzoneRight = document.getElementById('dropzone-right');
  const compareBtn = document.querySelector('.compare-btn');
  
  if (!dropzoneLeft || !dropzoneRight || !compareBtn) return;
  
  // 模拟拖放功能
  // 在实际实现中，需要使用HTML5拖放API
  
  let leftProject = null;
  let rightProject = null;
  
  dropzoneLeft.addEventListener('click', () => {
    // 模拟选择项目
    leftProject = {
      id: 1,
      title: '牛仔外套改造',
      year: 2018,
      image: 'images/projects/project-1.jpg'
    };
    
    // 更新UI
    dropzoneLeft.innerHTML = `
      <div class="selected-project">
        <img src="${leftProject.image}" alt="${leftProject.title}">
        <h4>${leftProject.title}</h4>
        <span>${leftProject.year}</span>
      </div>
    `;
    
    // 检查是否可以比较
    checkCompareStatus();
  });
  
  dropzoneRight.addEventListener('click', () => {
    // 模拟选择项目
    rightProject = {
      id: 5,
      title: '复古毛衣再造',
      year: 2022,
      image: 'images/projects/project-5.jpg'
    };
    
    // 更新UI
    dropzoneRight.innerHTML = `
      <div class="selected-project">
        <img src="${rightProject.image}" alt="${rightProject.title}">
        <h4>${rightProject.title}</h4>
        <span>${rightProject.year}</span>
      </div>
    `;
    
    // 检查是否可以比较
    checkCompareStatus();
  });
  
  compareBtn.addEventListener('click', () => {
    if (leftProject && rightProject) {
      generateComparisonResults(leftProject, rightProject);
    }
  });
  
  // 检查比较按钮状态
  function checkCompareStatus() {
    if (leftProject && rightProject) {
      compareBtn.disabled = false;
    } else {
      compareBtn.disabled = true;
    }
  }
  
  // 添加CSS
  const style = document.createElement('style');
  style.textContent = `
    .selected-project {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    
    .selected-project img {
      width: 150px;
      height: 150px;
      border-radius: 10px;
      object-fit: cover;
      box-shadow: var(--shadow-small);
      margin-bottom: 15px;
    }
    
    .selected-project h4 {
      margin: 0 0 5px;
      color: var(--color-primary);
      font-size: 1.1rem;
    }
    
    .selected-project span {
      color: var(--color-accent);
      font-size: 0.9rem;
    }
  `;
  document.head.appendChild(style);
}

// 生成对比结果
function generateComparisonResults(leftProject, rightProject) {
  const resultsContainer = document.getElementById('comparison-results');
  if (!resultsContainer) return;
  
  // 清除占位内容
  resultsContainer.innerHTML = `
    <h4>对比分析结果: ${leftProject.title} vs ${rightProject.title}</h4>
    
    <div class="comparison-charts">
      <div class="comparison-chart">
        <h5>材料成本对比</h5>
        <div id="cost-comparison-chart"></div>
      </div>
      
      <div class="comparison-chart">
        <h5>工时热力对比</h5>
        <div id="time-comparison-chart"></div>
      </div>
    </div>
    
    <div class="comparison-summary">
      <h5>差异总结</h5>
      <ul>
        <li><strong>材料使用:</strong> ${rightProject.title}使用的可持续材料比例高出23%</li>
        <li><strong>制作难度:</strong> ${leftProject.title}的总体工时少30%，适合初学者</li>
        <li><strong>技术迭代:</strong> ${rightProject.title}采用了3种新型接缝技术</li>
        <li><strong>设计灵感:</strong> 两个项目分别体现了街头风格和复古风格的碰撞</li>
      </ul>
    </div>
  `;
  
  // 添加CSS
  const style = document.createElement('style');
  style.textContent = `
    .comparison-charts {
      display: flex;
      gap: 20px;
      margin: 25px 0;
    }
    
    .comparison-chart {
      flex: 1;
      background-color: rgba(250, 249, 246, 0.5);
      border-radius: 10px;
      padding: 20px;
      box-shadow: var(--shadow-small);
    }
    
    .comparison-chart h5 {
      margin: 0 0 15px;
      color: var(--color-primary);
      font-size: 1.1rem;
    }
    
    #cost-comparison-chart, #time-comparison-chart {
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .comparison-summary {
      background-color: rgba(250, 249, 246, 0.5);
      border-radius: 10px;
      padding: 20px;
      box-shadow: var(--shadow-small);
    }
    
    .comparison-summary h5 {
      margin: 0 0 15px;
      color: var(--color-primary);
      font-size: 1.1rem;
    }
    
    .comparison-summary ul {
      margin: 0;
      padding-left: 20px;
    }
    
    .comparison-summary li {
      margin-bottom: 10px;
      color: var(--color-primary);
    }
  `;
  document.head.appendChild(style);
  
  // 模拟图表
  const costChart = document.getElementById('cost-comparison-chart');
  const timeChart = document.getElementById('time-comparison-chart');
  
  costChart.innerHTML = `<i class="fas fa-chart-bar" style="font-size: 3rem; color: var(--color-accent); opacity: 0.7;"></i>`;
  timeChart.innerHTML = `<i class="fas fa-fire" style="font-size: 3rem; color: var(--color-accent); opacity: 0.7;"></i>`;
}

// 加载资源包数据
function loadResourcesData() {
  const resourcesGrid = document.getElementById('resources-grid');
  if (!resourcesGrid) return;
  
  // 清除加载动画
  resourcesGrid.innerHTML = '';
  
  // 资源包数据
  const resources = [
    {
      id: 1,
      title: '牛仔外套改造套件',
      preview: 'images/resources/resource-1.jpg',
      designer: '李明',
      date: '2023-05-15',
      description: '完整的牛仔外套改造方案，包含所有必要的设计图纸和制作指南。'
    },
    {
      id: 2,
      title: '旧西装重构全案',
      preview: 'images/resources/resource-2.jpg',
      designer: '张华',
      date: '2023-03-22',
      description: '将旧西装改造成时尚单品的详细方案，适合中级改造爱好者。'
    },
    {
      id: 3,
      title: '丝巾连衣裙设计',
      preview: 'images/resources/resource-3.jpg',
      designer: '王菲',
      date: '2022-11-09',
      description: '利用旧丝巾创作连衣裙的创新设计，包含分步骤教程和参数设置。'
    },
    {
      id: 4,
      title: '条纹衬衫变身计划',
      preview: 'images/resources/resource-4.jpg',
      designer: '赵小明',
      date: '2022-08-30',
      description: '旧条纹衬衫的多种改造方案合集，含裁剪模板和缝纫指南。'
    }
  ];
  
  // 创建资源卡片
  resources.forEach(resource => {
    const resourceCard = document.createElement('div');
    resourceCard.className = 'resource-card';
    
    resourceCard.innerHTML = `
      <div class="resource-preview">
        <img src="${resource.preview}" alt="${resource.title}">
      </div>
      <div class="resource-info">
        <h5>${resource.title}</h5>
        <div class="resource-meta">
          <span>设计师: ${resource.designer}</span>
          <span>发布: ${resource.date}</span>
        </div>
        <p class="resource-desc">${resource.description}</p>
        <div class="resource-downloads">
          <a href="#" class="download-option">设计图</a>
          <a href="#" class="download-option">裁剪模板</a>
          <a href="#" class="download-option">机器参数</a>
        </div>
      </div>
    `;
    
    resourcesGrid.appendChild(resourceCard);
  });
}

// 初始化灵感孵化器
function initInspirationIncubator() {
  // 随机挑战生成器
  initChallengeGenerator();
  
  // AI灵感助手
  initAiAssistant();
}

// 初始化随机挑战生成器
function initChallengeGenerator() {
  const refreshBtn = document.getElementById('refresh-challenge');
  const acceptBtn = document.getElementById('accept-challenge');
  
  if (!refreshBtn || !acceptBtn) return;
  
  // 初始生成挑战
  generateRandomChallenge();
  
  // 刷新按钮点击事件
  refreshBtn.addEventListener('click', () => {
    refreshBtn.classList.add('refreshing');
    
    setTimeout(() => {
      generateRandomChallenge();
      refreshBtn.classList.remove('refreshing');
    }, 500);
  });
  
  // 接受挑战按钮点击事件
  acceptBtn.addEventListener('click', () => {
    alert('恭喜您接受挑战！您的创意灵感包已加入到您的项目中。');
  });
}

// 生成随机挑战
function generateRandomChallenge() {
  // 基础材料选项
  const materials = [
    '旧牛仔裤', '丝绸衬衫', '棉质T恤', '亚麻外套', 
    '羊毛毛衣', '针织开衫', '皮夹克', '格子围巾'
  ];
  
  // 限制条件选项
  const constraints = [
    '仅允许使用红色缝线', '不可使用裁剪', '只使用三种缝纫技术', 
    '加入至少一种环保材料', '保留原有口袋设计', '不使用拉链'
  ];
  
  // 目标风格选项
  const styles = [
    '赛博朋克婚礼服', '复古学院风', '日式极简主义', 
    '工业朋克风格', '浪漫田园风', '都市机能风'
  ];
  
  // 随机选择
  const randomMaterial = materials[Math.floor(Math.random() * materials.length)];
  const randomConstraint = constraints[Math.floor(Math.random() * constraints.length)];
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];
  
  // 更新界面
  document.getElementById('challenge-material').textContent = randomMaterial;
  document.getElementById('challenge-constraint').textContent = randomConstraint;
  document.getElementById('challenge-style').textContent = randomStyle;
}

// 处理解构实验室下拉菜单项的点击事件
function initWorkshopNavigation() {
  // 获取所有导航下拉菜单项
  const dropdownItems = document.querySelectorAll('.nav-dropdown .dropdown-item');
  
  // 为每个下拉菜单项添加点击事件
  dropdownItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      // 获取目标部分ID
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // 计算目标位置，考虑导航栏高度
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        // 平滑滚动到目标位置
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // 更新URL
        history.pushState(null, null, targetId);
        
        // 高亮激活的部分
        highlightActiveSection(targetId.substring(1));
      }
    });
  });
}

function highlightActiveSection(sectionId) {
  // 移除所有导航项的活跃状态
  const navItems = document.querySelectorAll('.main-nav li');
  navItems.forEach(item => item.classList.remove('active'));
  
  // 查找并激活对应的部分
  const targetSection = document.getElementById(sectionId);
  
  if (targetSection) {
    // 确定目标部分属于哪个主要部分
    let mainSection;
    
    if (targetSection.closest('#workshop')) {
      mainSection = 'workshop';
    } else if (targetSection.closest('#community')) {
      mainSection = 'community';
    } else {
      mainSection = sectionId;
    }
    
    // 激活相应的导航项
    const activeNavItem = document.querySelector(`.main-nav li a[href="#${mainSection}"]`);
    if (activeNavItem) {
      activeNavItem.closest('li').classList.add('active');
    }
  }
}

// 给材质图书馆、作品档案馆和灵感孵化器添加ID
function addWorkshopSectionIds() {
  // 为解构实验室中的重要部分添加ID
  const materialLibrary = document.querySelector('.material-library');
  const arScanner = document.querySelector('.ar-scanner');
  const projectArchive = document.querySelector('.project-archive');
  const inspirationIncubator = document.querySelector('.inspiration-incubator');
  
  if (materialLibrary) materialLibrary.id = 'material-library';
  if (arScanner) arScanner.id = 'ar-scanner';
  if (projectArchive) projectArchive.id = 'project-archive';
  if (inspirationIncubator) inspirationIncubator.id = 'inspiration-incubator';
}

// 为纤维会议添加区域IDs
function addCommunityModuleIds() {
  // 为材料漂流岛添加ID
  const materialIslandElement = document.querySelector('.material-island');
  if (materialIslandElement) {
    materialIslandElement.id = 'material-island';
  }
  
  // 为改造者联盟添加ID
  const makersAllianceElement = document.querySelector('.makers-alliance');
  if (makersAllianceElement) {
    makersAllianceElement.id = 'makers-alliance';
  }
  
  // 为废材重生擂台添加ID
  const rebirthArenaElement = document.querySelector('.rebirth-arena');
  if (rebirthArenaElement) {
    rebirthArenaElement.id = 'rebirth-arena';
  }
  
  // 为记忆编织站添加ID
  const memoryStationElement = document.querySelector('.memory-station');
  if (memoryStationElement) {
    memoryStationElement.id = 'memory-station';
  }
  
  // 为碳迹平衡池添加ID
  const carbonPoolElement = document.querySelector('.carbon-pool');
  if (carbonPoolElement) {
    const carbonBalanceElement = carbonPoolElement.closest('.module-card');
    if (carbonBalanceElement) {
      carbonBalanceElement.id = 'carbon-balance';
    }
  }
  
  // 为改造基因库添加ID
  const geneLibraryElement = document.querySelector('.gene-library');
  if (geneLibraryElement) {
    const geneLibraryParent = geneLibraryElement.closest('.module-card');
    if (geneLibraryParent) {
      geneLibraryParent.id = 'gene-library';
    }
  }
  
  // 为虚实共生市集添加ID
  const virtualMarketElement = document.querySelector('.virtual-market');
  if (virtualMarketElement) {
    const virtualMarketParent = virtualMarketElement.closest('.module-card');
    if (virtualMarketParent) {
      virtualMarketParent.id = 'virtual-market';
    }
  }
  
  // 为纠纷调解中心添加ID
  const disputeCenterElement = document.querySelector('.dispute-center');
  if (disputeCenterElement) {
    const disputeCenterParent = disputeCenterElement.closest('.module-card');
    if (disputeCenterParent) {
      disputeCenterParent.id = 'dispute-center';
    }
  }
}

// 纤维会议模块初始化
function initCommunitySection() {
  // 初始化材料漂流岛
  initMaterialIsland();
  
  // 初始化改造者联盟
  initMakersAlliance();
  
  // 初始化废材重生擂台
  initRebirthArena();
  
  // 初始化记忆编织站
  initMemoryStation();
  
  // 初始化碳迹平衡池和其他模块
  initOtherModules();
  
  // 初始化虚实共生市集
  initVirtualMarket();
  
  // 初始化纠纷调解中心
  initDisputeCenter();
}

// 初始化虚实共生市集
function initVirtualMarket() {
  const communitySection = document.querySelector('.community .section-container');
  if (!communitySection) return;
  
  // 检查是否已经存在虚实共生市集模块
  if (document.querySelector('.virtual-market')) return;
  
  // 创建虚实共生市集模块
  const virtualMarketModule = document.createElement('div');
  virtualMarketModule.classList.add('community-module', 'virtual-market');
  virtualMarketModule.id = 'virtual-market';
  
  // 设置模块内容
  virtualMarketModule.innerHTML = `
    <h3 class="subsection-title">虚实共生市集</h3>
    <p class="subsection-description">连接线上线下的可持续材料交易平台，促进资源共享与循环利用</p>
    <div class="module-content">
      <!-- 此处添加市集内容 -->
      <div class="coming-soon">
        <i class="fas fa-store"></i>
        <p>市集即将开放，敬请期待！</p>
      </div>
    </div>
  `;
  
  // 添加到社区部分
  communitySection.appendChild(virtualMarketModule);
}

// 初始化纠纷调解中心
function initDisputeCenter() {
  const communitySection = document.querySelector('.community .section-container');
  if (!communitySection) return;
  
  // 检查是否已经存在纠纷调解中心模块
  if (document.querySelector('.dispute-center')) return;
  
  // 创建纠纷调解中心模块
  const disputeCenterModule = document.createElement('div');
  disputeCenterModule.classList.add('community-module', 'dispute-center');
  disputeCenterModule.id = 'dispute-center';
  
  // 设置模块内容
  disputeCenterModule.innerHTML = `
    <h3 class="subsection-title">纠纷调解中心</h3>
    <p class="subsection-description">公平公正的纠纷解决机制，保障社区交易与合作的健康发展</p>
    <div class="module-content">
      <!-- 此处添加调解中心内容 -->
      <div class="coming-soon">
        <i class="fas fa-balance-scale"></i>
        <p>调解中心即将开放，敬请期待！</p>
      </div>
    </div>
  `;
  
  // 添加到社区部分
  communitySection.appendChild(disputeCenterModule);
}

// 材料漂流岛交互效果
function initMaterialIsland() {
  // 护照查看更多交互
  const viewMoreBtn = document.querySelector('.view-more');
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', function() {
      // 模拟打开完整历史页面或弹窗
      alert('查看完整历史功能即将上线');
    });
  }
  
  // AR扫描按钮交互
  const arScanBtn = document.querySelector('.ar-scan-button');
  if (arScanBtn) {
    arScanBtn.addEventListener('click', function() {
      // 模拟打开相机扫描界面
      alert('AR扫描功能即将上线，敬请期待');
    });
  }
  
  // AR控制按钮交互
  const arControls = document.querySelectorAll('.ar-btn');
  if (arControls.length) {
    arControls.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const action = this.getAttribute('aria-label');
        console.log(`AR ${action} 操作被触发`);
        
        // 根据不同操作添加特定效果
        const arFabric = document.querySelector('.ar-fabric');
        if (arFabric) {
          switch(action) {
            case '旋转':
              arFabric.style.transform = 'rotate(45deg)';
              setTimeout(() => {
                arFabric.style.transform = '';
              }, 1000);
              break;
            case '剪裁':
              arFabric.style.clipPath = 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)';
              setTimeout(() => {
                arFabric.style.clipPath = '';
              }, 1000);
              break;
            case '缩放':
              arFabric.style.transform = 'scale(1.2)';
              setTimeout(() => {
                arFabric.style.transform = '';
              }, 1000);
              break;
          }
        }
      });
    });
  }
  
  // 探索材料漂流岛按钮
  const exploreBtn = document.querySelector('.btn-explore-island');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', function() {
      // 滚动到材料漂流岛详情区域或打开详情页面
      alert('材料漂流岛详情页面即将上线');
    });
  }
}

// 改造者联盟交互效果
function initMakersAlliance() {
  // 雷达图点击交互
  const radarPoints = document.querySelectorAll('.radar-point');
  if (radarPoints.length) {
    radarPoints.forEach(point => {
      point.addEventListener('click', function() {
        const skill = this.getAttribute('data-skill');
        console.log(`点击了技能: ${skill}`);
        // 此处可添加技能详情弹窗逻辑
      });
    });
  }
  
  // 技能标签交互
  const skillTags = document.querySelectorAll('.skill-tag');
  if (skillTags.length) {
    skillTags.forEach(tag => {
      tag.addEventListener('click', function() {
        skillTags.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }
  
  // 协作阶段交互
  const collabStages = document.querySelectorAll('.collab-stage');
  if (collabStages.length) {
    collabStages.forEach(stage => {
      stage.addEventListener('click', function() {
        if (!this.classList.contains('completed')) {
          alert('查看协作阶段详情');
        }
      });
    });
  }
  
  // 接单/预约按钮交互
  const listingActions = document.querySelectorAll('.listing-action');
  if (listingActions.length) {
    listingActions.forEach(btn => {
      btn.addEventListener('click', function() {
        const action = this.textContent.trim();
        alert(`您点击了"${action}"按钮，该功能即将上线`);
      });
    });
  }
  
  // 加入改造者联盟按钮
  const joinAllianceBtn = document.querySelector('.btn-join-alliance');
  if (joinAllianceBtn) {
    joinAllianceBtn.addEventListener('click', function() {
      alert('加入改造者联盟功能即将上线');
    });
  }
}

// 废材重生擂台交互效果
function initRebirthArena() {
  // 挑战倒计时
  const countdownElement = document.getElementById('challenge-countdown');
  if (countdownElement) {
    // 设置挑战结束时间（示例：3天后）
    const endTime = new Date();
    endTime.setDate(endTime.getDate() + 3);
    
    // 更新倒计时
    function updateCountdown() {
      const now = new Date();
      const timeDiff = endTime - now;
      
      if (timeDiff <= 0) {
        countdownElement.textContent = '挑战已结束';
        return;
      }
      
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      
      countdownElement.textContent = `${days}天${hours}小时${minutes}分`;
    }
    
    // 初次更新
    updateCountdown();
    
    // 每分钟更新一次
    setInterval(updateCountdown, 60000);
  }
  
  // 参与挑战按钮
  const joinChallengeBtn = document.querySelector('.btn-join-challenge');
  if (joinChallengeBtn) {
    joinChallengeBtn.addEventListener('click', function() {
      alert('参与挑战功能即将上线，敬请期待');
    });
  }
  
  // 评分条动画
  const criterionFills = document.querySelectorAll('.criterion-fill');
  if (criterionFills.length) {
    // 初始设置宽度为0
    criterionFills.forEach(fill => {
      fill.style.width = '0';
    });
    
    // 使用Intersection Observer检测元素进入视口
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 延迟执行以便在滚动到元素时看到动画
          setTimeout(() => {
            const fill = entry.target;
            const fillPercent = fill.style.getPropertyValue('--fill-percent');
            fill.style.width = fillPercent;
          }, 300);
          
          // 观察到后停止观察
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    // 开始观察每个填充条
    criterionFills.forEach(fill => {
      observer.observe(fill);
    });
  }
}

// 记忆编织站交互效果
function initMemoryStation() {
  // 故事文本区域与情感分析互动
  const storyTextarea = document.querySelector('.fabric-story-form textarea');
  const emotionMarker = document.querySelector('.emotion-marker');
  const colorCode = document.querySelector('.color-code');
  
  if (storyTextarea && emotionMarker && colorCode) {
    storyTextarea.addEventListener('input', function() {
      // 简单模拟情感分析效果
      const text = this.value.trim();
      if (text.length > 0) {
        // 基于文本长度随机生成情感值和颜色
        const randomPosition = Math.min(30 + Math.random() * 50, 80);
        emotionMarker.style.setProperty('--position', `${randomPosition}%`);
        
        // 根据情感值生成颜色
        const hue = Math.floor(randomPosition * 2);
        const color = `hsl(${hue}, 70%, 60%)`;
        colorCode.style.setProperty('--story-color', color);
      }
    });
  }
  
  // 刺绣图案选择交互
  const patternOptions = document.querySelectorAll('.pattern-option');
  if (patternOptions.length) {
    patternOptions.forEach(pattern => {
      pattern.addEventListener('click', function() {
        patternOptions.forEach(p => p.style.border = '2px solid transparent');
        this.style.border = '2px solid var(--color-accent)';
      });
    });
  }
  
  // AR扫描交互
  const memoryScanner = document.querySelector('.scanner-button');
  if (memoryScanner) {
    memoryScanner.addEventListener('click', function() {
      alert('AR记忆扫描功能即将上线');
    });
  }
  
  // 播放按钮交互
  const playButton = document.querySelector('.play-button');
  if (playButton) {
    playButton.addEventListener('click', function() {
      alert('记忆播放功能即将上线');
    });
  }
  
  // 添加记忆交互
  const addMemory = document.querySelector('.add-memory');
  if (addMemory) {
    addMemory.addEventListener('click', function() {
      alert('添加您的故事功能即将上线');
    });
  }
  
  // 小说章节提交
  const submitChapter = document.querySelector('.submit-chapter');
  const chapterTextarea = document.querySelector('.continue-writing textarea');
  
  if (submitChapter && chapterTextarea) {
    submitChapter.addEventListener('click', function() {
      const text = chapterTextarea.value.trim();
      if (text.length > 0) {
        alert('您的章节已提交，等待审核');
        chapterTextarea.value = '';
      } else {
        alert('请输入章节内容');
      }
    });
  }
}

// 其他模块交互效果
function initOtherModules() {
  // 模块卡片交互
  const moduleCards = document.querySelectorAll('.module-card');
  if (moduleCards.length) {
    moduleCards.forEach(card => {
      card.addEventListener('click', function() {
        const moduleName = this.querySelector('h4').textContent;
        console.log(`点击了模块: ${moduleName}`);
      });
    });
  }
  
  // 模块链接交互
  const moduleLinks = document.querySelectorAll('.module-link');
  if (moduleLinks.length) {
    moduleLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        console.log(`点击了链接: ${href}`);
        alert('该功能页面即将上线');
      });
    });
  }
}

// 交互增强体验
function initEnhancedInteractions() {
  // 加入社区按钮
  const joinCommunityBtn = document.querySelector('.btn-join-community');
  if (joinCommunityBtn) {
    joinCommunityBtn.addEventListener('click', function() {
      alert('加入纤维会议社区功能即将上线');
    });
  }
  
  // 增强项目悬停效果
  const enhancementItems = document.querySelectorAll('.enhancement-item');
  if (enhancementItems.length) {
    enhancementItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.enhancement-icon');
        icon.style.transform = 'scale(1.1) rotate(5deg)';
      });
      
      item.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.enhancement-icon');
        icon.style.transform = '';
      });
    });
  }
}

// 初始化下拉菜单动画 (Initialize dropdown menu animations)
function initDropdownAnimations() {
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  
  dropdowns.forEach(dropdown => {
    const items = dropdown.querySelectorAll('.dropdown-item');
    items.forEach((item, index) => {
      item.style.setProperty('--item-index', index);
    });
  });
}

// 初始化擂台冠军荣誉区域
function initArenaChampions() {
  // 设置领奖台高度
  const podiumItems = document.querySelectorAll('.podium-item .podium-platform');
  podiumItems.forEach(platform => {
    const height = platform.getAttribute('data-height') || 1;
    platform.style.setProperty('--height', height);
  });

  // 冠军时间轴滚动动画
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      item.style.transition = 'all 0.5s ease';
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    }, 300 + (index * 100));
  });
  
  // 添加领奖台的交互效果
  const championProject = document.querySelector('.champion-project');
  const champions = document.querySelectorAll('.champion-avatar');
  if (championProject && champions) {
    champions.forEach(champion => {
      champion.addEventListener('mouseenter', () => {
        champion.closest('.podium-item').classList.add('active');
      });
      
      champion.addEventListener('mouseleave', () => {
        champion.closest('.podium-item').classList.remove('active');
      });
    });
  }
}

// 余料暗房功能
document.addEventListener('DOMContentLoaded', () => {
  // 初始化3D立方体
  initCube();
  
  // 初始化聊天界面
  initChatInterface();
  
  // 初始化进度跟踪面板
  initTrackingPanel();
});

/**
 * 初始化3D立方体
 */
function initCube() {
  const cube = document.querySelector('.inventory .cube');
  if (!cube) return;
  
  // 鼠标拖动旋转效果
  let isDragging = false;
  let previousMousePosition = {
    x: 0,
    y: 0
  };
  let rotationSpeed = 0.3;
  let friction = 0.95;
  let cubeMomentum = {
    x: 0,
    y: 0
  };
  let autoRotate = true;
  let rotateInterval;
  
  // 初始旋转
  let cubeRotation = {
    x: -15,
    y: 15
  };
  
  updateCubeRotation();
  
  // 开始自动旋转
  startAutoRotate();
  
  // 鼠标按下事件
  cube.addEventListener('mousedown', (e) => {
    isDragging = true;
    autoRotate = false;
    clearInterval(rotateInterval);
    
    previousMousePosition = {
      x: e.clientX,
      y: e.clientY
    };
    
    e.preventDefault();
  });
  
  // 鼠标移动事件
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const deltaMove = {
      x: e.clientX - previousMousePosition.x,
      y: e.clientY - previousMousePosition.y
    };
    
    // 根据鼠标移动调整立方体旋转
    cubeRotation.x -= deltaMove.y * rotationSpeed;
    cubeRotation.y += deltaMove.x * rotationSpeed;
    
    // 限制旋转角度
    cubeRotation.x = Math.max(-90, Math.min(90, cubeRotation.x));
    
    updateCubeRotation();
    
    cubeMomentum = {
      x: deltaMove.y * rotationSpeed * 0.05,
      y: -deltaMove.x * rotationSpeed * 0.05
    };
    
    previousMousePosition = {
      x: e.clientX,
      y: e.clientY
    };
  });
  
  // 鼠标松开事件
  document.addEventListener('mouseup', () => {
    isDragging = false;
    
    // 添加动量效果
    const applyMomentum = () => {
      if (Math.abs(cubeMomentum.x) < 0.01 && Math.abs(cubeMomentum.y) < 0.01) {
        // 动量减小到阈值以下，重新开始自动旋转
        autoRotate = true;
        startAutoRotate();
        return;
      }
      
      // 应用动量
      cubeRotation.x += cubeMomentum.x;
      cubeRotation.y += cubeMomentum.y;
      
      // 限制旋转角度
      cubeRotation.x = Math.max(-90, Math.min(90, cubeRotation.x));
      
      updateCubeRotation();
      
      // 应用摩擦力
      cubeMomentum.x *= friction;
      cubeMomentum.y *= friction;
      
      requestAnimationFrame(applyMomentum);
    };
    
    applyMomentum();
  });
  
  // 移动设备触摸事件支持
  cube.addEventListener('touchstart', (e) => {
    isDragging = true;
    autoRotate = false;
    clearInterval(rotateInterval);
    
    previousMousePosition = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
    
    e.preventDefault();
  });
  
  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    
    const deltaMove = {
      x: e.touches[0].clientX - previousMousePosition.x,
      y: e.touches[0].clientY - previousMousePosition.y
    };
    
    // 根据触摸移动调整立方体旋转
    cubeRotation.x -= deltaMove.y * rotationSpeed;
    cubeRotation.y += deltaMove.x * rotationSpeed;
    
    // 限制旋转角度
    cubeRotation.x = Math.max(-90, Math.min(90, cubeRotation.x));
    
    updateCubeRotation();
    
    previousMousePosition = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
    
    e.preventDefault();
  });
  
  document.addEventListener('touchend', () => {
    isDragging = false;
    autoRotate = true;
    startAutoRotate();
  });
  
  // 更新立方体旋转
  function updateCubeRotation() {
    cube.style.transform = `rotateX(${cubeRotation.x}deg) rotateY(${cubeRotation.y}deg)`;
  }
  
  // 自动旋转
  function startAutoRotate() {
    if (!autoRotate) return;
    
    clearInterval(rotateInterval);
    rotateInterval = setInterval(() => {
      cubeRotation.y += 0.2;
      updateCubeRotation();
    }, 30);
  }
}

/**
 * 初始化聊天界面
 */
function initChatInterface() {
  const chatInput = document.querySelector('.inventory .chat-input input');
  const sendButton = document.querySelector('.inventory .chat-input .send-button');
  const chatMessages = document.getElementById('chat-messages');
  const sessionItems = document.querySelectorAll('.inventory .session-item');
  
  if (!chatInput || !sendButton || !chatMessages) return;
  
  // 发送消息
  function sendMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;
    
    // 创建用户消息
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('message', 'user-message');
    userMessageElement.textContent = message;
    chatMessages.appendChild(userMessageElement);
    
    // 清空输入框
    chatInput.value = '';
    
    // 滚动到底部
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // 模拟系统回复（实际应用中会由后端API响应）
    setTimeout(() => {
      // 创建系统消息
      const systemMessageElement = document.createElement('div');
      systemMessageElement.classList.add('message', 'system-message');
      
      // 模拟回复内容
      const responses = [
        '我正在为您查找相关面料，请稍候...',
        '根据您的描述，我们有几种匹配的面料可以推荐。您更偏好哪种材质的面料？',
        '我们的数据库中有类似的改造案例，要查看详情吗？',
        '这种改造方案需要考虑面料的弹性和韧性，我建议选择混纺面料。',
        '您的需求已记录，接下来我们可以安排专业设计师为您提供更详细的改造方案。'
      ];
      
      // 随机选择一个回复
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      systemMessageElement.textContent = randomResponse;
      
      chatMessages.appendChild(systemMessageElement);
      
      // 滚动到底部
      chatMessages.scrollTop = chatMessages.scrollHeight;
      
      // 更新进度跟踪
      updateProgressTracking();
    }, 1000);
  }
  
  // 发送按钮点击事件
  sendButton.addEventListener('click', sendMessage);
  
  // 输入框回车发送
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  // 历史会话切换
  sessionItems.forEach(item => {
    item.addEventListener('click', () => {
      // 移除所有会话的active类
      sessionItems.forEach(s => s.classList.remove('active'));
      
      // 添加当前会话的active类
      item.classList.add('active');
      
      // 如果是新会话，清空聊天记录
      if (item.classList.contains('new-chat')) {
        while (chatMessages.firstChild) {
          chatMessages.removeChild(chatMessages.firstChild);
        }
        
        // 添加欢迎消息
        const welcomeMessage = document.createElement('div');
        welcomeMessage.classList.add('message', 'system-message');
        welcomeMessage.textContent = '欢迎来到余料暗房！我是您的专属面料顾问。请告诉我您需要什么类型的面料或服装改造建议？';
        chatMessages.appendChild(welcomeMessage);
      }
    });
  });
}

/**
 * 初始化进度跟踪面板
 */
function initTrackingPanel() {
  const progressStages = document.querySelectorAll('.inventory .progress-stage');
  
  if (!progressStages.length) return;
  
  // 点击进度阶段显示详情
  progressStages.forEach(stage => {
    stage.addEventListener('click', () => {
      // 在实际应用中，这里会显示阶段详情的模态框
      const stageNumber = stage.querySelector('.stage-number').textContent;
      const stageName = stage.querySelector('.stage-name').textContent;
      
      console.log(`点击了阶段: ${stageName} (${stageNumber})`);
      
      // 模拟显示阶段详情
      alert(`阶段详情: ${stageName}\n\n该阶段将完成以下工作：\n- 专业评估面料特性\n- 确定改造方案可行性\n- 制定详细的材料清单`);
    });
  });
}

/**
 * 更新进度跟踪
 */
function updateProgressTracking() {
  const stages = document.querySelectorAll('.inventory .progress-stage');
  if (!stages.length) return;
  
  // 获取当前活跃阶段
  let activeIndex = -1;
  stages.forEach((stage, index) => {
    if (stage.querySelector('.stage-number').classList.contains('status-active')) {
      activeIndex = index;
    }
  });
  
  // 有20%的概率前进到下一个阶段
  if (Math.random() < 0.2 && activeIndex < stages.length - 1) {
    // 将当前活跃阶段设为已完成
    stages[activeIndex].querySelector('.stage-number').classList.remove('status-active');
    stages[activeIndex].querySelector('.stage-number').classList.add('status-completed');
    
    if (stages[activeIndex].querySelector('.stage-connector')) {
      stages[activeIndex].querySelector('.stage-connector').classList.remove('status-active');
      stages[activeIndex].querySelector('.stage-connector').classList.add('status-completed');
    }
    
    // 将下一个阶段设为活跃
    stages[activeIndex + 1].querySelector('.stage-number').classList.remove('status-pending');
    stages[activeIndex + 1].querySelector('.stage-number').classList.add('status-active');
    
    if (stages[activeIndex + 1].querySelector('.stage-connector')) {
      stages[activeIndex + 1].querySelector('.stage-connector').classList.remove('status-pending');
      stages[activeIndex + 1].querySelector('.stage-connector').classList.add('status-active');
    }
  }
}

// URL 处理和导航功能
function updateURL(sectionId) {
  if (sectionId && sectionId.startsWith('#')) {
    const newURL = `${window.location.pathname}${sectionId}`;
    history.pushState({ section: sectionId }, '', newURL);
  }
}

function handleURLNavigation() {
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const targetSection = document.querySelector(hash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        highlightActiveSection(hash.substring(1));
      }
    }, 100);
  }
}

// 初始化导航功能
function initNavigation() {
  // 处理页面加载时的URL导航
  window.addEventListener('load', handleURLNavigation);
  
  // 处理浏览器前进后退按钮
  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.section) {
      const targetSection = document.querySelector(event.state.section);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        highlightActiveSection(event.state.section.substring(1));
      }
    }
  });
  
  // 处理导航菜单点击
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        updateURL(targetId);
        highlightActiveSection(targetId.substring(1));
      }
    });
  });
  
  // 处理下拉菜单项点击
  document.querySelectorAll('.nav-dropdown .dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      // 检查是否是外部链接（如 about.html#section）
      if (!targetId.startsWith('#')) {
        window.location.href = targetId;
        return;
      }
      
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        updateURL(targetId);
        highlightActiveSection(targetId.substring(1));
      }
    });
  });
}

function addSmoothScrolling() {
  // 为所有导航链接添加平滑滚动
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        updateURL(targetId);
      }
    });
  });
}

function highlightActiveSection(sectionId) {
  if (!sectionId) return;
  
  // 移除所有导航项的活动状态
  document.querySelectorAll('nav a').forEach(item => {
    item.classList.remove('active');
    // 如果父元素是列表项，也移除其活动状态
    if (item.parentElement.tagName === 'LI') {
      item.parentElement.classList.remove('active');
    }
  });
  
  // 添加活动状态到当前部分的导航项
  const navItem = document.querySelector(`nav a[href="#${sectionId}"]`);
  if (navItem) {
    navItem.classList.add('active');
    // 如果父元素是列表项，也添加活动状态
    if (navItem.parentElement.tagName === 'LI') {
      navItem.parentElement.classList.add('active');
    }
  }
  
  // 对于下拉菜单项，也要处理
  const dropdownItem = document.querySelector(`.dropdown-item[href="#${sectionId}"]`);
  if (dropdownItem) {
    dropdownItem.classList.add('active');
    // 同时激活父下拉菜单
    const parentDropdown = dropdownItem.closest('.has-dropdown');
    if (parentDropdown) {
      const parentLink = parentDropdown.querySelector('a');
      if (parentLink) {
        parentLink.classList.add('active');
      }
      parentDropdown.classList.add('active');
    }
  }
}

function initScrollSpy() {
  // 获取所有主要段落
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('nav a[href^="#"]');
  
  if (sections.length > 0) {
    // 添加滚动事件监听
    window.addEventListener('scroll', function() {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });
      
      if (current && current !== '') {
        highlightActiveSection(current);
      }
    });
  }
}

// 页面加载时初始化解构实验室导航
document.addEventListener('DOMContentLoaded', function() {
  initWorkshopNavigation();
  addWorkshopSectionIds();
});

function initChatbot() {
  console.log("Initializing chatbot...");
  
  const chatbotContainer = document.querySelector('.chatbot-container');
  const chatbotToggle = document.querySelector('.chatbot-toggle');
  const chatbotClose = document.querySelector('.chatbot-close');
  const chatbotMessages = document.getElementById('chatbot-messages');
  const chatbotInput = document.querySelector('.chatbot-input input');
  const sendButton = document.querySelector('.chatbot-input .send-button');
  
  if (!chatbotContainer || !chatbotToggle || !chatbotClose || !chatbotMessages || !chatbotInput || !sendButton) {
    console.error("Chatbot elements not found");
    return;
  }
  
  // 自动打开聊天窗口（延迟3秒）
  setTimeout(() => {
    chatbotContainer.classList.add('open');
  }, 3000);
  
  // 切换聊天窗口
  chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle('open');
    if (chatbotContainer.classList.contains('open')) {
      chatbotInput.focus();
    }
  });
  
  // 关闭聊天窗口
  chatbotClose.addEventListener('click', () => {
    chatbotContainer.classList.remove('open');
  });
  
  // 发送消息
  function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message === '') return;
    
    // 添加用户消息
    addMessage(message, 'user');
    
    // 清空输入框
    chatbotInput.value = '';
    
    // 显示"正在输入"状态
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('message', 'system-message', 'typing-indicator');
    typingIndicator.innerHTML = '<span></span><span></span><span></span>';
    chatbotMessages.appendChild(typingIndicator);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
    // 模拟AI回复（1-2秒后）
    setTimeout(() => {
      // 移除输入指示器
      chatbotMessages.removeChild(typingIndicator);
      
      // 根据用户消息生成回复
      const reply = generateReply(message);
      
      // 添加系统回复
      addMessage(reply, 'system');
    }, Math.random() * 1000 + 1000);
  }
  
  // 添加消息到聊天窗口
  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    
    // 判断是否包含建议项
    if (text.includes('建议:') && sender === 'system') {
      const mainText = text.split('建议:')[0];
      const suggestions = text.split('建议:')[1].split('|');
      
      messageDiv.textContent = mainText;
      
      suggestions.forEach(suggestion => {
        if (suggestion.trim() !== '') {
          const suggestionItem = document.createElement('div');
          suggestionItem.classList.add('suggestion-item');
          
          const titleStrong = document.createElement('strong');
          titleStrong.textContent = suggestion.split(':')[0].trim();
          
          const descP = document.createElement('p');
          descP.textContent = suggestion.split(':')[1].trim();
          
          suggestionItem.appendChild(titleStrong);
          suggestionItem.appendChild(descP);
          messageDiv.appendChild(suggestionItem);
        }
      });
    } else {
      messageDiv.textContent = text;
    }
    
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  // 根据用户输入生成回复
  function generateReply(message) {
    message = message.toLowerCase();
    
    // 简单的关键词匹配
    if (message.includes('你好') || message.includes('hi') || message.includes('hello')) {
      return '您好！我是您的面料顾问小助手。请问有什么可以帮到您的吗？';
    } 
    else if (message.includes('面料') || message.includes('布料') || message.includes('材质')) {
      return '我们有多种环保再生面料可供选择。建议:天然棉麻:轻盈透气，适合夏季服装|再生聚酯:由塑料瓶再生，耐用防水|有机丝绸:环保染色，柔软亲肤';
    }
    else if (message.includes('牛仔') || message.includes('外套') || message.includes('改造')) {
      return '牛仔外套改造有多种创意方案，可以根据您的风格定制。建议:简约型:移除袖子，修整肩部和领口，保留原有口袋和扣子|解构型:拆分重组，加入不规则裁剪和露边设计|混搭型:结合其他材质，如皮革条带或针织面料';
    }
    else if (message.includes('价格') || message.includes('费用') || message.includes('多少钱')) {
      return '我们的改造服务价格根据复杂度和材料而定。简单修改约300-500元，中等改造约500-800元，复杂重构约800-1500元。可以发送您想改造的图片给我们做精确报价。';
    }
    else if (message.includes('时间') || message.includes('多久') || message.includes('周期')) {
      return '我们的标准服务周期为：简单修改7-10天，中等改造约15天，复杂重构约20-30天。如果您有特殊时间需求，也可以申请加急服务。';
    }
    else if (message.includes('联系') || message.includes('电话') || message.includes('地址')) {
      return '您可以通过以下方式联系我们：电话：+86-10-12345678，邮箱：contact@rebornfabric.com，地址：北京市朝阳区设计创意园区B3栋101室。工作时间：周一至周五 10:00-18:00。';
    }
    else {
      return '感谢您的咨询！我们可以为您提供面料选择、服装改造、环保时尚等方面的专业建议。请告诉我您具体需要什么方面的帮助？';
    }
  }
  
  // 事件监听
  sendButton.addEventListener('click', sendMessage);
  
  chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  // 为建议项添加点击事件
  chatbotMessages.addEventListener('click', (e) => {
    const suggestionItem = e.target.closest('.suggestion-item');
    if (suggestionItem) {
      const suggestionTitle = suggestionItem.querySelector('strong').textContent;
      chatbotInput.value = `我想了解更多关于${suggestionTitle}的信息`;
      sendMessage();
    }
  });
}

// 在页面加载完成后初始化聊天机器人
document.addEventListener('DOMContentLoaded', function() {
  // ... existing initialization code ...
  
  // 初始化聊天机器人
  initChatbot();
});

// AI图样生成系统交互功能
document.addEventListener('DOMContentLoaded', function() {
  // 检查AI设计系统元素是否存在
  const aiSystem = document.getElementById('ai-design-system');
  if (!aiSystem) return;

  const inputMethods = document.querySelectorAll('.input-method');
  const promptInput = document.querySelector('.ai-prompt-input input');
  const generateBtn = document.querySelector('.generate-btn');
  const resultPreview = document.querySelector('.ai-result-preview');
  const resultPlaceholder = document.querySelector('.result-placeholder');
  const resultControls = document.querySelector('.result-controls');
  const styleControls = document.querySelectorAll('.style-control');
  const actionButtons = document.querySelectorAll('.action-buttons button');

  // 切换输入方法
  inputMethods.forEach(method => {
    method.addEventListener('click', function() {
      // 移除所有active类
      inputMethods.forEach(m => m.classList.remove('active'));
      // 添加当前active类
      this.classList.add('active');
      
      const methodType = this.getAttribute('data-method');
      if (methodType === 'text') {
        promptInput.setAttribute('placeholder', '描述您想要的改造风格，例如：\'复古牛仔夹克改造为现代休闲背心\'');
      } else if (methodType === 'image') {
        promptInput.setAttribute('placeholder', '输入图片描述或点击此处上传照片...');
      }
    });
  });

  // 模拟生成过程
  let isGenerating = false;
  generateBtn.addEventListener('click', function() {
    if (isGenerating) return;
    
    if (!promptInput.value.trim()) {
      // 如果输入为空，添加轻微震动效果
      promptInput.classList.add('shake');
      setTimeout(() => promptInput.classList.remove('shake'), 500);
      return;
    }
    
    isGenerating = true;
    generateBtn.textContent = '生成中...';
    generateBtn.disabled = true;

    // 显示加载状态
    resultPlaceholder.innerHTML = `
      <div class="loading-spinner">
        <i class="fas fa-circle-notch fa-spin"></i>
      </div>
      <p>AI正在生成中，请稍候...</p>
    `;

    // 模拟生成延迟
    setTimeout(() => {
      // 模拟生成完成
      resultPlaceholder.style.display = 'none';
      
      // 创建模拟的结果图片
      const resultImage = document.createElement('img');
      resultImage.src = 'images/ai-design/ai-demo-pattern.jpg'; // 这里可以替换为实际的演示图
      // 如果图片加载失败，使用备用内容
      resultImage.onerror = function() {
        this.onerror = null;
        this.src = '';
        this.style.display = 'none';
        
        const placeholderContent = document.createElement('div');
        placeholderContent.className = 'result-placeholder';
        placeholderContent.innerHTML = `
          <i class="fas fa-image"></i>
          <p>请添加示例图片到 images/ai-design/ai-demo-pattern.jpg</p>
        `;
        resultPreview.appendChild(placeholderContent);
      };
      resultImage.alt = '生成的AI图样';
      resultImage.className = 'result-image';
      
      // 清除旧内容并添加新图片
      resultPreview.innerHTML = '';
      resultPreview.appendChild(resultImage);
      
      // 显示样式控制按钮
      resultControls.style.display = 'flex';
      resultPreview.appendChild(resultControls);
      
      // 启用操作按钮
      actionButtons.forEach(btn => btn.disabled = false);
      
      // 重置生成按钮
      generateBtn.textContent = '生成图样';
      generateBtn.disabled = false;
      isGenerating = false;
    }, 3000);
  });

  // 样式控制切换
  styleControls.forEach(control => {
    control.addEventListener('click', function() {
      const styleType = this.getAttribute('data-style');
      const resultImage = document.querySelector('.result-image');
      
      if (resultImage) {
        // 移除所有样式类
        resultImage.classList.remove('style-minimal', 'style-vintage', 'style-futuristic', 'style-avant-garde');
        
        // 添加选中的样式类
        resultImage.classList.add('style-' + styleType);
        
        // 高亮当前选中的样式按钮
        styleControls.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // 处理保存和分享按钮
  const saveBtn = document.querySelector('.save-design-btn');
  const shareBtn = document.querySelector('.share-design-btn');
  
  saveBtn.addEventListener('click', function() {
    // 显示保存提示
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = '设计已保存到您的账户';
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
      }, 2000);
    }, 100);
  });
  
  shareBtn.addEventListener('click', function() {
    // 显示分享对话框
    const shareDialog = document.createElement('div');
    shareDialog.className = 'share-dialog';
    shareDialog.innerHTML = `
      <div class="share-dialog-content">
        <h4>分享您的设计</h4>
        <div class="share-options">
          <button class="share-option" data-platform="weixin"><i class="fab fa-weixin"></i> 微信</button>
          <button class="share-option" data-platform="weibo"><i class="fab fa-weibo"></i> 微博</button>
          <button class="share-option" data-platform="link"><i class="fas fa-link"></i> 复制链接</button>
        </div>
        <button class="close-dialog"><i class="fas fa-times"></i></button>
      </div>
    `;
    
    document.body.appendChild(shareDialog);
    
    // 添加关闭按钮事件
    shareDialog.querySelector('.close-dialog').addEventListener('click', function() {
      document.body.removeChild(shareDialog);
    });
    
    // 处理分享选项点击
    shareDialog.querySelectorAll('.share-option').forEach(option => {
      option.addEventListener('click', function() {
        const platform = this.getAttribute('data-platform');
        // 这里可以处理实际的分享逻辑
        
        // 显示成功提示并关闭对话框
        const successMsg = document.createElement('div');
        successMsg.className = 'toast-message';
        
        if (platform === 'link') {
          successMsg.textContent = '链接已复制到剪贴板';
          // 模拟复制链接
          const tempInput = document.createElement('input');
          tempInput.value = window.location.href + '#ai-design';
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        } else {
          successMsg.textContent = `已分享到${platform === 'weixin' ? '微信' : '微博'}`;
        }
        
        document.body.appendChild(successMsg);
        setTimeout(() => {
          successMsg.classList.add('show');
          document.body.removeChild(shareDialog);
          
          setTimeout(() => {
            successMsg.classList.remove('show');
            setTimeout(() => document.body.removeChild(successMsg), 300);
          }, 2000);
        }, 100);
      });
    });
  });
});