import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <div className="badge">DataJam 2026</div>
        <h1 className="h1">Statistical Analysis &amp; Non‑LLM Machine Learning Workshop</h1>
        <p className="lead">
          同款 UI/布局 + 同款页面结构（Home / Statistical Analysis / Machine Learning）。
          你后续可以一点点替换文案、链接、文件与细节。
        </p>
      </div>

      <div className="grid">
        <div className="card">
          <h2>What we will learn</h2>
          <p className="lead" style={{ fontSize: 16 }}>
            Introduction to statistical analysis and traditional machine learning techniques to apply to hackathon
            challenges, with a focus on practical, interpretable methods for small-to-medium datasets.
          </p>

          <div className="btnrow">
            <Link className="btn primary" to="/statistical-analysis">
              Open Statistical Analysis
            </Link>
            <Link className="btn" to="/machine-learning">
              Open Machine Learning
            </Link>
          </div>
        </div>

        <div className="card">
          <h2>Downloads</h2>
          <div className="kv">
            <b>Demo</b>
            <a href="/notebooks/workshop_demo.ipynb" download>
              workshop_demo.ipynb
            </a>
            <b>Practice</b>
            <a href="/notebooks/workshop_practice.ipynb" download>
              workshop_practice.ipynb
            </a>
            <b>Dataset</b>
            <a href="/Penguindata.csv" download>
              Penguindata.csv
            </a>
          </div>
          <p className="lead" style={{ fontSize: 14, marginTop: 12 }}>
            注：这些文件目前是占位文件（用于实现“点击下载”同款功能）。你给我真实文件后我再替换。
          </p>
        </div>
      </div>

      <div className="section">
        <div className="card">
          <h2>Notes</h2>
          <ul>
            <li>GitHub Pages 支持：页面跳转、下载文件、外链跳转、锚点跳转。</li>
            <li>GitHub Pages 不支持：需要服务器的功能（比如登录、数据库、后台表单处理）——这类要用第三方服务或单独后端。</li>
          </ul>
        </div>
      </div>

      <div className="footer container">
        <div>© DataJam 2026 — site scaffolded for you to edit.</div>
      </div>
    </div>
  );
}
