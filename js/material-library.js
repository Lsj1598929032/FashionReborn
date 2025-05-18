// 材质库数据
const materialData = [
  {
    id: 'cotton-001',
    name: '有机棉',
    category: 'cotton',
    image: 'images/materials/cotton-organic.jpg',
    properties: {
      weight: 180, // g/m²
      stretch: 5, // %
      breathability: 4.5 // cm³/cm²/s
    },
    difficulty: 2, // 1-5
    sustainability: 85, // 0-100
    carbonFootprint: 2.8, // kg CO₂
    applications: [
      {title: '休闲上衣', image: 'images/applications/cotton-casual.jpg'},
      {title: '家居用品', image: 'images/applications/cotton-home.jpg'},
      {title: '婴儿服饰', image: 'images/applications/cotton-baby.jpg'}
    ],
    description: '100%有机棉，未使用化学农药和肥料种植，手感柔软，透气性好，适合直接接触皮肤的服装。'
  },
  {
    id: 'denim-001',
    name: '再生牛仔布',
    category: 'denim',
    image: 'images/materials/denim-recycled.jpg',
    properties: {
      weight: 340, // g/m²
      stretch: 2, // %
      breathability: 3.0 // cm³/cm²/s
    },
    difficulty: 4, // 1-5
    sustainability: 78, // 0-100
    carbonFootprint: 3.5, // kg CO₂
    applications: [
      {title: '牛仔外套', image: 'images/applications/denim-jacket.jpg'},
      {title: '手提包', image: 'images/applications/denim-bag.jpg'},
      {title: '牛仔裙', image: 'images/applications/denim-skirt.jpg'}
    ],
    description: '由回收牛仔服装制成的再生面料，保留了牛仔布的耐用性与质感，同时减少了新材料的使用。'
  },
  {
    id: 'silk-001',
    name: '和平丝绸',
    category: 'silk',
    image: 'images/materials/silk-peace.jpg',
    properties: {
      weight: 85, // g/m²
      stretch: 8, // %
      breathability: 5.0 // cm³/cm²/s
    },
    difficulty: 5, // 1-5
    sustainability: 70, // 0-100
    carbonFootprint: 4.2, // kg CO₂
    applications: [
      {title: '礼服', image: 'images/applications/silk-formal.jpg'},
      {title: '围巾', image: 'images/applications/silk-scarf.jpg'},
      {title: '内衬', image: 'images/applications/silk-lining.jpg'}
    ],
    description: '和平丝绸采用非杀生方式获取蚕丝，让蚕蛾自然羽化后收集茧丝，虽然产量较低，但符合道德生产标准。'
  },
  {
    id: 'wool-001',
    name: '回收羊毛',
    category: 'wool',
    image: 'images/materials/wool-recycled.jpg',
    properties: {
      weight: 250, // g/m²
      stretch: 15, // %
      breathability: 4.2 // cm³/cm²/s
    },
    difficulty: 3, // 1-5
    sustainability: 82, // 0-100
    carbonFootprint: 3.0, // kg CO₂
    applications: [
      {title: '毛衣', image: 'images/applications/wool-sweater.jpg'},
      {title: '外套', image: 'images/applications/wool-coat.jpg'},
      {title: '配饰', image: 'images/applications/wool-accessories.jpg'}
    ],
    description: '回收自旧毛衣和废弃羊毛制品，经过分拣、清洗和再处理，形成的环保羊毛面料，保温性好。'
  },
  {
    id: 'synthetic-001',
    name: '海洋塑料纤维',
    category: 'synthetic',
    image: 'images/materials/synthetic-ocean.jpg',
    properties: {
      weight: 120, // g/m²
      stretch: 20, // %
      breathability: 3.8 // cm³/cm²/s
    },
    difficulty: 2, // 1-5
    sustainability: 90, // 0-100
    carbonFootprint: 1.5, // kg CO₂
    applications: [
      {title: '运动服', image: 'images/applications/synthetic-sportswear.jpg'},
      {title: '背包', image: 'images/applications/synthetic-backpack.jpg'},
      {title: '鞋类', image: 'images/applications/synthetic-shoes.jpg'}
    ],
    description: '由海洋回收塑料瓶制成的再生聚酯纤维，具有良好的强度和耐用性，每公斤面料可回收约30个塑料瓶。'
  },
  {
    id: 'cotton-002',
    name: '再生棉',
    category: 'cotton',
    image: 'images/materials/cotton-recycled.jpg',
    properties: {
      weight: 200, // g/m²
      stretch: 3, // %
      breathability: 4.0 // cm³/cm²/s
    },
    difficulty: 2, // 1-5
    sustainability: 80, // 0-100
    carbonFootprint: 2.2, // kg CO₂
    applications: [
      {title: 'T恤', image: 'images/applications/cotton-tshirt.jpg'},
      {title: '帆布袋', image: 'images/applications/cotton-tote.jpg'},
      {title: '家居装饰', image: 'images/applications/cotton-decor.jpg'}
    ],
    description: '由旧棉衣物纤维再造而成，质地稍显粗糙但环保性能优异，适合制作耐用型日常服装。'
  }
];

