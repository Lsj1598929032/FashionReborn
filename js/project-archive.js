// 作品档案馆 - VOGUE风格交互功能

document.addEventListener("DOMContentLoaded", function() {
  initProjectArchive();
});

// 初始化项目档案馆交互
function initProjectArchive() {
  // 视图切换
  initViewSwitching();
  
  // 模拟加载时间线数据
  setTimeout(() => {
    loadTimelineData();
  }, 1500);
  
  // 模拟加载资源数据
  setTimeout(() => {
    loadResourcesData();
  }, 2000);
  
  // 初始化对比拖放功能
  initComparisonDropzones();
  
  // 初始化精选项目的悬停效果
  initFeaturedProjectEffects();
}

// 视图切换功能
function initViewSwitching() {
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
      const targetView = document.querySelector(`.${viewType}-view`);
      
      // 添加淡入动画
      targetView.style.opacity = '0';
      targetView.classList.add('active');
      
      setTimeout(() => {
        targetView.style.opacity = '1';
      }, 50);
    });
  });
}

// 加载时间线数据
function loadTimelineData() {
  const timelineContainer = document.getElementById('spiral-timeline');
  if (!timelineContainer) return;
  
  // 移除加载提示
  const loadingElement = timelineContainer.querySelector('.timeline-loading');
  if (loadingElement) {
    loadingElement.style.opacity = '0';
    setTimeout(() => {
      loadingElement.style.display = 'none';
    }, 300);
  }
  
  // 模拟时间线数据
  const timelineData = generateMockTimelineData();
  
  // 创建时间线元素
  createVogueTimeline(timelineContainer, timelineData);
}

// 生成模拟时间线数据
function generateMockTimelineData() {
  return [
    {
      id: 'p001',
      title: '解构主义牛仔系列',
      date: '2023-11',
      type: 'signature', // 标志性设计
      image: 'images/projects/p001.jpg',
      designer: '周子晴'
    },
    {
      id: 'p002',
      title: '亚麻混编立体裁剪',
      date: '2023-09',
      type: 'seasonal', // 季节系列
      image: 'images/projects/p002.jpg',
      designer: '林梦'
    },
    {
      id: 'p003',
      title: '废弃丝绸再生装置',
      date: '2023-08',
      type: 'experimental', // 实验作品
      image: 'images/projects/p003.jpg',
      designer: '陈冠宇'
    },
    {
      id: 'p004',
      title: '多元混搭拼贴系列',
      date: '2023-07',
      type: 'seasonal',
      image: 'images/projects/p004.jpg',
      designer: '王慧'
    },
    {
      id: 'p005',
      title: '立体纸艺转化服装',
      date: '2023-06',
      type: 'experimental',
      image: 'images/projects/p005.jpg',
      designer: '李明'
    },
    {
      id: 'p006',
      title: '机能主义改造系列',
      date: '2023-05',
      type: 'signature',
      image: 'images/projects/p006.jpg',
      designer: '周子晴'
    },
    {
      id: 'p007',
      title: '可拆卸模块化设计',
      date: '2023-04',
      type: 'seasonal',
      image: 'images/projects/p007.jpg',
      designer: '张雨'
    },
    {
      id: 'p008',
      title: '传统提花重构实验',
      date: '2023-03',
      type: 'experimental',
      image: 'images/projects/p008.jpg',
      designer: '刘芳'
    }
  ];
}

