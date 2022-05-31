import './App.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import moon from './assets/moon.png';
import land from './assets/land.png';
import cat from './assets/cat.gif'

function App() {

  return (
    <div className='App'>
      <Parallax pages={4}>
        <ParallaxLayer offset={0} speed={1} factor={2}
        className="parallax1"
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover'
          }}
        ></ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover'
          }}
        ></ParallaxLayer>
         <ParallaxLayer
          sticky={{ start: 0.2, end: 3.0 }}
        >
          <img src={cat} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0.05}>
          <h1>Hello World</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={2}>
          <h1 id='react'>React is trash!!</h1>
        </ParallaxLayer>
      </Parallax>    
    </div> 
  )
}

export default App
