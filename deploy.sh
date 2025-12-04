#!/bin/bash
# 部署脚本 - 修复配置后推送到 GitHub 并触发 Vercel 自动部署

set -e

echo "🚀 开始部署流程..."

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
  echo "📝 发现未提交的更改，正在提交..."
  git add .
  git commit -m "Fix: Remove i18n config for App Router compatibility"
fi

# 推送到 GitHub
echo "📤 推送到 GitHub..."
git push origin main

echo "✅ 代码已推送到 GitHub！"
echo "⏳ Vercel 会自动检测到更改并重新部署（通常需要 2-5 分钟）"
echo ""
echo "💡 提示：如果推送失败，可能是网络问题，请稍后重试或使用 VPN"

