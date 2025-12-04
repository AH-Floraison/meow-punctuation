// 不使用客户端功能的简化主页
export default function SimpleHome() {
  return (
    <div style={{ 
      margin: 0, 
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif',
      background: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)',
      minHeight: '100vh'
    }}>
      <h1>喵标点喵屋 · Meow Punctuation Cattery</h1>
      <h2>1 the punctuation mark</h2>
      <p>这是一个完全静态的测试页面，不使用任何 JavaScript。</p>
      <p>如果你能看到这个页面，说明服务器和网络都正常。</p>
      <hr />
      <h3>联系方式</h3>
      <p>电话：07455403442</p>
      <p>微信：Katieb07455403442</p>
    </div>
  );
}

