import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimonials, CaseStudies, Contact, Footer, Hero, Process, Services, Team , CTA} from './container';
import { Menu } from './components';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
 
injectSpeedInsights();
inject();




const App = () => (
  <div className="container">
    <Menu />
    <Hero />
    <Services />
    <CTA />
    <CaseStudies />
    <Process />
    <Team />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

export default App;
