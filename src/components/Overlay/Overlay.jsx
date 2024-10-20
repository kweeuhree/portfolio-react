import { Suspense, lazy } from 'react';

import { Button, Loading, FormattedArray} from '../index';

import { symbols } from '../../models/data';
import './OverlayStyle.css';

const ImageContainer = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('../ImageContainer/ImageContainer')), 700); //add delay to display Loading
  });
});


const Overlay = ({ overlay, closeOverlay }) => {
  return (
    <div className='overlay'>
      {/* close button */}
    <Button 
      thisClass={'close-overlay-button'} 
      // close buttom icon
      symbol={symbols.closeButton} 
      //onclick close current overlay
      action={closeOverlay} 
    />
    
    {/* overlay container */}
      <Suspense fallback={<Loading />}>
      {/* current credential with its name as alternative */}
         <ImageContainer thisClass={"overlay-image-container"} src={overlay.image} alt={overlay.name}/>
      </Suspense>
    
    {/* short description */}
    <div className='overlay-details-container'>
      <div className="overlay-details">
        <FormattedArray arr={overlay.details} />
      </div>
    </div>



  </div>
  )
}

export default Overlay;