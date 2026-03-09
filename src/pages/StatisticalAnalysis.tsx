import { useEffect } from 'react';
import problemMap from '../assets/problem-analysis-figure.jpg';
import powerbiDashboard from '../assets/problem-analysis-figure-2.jpg';

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 90;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function setAnchor(id: string) {
  const base = '#/statistical-analysis';
  window.location.hash = `${base}#${id}`;
}

export default function StatisticalAnalysis() {
  useEffect(() => {
    const h = window.location.hash || '';
    const base = '#/statistical-analysis';
    if (!h.startsWith(base)) return;
    const rest = h.slice(base.length);
    if (!rest.startsWith('#')) return;
    const id = rest.slice(1);
    if (!id) return;
    setTimeout(() => scrollToId(id), 0);
  }, []);

  return (
    <div className="container">
      <div className="hero">
        <div className="badge">Analysis</div>
        <h1 className="h1">Problem Analysis</h1>
        <p className="lead">
          This page follows our pitch: problem discovery → evidence → resource gap → gap score → scalable solution.
        </p>
      </div>

      <div className="grid">
        <div className="card">
          <h2>Quick Actions</h2>
          <div className="btnrow">
            <a
              className="btn primary"
              href="https://drive.google.com/file/d/1VRzSDVXOIiZ3vspHOUelozqjouljfSuf/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Open Power BI Visualization
            </a>
            <a
              className="btn"
              href="https://drive.google.com/file/d/1gCYxD04UsK1r5mzNGze4edATEEUSKTip/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              DataClean.ipynb
            </a>
            <a
              className="btn"
              href="https://drive.google.com/file/d/1rqfIAJ4jPvaE7id3jt4M6WE8t8NlEYNI/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Mapping.ipynb
            </a>
          </div>

          <div className="divider" />

          <h2>Datasets</h2>
          <div className="btnrow">
            <a
              className="btn"
              href="https://drive.google.com/uc?export=download&id=1yocVmZa5w5jyQFKd24CGpOiY_UGPkRJ4"
              target="_blank"
              rel="noreferrer"
            >
              Download hepc_clean.csv
            </a>
            <a
              className="btn"
              href="https://drive.google.com/uc?export=download&id=14kRTjxwoYwOn9oyINSf4sPjyCa9HqgMr"
              target="_blank"
              rel="noreferrer"
            >
              Download Clinic_Locations_geocoded.csv
            </a>
          </div>
        </div>

        <div className="card toc">
          <h2>On This Page</h2>
          {[
            ['sec-1', '1. Problem discovery (Nova Scotia Open Data)'],
            ['sec-2', '2. What the data shows (persistent disparity)'],
            ['sec-3', '3. Resources & structural gap'],
            ['sec-4', '4. The solution (use what already exists)'],
            ['sec-5', '5. The gap score'],
            ['sec-6', '6. Visual analytics (Power BI)'],
            ['sec-7', '7. Scalability (Phase 1–3)'],
            ['sec-8', '8. Implementation & evaluation'],
          ].map(([id, label]) => (
            <a
              key={id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setAnchor(id);
                scrollToId(id);
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="card article">
          <h2 id="sec-1">1. Problem discovery (Nova Scotia Open Data)</h2>
          <p>
            We began by researching Nova Scotia Open Data on notifiable diseases by zone, looking for a meaningful
            problem with strong evidence. A persistent Hepatitis C disparity stood out immediately.
          </p>

          <h2 id="sec-2">2. What the data shows (persistent disparity)</h2>
          <ul>
            <li>
              In <b>Eastern</b> and <b>Northern</b> Nova Scotia, Hepatitis C rates have been <b>2–3× higher</b> than the rest
              of the province for over a decade.
            </li>
            <li>
              The <b>Eastern</b> zone has had the highest substance-related fatality rates over the past ~15 years.
            </li>
            <li>
              This is not a new crisis — it’s a chronic, sustained failure that the data has flagged for 15 years.
            </li>
          </ul>

          <h2 id="sec-3">3. Resources &amp; structural gap</h2>
          <p>We then investigated what resources exist and where capacity breaks down.</p>
          <ul>
            <li>
              <b>ORP</b> (opioid recovery / overdose prevention): <b>22 clinics</b> in Nova Scotia.
            </li>
            <li>
              <b>Needle exchange</b> (directly reduces Hep C transmission): only <b>4 clinics</b> province-wide.
            </li>
            <li>
              Two needle exchange clinics are in Central; Northern has one (Truro); Eastern has one (Cape Breton).
            </li>
          </ul>
          <p>
            In the Eastern zone, the Ally Centre of Cape Breton supports a large population and can become overwhelmed.
            Northern faces a similar constraint with only one needle exchange clinic.
          </p>

          <h2 id="sec-4">4. The solution (use what already exists)</h2>
          <p>
            Our solution leverages resources already in place in Nova Scotia. Halifax has a mobile harm reduction unit
            called <b>MOSH</b> (Mobile Outreach Street Health) that provides Hepatitis C testing and needle exchange.
          </p>
          <div className="callout">
            <b>Proposal:</b> expand the mobile program beyond Halifax to support communities that need it, guided by data.
          </div>

          <h2 id="sec-5">5. The gap score</h2>
          <p>
            We needed one simple way to answer: <b>which zones are most underserved relative to need?</b> Disease burden
            alone doesn’t tell the whole story — what matters is the gap between need and resources.
          </p>
          <div className="callout">
            <b>Gap Score</b> = (0.5 × Normalized HepC Rate) + (0.5 × Normalized Fatality Rate) − Normalized Service Score
            <br />
            <b>Service Score:</b> weighted count of harm reduction services per zone.
            <br />
            Needle exchange is weighted <b>2×</b> because it directly prevents Hep C transmission.
          </div>
          <p>
            <b>Higher score → bigger gap.</b> In our results, Central is negative while Northern and Eastern are positive.
            The mobile unit is already in Central. The data indicates it should support Northern and Eastern next.
          </p>

          <h2 id="sec-6">6. Visual analytics (Power BI)</h2>
          <p>
            We built a Power BI dashboard to translate the evidence into something a health authority could realistically
            use: trends over time, comparisons by zone, and resource overlays.
          </p>
          <div className="btnrow" style={{ marginTop: 10 }}>
            <a
              className="btn primary"
              href="https://drive.google.com/file/d/1VRzSDVXOIiZ3vspHOUelozqjouljfSuf/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Open Power BI Visualization
            </a>
            <a
              className="btn"
              href="https://drive.google.com/uc?export=download&id=1VRzSDVXOIiZ3vspHOUelozqjouljfSuf"
              target="_blank"
              rel="noreferrer"
            >
              Download PBIX
            </a>
          </div>

          <div className="grid two" style={{ marginTop: 12 }}>
            <div>
              <img className="figure-fixed" src={problemMap} alt="Problem map figure" />
              <div className="figcap">Map figure (problem + geographic pattern).</div>
            </div>
            <div>
              <img className="figure-fixed" src={powerbiDashboard} alt="Power BI dashboard preview" />
              <div className="figcap">Power BI dashboard preview (screenshot).</div>
            </div>
          </div>

          <h2 id="sec-7">7. Scalability (Phase 1–3)</h2>
          <div className="grid two" style={{ marginTop: 12 }}>
            <div className="card dataset-card" style={{ padding: 14 }}>
              <h3 style={{ marginTop: 0 }}>Phase 1</h3>
              <p className="dataset-meta">
                Bring the mobile unit to Northern and Eastern zones where resources are needed.
              </p>
            </div>
            <div className="card dataset-card" style={{ padding: 14 }}>
              <h3 style={{ marginTop: 0 }}>Phase 2</h3>
              <p className="dataset-meta">
                Track utilization to support route planning and optimization (needles provided, tests administered,
                patients reached).
              </p>
            </div>
          </div>
          <div className="card dataset-card" style={{ padding: 14, marginTop: 12 }}>
            <h3 style={{ marginTop: 0 }}>Phase 3</h3>
            <p className="dataset-meta">
              Invest in additional mobile units to expand coverage, backed by updated data.
            </p>
          </div>

          <h2 id="sec-8">8. Implementation &amp; evaluation</h2>
          <p>
            The solution is deployable immediately because the resource already exists — and the dashboard provides a way
            to manage it using data-driven insights.
          </p>
          <ul>
            <li>
              <b>Benefits of mobile needle exchange:</b> reduced stigma, improved accessibility, and opportunities to
              partner with local communities.
            </li>
            <li>
              <b>Evaluation:</b> embed evaluation from launch using an interrupted time series design with Northern Zone as
              a concurrent comparison.
            </li>
            <li>
              <b>Outcomes to track monthly:</b> HCV treatment initiation rate, SVR12, and geographic reach — via a real-time
              dashboard.
            </li>
          </ul>
        </div>
      </div>

      <div className="footer container">© DataJam 2026</div>
    </div>
  );
}
