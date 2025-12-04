// 完全不使用客户端功能的静态页面
export default function StaticPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>静态页面测试</h1>
      <p>这个页面完全不使用 JavaScript。</p>
      <p>如果你能看到这个，说明 Next.js 基本功能正常。</p>
    </div>
  );
}

