import { useRef } from 'react';
import { useIntersectionObserver } from '../../utils';
import { ImageContainer } from '../index';
//import main image
import picture from '../../assets/images/picture.png'; 
//import descriptions
import { introductionData } from '../../models/data';

import './AboutStyle.css';

export const About = () => {
  const pictureRef = useRef(null);
  const isInView = useIntersectionObserver(pictureRef);
  
  return (
    <section className='picture-section'>

      <div className="gradient" ref={pictureRef}>
              {/* picture container */}
              <ImageContainer thisClass={'image-container'} src={picture} alt="Nika's Picture"/>
            {/* text container */}
          <div className={`text-container ${isInView && 'appear'}`}>
            {/* greeting and introduction */}
            {
              Object.entries(introductionData).map(([key, text]) => (
                <div className={key} key={key}>{text}</div>
              ))
            }
      </div>

      </div>
    </section>
  )
}
