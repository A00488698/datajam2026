import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <div className="badge">DataJam 2026</div>
        <h1 className="h1">Hep C / Substance Use Resource Optimization Dashboard</h1>
        <p className="lead">
          A data-driven tool to highlight where harm-reduction services are most needed in Nova Scotia—and how to deploy
          existing resources more effectively.
        </p>
      </div>

      <div className="card">
        <h2>Project Flow (as presented)</h2>
        <p className="lead" style={{ fontSize: 16 }}>
          We started by looking for a meaningful public-health problem in Nova Scotia Open Data. The evidence shows a
          persistent Hep C burden disparity by zone, paired with long-running substance-related fatalities. We then mapped
          existing resources and built a gap score framework to guide scalable intervention planning.
        </p>

        <div className="divider" />

        <h3>Workflow</h3>
        <ol>
          <li>
            Explore notifiable disease trends by zone and identify a persistent Hep C disparity (Eastern/Northern are 2–3×
            higher for over a decade).
          </li>
          <li>
            Confirm compounding risk via substance-related fatality trends (Eastern consistently highest over ~15 years).
          </li>
          <li>
            Inventory resources and structural constraints (ORP clinics vs needle exchange coverage).
          </li>
          <li>
            Compute a gap score: need (Hep C + fatalities) minus service availability (needle exchange weighted higher).
          </li>
          <li>
            Propose a scalable solution using existing capacity: expand a mobile harm-reduction unit (e.g., MOSH) beyond
            Halifax and optimize deployment using data.
          </li>
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
            The workflow combines disease burden trends, substance-related fatalities, and harm-reduction service
            locations. Below are the core files used in our analysis.
          </p>

          <div className="grid two" style={{ marginTop: 12 }}>
            <div className="card dataset-card">
              <div className="dataset-title">
                <code>hepc_clean.csv</code>
                <span className="badge">Burden</span>
              </div>
              <p className="dataset-meta">Hep C surveillance by zone over time (Zone / Year / HepC_Cases / HepC_Rate)</p>
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
                <span className="badge">Services</span>
              </div>
              <p className="dataset-meta">Geocoded service locations (spatial analysis / dashboard overlays)</p>
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
          <h2>The Story We're Telling</h2>
          <div className="callout">
            <b>Here’s where people are dying.</b> Here’s where the services are. Here’s the gap. Here’s where we’d
            intervene first.
          </div>
        </div>
      </div>

      <div className="footer container">
        <div>© DataJam 2026</div>
      </div>
    </div>
  );
}
