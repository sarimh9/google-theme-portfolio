import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MyAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Goggles - A Search Engine</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A responsive and fully functional search engine which is made with
            ReactJS and Tailwind CSS. It can search the web for up to the minute
            results, latest images, current live news and recent videos.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Full Stack Multi-To-Do Lists</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A full-stack web-based application for creating and maintaining
            essential tasks as well as multiple lists. The backend is made using
            NodeJS and ExpressJS. It uses MongoDB as a database to preserve the
            data.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Book Listing Android App</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Book Listing Android App allows the user to get a list of published
            books on a given topic. The Google Books API is used in order to
            fetch results, parse the JSON response, create a list based on that
            data and display it to the user
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Google Chrome Extension</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Developed a "Dad Joke" google chrome extension using JavaScript to
            give a new random joke every time the user clicks on the
            extensionicon.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
