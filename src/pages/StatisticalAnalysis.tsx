import { useEffect } from 'react';

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
          This section summarizes the statistical analysis approach and provides access to the Power BI visualization.
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
            <a className="btn" href="/notebooks/workshop_demo.ipynb" target="_blank" rel="noreferrer">
              Demo Notebook
            </a>
            <a className="btn" href="/notebooks/workshop_practice.ipynb" target="_blank" rel="noreferrer">
              Practice Notebook
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
            ['sec-1-1', '1.1 Descriptive statistics'],
            ['sec-1-2', '1.2 Correlation vs. causation'],
            ['sec-1-3', '1.3 Hypothesis testing basics'],
            ['sec-1-4', '1.4 Choosing the right test'],
            ['sec-1-5', '1.5 p-values & confidence intervals'],
            ['sec-1-6', '1.6 Identifying meaningful patterns'],
            ['sec-1-7', '1.7 Hands-On Statistics Practice'],
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
          <h2 id="sec-1-1">1.1 Descriptive statistics (mean, median, variance, distributions)</h2>
          <p>
            We start by summarizing what is typical, how spread out values are, and whether the distribution suggests
            outliers or data quality issues.
          </p>

          <h2 id="sec-1-2">1.2 Correlation vs. causation</h2>
          <p>
            Correlation highlights association, but does not prove causation. We use this step to generate hypotheses and
            guide deeper analysis.
          </p>

          <h2 id="sec-1-3">1.3 Hypothesis testing basics</h2>
          <p>
            We apply hypothesis testing to separate signal from noise and avoid over-interpreting random variation.
          </p>

          <h2 id="sec-1-4">1.4 Choosing the right test (t-test, chi-square, ANOVA)</h2>
          <p>
            The test selection depends on the data type (numeric vs categorical) and the number of groups being
            compared.
          </p>

          <h2 id="sec-1-5">1.5 p-values &amp; confidence intervals</h2>
          <p>
            P-values measure how surprising results are under the null hypothesis; confidence intervals provide effect
            size and uncertainty.
          </p>

          <h2 id="sec-1-6">1.6 Identifying meaningful patterns</h2>
          <p>
            We focus on effect size, practical meaning, and consistency over time/zones—beyond just statistical
            significance.
          </p>

          <h2 id="sec-1-7">1.7 Hands-On Statistics Practice</h2>
          <p>
            The analysis outputs feed into the dashboard story: burden trends, zone comparisons, and resource gaps.
          </p>

          <div className="divider" />

          <h2>Power BI Visualization</h2>
          <p className="lead" style={{ fontSize: 15 }}>
            The dashboard visualizes burden over time and helps communicate where the gap between risk and resources is
            most severe.
          </p>
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
              href="https://drive.google.com/uc?export=download&id=1VRzSDVXOIiZ3vspHOUelozqjouljfSuf"
              target="_blank"
              rel="noreferrer"
            >
              Download PBIX (Google Drive)
            </a>
          </div>
        </div>
      </div>

      <div className="footer container">© DataJam 2026</div>
    </div>
  );
}