// 创建VOGUE风格时间线
function createVogueTimeline(container, data) {
  // 创建时间线的螺旋布局
  const spiralWrapper = document.createElement('div');
  spiralWrapper.className = 'vogue-spiral-wrapper';
  
  // 为每个项目创建时间线节点
  data.forEach((item, index) => {
    // 创建节点
    const node = document.createElement('div');
    node.className = `timeline-node ${item.type}-node`;
    node.setAttribute('data-id', item.id);
    
    // 设置节点位置（螺旋布局）
    const angle = index * (Math.PI / 4); // 45度角间隔
    const radius = 150 + index * 20; // 逐渐增大的半径
    const x = container.offsetWidth / 2 + radius * Math.cos(angle);
    const y = container.offsetHeight / 2 + radius * Math.sin(angle);
    
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
    
    // 创建节点内容
    node.innerHTML = `
      <div class="node-image">
        <img src="${item.image || 'images/projects/placeholder.jpg'}" alt="${item.title}">
      </div>
      <div class="node-info">
        <div class="node-title">${item.title}</div>
        <div class="node-date">${item.date}</div>
        <div class="node-designer">by ${item.designer}</div>
      </div>
    `;
    
    // 添加点击事件
    node.addEventListener('click', () => {
      openProjectDetails(item);
    });
    
    // 添加动画延迟
    node.style.animationDelay = `${index * 0.15}s`;
    
    // 添加到容器
    spiralWrapper.appendChild(node);
  });
  
  // 添加连接线
  const connectingLines = document.createElement('svg');
  connectingLines.className = 'connecting-lines';
  connectingLines.setAttribute('width', container.offsetWidth);
  connectingLines.setAttribute('height', container.offsetHeight);
  
  // 将螺旋包装器添加到容器
  container.appendChild(connectingLines);
  container.appendChild(spiralWrapper);
  
  // 添加连接线
  setTimeout(() => {
    drawConnectingLines(container, data.length);
  }, 1000);
}

// 绘制连接线
function drawConnectingLines(container, nodeCount) {
  const svg = container.querySelector('.connecting-lines');
  if (!svg) return;
  
  const nodes = container.querySelectorAll('.timeline-node');
  
  for (let i = 0; i < nodes.length - 1; i++) {
    const current = nodes[i];
    const next = nodes[i + 1];
    
    // 获取节点中心点坐标
    const x1 = parseInt(current.style.left) + current.offsetWidth / 2;
    const y1 = parseInt(current.style.top) + current.offsetHeight / 2;
    const x2 = parseInt(next.style.left) + next.offsetWidth / 2;
    const y2 = parseInt(next.style.top) + next.offsetHeight / 2;
    
    // 创建SVG线
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    
    // 创建贝塞尔曲线
    const dx = Math.abs(x2 - x1) * 0.5;
    const path = `M${x1},${y1} C${x1+dx},${y1} ${x2-dx},${y2} ${x2},${y2}`;
    
    line.setAttribute('d', path);
    line.setAttribute('fill', 'none');
    line.setAttribute('stroke', '#ddd');
    line.setAttribute('stroke-width', '1');
    line.setAttribute('stroke-dasharray', '5,3');
    line.className = 'timeline-path';
    
    // 添加动画延迟
    line.style.animationDelay = `${i * 0.15 + 0.3}s`;
    
    svg.appendChild(line);
  }
}

// 打开项目详情
function openProjectDetails(project) {
  // 在这里实现项目详情弹窗逻辑
  console.log('查看项目详情:', project);
  
  // 这里可以添加弹窗显示逻辑
  alert(`查看项目: ${project.title}`);
  
  // 未来可以扩展为完整的弹窗显示更多详情
}

// 加载资源数据
function loadResourcesData() {
  const resourcesGrid = document.getElementById('resources-grid');
  if (!resourcesGrid) return;
  
  // 移除加载提示
  const loadingElement = resourcesGrid.querySelector('.resources-loading');
  if (loadingElement) {
    loadingElement.style.opacity = '0';
    setTimeout(() => {
      loadingElement.style.display = 'none';
    }, 300);
  }
  
  // 模拟资源数据
  const resourcesData = generateMockResourcesData();
  
  // 创建资源卡片
  resourcesData.forEach(resource => {
    const card = createResourceCard(resource);
    resourcesGrid.appendChild(card);
  });
}

