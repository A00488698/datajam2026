import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <div className="badge">DataJam 2026</div>
        <h1 className="h1">Predicting Avoidable Emergency Department Use in Nova Scotia</h1>
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
          <h2>Datasets Used</h2>
          <p className="lead" style={{ fontSize: 15 }}>
            Our project uses two datasets: Hepatitis C surveillance time-series data for forecasting, and clinic location
            data for mapping/access insights.
          </p>

          <div className="divider" />

          <h2>Download Data</h2>
          <div className="kv">
            <b>hepc_clean.csv</b>
            <span>Historical surveillance (Zone / Year / HepC_Cases / HepC_Rate)</span>
            <b>Download</b>
            <a
              href="https://drive.google.com/uc?export=download&id=1yocVmZa5w5jyQFKd24CGpOiY_UGPkRJ4"
              target="_blank"
              rel="noreferrer"
            >
              Download hepc_clean.csv
            </a>

            <b>Clinic_Locations_geocoded.csv</b>
            <span>Geocoded clinic locations (for spatial analysis / dashboards)</span>
            <b>Download</b>
            <a
              href="https://drive.google.com/uc?export=download&id=14kRTjxwoYwOn9oyINSf4sPjyCa9HqgMr"
              target="_blank"
              rel="noreferrer"
            >
              Download Clinic_Locations_geocoded.csv
            </a>
          </div>
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