// 初始化材质库
function initMaterialLibrary() {
  const materialWall = document.getElementById('material-wall');
  const loadingElement = document.querySelector('.loading-materials');
  const categoryButtons = document.querySelectorAll('.category-btn');
  const modal = document.getElementById('material-modal');
  const closeModalBtn = document.querySelector('.close-modal');
  
  let currentCategory = 'all';
  let selectedMaterial = null;
  
  // 创建3D材质墙
  function createMaterialWall() {
    // 移除加载提示
    if (loadingElement) {
      loadingElement.style.display = 'none';
    }
    
    // 创建材质卡片
    materialData.forEach(material => {
      const materialCard = document.createElement('div');
      materialCard.className = 'material-card';
      materialCard.dataset.category = material.category;
      materialCard.dataset.id = material.id;
      
      // 创建卡片内容
      materialCard.innerHTML = `
        <div class="card-3d">
          <div class="card-inner">
            <div class="card-front">
              <img src="${material.image}" alt="${material.name}">
              <div class="material-name">${material.name}</div>
            </div>
            <div class="card-back">
              <h4>${material.name}</h4>
              <div class="material-brief">
                <div class="brief-stat">
                  <span class="stat-value">${material.sustainability}%</span>
                  <span class="stat-label">可持续指数</span>
                </div>
                <div class="brief-stat">
                  <span class="stat-value">${material.difficulty}/5</span>
                  <span class="stat-label">难度系数</span>
                </div>
              </div>
              <button class="view-details-btn">查看详情</button>
            </div>
          </div>
        </div>
      `;
      
      // 添加点击事件
      materialCard.querySelector('.view-details-btn').addEventListener('click', () => {
        openMaterialDetails(material);
      });
      
      // 添加到材质墙
      materialWall.appendChild(materialCard);
    });
    
    // 初始显示所有材质
    filterMaterials(currentCategory);
    
    // 初始化VOGUE推荐材质部分
    initFeaturedMaterials();
  }
  
  // 初始化推荐材质部分
  function initFeaturedMaterials() {
    // 这里可以添加针对编辑精选材质的逻辑
    // 如果需要动态加载编辑推荐的材质，可以在这里实现
    const featuredItems = document.querySelectorAll('.featured-item');
    
    featuredItems.forEach(item => {
      item.addEventListener('click', () => {
        const materialName = item.querySelector('h5').textContent;
        const matchedMaterial = materialData.find(material => material.name === materialName);
        
        if (matchedMaterial) {
          openMaterialDetails(matchedMaterial);
        }
      });
    });
  }
  
  // 过滤材质
  function filterMaterials(category) {
    currentCategory = category;
    const cards = document.querySelectorAll('.material-card');
    
    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
        // 添加动画效果
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0) scale(1)';
        }, 50);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px) scale(0.9)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
    
    // 更新分类按钮样式
    categoryButtons.forEach(btn => {
      if (btn.dataset.category === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
  
  // 展示材质详情
  function openMaterialDetails(material) {
    selectedMaterial = material;
    
    // 填充模态框数据
    document.getElementById('material-name').textContent = material.name;
    
    // 设置物理特性数据
    document.getElementById('weight-value').textContent = material.properties.weight;
    document.getElementById('stretch-value').textContent = material.properties.stretch;
    document.getElementById('breathability-value').textContent = material.properties.breathability;
    
    // 设置改造难度
    const needleIcons = document.getElementById('difficulty-needles');
    needleIcons.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
      const needle = document.createElement('span');
      needle.className = i <= material.difficulty ? 'needle-icon' : 'needle-icon inactive';
      needle.innerHTML = '<i class="fas fa-sewing-needle"></i>';
      needleIcons.appendChild(needle);
    }
    
    const difficultyText = document.getElementById('difficulty-text');
    const difficultyLabels = ['入门级', '简单', '中等', '困难', '专家级'];
    difficultyText.textContent = difficultyLabels[material.difficulty - 1];
    
    // 设置可持续指数
    const carbonValue = document.getElementById('carbon-value');
    carbonValue.textContent = material.carbonFootprint;
    
    // 创建特性图表
    createPropertiesChart(material);
    
    // 创建碳排放图表
    createCarbonChart(material);
    
    // 设置应用案例
    const applicationsGrid = document.getElementById('applications-grid');
    applicationsGrid.innerHTML = '';
    material.applications.forEach(application => {
      const appItem = document.createElement('div');
      appItem.className = 'application-item';
      appItem.innerHTML = `
        <div class="application-image">
          <img src="${application.image}" alt="${application.title}">
        </div>
        <div class="application-title">${application.title}</div>
      `;
      applicationsGrid.appendChild(appItem);
    });
    
    // 显示模态框
    modal.classList.add('active');
    
    // 添加VOGUE风格的过渡动画
    setTimeout(() => {
      modal.querySelector('.modal-content').classList.add('vogue-animation');
    }, 50);
  }
  
  // 创建属性图表
  function createPropertiesChart(material) {
    const propertiesChart = document.getElementById('properties-chart');
    
    // 这里简单使用DIV实现图表，实际项目中可使用Chart.js等库
    propertiesChart.innerHTML = `
      <div class="property-chart">
        <div class="chart-bar weight" style="width: ${material.properties.weight / 4}%">
          <span class="bar-label">重量</span>
        </div>
        <div class="chart-bar stretch" style="width: ${material.properties.stretch * 5}%">
          <span class="bar-label">延展性</span>
        </div>
        <div class="chart-bar breathability" style="width: ${material.properties.breathability * 10}%">
          <span class="bar-label">透气性</span>
        </div>
      </div>
    `;
  }
  
  // 创建碳排放图表
  function createCarbonChart(material) {
    const carbonChart = document.getElementById('carbon-chart');
    const sustainabilityPercentage = material.sustainability;
    
    // 创建圆环进度条
    carbonChart.innerHTML = `
      <div class="carbon-circle">
        <svg viewBox="0 0 36 36">
          <path class="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path class="circle-progress"
            stroke-dasharray="${sustainabilityPercentage}, 100"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" class="percentage">${sustainabilityPercentage}%</text>
        </svg>
      </div>
    `;
  }
  
  // 初始化控制按钮
  function initControls() {
    // 旋转按钮
    document.getElementById('rotate-left').addEventListener('click', () => {
      materialWall.classList.add('rotate-left');
      setTimeout(() => {
        materialWall.classList.remove('rotate-left');
      }, 500);
    });
    
    document.getElementById('rotate-right').addEventListener('click', () => {
      materialWall.classList.add('rotate-right');
      setTimeout(() => {
        materialWall.classList.remove('rotate-right');
      }, 500);
    });
    
    // 缩放按钮
    document.getElementById('zoom-in').addEventListener('click', () => {
      materialWall.classList.add('zoom-in');
      // 移除其他缩放类
      materialWall.classList.remove('zoom-out');
    });
    
    document.getElementById('zoom-out').addEventListener('click', () => {
      materialWall.classList.add('zoom-out');
      // 移除其他缩放类
      materialWall.classList.remove('zoom-in');
    });
    
    // 重置视图按钮
    document.getElementById('reset-view').addEventListener('click', () => {
      materialWall.classList.remove('rotate-left', 'rotate-right', 'zoom-in', 'zoom-out');
    });
    
    // 分类按钮
    categoryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        filterMaterials(category);
      });
    });
    
    // 关闭模态框按钮
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        modal.querySelector('.modal-content').classList.remove('vogue-animation');
      });
    }
    
    // 点击模态框外部关闭
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        modal.querySelector('.modal-content').classList.remove('vogue-animation');
      }
    });
  }
  
  // 初始化材质库
  createMaterialWall();
  initControls();
  
  // 公开接口
  return {
    filterMaterials,
    openMaterialDetails
  };
}

// 在页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  const materialLibrary = initMaterialLibrary();
  
  // 将对象附加到window，以便其他脚本访问
  window.materialLibrary = materialLibrary;
}); 