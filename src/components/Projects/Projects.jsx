import { useState, Suspense, lazy } from 'react';

import { Loading, Button } from '../index';

import { projectsData, symbols } from '../../models/data';
import './ProjectsStyle.css';

const LazyProject = lazy(() => import('./Project'));

const dataKeys = Object.keys(projectsData);

const Projects = () => {
  
  const [currentProject, setCurrentProject] = useState(dataKeys[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeProjectImage = (action) => {
    if (isTransitioning) return; // Prevent changing during transition

    setIsTransitioning(true);
    setTimeout(() => {
      const currentIndex = dataKeys.indexOf(currentProject);
      switch(action) {
        case 'backward':
          const prevIndex = (currentIndex - 1 + dataKeys.length) % dataKeys.length;
          setCurrentProject(dataKeys[prevIndex]);
          break;
        case 'forward':
          const nextIndex = (currentIndex + 1) % dataKeys.length;
          setCurrentProject(dataKeys[nextIndex]);
          break;
      }
      setIsTransitioning(false);
    }, 500); // Transition duration
  };

  return (
    <section className='projects-section'>
        <header>Projects</header>
    <div>
  
      <div className='projects-container'>
           
                <Suspense fallback={<Loading />}>
                  <LazyProject data={projectsData[currentProject]} isTransitioning={isTransitioning}/>
                </Suspense>

                    

                  
                    {/* button container */}
                  <div className="button-container">
                    <Button thisClass='slider-button' symbol={symbols.backward} action={()=> changeProjectImage('backward')} />
                    <Button thisClass='slider-button' symbol={symbols.forward} action={()=> changeProjectImage('forward')} />
                  </div>
              </div>

      </div>

    </section>
  )
}

export default Projects;