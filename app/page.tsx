import Link from "next/link";

export default function Home() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">手作溫度 × 數位創意</div>
          <h1 className="hero-title">
            <span className="title-line">用心設計</span>
            <span className="title-line">每一份邀請</span>
          </h1>
          <p className="hero-subtitle">
            為生命中的美好時刻，創造獨一無二的數位邀請函
          </p>
          <div className="hero-cta">
            <Link href="/builder">
              <button className="btn-primary">開始設計</button>
            </Link>
            <button className="btn-secondary">瀏覽範本</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="card-mockup card-1">
            <div className="mockup-header">婚禮邀請</div>
            <div className="mockup-content"></div>
          </div>
          <div className="card-mockup card-2">
            <div className="mockup-header">生日派對</div>
            <div className="mockup-content"></div>
          </div>
          <div className="card-mockup card-3">
            <div className="mockup-header">寶寶滿月</div>
            <div className="mockup-content"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-header">
          <h2 className="section-title">為什麼選擇我們</h2>
          <p className="section-subtitle">簡單三步驟，輕鬆完成專屬邀請函</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3 className="feature-title">精選範本</h3>
            <p className="feature-desc">
              超過百款手繪插畫風格範本，每一款都充滿溫度與故事
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3 className="feature-title">自由編輯</h3>
            <p className="feature-desc">
              直覺式拖拉編輯器，文字、圖片、配色隨心所欲調整
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3 className="feature-title">即時分享</h3>
            <p className="feature-desc">
              一鍵生成專屬連結，透過社群媒體輕鬆傳遞邀請
            </p>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="showcase">
        <h2 className="section-title">精選作品</h2>
        <div className="showcase-grid">
          <div className="showcase-item item-1">
            <div className="showcase-overlay">
              <span className="showcase-category">婚禮</span>
            </div>
          </div>
          <div className="showcase-item item-2">
            <div className="showcase-overlay">
              <span className="showcase-category">派對</span>
            </div>
          </div>
          <div className="showcase-item item-3">
            <div className="showcase-overlay">
              <span className="showcase-category">慶生</span>
            </div>
          </div>
          <div className="showcase-item item-4">
            <div className="showcase-overlay">
              <span className="showcase-category">滿月</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">準備好開始了嗎？</h2>
          <p className="cta-subtitle">讓我們一起為重要的日子，留下美好的記憶</p>
          <Link href="/builder">
            <button className="btn-primary large">免費開始設計</button>
          </Link>
        </div>
        <div className="cta-decoration">
          <div className="deco-circle circle-1"></div>
          <div className="deco-circle circle-2"></div>
          <div className="deco-circle circle-3"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>邀請函工坊</h3>
            <p>用心設計每一份邀請</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>產品</h4>
              <a href="#">範本庫</a>
              <a href="#">定價方案</a>
              <a href="#">使用教學</a>
            </div>
            <div className="footer-column">
              <h4>關於</h4>
              <a href="#">我們的故事</a>
              <a href="#">聯絡我們</a>
              <a href="#">合作夥伴</a>
            </div>
            <div className="footer-column">
              <h4>支援</h4>
              <a href="#">常見問題</a>
              <a href="#">隱私政策</a>
              <a href="#">服務條款</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 邀請函工坊. 用心設計每一刻</p>
        </div>
      </footer>
    </div>
  );
}
