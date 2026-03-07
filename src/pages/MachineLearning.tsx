export default function MachineLearning() {
  return (
    <div className="container">
      <div className="hero">
        <div className="badge">Modeling</div>
        <h1 className="h1">Machine Learning</h1>
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

          <h2>Input Files</h2>
          <p className="lead" style={{ fontSize: 14 }}>
            The forecasting model uses historical surveillance data from <b>hepc_clean.csv</b>.
          </p>
          <div className="kv">
            <b>Dataset</b>
            <span>hepc_clean.csv (historical surveillance)</span>
            <b>Main vars</b>
            <span>Zone, Year, HepC_Cases, HepC_Rate</span>
          </div>

          <p className="lead" style={{ fontSize: 13, marginTop: 12 }}>
            (Links will be added later.)
          </p>
        </div>

        <div className="card toc">
          <h2>On This Page</h2>
          <a href="#objective">Project Objective</a>
          <a href="#why-ml">Why Machine Learning Fits</a>
          <a href="#targets">Prediction Targets</a>
          <a href="#features">Input Data &amp; Features</a>
          <a href="#design">Forecasting Model Design</a>
          <a href="#output">Output Structure</a>
          <a href="#planning">How Results Support Intervention Planning</a>
          <a href="#links">Notebook &amp; Code Links</a>
          <a href="#download">Download Forecast Dataset</a>
        </div>
      </div>

      <div className="section">
        <div className="card article">
          <h2 id="objective">Project Objective</h2>
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

          <h2 id="why-ml">Why Machine Learning Fits This Project</h2>
          <p>
            Historical data alone shows where Hepatitis C was severe in the past. Forecasting enables a proactive approach
            by estimating where the situation may become more serious in the future.
          </p>

          <h2 id="targets">Prediction Target</h2>
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

          <h2 id="features">Input Data and Features</h2>
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

          <h2 id="design">Forecasting Model Design</h2>
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

          <h2 id="output">Output Structure</h2>
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

          <h2 id="planning">How Model Results Support Intervention Planning</h2>
          <p>
            The forecasting results are integrated into a <b>Power BI dashboard</b>.
          </p>
          <p><b>The dashboard visualizes:</b></p>
          <ul>
            <li>historical Hepatitis C trends</li>
            <li>predicted future trends</li>
            <li>comparisons across health zones</li>
          </ul>
          <p>
            This allows us to highlight regions where Hepatitis C burden may remain higher in the future. Public health
            teams can then focus outreach and harm-reduction services in those areas.
          </p>

          <div className="divider" />

          <h2 id="links">Notebook and Code Links</h2>
          <p className="lead" style={{ fontSize: 15 }}>
            Links are intentionally left blank for now—send me the URLs later and I’ll wire them in.
          </p>
          <div className="btnrow">
            <a className="btn" href="https://colab.research.google.com/drive/1hCahzPL4My5bOGSyG8bZ3hhhsBmHHqwR?usp=sharing" target="_blank" rel="noreferrer">
              Open Colab Notebook
            </a>
            <a className="btn" href="#" onClick={(e) => e.preventDefault()}>
              View Forecasting Notebook (TBD)
            </a>
          </div>

          <h2 id="download">Download Forecast Dataset</h2>
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