// 生成模拟资源数据
function generateMockResourcesData() {
  return [
    {
      id: 'r001',
      title: '解构牛仔设计图谱',
      description: '包含30种牛仔解构技术和图纸',
      image: 'images/resources/resource-1.jpg',
      type: 'PDF图谱',
      size: '12MB'
    },
    {
      id: 'r002',
      title: '可持续面料库',
      description: '35种环保面料材质与物理特性数据',
      image: 'images/resources/resource-2.jpg',
      type: '材料库',
      size: '18MB'
    },
    {
      id: 'r003',
      title: '废旧再生工艺指南',
      description: '废弃服装再生实用技术与工艺流程',
      image: 'images/resources/resource-3.jpg',
      type: '技术指南',
      size: '8MB'
    },
    {
      id: 'r004',
      title: '创意扎染工艺包',
      description: '传统与现代扎染技术资源包',
      image: 'images/resources/resource-4.jpg',
      type: '工艺包',
      size: '15MB'
    },
    {
      id: 'r005',
      title: '模块化设计模板',
      description: '可拆卸与可组合服装设计模板',
      image: 'images/resources/resource-5.jpg',
      type: '设计模板',
      size: '10MB'
    },
    {
      id: 'r006',
      title: '三维立体裁剪教程',
      description: '立体裁剪视频教程与图纸',
      image: 'images/resources/resource-6.jpg',
      type: '视频+PDF',
      size: '25MB'
    }
  ];
}

// 创建资源卡片
function createResourceCard(resource) {
  const card = document.createElement('div');
  card.className = 'resource-card';
  card.setAttribute('data-id', resource.id);
  
  card.innerHTML = `
    <div class="resource-image">
      <img src="${resource.image || 'images/resources/placeholder.jpg'}" alt="${resource.title}">
    </div>
    <div class="resource-info">
      <h3 class="resource-title">${resource.title}</h3>
      <p class="resource-description">${resource.description}</p>
      <div class="resource-meta">
        <span class="resource-type">${resource.type} · ${resource.size}</span>
        <button class="download-btn">
          <i class="fas fa-download"></i> 下载
        </button>
      </div>
    </div>
  `;
  
  // 添加下载点击事件
  const downloadBtn = card.querySelector('.download-btn');
  downloadBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    downloadResource(resource);
  });
  
  // 添加卡片点击事件（预览资源）
  card.addEventListener('click', () => {
    previewResource(resource);
  });
  
  return card;
}

// 下载资源函数
function downloadResource(resource) {
  console.log('下载资源:', resource);
  
  // 这里可以实现真实的下载逻辑
  alert(`开始下载: ${resource.title}`);
}

// 预览资源函数
function previewResource(resource) {
  console.log('预览资源:', resource);
  
  // 这里可以实现预览弹窗
  alert(`预览资源: ${resource.title}`);
}

// 初始化对比拖放功能
function initComparisonDropzones() {
  const dropzoneOriginal = document.getElementById('dropzone-original');
  const dropzoneEvolved = document.getElementById('dropzone-evolved');
  const analysisContent = document.getElementById('comparison-analysis');
  
  if (!dropzoneOriginal || !dropzoneEvolved) return;
  
  // 模拟拖放功能
  [dropzoneOriginal, dropzoneEvolved].forEach(dropzone => {
    dropzone.addEventListener('click', () => {
      // 模拟选择项目的效果
      selectProjectForComparison(dropzone);
    });
  });
  
  // 对比按钮
  const vsBtn = document.getElementById('vs-btn');
  if (vsBtn) {
    vsBtn.addEventListener('click', () => {
      // 检查两个区域是否都已选择项目
      const hasOriginal = dropzoneOriginal.classList.contains('has-project');
      const hasEvolved = dropzoneEvolved.classList.contains('has-project');
      
      if (hasOriginal && hasEvolved) {
        // 生成比较分析
        generateComparisonAnalysis(analysisContent);
      } else {
        alert('请先在两侧选择作品进行比较');
      }
    });
  }
}

