import {useState } from 'react';

import Overlay from '../Overlay/Overlay';
import { Card } from '../index';

import { certificationsData as data } from '../../models/certificationsData'
import './CertificationsStyle.css';


export const Certifications = () => {

  // initialize state for setting an overlay with a certification
  const [overlay, setOverlay] = useState(null);

  // display overlay
  const showOverlay = (credential) => {
    // set current credential as overlay
    setOverlay(credential);
  };

  // stop displaaying an overlay
  const closeOverlay = () => {
    // set state to null
    setOverlay(null);
  };


  return (
    <section>
     <div>
      <header>Certifications</header>
      <p>click on a card to see credential</p>
     </div>
      
      <div>

        {/* loop through all credentials and return a card per credential */}
        {Object.values(data).map((item, index) => (
          <Card 
            thisClass={'cert'} 
            data={item} 
            key={index}
            // if clicked show relevant credential 
            action={()=>showOverlay(item)}
          />
        ))}

      </div>

      {/* if overlay exists return overlay with a credential and a closing button */}
      { overlay && <Overlay overlay={overlay} closeOverlay={closeOverlay}/> }

    </section>
  );
};