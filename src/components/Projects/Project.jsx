import { NavLink } from 'react-router-dom';
import { FormattedArray } from '../index';
import { DiGithubFull } from "react-icons/di";
import { FaExternalLinkAlt } from "react-icons/fa";


const Project = ({data, isTransitioning}) => {
  return (
    <div>
    <div>
      <div >{data.title}</div>
    
      <div>
        { 
            data.liveLink && (
              <NavLink href={data.liveLink} target="_blank" rel="noopener noreferrer">
                <span>Live<FaExternalLinkAlt /></span>
              </NavLink>
            )
          }

          <NavLink href={data.githubLink} target="_blank" rel="noopener noreferrer">
              <DiGithubFull/><span> <FaExternalLinkAlt /></span>
          </NavLink>
         
      </div>
    </div>

    <div>
      <div>
      {data.image ? ( 
         <img src={data.image} alt={data.title} />
      ) : (      
        <video src={data.video} loop={true} autoPlay="autoplay" controls="controls" muted />
      )}
      </div> 
    </div>
   
    
      <div>
        <FormattedArray arr={data.details} />
      </div>
  </div>
  )
}

export default Project;