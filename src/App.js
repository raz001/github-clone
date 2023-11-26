import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HeroSection/Hero'
import Productivity from './components/Productivity/Productivity';
import Security from './components/Security/Securuty';
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
        </div>
      </div>
    </div>
  );
}

export default App;
