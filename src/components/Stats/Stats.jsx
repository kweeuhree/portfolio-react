import { useState, useEffect, useRef } from 'react';
import { fetchUserData, useIntersectionObserver } from '../../utils';
import { Loading } from '../index';

import './StatsStyle.css';

export const Stats = () => {
  //reference for the container with images
  const allLanguagesRef = useRef(null);
  //observe intersections to apply animation
  const isInView = useIntersectionObserver(allLanguagesRef);

  const [languages, setLanguages] = useState([]);


  const fetchData = async () => {
    //search for user with a nickname 'kweeuhree'
    const userInfo = await fetchUserData('kweeuhree');
    return userInfo.mostUsedLang;
  }

  // fetch data once
  useEffect(() => {
    fetchData().then((langs) => setLanguages(langs));
  }, []);
 

  return (
   
    <section className='all-languages-section'>
      <h4 className={isInView ? 'animateh4' : ''}> Most used languages according to GitHub</h4>
        {/* dynamically apply animation */}
        <div className='background' ref={allLanguagesRef}>
          {!languages.length ? (
            <Loading />
          ) : (
            languages.map((lang, index) => (
              <div 
                  key={`language-hex-${index}`} 
                  className={`language ${isInView ? 'animateHex' : ''}`}
                ><span className="border-span"></span>
                    {lang[0]} {lang[1]}
              </div>
        ))
       )}
        </div>
    </section>
  )
}


    // const hexagonsJSX = () => {
    //   const hexArray = []; 

    //   for(let i = 0; i < 5; i++)  {
    //     hexArray.push((
    //     <div key={`empty-hex-${i}`} className='empty-hexagon'>
    //        <span className="border-span"></span> 
    //     </div>));
    //   }

    //   languages.map((language, index) => (
    //    hexArray.push(
    //     <div 
    //       key={`language-hex-${index}`} 
    //       className={`language ${isInView ? 'animateHex' : ''}`}
    //     ><span className="border-span"></span>
    //       {language[0]} {language[1]}
    //     </div>
    //     )));

    //   for(let i = 0; i < 4; i++)  {
    //     hexArray.push((
    //     <div key={`empty-hex-1${i}`} className='empty-hexagon' >
    //       <span className="border-span"></span> 
    //    </div>));
    //   }

    //   // console.log(hexArray, 'hex array');

    //   return hexArray;
    // }

