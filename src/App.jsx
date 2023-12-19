import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import MyWork from './MyWork';
import AboutMe from './AboutMe';


function App() {

  return (
    <div className='bg-black flex flex-col text-center border border-white'>
      <Navbar />
      <Hero />
      <MyWork />
      <AboutMe />
    </div>
  )
}

export default App
