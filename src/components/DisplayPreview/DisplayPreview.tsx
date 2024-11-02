import CardHeader from '@mui/material/CardHeader';

import { ProjectIconBox } from '../IconWithTooltip/ProjectIconBox';
import { Project } from '../../types';
import { getUrl } from '../../utils/cloudinaryUtils';
import { PreviewBox } from './MUIStyles';


type Props = {
  project: Project,
  fullDisplay: boolean,
  toggleDisplay: (newIndex: number) => void;
  index: number,
}

export const DisplayPreview: React.FC<Props> = ({ project, fullDisplay, toggleDisplay, index }) => {
  const { title, subheader, githubLink, liveLink, thumbnails } = project;
  const projectLinks = { githubLink, liveLink };
  const cloudinaryUrl = getUrl(thumbnails);
  
  return (
      <>
       <PreviewBox thumbnails={cloudinaryUrl}>
          <CardHeader
           className='bg-whitesmoke border-radius-4px'
            action={
              <ProjectIconBox
                projectLinks={projectLinks}
                fullDisplay={fullDisplay}
                toggleDisplay={toggleDisplay}
                index={index}
              />
            }
            title={title}
            subheader={subheader}
          />
      </PreviewBox>
      </>
  );

}