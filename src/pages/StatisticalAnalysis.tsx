export default function StatisticalAnalysis() {
  return (
    <div className="container">
      <div className="hero">
        <div className="badge">Workshop</div>
        <h1 className="h1">Statistical Analysis</h1>
        <p className="lead">
          This page mirrors the “Statistical Analysis” workshop layout, including downloads, on-page table of contents,
          and section anchors.
        </p>
      </div>

      <div className="grid">
        <div className="card">
          <h2>Resources</h2>
          <ul>
            <li>
              Demo: sections 1.1–1.6 in the <a href="/notebooks/workshop_demo.ipynb">Demo Notebook</a>
            </li>
            <li>
              Practice: section 1.7 in the <a href="/notebooks/workshop_practice.ipynb">Practice Notebook</a>
            </li>
            <li>
              Dataset: <a href="/Penguindata.csv">Penguindata.csv</a>
            </li>
          </ul>
        </div>

        <div className="card toc">
          <h2>On This Page</h2>
          <a href="#sec-1-1">1.1 Descriptive statistics</a>
          <a href="#sec-1-2">1.2 Correlation vs. causation</a>
          <a href="#sec-1-3">1.3 Hypothesis testing basics</a>
          <a href="#sec-1-4">1.4 Choosing the right test</a>
          <a href="#sec-1-5">1.5 p‑values &amp; confidence intervals</a>
          <a href="#sec-1-6">1.6 Identifying meaningful patterns</a>
          <a href="#sec-1-7">1.7 Hands‑On Statistics Practice</a>
        </div>
      </div>

      <div className="section">
        <div className="card article">
          <h2 id="sec-1-1">1.1 Descriptive statistics (mean, median, variance, distributions)</h2>
          <p>
            Goal: what’s typical, how spread out, what’s the shape, and what looks suspicious. Keep this section as a
            scaffold—you can paste/adjust the full workshop notes later.
          </p>

          <h2 id="sec-1-2">1.2 Correlation vs. causation</h2>
          <p>Correlation is a clue, not a verdict. Use “associated with” language unless you have causal evidence.</p>

          <h2 id="sec-1-3">1.3 Statistical significance and hypothesis testing basics</h2>
          <p>Null hypothesis, test statistic, p-value (“surprise score”). Not significant ≠ no effect.</p>

          <h2 id="sec-1-4">1.4 Choosing the right test (t‑test, chi‑square, ANOVA)</h2>
          <p>Match the test to outcome type (numeric vs categorical) and number of groups.</p>

          <h2 id="sec-1-5">1.5 p‑values &amp; confidence intervals (plain English)</h2>
          <p>P-values tell surprise; confidence intervals tell effect size and uncertainty. Prefer reporting both.</p>

          <h2 id="sec-1-6">1.6 Identifying meaningful patterns</h2>
          <p>
            Workflow: define question → check quality → look at effect size → test uncertainty → sanity-check story →
            translate to action.
          </p>

          <h2 id="sec-1-7">1.7 Hands‑On Statistics Practice</h2>
          <p>
            Beginner / Medium / Advanced prompts go here. You can later copy your exact activity instructions.
          </p>
        </div>
      </div>

      <div className="footer container">© DataJam 2026</div>
    </div>
  );
}
