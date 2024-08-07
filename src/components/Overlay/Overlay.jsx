import { Suspense, lazy } from 'react';
//import components
const ImageContainer = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('../ImageContainer/ImageContainer')), 700); //add delay to display Loading
  });
});
import Button from '../Button/Button';
import Loading from '../Loading/Loading';
import FormattedArray from '../FormattedArray/FormattedArray';
//import  symbols
import { symbols } from '../../models/data';
//import styles
import './OverlayStyle.css';


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