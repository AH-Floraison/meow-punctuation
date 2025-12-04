#!/bin/bash
# 自动重试推送脚本 - 会尝试多次推送直到成功

set -e

MAX_RETRIES=5
RETRY_DELAY=3

echo "🚀 开始推送代码到 GitHub..."
echo ""

for i in $(seq 1 $MAX_RETRIES); do
  echo "📤 尝试第 $i 次推送..."
  
  if git push origin main; then
    echo ""
    echo "✅ 推送成功！"
    echo "⏳ Vercel 会自动检测到更改并重新部署（通常需要 2-5 分钟）"
    echo "🌐 部署完成后，你可以在 Vercel 仪表板查看网站链接"
    exit 0
  else
    if [ $i -lt $MAX_RETRIES ]; then
      echo "❌ 推送失败，等待 ${RETRY_DELAY} 秒后重试..."
      sleep $RETRY_DELAY
    else
      echo ""
      echo "❌ 推送失败，已尝试 $MAX_RETRIES 次"
      echo ""
      echo "💡 建议："
      echo "   1. 检查网络连接"
      echo "   2. 尝试使用 VPN"
      echo "   3. 稍后再运行此脚本：./push_with_retry.sh"
      exit 1
    fi
  fi
done

