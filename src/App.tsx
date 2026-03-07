import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import StatisticalAnalysis from './pages/StatisticalAnalysis';
import MachineLearning from './pages/MachineLearning';

export default function App() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <div className="brand">
            <strong>DataJam 2026</strong>
            <span>Workshop Site</span>
          </div>
          <nav className="nav">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/statistical-analysis">Statistical Analysis</NavLink>
            <NavLink to="/machine-learning">Machine Learning</NavLink>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statistical-analysis" element={<StatisticalAnalysis />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
      </Routes>
    </>
  );
}
