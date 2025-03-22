import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimonials, CaseStudies, Contact, Footer, Hero, Process, Services, Team, CTA, Proof } from './container';
import { Menu } from './components';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { useEffect } from 'react';

injectSpeedInsights();
inject();

const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://spurng.kit.com/25a26cbb48/index.js';
    script.async = true;
    script.setAttribute('data-uid', '25a26cbb48');
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container">
      <Menu />
      <Hero />
      <Services />
      <Process />
      <CTA />
      <CaseStudies />
      <Team />
       <Testimonials />
      <Proof />
      <Contact />
      <Footer />
      </div>
  );
};

export default App;
