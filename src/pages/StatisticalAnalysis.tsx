import { useEffect } from 'react';
import problemMap from '../assets/problem-analysis-figure.jpg';
import powerbiDashboard from '../assets/problem-analysis-figure-2.jpg';
import solutionFigure from '../assets/powerbi-dashboard.jpg';

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
            ['sec-1-1', '1. Problem discovery (data audit)'],
            ['sec-1-2', '2. Burden disparity by zone'],
            ['sec-1-3', '3. Resource distribution gap'],
            ['sec-1-4', '4. Gap score concept (need vs services)'],
            ['sec-1-5', '5. Visual analytics (Power BI)'],
            ['sec-1-6', '6. Key takeaways'],
            ['sec-1-7', '7. Next steps'],
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
          <h2 id="sec-1-1">1. Problem discovery (data audit)</h2>
          <p>
            We started by exploring notifiable disease trends by zone. A persistent, multi-year disparity stood out: Hep C
            burden in Eastern and Northern Nova Scotia has remained far higher than the rest of the province.
          </p>

          <h2 id="sec-1-2">2. Burden disparity by zone</h2>
          <p>
            Eastern and Northern zones show Hepatitis C rates roughly <b>2–3× higher</b> than other zones over 2014–2023.
            Eastern also has the highest substance-related fatality burden over the last 15 years.
          </p>

          <h2 id="sec-1-3">3. Resource distribution gap</h2>
          <p>
            We then examined service availability. Nova Scotia has two major harm reduction resource types:
          </p>
          <ul>
            <li>
              <b>ORP clinics</b> (overdose prevention / recovery): 22 clinics province-wide.
            </li>
            <li>
              <b>Needle exchange</b> (directly prevents Hep C transmission): only 4 clinics province-wide.
            </li>
          </ul>
          <p>
            Needle exchange coverage is concentrated in Central; Northern and Eastern each rely on a single clinic that is
            easily overwhelmed.
          </p>

          <h2 id="sec-1-4">4. Gap score concept (need vs services)</h2>
          <p>
            Disease burden alone is not enough. A zone could have high rates but also strong coverage. What matters is the
            <b> gap between need and resources</b>.
          </p>
          <div className="callout">
            <b>Gap Score:</b> (0.5 × Normalized HepC Rate) + (0.5 × Normalized Fatality Rate) − Normalized Service Score
            <br />
            <b>Service Score:</b> weighted count of harm reduction services per zone (needle exchange counts double).
          </div>
          <p>
            Higher score → bigger gap → higher priority for intervention.
          </p>

          <h2 id="sec-1-5">5. Visual analytics (Power BI)</h2>
          <p>
            We built a dashboard to communicate burden trends and resource gaps clearly to non-technical decision makers.
          </p>

          <h2 id="sec-1-6">6. Key takeaways</h2>
          <ul>
            <li>Burden is persistent and geographically uneven across zones.</li>
            <li>
              Service availability is not evenly distributed; needle exchange coverage is especially limited outside
              Central.
            </li>
            <li>
              The gap score framework provides a transparent way to discuss where expansion (e.g., mobile services) could
              have high impact—alongside operational and community context.
            </li>
          </ul>

          <h2 id="sec-1-7">7. Next steps</h2>
          <ul>
            <li>
              Phase 1: deploy/route a mobile needle exchange + testing unit in Northern and Eastern zones.
            </li>
            <li>
              Phase 2: track utilization (needles, tests, patients reached) to optimize routing.
            </li>
            <li>
              Phase 3: invest in additional mobile units backed by updated data.
            </li>
          </ul>

          <div className="divider" />

          <h2>Power BI Visualization</h2>
          <p className="lead" style={{ fontSize: 15 }}>
            The dashboard visualizes burden over time and highlights where the gap between risk and resources is most
            severe—so public health teams can prioritize outreach and harm-reduction services.
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

          <div className="divider" />

          <h2>Problem & Analysis (Figures)</h2>
          <div className="grid two" style={{ marginTop: 12 }}>
            <div>
              <img className="figure" src={problemMap} alt="Problem map figure" />
              <div className="figcap">Map figure (problem + geographic pattern).</div>
            </div>
            <div>
              <img className="figure" src={powerbiDashboard} alt="Power BI dashboard preview" />
              <div className="figcap">Power BI dashboard preview (screenshot).</div>
            </div>
          </div>

          <div className="divider" />

          <h2>Solution Overview (Slide)</h2>
          <img className="figure" src={solutionFigure} alt="Solution overview slide" />
          <div className="figcap">Solution overview slide (gap score + mobile unit concept).</div>
        </div>
      </div>

      <div className="footer container">© DataJam 2026</div>
    </div>
  );
}
