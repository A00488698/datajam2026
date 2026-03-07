export default function MachineLearning() {
  return (
    <div className="container">
      <div className="hero">
        <div className="badge">Workshop</div>
        <h1 className="h1">Machine Learning</h1>
        <p className="lead">
          Mirrors the “Machine Learning” workshop page: resource links, table of contents, and anchored sections.
        </p>
      </div>

      <div className="grid">
        <div className="card">
          <h2>Resources</h2>
          <ul>
            <li>
              Demo: sections 2.2–2.6 in the <a href="/notebooks/workshop_demo.ipynb">Demo Notebook</a>
            </li>
            <li>
              Practice: section 2.7 in the <a href="/notebooks/workshop_practice.ipynb">Practice Notebook</a>
            </li>
            <li>
              Dataset: <a href="/Penguindata.csv">Penguindata.csv</a>
            </li>
          </ul>
        </div>

        <div className="card toc">
          <h2>On This Page</h2>
          <a href="#sec-2-1">2.1 When to use ML vs. statistics</a>
          <a href="#sec-2-2">2.2 Classification vs. regression</a>
          <a href="#sec-2-3">2.3 Common algorithms</a>
          <a href="#sec-2-4">2.4 Model evaluation basics</a>
          <a href="#sec-2-5">2.5 Feature importance</a>
          <a href="#sec-2-6">2.6 Avoiding overfitting</a>
          <a href="#sec-2-7">2.7 Mini‑Lab baseline</a>
          <a href="#sec-2-8">2.8 Hackathon reporting cheat sheet</a>
        </div>
      </div>

      <div className="section">
        <div className="card article">
          <h2 id="sec-2-1">2.1 When to use ML vs. when statistics are enough</h2>
          <p>Explanation → statistics. Prediction → ML. Define target + success metric first.</p>

          <h2 id="sec-2-2">2.2 Classification vs. regression (and when clustering fits)</h2>
          <p>Classification predicts categories; regression predicts numbers; clustering groups without labels.</p>

          <h2 id="sec-2-3">2.3 Common algorithms for tabular data</h2>
          <ul>
            <li>Logistic regression</li>
            <li>Linear regression</li>
            <li>Decision trees</li>
            <li>Random forest</li>
            <li>Clustering</li>
          </ul>

          <h2 id="sec-2-4">2.4 Model evaluation basics</h2>
          <p>Accuracy, precision, recall, F1, confusion matrix. Note imbalanced data caveats.</p>

          <h2 id="sec-2-5">2.5 Feature importance and interpretation</h2>
          <p>Prefer interpretable baselines and communicate what drives predictions.</p>

          <h2 id="sec-2-6">2.6 Avoiding overfitting (real‑world caveats)</h2>
          <p>Bias–variance tradeoff. Use train/test splits, cross-validation, and keep models simple when data is small.</p>

          <h2 id="sec-2-7">2.7 Mini‑Lab: Build a hackathon‑ready baseline</h2>
          <p>Step-by-step baseline recipe placeholder (you can paste your exact lab instructions later).</p>

          <h2 id="sec-2-8">2.8 Cheat sheet: What to report in your hackathon story</h2>
          <ul>
            <li>Problem + why it matters</li>
            <li>Data overview + cleaning</li>
            <li>Baseline + metric</li>
            <li>Key findings + interpretation</li>
            <li>Limitations + next steps</li>
          </ul>
        </div>
      </div>

      <div className="footer container">© DataJam 2026</div>
    </div>
  );
}
