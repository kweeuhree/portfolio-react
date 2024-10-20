import { useState, Suspense, lazy } from 'react';
import { getNewProjectIndex } from '../../utils';

import { Loading, Button } from '../index';

import { projectsData, symbols } from '../../models/data';
import './ProjectsStyle.css';

const LazyProject = lazy(() => import('./Project'));

const dataKeys = Object.keys(projectsData);

const Projects = () => {
  
  const [currentProject, setCurrentProject] = useState(dataKeys[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeProjectImage = (action) => {
    if (isTransitioning) return; 

    setIsTransitioning(true);
    
    const currentIndex = dataKeys.indexOf(currentProject);
    const newIndex = getNewProjectIndex(action, currentIndex, dataKeys.length);

    setTimeout(() => {
      setCurrentProject(dataKeys[newIndex]);
      setIsTransitioning(false);
    }, 500); 
  };

  return (
    <section>
        <header>Projects</header>
    <div>
  
      <div>
           
                <Suspense fallback={<Loading />}>
                  <LazyProject data={projectsData[currentProject]} isTransitioning={isTransitioning}/>
                </Suspense>

                    {/* button container */}
                  <div>
                    <Button thisClass='slider-button' symbol={symbols.backward} action={()=> changeProjectImage('backward')} />
                    <Button thisClass='slider-button' symbol={symbols.forward} action={()=> changeProjectImage('forward')} />
                  </div>
              </div>

      </div>

    </section>
  )
}

export default Projects;