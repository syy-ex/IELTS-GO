# 🚀 雅思词汇助手 - APK打包指南

## ✅ 已完成的PWA配置

你的应用现在已经支持PWA，包含以下文件：
- `manifest.json` - 应用配置清单
- `sw.js` - Service Worker（离线缓存）
- `icon-192.png` / `icon-512.png` - 应用图标
- `index.html` - 已添加PWA相关meta标签

---

## 📦 下一步：部署到网上

### 方式A：GitHub Pages（推荐，免费）

1. **创建 GitHub 账号**（如果没有）：https://github.com

2. **创建新仓库**：
   - 点击右上角 "+" → "New repository"
   - 仓库名：`ielts-vocab`（或你喜欢的名字）
   - 选择 "Public"
   - 点击 "Create repository"

3. **上传文件**：
   - 在仓库页面点击 "uploading an existing file"
   - 把 `雅思学习` 文件夹里的**所有文件**拖进去
   - 点击 "Commit changes"

4. **启用 GitHub Pages**：
   - 进入仓库 → Settings → Pages
   - Source 选择 `main` 分支
   - 点击 Save
   - 等待 1-2 分钟，你会看到一个网址，如：`https://你的用户名.github.io/ielts-vocab/`

---

## 📱 生成 APK

1. 访问 **PWABuilder**：https://www.pwabuilder.com/

2. 输入你的 GitHub Pages 网址

3. 点击 "Start" 开始分析

4. 选择 "Android" → "Package for stores"

5. 填写应用信息（可保持默认）

6. 点击 "Generate" 下载 APK

---

## 📲 安装 APK

1. 把生成的 `.apk` 文件发送到安卓手机

2. 在手机上点击 APK 文件安装
   - 可能需要在设置中允许"安装未知来源应用"

3. 完成！现在可以像普通App一样使用了

---

## 💡 提示

- **更新应用**：修改代码后重新上传到 GitHub，用户打开App时会自动更新
- **如果 PWABuilder 报错**：检查 `manifest.json` 格式是否正确
- **图标问题**：确保 `icon-192.png` 和 `icon-512.png` 是正方形 PNG 图片

---

祝你的雅思词汇App上线成功！🎉
