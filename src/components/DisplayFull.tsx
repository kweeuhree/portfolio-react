import {
  Typography,
  CardMedia,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";

import { ProjectHeader } from "./index";
import type { Project } from "../types/projectTypes";

import { getUrl } from "../utils/index";

type Props = {
  project: Project;
  fullDisplay: boolean;
  toggleDisplay: (newIndex: number) => void;
  index: number;
};

export const DisplayFull: React.FC<Props> = ({
  project,
  fullDisplay,
  toggleDisplay,
  index,
}) => {
  const { video, details } = project;
  if (!video) {
    throw new Error("Could not load video");
  }

  const cloudinaryUrl = getUrl(video);

  return (
    <section className="padding-2rem">
      {/* Top Section: title and links */}
      <ProjectHeader
        project={project}
        fullDisplay={fullDisplay}
        toggleDisplay={toggleDisplay}
        index={index}
      />

      {/* Middle Section: video and thumbnails */}
      <div className="display-flex flex-center center-column margin-top-2rem">
        <CardMedia
          component="video"
          src={cloudinaryUrl}
          controls
          className="full-width border-radius-4px"
        />
      </div>

      {/* Bottom section: project details */}
      <div className="margin-top-2rem">
        <div className="test-background display-flex flex-center center-column">
          <Typography variant="h5" component="h2" gutterBottom>
            Project Overview
          </Typography>

          <TableContainer className="full-width">
            <table>
              <tbody>
                {Object.entries(details).map(([point, detail]) => (
                  <TableRow key={point}>
                    <TableCell className="border">
                      <h2>{point}</h2>
                      <p>{detail}</p>
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
