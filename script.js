function initNavigation() {
  // 处理导航链接点击
  document.querySelectorAll('.main-nav a').forEach(item => {
    item.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          // 平滑滚动到目标部分
          targetSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          
          // 更新URL
          updateURL(targetId);
          
          // 高亮当前部分
          highlightActiveSection(targetId.substring(1));
          
          // 如果是下拉菜单，关闭它
          const dropdown = this.closest('.has-dropdown');
          if (dropdown) {
            const navDropdown = dropdown.querySelector('.nav-dropdown');
            if (navDropdown) {
              navDropdown.style.display = 'none';
            }
          }
        }
      }
    });
  });

  // 处理下拉菜单项点击
  document.querySelectorAll('.nav-dropdown .dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // 平滑滚动到目标部分
        targetSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // 更新URL
        updateURL(targetId);
        
        // 高亮当前部分
        highlightActiveSection(targetId.substring(1));
        
        // 关闭下拉菜单
        const dropdown = this.closest('.nav-dropdown');
        if (dropdown) {
          dropdown.style.display = 'none';
        }
      }
    });
  });

  // 处理页面加载和URL变化
  window.addEventListener('load', handleURLNavigation);
  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.section) {
      const targetSection = document.querySelector(event.state.section);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        highlightActiveSection(event.state.section.substring(1));
      }
    }
  });

  // 监听滚动以更新导航状态
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 100) {
        currentSection = section.getAttribute('id');
      }
    });
    
    if (currentSection) {
      highlightActiveSection(currentSection);
    }
  });
}

// 高亮当前活动部分
function highlightActiveSection(sectionId) {
  // 移除所有导航项的活动状态
  document.querySelectorAll('.main-nav a').forEach(item => {
    item.classList.remove('active');
  });
  
  document.querySelectorAll('.nav-dropdown .dropdown-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // 添加当前部分的活动状态
  const activeItem = document.querySelector(`.nav-dropdown .dropdown-item[href="#${sectionId}"]`);
  if (activeItem) {
    activeItem.classList.add('active');
    // 同时高亮父菜单
    const parentLi = activeItem.closest('li.has-dropdown');
    if (parentLi) {
      parentLi.querySelector('a').classList.add('active');
    }
  } else {
    // 主导航项检查
    const mainNavItem = document.querySelector(`.main-nav a[href="#${sectionId}"]`);
    if (mainNavItem) {
      mainNavItem.classList.add('active');
    }
  }
}

// 更新URL函数
function updateURL(sectionId) {
  if (!sectionId) return;
  const url = `${window.location.pathname}${sectionId}`;
  history.pushState({ section: sectionId }, '', url);
}

// 处理URL导航
function handleURLNavigation() {
  const hash = window.location.hash;
  if (hash) {
    const targetSection = document.querySelector(hash);
    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        highlightActiveSection(hash.substring(1));
      }, 500);
    }
  }
}

// 聊天机器人功能
class Chatbot {
  constructor() {
    this.container = document.querySelector('.chatbot-container');
    this.toggleButton = document.querySelector('.chatbot-toggle');
    this.closeButton = document.querySelector('.chatbot-close');
    this.chatBox = document.querySelector('.chatbot-box');
    this.messagesContainer = document.querySelector('.messages-container');
    this.input = document.querySelector('.chatbot-input input');
    this.sendButton = document.querySelector('.send-button');
    
    this.responses = {
      '你好': '你好！我是Fashion Reborn的AI助手，很高兴为您服务。',
      '材质图书馆': '材质图书馆收录了各种可持续面料样本，您可以在3D环境中查看和体验它们。',
      'ar扫描': 'AR扫描器可以帮助您识别面料成分，并提供相关的可持续改造建议。',
      '作品档案': '作品档案馆展示了设计师们的改造作品，您可以按时间线浏览或下载资源。',
      '灵感': '灵感孵化器会随机生成改造挑战，激发您的创意灵感。',
      '工具': '工具博物馆收集了各种实用的改造工具，并提供使用教程。',
      '帮助': '您可以询问关于材质、工具、改造方法等任何问题，我会尽力为您解答。'
    };

    this.init();
  }

  init() {
    this.toggleButton.addEventListener('click', () => this.toggleChat());
    this.closeButton.addEventListener('click', () => this.toggleChat());
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
    this.sendButton.addEventListener('click', () => this.sendMessage());

    // 添加欢迎消息
    this.addMessage('欢迎来到Fashion Reborn！我是您的专属助手，请问有什么可以帮您？', 'bot');
  }

  toggleChat() {
    this.chatBox.classList.toggle('active');
    this.toggleButton.classList.toggle('active');
  }

  addMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);
    messageDiv.textContent = text;
    this.messagesContainer.appendChild(messageDiv);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  processInput(input) {
    input = input.toLowerCase();
    let response = '抱歉，我没有理解您的问题。您可以试试问我关于材质、工具或改造方法的问题。';
    
    for (let key in this.responses) {
      if (input.includes(key)) {
        response = this.responses[key];
        break;
      }
    }
    
    return response;
  }

  sendMessage() {
    const text = this.input.value.trim();
    if (text) {
      this.addMessage(text, 'user');
      this.input.value = '';
      
      // 模拟机器人思考时间
      setTimeout(() => {
        const response = this.processInput(text);
        this.addMessage(response, 'bot');
      }, 500);
    }
  }
}

// 初始化聊天机器人
document.addEventListener('DOMContentLoaded', () => {
  new Chatbot();
});

// 确保只初始化一次
let initialized = false;

// 初始化网站功能
function initSite() {
  if (initialized) return;
  
  // 添加滚动监听
  window.addEventListener('scroll', handleScroll);
  
  // 初始化导航
  initNavigation();
  
  // 初始化其他功能
  initChatbot();
  
  initialized = true;
}

// 文档加载完毕后初始化网站
document.addEventListener('DOMContentLoaded', initSite);

// 材质图书馆功能
function initMaterialLibrary() {
  const materialWall = document.querySelector('.material-wall');
  const materials = [
    {
      id: 'cotton-organic',
      name: '有机棉麻',
      image: 'images/materials/cotton-organic.jpg',
      description: '采用有机种植的棉麻混纺面料，具有优异的透气性和耐用性。',
      properties: {
        weight: 180,
        elasticity: 15,
        breathability: 90,
        difficulty: 2,
        sustainability: 95
      },
      applications: [
        {
          title: '夏季连衣裙',
          image: 'images/applicationsw/cotton-dress.jpg',
          description: '轻盈透气的有机棉麻连衣裙，适合夏季穿着。'
        },
        {
          title: '休闲衬衫',
          image: 'images/applicationsw/cotton-shirt.jpg',
          description: '采用有机棉麻面料制作的休闲衬衫，舒适自然。'
        }
      ]
    },
    {
      id: 'denim-recycled',
      name: '再生牛仔',
      image: 'images/materials/denim-recycled.jpg',
      description: '由回收牛仔面料重新加工而成，保留了牛仔的独特质感。',
      properties: {
        weight: 250,
        elasticity: 10,
        breathability: 70,
        difficulty: 3,
        sustainability: 85
      },
      applications: [
        {
          title: '改造牛仔裤',
          image: 'images/applicationsw/denim-pants.jpg',
          description: '使用再生牛仔面料制作的环保牛仔裤。'
        },
        {
          title: '牛仔夹克',
          image: 'images/applicationsw/denim-jacket.jpg',
          description: '经典款式的再生牛仔夹克，展现环保理念。'
        }
      ]
    },
    {
      id: 'silk-peace',
      name: '和平丝',
      image: 'images/materials/silk-peace.jpg',
      description: '采用人道主义方式生产的丝绸，不伤害蚕的生命。',
      properties: {
        weight: 120,
        elasticity: 25,
        breathability: 85,
        difficulty: 4,
        sustainability: 90
      },
      applications: [
        {
          title: '真丝衬衫',
          image: 'images/applicationsw/silk-blouse.jpg',
          description: '优雅的和平丝衬衫，展现自然光泽。'
        },
        {
          title: '丝质连衣裙',
          image: 'images/applicationsw/silk-dress.jpg',
          description: '轻盈飘逸的和平丝连衣裙，适合正式场合。'
        }
      ]
    },
    {
      id: 'wool-recycled',
      name: '再生羊毛',
      image: 'images/materials/wool-recycled.jpg',
      description: '由回收羊毛制品重新加工而成，具有优异的保暖性能。',
      properties: {
        weight: 200,
        elasticity: 20,
        breathability: 75,
        difficulty: 3,
        sustainability: 80
      },
      applications: [
        {
          title: '羊毛大衣',
          image: 'images/applicationsw/wool-coat.jpg',
          description: '使用再生羊毛制作的保暖大衣。'
        },
        {
          title: '针织毛衣',
          image: 'images/applicationsw/wool-sweater.jpg',
          description: '柔软舒适的再生羊毛毛衣。'
        }
      ]
    },
    {
      id: 'synthetic-ocean',
      name: '海洋塑料纤维',
      image: 'images/materials/synthetic-ocean.jpg',
      description: '由回收海洋塑料制成的再生纤维，具有优异的防水性能。',
      properties: {
        weight: 150,
        elasticity: 30,
        breathability: 60,
        difficulty: 2,
        sustainability: 75
      },
      applications: [
        {
          title: '户外夹克',
          image: 'images/applicationsw/outdoor-jacket.jpg',
          description: '使用海洋塑料纤维制作的防水夹克。'
        },
        {
          title: '运动背包',
          image: 'images/applicationsw/sport-bag.jpg',
          description: '环保耐用的海洋塑料纤维背包。'
        }
      ]
    },
    {
      id: 'cotton-recycled',
      name: '再生棉',
      image: 'images/materials/cotton-recycled.jpg',
      description: '由回收棉制品重新加工而成，保持了棉的舒适性。',
      properties: {
        weight: 160,
        elasticity: 15,
        breathability: 85,
        difficulty: 2,
        sustainability: 85
      },
      applications: [
        {
          title: '休闲T恤',
          image: 'images/applicationsw/cotton-tshirt.jpg',
          description: '使用再生棉制作的舒适T恤。'
        },
        {
          title: '家居服',
          image: 'images/applicationsw/home-wear.jpg',
          description: '柔软透气的再生棉家居服。'
        }
      ]
    }
  ];

  // 创建材质卡片
  materials.forEach(material => {
    const card = document.createElement('div');
    card.className = 'material-card';
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="${material.image}" alt="${material.name}">
          <h3>${material.name}</h3>
        </div>
        <div class="card-back">
          <h3>${material.name}</h3>
          <p>${material.description}</p>
          <div class="material-properties">
            <div class="property">
              <span>重量</span>
              <div class="progress-bar">
                <div class="progress" style="width: ${material.properties.weight / 3}%"></div>
              </div>
            </div>
            <div class="property">
              <span>弹性</span>
              <div class="progress-bar">
                <div class="progress" style="width: ${material.properties.elasticity}%"></div>
              </div>
            </div>
            <div class="property">
              <span>透气性</span>
              <div class="progress-bar">
                <div class="progress" style="width: ${material.properties.breathability}%"></div>
              </div>
            </div>
          </div>
          <button class="view-details" data-material-id="${material.id}">查看详情</button>
        </div>
      </div>
    `;
    materialWall.appendChild(card);
  });

  // 添加材质卡片悬停效果
  document.querySelectorAll('.material-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('flipped');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('flipped');
    });
  });

  // 添加详情查看功能
  document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const materialId = button.getAttribute('data-material-id');
      const material = materials.find(m => m.id === materialId);
      if (material) {
        showMaterialDetails(material);
      }
    });
  });
}

// 显示材质详情
function showMaterialDetails(material) {
  const modal = document.createElement('div');
  modal.className = 'material-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-modal">&times;</button>
      <div class="material-header">
        <img src="${material.image}" alt="${material.name}">
        <div class="material-info">
          <h2>${material.name}</h2>
          <p>${material.description}</p>
        </div>
      </div>
      <div class="material-details">
        <div class="properties-chart">
          <h3>物理特性</h3>
          <canvas id="propertiesChart"></canvas>
        </div>
        <div class="sustainability-chart">
          <h3>可持续性指数</h3>
          <canvas id="sustainabilityChart"></canvas>
        </div>
      </div>
      <div class="applications">
        <h3>应用案例</h3>
        <div class="applications-grid">
          ${material.applications.map(app => `
            <div class="application-card">
              <img src="${app.image}" alt="${app.title}">
              <h4>${app.title}</h4>
              <p>${app.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // 添加关闭功能
  modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.remove();
  });

  // 点击模态框外部关闭
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  // 初始化图表
  initMaterialCharts(material);
}

// 初始化材质图表
function initMaterialCharts(material) {
  // 物理特性雷达图
  const propertiesCtx = document.getElementById('propertiesChart').getContext('2d');
  new Chart(propertiesCtx, {
    type: 'radar',
    data: {
      labels: ['重量', '弹性', '透气性', '难度', '可持续性'],
      datasets: [{
        label: '材质特性',
        data: [
          material.properties.weight / 3,
          material.properties.elasticity,
          material.properties.breathability,
          material.properties.difficulty * 20,
          material.properties.sustainability
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
      }]
    },
    options: {
      scales: {
        r: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });

  // 可持续性饼图
  const sustainabilityCtx = document.getElementById('sustainabilityChart').getContext('2d');
  new Chart(sustainabilityCtx, {
    type: 'doughnut',
    data: {
      labels: ['可持续性', '剩余指标'],
      datasets: [{
        data: [material.properties.sustainability, 100 - material.properties.sustainability],
        backgroundColor: [
          'rgba(75, 192, 192, 0.8)',
          'rgba(200, 200, 200, 0.3)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(200, 200, 200, 0.5)'
        ]
      }]
    },
    options: {
      cutout: '70%',
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

// 初始化材质图书馆
document.addEventListener('DOMContentLoaded', () => {
  initMaterialLibrary();
}); 