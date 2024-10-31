import { Outlet } from 'react-router-dom';

import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

import { darkPaperStyle } from '../MUIStyles/MUIStyles';

import { ShootingStar, Particles } from '../components/THREEJsComponents/index';
import { Footer } from '../components/index';


export const Layout: React.FC = () => {
  return (
   <>
    {/* canvas -- start */}
      <Canvas
        // frameloop="demand"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // opacity: '0.8',
          zIndex: -1,  // set the particles are behind the main content
        }}
      >
        <ambientLight intensity={0.5} />

        <ShootingStar />

        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={0.5} intensity={0.3} />
        </EffectComposer>
    
          <Particles />
      </Canvas>
      {/* canvas -- end */}


      {/* layout */}
      <div style={darkPaperStyle}>

        <div className="App">
          {/* Main section */}
          <Outlet />

          {/* Footer */}
          <Footer />
        </div>
      </div>
   </>
  );
};
