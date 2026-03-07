import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <div className="badge">DataJam 2026</div>
        <h1 className="h1">Hep C / Substance Use Resource Optimization Dashboard</h1>
        <p className="lead">
          A data-driven planning tool to identify where harm reduction services are most urgently needed across Nova
          Scotia.
        </p>
      </div>

      <div className="card">
        <h2>Solution Overview</h2>
        <p className="lead" style={{ fontSize: 16 }}>
          We overlay Hep C burden and substance-related fatality risk against existing harm reduction coverage, then use a
          gap score to rank which zones are most underserved relative to need.
        </p>

        <div className="divider" />

        <h3>Workflow</h3>
        <ol>
          <li>Identify persistent burden hotspots by zone (Hep C + fatalities)</li>
          <li>Map what services exist (ORP clinics + needle exchange + mobile units)</li>
          <li>Compute a gap score: need minus service availability</li>
          <li>Prioritize where to expand services next (e.g., mobile harm reduction van routes)</li>
          <li>Deliver an interactive dashboard for planning and accountability</li>
        </ol>

        <div className="divider" />

        <div className="btnrow">
          <Link className="btn primary" to="/statistical-analysis">
            Open Problem Analysis
          </Link>
          <Link className="btn" to="/machine-learning">
            Open Forecasting Model
          </Link>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 18 }}>
        <div className="card">
          <h2>Datasets</h2>
          <p className="lead" style={{ fontSize: 15 }}>
            Our analysis combines (1) Hep C surveillance trends by zone, (2) substance-related fatality trends by zone,
            and (3) harm reduction service locations. Downloads below include the core files we used in the workflow.
          </p>

          <div className="grid two" style={{ marginTop: 12 }}>
            <div className="card dataset-card">
              <div className="dataset-title">
                <code>hepc_clean.csv</code>
                <span className="badge">Forecasting</span>
              </div>
              <p className="dataset-meta">Historical surveillance time-series (Zone / Year / HepC_Cases / HepC_Rate)</p>
              <div className="btnrow">
                <a
                  className="btn primary"
                  href="https://drive.google.com/uc?export=download&id=1yocVmZa5w5jyQFKd24CGpOiY_UGPkRJ4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download
                </a>
              </div>
            </div>

            <div className="card dataset-card">
              <div className="dataset-title">
                <code>Clinic_Locations_geocoded.csv</code>
                <span className="badge">Mapping</span>
              </div>
              <p className="dataset-meta">Geocoded clinic locations (spatial analysis / dashboards)</p>
              <div className="btnrow">
                <a
                  className="btn"
                  href="https://drive.google.com/uc?export=download&id=14kRTjxwoYwOn9oyINSf4sPjyCa9HqgMr"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="card">
          <h2>Project Summary</h2>
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div>
              <h3>The Problem</h3>
              <ul>
                <li>
                  Eastern and Northern Nova Scotia have had Hepatitis C rates <b>2–3× higher</b> than the rest of the
                  province consistently for over a decade (2014–2023).
                </li>
                <li>
                  Eastern zone has also had the highest substance-related fatality rates every year from 2009–2024—nearly
                  <b> double Western zone</b> over that 15-year period.
                </li>
                <li>This is not a recent crisis—it’s a chronic, sustained failure the data has flagged for 15 years.</li>
              </ul>
            </div>

            <div>
              <h3>Resources & Structural Gap</h3>
              <ul>
                <li>
                  ORP (opioid recovery / overdose prevention): <b>22 clinics</b> in Nova Scotia.
                </li>
                <li>
                  Needle exchange (directly prevents Hep C transmission): only <b>4 clinics</b> province-wide.
                </li>
                <li>
                  Two needle exchange clinics are in Central; Northern has one (Truro); Eastern has one (Cape Breton).
                </li>
              </ul>
            </div>
          </div>

          <div className="divider" />

          <h3>Our Solution</h3>
          <p className="lead" style={{ fontSize: 15 }}>
            Expand a mobile harm reduction unit (like MOSH in Halifax) beyond Central—guided by a gap score framework
            that quantifies unmet need and supports data-driven deployment planning.
          </p>

          <div className="callout" style={{ marginTop: 12 }}>
            <b>Story:</b> Here’s where people are dying. Here’s where the services are. Here’s the gap. Here’s where we’d
            intervene first.
          </div>
        </div>
      </div>

      <div className="footer container">
        <div>© DataJam 2026 — site scaffolded for you to edit.</div>
      </div>
    </div>
  );
}
