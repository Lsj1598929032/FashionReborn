# Fashion Reborn - 服装改造艺术空间

一个专业的服装改造艺术空间网站，提供创意改造服务与面料库存对接。

## 功能特点

- 材质图书馆：探索可持续材料的无限可能
- AR材质扫描器：智能识别材质，提供改造建议
- 作品档案馆：探索历史作品，获取灵感
- 灵感孵化器：激发创意，挑战自我
- 工具博物馆：探索改造工具的历史与未来
- 纤维会议：连接改造者，共享资源与技能
- 余料暗房：智能匹配库存，提供专业改造建议
- ReBorn品牌：可持续时尚品牌展示

## 技术栈

- HTML5
- CSS3
- JavaScript
- 响应式设计
- 3D 交互效果

## 必需的图片资源

请将以下图片资源添加到 `images` 目录中：

### 主要背景图片
- `fashion-reborn-bg.jpg` - 网站主背景图片（如果视频无法加载时显示）
- `fabric-texture-light.jpg` - 轻质面料纹理背景

### 品牌相关图片
- `collection-rebirth.jpg` - 重生系列产品展示图
- `collection-circular.jpg` - 循环织造系列产品展示图
- `collection-futurism.jpg` - 未来主义系列产品展示图

### 其他资源
- 视频文件 `fashion-reborn-bg.mp4` 应放置于 `videos` 目录

## 部署说明

### GitHub Pages 部署

1. 确保所有文件都在正确的目录结构中：
   ```
   ├── index.html
   ├── css/
   │   ├── styles.css
   │   └── cube-styles.css
   ├── js/
   │   └── script.js
   ├── images/
   │   ├── fashion-reborn-bg.jpg
   │   ├── fabric-texture-light.jpg
   │   ├── collection-rebirth.jpg
   │   ├── collection-circular.jpg
   │   └── collection-futurism.jpg
   ├── videos/
   │   └── fashion-reborn-bg.mp4
   └── .nojekyll
   ```

2. 在 GitHub 仓库设置中：
   - 进入 Settings > Pages
   - 选择 Source 为 "main" 分支
   - 选择 "/ (root)" 作为部署目录
   - 点击 Save

3. 等待几分钟，GitHub Pages 会自动部署你的网站
   - 部署完成后，可以通过 `https://[你的用户名].github.io/[仓库名]/` 访问

## 临时图片处理

目前在 CSS 中，我们已使用渐变色替代了图片资源，以确保网站在缺少图片时仍能正常显示。在正式部署前，请添加上述列出的图片资源，并将 CSS 文件中对应的渐变色背景替换为图片引用。

## 本地开发

1. 克隆仓库：
   ```bash
   git clone [你的仓库URL]
   ```

2. 在浏览器中打开 `index.html` 文件即可预览

## 注意事项

- 确保所有资源文件（图片、视频等）都使用相对路径
- 检查所有外部资源（如 Google Fonts）是否可访问
- 确保 JavaScript 文件中的路径引用正确

## 许可证

MIT License

## 项目特点

- **高端视觉风格**: 采用高级灰+米白为主色调，搭配陶土红作为强调色和哑光金作为装饰元素
- **响应式设计**: 自适应PC和移动设备的布局
- **3D交互体验**: 
  - 可拖动的3D立方体作品展示墙
  - 卡片3D翻转效果展示服装细节
  - 微动画提升用户体验
- **智能对接系统**: 库存对接中枢，连接改造师和面料供应商
- **社区互动**: 用户作品展示、改造挑战赛和知识共享

## 如何启动

本项目是一个前端静态网站，可以通过以下方式在本地启动：

1. 直接在浏览器中打开 `index.html` 文件
2. 或使用简单的静态文件服务器托管（如 Live Server）

```bash
# 如果你有Node.js，可以使用http-server
npm install -g http-server
http-server

# 或者使用Python的简易服务器
python -m http.server
```

## 项目结构

```
├── index.html          # 主HTML文件
├── styles.css          # 主样式表
├── cube-styles.css     # 3D立方体和组件样式
├── script.js           # 交互脚本
└── assets/             # 图片和媒体文件夹（需自行添加）
```

## 设计说明

### 1. 色彩系统
- **主色调**: 高级灰(#2F2F2F) + 米白(#FAF9F6)
- **强调色**: 陶土红(#B76E79)
- **辅助色**: 哑光金(#D4AF37)

### 2. 字体搭配
- **主标题**: Playfair Display (衬线字体)
- **正文**: Lato (现代无衬线字体)
- **特殊标注**: Montserrat (用于数字和图标文字)

### 3. 主要功能区域
- 固定导航栏
- 首页视频背景和3D展示墙
- 创意工坊（作品展示区）
- 改造社区（用户互动区）
- 库存对接系统（智能对话中枢）

## 前端技术

- **原生HTML/CSS/JavaScript**
- **CSS3动画和3D转换**
- **响应式设计原则**
- **模块化JavaScript结构**

## 未来扩展

为了完成完整的功能实现，建议进一步扩展：

1. 集成Three.js实现真正的3D展示效果
2. 添加后端API连接（如Node.js或Python Flask）
3. 实现用户认证系统
4. 开发面料库存管理系统
5. 添加AR试穿功能

## 版权信息

© 2023 Fashion Reborn. 保留所有权利。 