import {
  Typography,
  CardMedia,
  CardHeader,
  TableRow,
  TableCell, 
  TableContainer,
} from '@mui/material';

import { ProjectIconBox } from '.';
import type { Project } from '../types/projectTypes';


type Props = {
  project: Project,
  fullDisplay: boolean,
  toggleDisplay: (newIndex: number) => void;
  index: number,
}


export const DisplayFull: React.FC<Props> = ({ project, fullDisplay, toggleDisplay, index }) => {
  const { title, githubLink, liveLink, video, details, subheader } = project;
  const projectLinks = { liveLink, githubLink };

  return (
    <section className='padding-2rem'>
      {/* Top Section: title and links */}
        <div className='bg-whitesmoke border-radius-4px'>
          <CardHeader
            // className='no-padding opacity0-9'
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
        </div>

      {/* Middle Section: video and thumbnails */}
          <div className='display-flex flex-center center-column margin-top-2rem'>
            <CardMedia
              component="video"
              src={video}
              controls
             className='full-width border-radius-4px'
            />
          </div>

      {/* Bottom section: project details */}
      <div className='margin-top-2rem'>
        <div className="test-background display-flex flex-center center-column"
        >
          <Typography variant="h5" component="h2" gutterBottom>
            Project Overview
          </Typography>

         <TableContainer className="full-width">
            <table>
              <tbody>
                {Object.entries(details).map(([point, detail]) => (
                  <TableRow key={point}>
                    <TableCell className="border">
                      <h2>
                        {point}
                      </h2>
                      <p>
                        {detail}
                      </p>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </table>
          </TableContainer>
          
        </div>
      </div>
    </section>
  );
};
