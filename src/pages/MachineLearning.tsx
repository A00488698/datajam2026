import { useEffect } from 'react';

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  // Offset for sticky header
  const y = el.getBoundingClientRect().top + window.scrollY - 90;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function setAnchor(id: string) {
  // HashRouter uses window.location.hash like "#/machine-learning".
  // We append a second # for in-page anchor: "#/machine-learning#objective".
  const base = '#/machine-learning';
  window.location.hash = `${base}#${id}`;
}

export default function MachineLearning() {
  // On load / refresh, support URLs like: #/machine-learning#objective
  useEffect(() => {
    const h = window.location.hash || '';
    const base = '#/machine-learning';
    if (!h.startsWith(base)) return;
    const rest = h.slice(base.length);
    if (!rest.startsWith('#')) return;
    const id = rest.slice(1);
    if (!id) return;

    // Let layout paint first
    setTimeout(() => scrollToId(id), 0);
  }, []);

  return (
    <div className="container">
      <div className="hero">
        <div className="badge">Modeling</div>
        <h1 className="h1">Forecasting Model</h1>
        <p className="lead">
          This section explains the forecasting model used in our project to estimate future Hepatitis C burden across
          Nova Scotia health zones.
        </p>
        <div className="pills">
          <div className="pill">
            <span className="dot" /> Prophet forecasting
          </div>
          <div className="pill">
            <span className="dot" /> Zone-level models
          </div>
          <div className="pill">
            <span className="dot" /> Cases + Rate targets
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <h2>Quick Actions</h2>
          <div className="btnrow">
            <a
              className="btn primary"
              href="https://colab.research.google.com/drive/1hCahzPL4My5bOGSyG8bZ3hhhsBmHHqwR?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Notebook &amp; Code
            </a>
            <a
              className="btn"
              href="https://drive.google.com/uc?export=download&id=1bQham1KIlc_HAunzAvvouq8SCKPyI3G7"
              target="_blank"
              rel="noreferrer"
            >
              Download Forecast CSV
            </a>
          </div>

          <div className="divider" />

          <h2>Datasets</h2>
          <p className="lead" style={{ fontSize: 14 }}>
            Downloads for the core files used in the workflow.
          </p>

          <div className="divider" />

          <div className="card dataset-card" style={{ padding: 14, marginBottom: 12 }}>
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

          <div className="card dataset-card" style={{ padding: 14 }}>
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

        <div className="card toc">
          <h2>On This Page</h2>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setAnchor('objective');
              scrollToId('objective');
            }}
          >
            1. Project Objective
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setAnchor('why-ml');
              scrollToId('why-ml');
            }}
          >
            2. Why Machine Learning Fits
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setAnchor('targets');
              scrollToId('targets');
            }}
          >
            3. Prediction Targets
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setAnchor('features');
              scrollToId('features');
            }}
          >
            4. Input Data &amp; Features
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setAnchor('design');
              scrollToId('design');
            }}
          >
            5. Forecasting Model Design
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setAnchor('output');
              scrollToId('output');
            }}
          >
            6. Output Structure
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setAnchor('planning');
              scrollToId('planning');
            }}
          >
            7. How Results Support Intervention Planning
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setAnchor('links');
              scrollToId('links');
            }}
          >
            8. Notebook &amp; Code
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setAnchor('download');
              scrollToId('download');
            }}
          >
            9. Download Forecast Dataset
          </a>
        </div>
      </div>

      <div className="section">
        <div className="card article">
          <h2 id="objective">1. Project Objective</h2>
          <p>
            The goal of the machine learning component is to identify which regions may experience higher Hepatitis C
            burden in the coming years.
          </p>
          <p>
            By forecasting both <b>HepC cases</b> and <b>HepC infection rates</b>, we can highlight regions where the
            disease may remain severe or increase over time.
          </p>

          <div className="callout">
            <b>Why this matters:</b> these insights help support decisions on where public health resources and outreach
            programs should be prioritized.
          </div>

          <h2 id="why-ml">2. Why Machine Learning Fits This Project</h2>
          <p>
            Historical data alone shows where Hepatitis C was severe in the past. Forecasting enables a proactive approach
            by estimating where the situation may become more serious in the future.
          </p>

          <h2 id="targets">3. Prediction Targets</h2>
          <p>Two forecasting targets are used:</p>
          <ul>
            <li>
              <b>HepC Cases</b> — predicted number of confirmed Hepatitis C cases in each zone.
            </li>
            <li>
              <b>HepC Rate</b> — predicted infection rate per 100,000 population.
            </li>
          </ul>
          <p>
            Cases help estimate service demand, while rates help compare relative risk across regions.
          </p>

          <h2 id="features">4. Input Data &amp; Features</h2>
          <p>The forecasting model uses historical surveillance data from: <b>hepc_clean.csv</b>.</p>
          <ul>
            <li>
              <b>Zone</b> — Nova Scotia health zones (Central, Eastern, Northern, Western)
            </li>
            <li>
              <b>Year</b> — reporting year
            </li>
            <li>
              <b>HepC_Cases</b> — number of confirmed cases
            </li>
            <li>
              <b>HepC_Rate</b> — infection rate per 100,000 population
            </li>
          </ul>
          <p>These historical trends are used to train the time-series model.</p>

          <h2 id="design">5. Forecasting Model Design</h2>
          <p>
            We use <b>Prophet</b>, a time-series forecasting model designed for structured temporal data.
          </p>
          <p><b>Model workflow:</b></p>
          <ol>
            <li>Separate the data by health zone</li>
            <li>Train one model for HepC cases</li>
            <li>Train one model for HepC rate</li>
            <li>Generate forecasts for future years</li>
            <li>Combine historical and predicted values into one dataset</li>
          </ol>
          <p>
            This allows us to compare past trends with predicted future patterns.
          </p>

          <h2 id="output">6. Output Structure</h2>
          <p>
            The final output dataset contains both historical data and forecasted values.
          </p>
          <p><b>Fields include:</b></p>
          <ul>
            <li>Zone</li>
            <li>Year</li>
            <li>Data_Type (Actual or Forecast)</li>
            <li>HepC_Cases</li>
            <li>HepC_Rate</li>
          </ul>
          <p>
            Predicted case numbers are rounded to integers, and predicted rates are kept to one decimal place.
          </p>

          <h2 id="planning">7. How Model Results Support Intervention Planning</h2>
          <p>
            Forecasting is used here as a <b>planning tool</b>: it helps teams think proactively about where future burden
            may rise or remain high, and it supports scenario discussions alongside service coverage and operational
            constraints.
          </p>

          <div className="callout">
            <b>How to use it (without over-claiming):</b> combine forecasts with service location coverage and domain input
            to decide where to deploy interventions next. The model is one input to decision-making—not the decision
            itself.
          </div>

          <p><b>Intervention concept (example):</b></p>
          <ul>
            <li>
              Expand a mobile harm reduction unit (like MOSH in Halifax) beyond Central and use updated data to refine
              routes and deployment targets.
            </li>
          </ul>

          <p><b>Scalability roadmap:</b></p>
          <ol>
            <li>
              <b>Phase 1:</b> pilot expansion to additional zones and communities.
            </li>
            <li>
              <b>Phase 2:</b> track utilization (needles provided, tests administered, patients reached) to optimize routing.
            </li>
            <li>
              <b>Phase 3:</b> invest in additional mobile units backed by updated data and measured impact.
            </li>
          </ol>
          <p>
            Evaluation can be embedded from launch (e.g., interrupted time series), tracking outcomes monthly via a
            real-time dashboard.
          </p>

          <div className="divider" />

          <h2 id="links">8. Notebook and Code</h2>
          <p className="lead" style={{ fontSize: 15 }}>
            All modeling code and analysis are documented in the Colab notebook.
          </p>
          <div className="btnrow">
            <a
              className="btn primary"
              href="https://colab.research.google.com/drive/1hCahzPL4My5bOGSyG8bZ3hhhsBmHHqwR?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Open Colab Notebook
            </a>
          </div>

          <h2 id="download">9. Download Forecast Dataset</h2>
          <p className="lead" style={{ fontSize: 15 }}>
            Once you provide the file, we’ll replace this placeholder button with a direct download.
          </p>
          <div className="btnrow">
            <a
              className="btn primary"
              href="https://drive.google.com/uc?export=download&id=1bQham1KIlc_HAunzAvvouq8SCKPyI3G7"
              target="_blank"
              rel="noreferrer"
            >
              Download Forecast Results CSV
            </a>
          </div>
        </div>
      </div>

      <div className="footer container">© DataJam 2026</div>
    </div>
  );
}
