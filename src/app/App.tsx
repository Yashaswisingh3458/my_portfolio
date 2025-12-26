import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TerminalPage } from './components/TerminalPage';
import { ResumePage } from './components/ResumePage';
import { ProjectsPage } from './components/ProjectsPage';
import { DSAPage } from './components/DSAPage';
import { ContactPage } from './components/ContactPage';
import { MeteorCursor } from './components/MeteorCursor';
import { ParticleBackground } from './components/ParticleBackground';

// Portfolio Application v2.0
export default function App() {
  return (
    <BrowserRouter>
      <div className="dark min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-foreground overflow-hidden">
        <ParticleBackground />
        <MeteorCursor />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terminal" element={<TerminalPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/dsa" element={<DSAPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}