// 为对比选择项目
function selectProjectForComparison(dropzone) {
  // 模拟选择项目的UI
  const projects = generateMockTimelineData();
  const randomProject = projects[Math.floor(Math.random() * projects.length)];
  
  // 更新dropzone内容
  dropzone.innerHTML = `
    <div class="selected-project">
      <img src="${randomProject.image || 'images/projects/placeholder.jpg'}" alt="${randomProject.title}">
      <div class="project-preview-info">
        <h4>${randomProject.title}</h4>
        <p>${randomProject.date} · ${randomProject.designer}</p>
      </div>
    </div>
  `;
  
  // 添加已选择项目的样式
  dropzone.classList.add('has-project');
}

// 生成比较分析内容
function generateComparisonAnalysis(container) {
  if (!container) return;
  
  // 显示加载状态
  container.innerHTML = '<div class="loading-analysis"><div class="spinner"></div><p>生成设计分析中...</p></div>';
  
  // 模拟加载时间
  setTimeout(() => {
    // 生成模拟分析内容
    container.innerHTML = `
      <div class="analysis-content">
        <h4>设计演变分析</h4>
        
        <div class="analysis-section">
          <h5>材料使用变化</h5>
          <div class="progress-comparison">
            <div class="progress-item">
              <span class="progress-label">可持续材料占比</span>
              <div class="progress-bars">
                <div class="progress-bar original" style="width: 45%"><span>45%</span></div>
                <div class="progress-bar evolved" style="width: 85%"><span>85%</span></div>
              </div>
            </div>
            <div class="progress-item">
              <span class="progress-label">材料多样性</span>
              <div class="progress-bars">
                <div class="progress-bar original" style="width: 30%"><span>30%</span></div>
                <div class="progress-bar evolved" style="width: 75%"><span>75%</span></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="analysis-section">
          <h5>工艺技术进步</h5>
          <p>从初代作品的基础拼接工艺，到新作品中融入了激光切割、3D打印辅助结构等现代技术，体现了设计思路的显著进化。再生面料的处理技术也从简单的二次利用，发展为更加精细的纤维重组与功能性增强。</p>
        </div>
        
        <div class="analysis-section">
          <h5>风格语言演变</h5>
          <div class="style-tags">
            <div class="style-group">
              <span class="style-label">原始风格</span>
              <div class="tags-container">
                <span class="style-tag">极简主义</span>
                <span class="style-tag">功能导向</span>
                <span class="style-tag">单色调性</span>
              </div>
            </div>
            <div class="style-arrow">→</div>
            <div class="style-group">
              <span class="style-label">演变风格</span>
              <div class="tags-container">
                <span class="style-tag">解构主义</span>
                <span class="style-tag">混搭叙事</span>
                <span class="style-tag">材质对比</span>
                <span class="style-tag">可转换性</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="analysis-footer">
          <button class="generate-report-btn">
            <i class="fas fa-file-pdf"></i> 生成完整报告
          </button>
        </div>
      </div>
    `;
    
    // 添加报告生成按钮事件
    const reportBtn = container.querySelector('.generate-report-btn');
    if (reportBtn) {
      reportBtn.addEventListener('click', () => {
        alert('完整设计演变分析报告生成中，稍后将自动下载');
      });
    }
    
  }, 2000);
}

// 初始化精选项目的悬停效果
function initFeaturedProjectEffects() {
  const featuredProject = document.querySelector('.featured-project-main');
  if (!featuredProject) return;
  
  const projectImage = featuredProject.querySelector('.project-image');
  const detailsLink = featuredProject.querySelector('.view-details-link');
  
  if (projectImage && detailsLink) {
    // 添加鼠标悬停效果
    projectImage.addEventListener('mouseenter', () => {
      projectImage.classList.add('hover');
    });
    
    projectImage.addEventListener('mouseleave', () => {
      projectImage.classList.remove('hover');
    });
    
    // 链接悬停效果
    detailsLink.addEventListener('mouseenter', () => {
      detailsLink.classList.add('hover');
    });
    
    detailsLink.addEventListener('mouseleave', () => {
      detailsLink.classList.remove('hover');
    });
  }
} 