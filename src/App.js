import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HeroSection/Hero'
import Productivity from './components/Productivity/Productivity';
import Security from './components/Security/Securuty';
import Collaboration from './components/Collaboration/Collaboration';
import Globe from './components/Footer/Globe';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div className='relative z-50'>
        <div className='absolute'>
          <Navbar />
        </div>
      </div>
      <div>
        <div className='overflow-hidden'>
          <div className='relative'>
            <img className='absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image' width='4377' src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp" alt="" />
          </div>
          <div className='hero-section px-3'>
            <Hero />
          </div>
          <div id='productivity' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
            <Productivity />
          </div>
          <div id='security' className='home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden'>
            <Security />
          </div>
          <div id='collaboration' className='home-campaign-productivity px-4 pt-8  overflow-hidden'>
            <Collaboration />
          </div>
          <Globe />
          <div className='max-w-[1280px] mx-auto relative z-[2]  px-5'>
            <ul className='lg:w-9/12 text-[14px] pt-16 text-[#7d8590] space-y-1'>
              <li><sup id="footnote-1">1</sup> This 7X times factor is based on data from the industry’s longest running analysis of fix rates Veracode State of Software Security 2023, which cites the average time to fix 50% of flaws as 198 days vs. GitHub’s fix rates of 72% of flaws with in 28 days which is at a minimum of 7X faster when compared.</li>
              <br />
              <li><sup id="footnote-2">2</sup> The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced Security, a commissioned study conducted by Forrester Consulting, 2022. Results are for a composite organization based on interviewed customers.</li>
              <br />
              <li><sup id="footnote-3">3</sup> There are now 100 million developers around the world using GitHub.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
