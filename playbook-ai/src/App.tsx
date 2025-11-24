import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import SingleCaseStudy from './pages/SingleCaseStudy';
import FounderStories from './pages/FounderStories';
import Playbooks from './pages/Playbooks';
import Newsletter from './pages/Newsletter';
import { About, Contact, Privacy, Terms } from './pages/SupportPages';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<SingleCaseStudy />} />
        <Route path="/founder-stories" element={<FounderStories />} />
        <Route path="/playbooks" element={<Playbooks />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;
