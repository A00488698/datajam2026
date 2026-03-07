import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <div className="badge">DataJam 2026</div>
        <h1 className="h1">Predicting Avoidable Emergency Department Use in Nova Scotia</h1>
        <p className="lead">
          Hep C / Substance Use Option: Resource Optimization Dashboard.
        </p>
      </div>

      <div className="grid">
        <div className="card">
          <h2>Solution Overview</h2>
          <p className="lead" style={{ fontSize: 16 }}>
            A resource optimization dashboard that overlays disease burden and fatality risk against existing clinic / harm
            reduction coverage—so decision makers can prioritize the highest-impact communities.
          </p>

          <div className="divider" />

          <h2>Workflow</h2>
          <ol>
            <li>Clean and align time-series by zone</li>
            <li>Forecast Hep C burden (cases + rate)</li>
            <li>Overlay burden with service locations</li>
            <li>Compute gap scores to rank unmet need</li>
            <li>Deliver an interactive dashboard</li>
          </ol>

          <div className="divider" />

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
          <h2>Datasets</h2>
          <p className="lead" style={{ fontSize: 15 }}>
            We use two core datasets: (1) Hepatitis C surveillance by zone over time, and (2) geocoded clinic locations
            to understand resource availability.
          </p>

          <div className="divider" />

          <div className="card" style={{ padding: 14, marginBottom: 12, background: 'rgba(255,255,255,.03)' }}>
            <h2 style={{ marginBottom: 6 }}>hepc_clean.csv</h2>
            <p className="lead" style={{ fontSize: 14, marginTop: 0 }}>
              Historical surveillance time-series (Zone / Year / HepC_Cases / HepC_Rate)
            </p>
            <div className="btnrow">
              <a
                className="btn primary"
                href="https://drive.google.com/uc?export=download&id=1yocVmZa5w5jyQFKd24CGpOiY_UGPkRJ4"
                target="_blank"
                rel="noreferrer"
              >
                Download hepc_clean.csv
              </a>
            </div>
          </div>

          <div className="card" style={{ padding: 14, background: 'rgba(255,255,255,.03)' }}>
            <h2 style={{ marginBottom: 6 }}>Clinic_Locations_geocoded.csv</h2>
            <p className="lead" style={{ fontSize: 14, marginTop: 0 }}>
              Geocoded clinic locations (spatial analysis / dashboards)
            </p>
            <div className="btnrow">
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
        </div>
      </div>

      <div className="section">
        <div className="card">
          <h2>Project Summary</h2>
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div>
              <h3>The Problem (data-driven)</h3>
              <ul>
                <li>
                  Eastern and Northern Nova Scotia have had Hepatitis C rates <b>2–3× higher</b> than the rest of the
                  province consistently for over a decade (2014–2023).
                </li>
                <li>
                  Eastern zone has also had the highest substance-related fatality rates every year from 2009–2024—nearly
                  <b> double Western zone</b> over that 15-year period.
                </li>
                <li>
                  This is not a recent crisis. It is a chronic systemic failure that has never been adequately addressed.
                </li>
              </ul>
            </div>

            <div>
              <h3>What We're Building</h3>
              <ul>
                <li>
                  A resource optimization dashboard overlaying disease burden + fatality rates against existing harm
                  reduction service locations.
                </li>
                <li>
                  A gap scoring model that weights burden vs service availability to rank communities by unmet need.
                </li>
                <li>
                  An interactive dashboard to show where the system is failing and where intervention would have the
                  highest impact.
                </li>
              </ul>
            </div>
          </div>

          <div className="divider" />

          <h3>The Story We're Telling</h3>
          <p className="lead" style={{ fontSize: 15 }}>
            Here's where people are dying. Here's where the services are. Here's the gap. Here's where we'd intervene
            first if we were making the decision.
          </p>
        </div>
      </div>

      <div className="footer container">
        <div>© DataJam 2026 — site scaffolded for you to edit.</div>
      </div>
    </div>
  );
}
