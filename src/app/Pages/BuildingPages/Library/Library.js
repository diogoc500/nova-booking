import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import Page from "../../Commons/Page";
import NovaButton from "../../Commons/NovaButton";

// css
import "./Library.css";
import { useState } from "react";
import { red } from "@mui/material/colors";

const Library = (props) => {
  const [subPage, setSubPage] = useState(undefined);
  const [tabValue, setTabValue] = useState("groupRooms");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const paperStyle = {
    backgroundColor: "#6c6c6c",
  };

  const pages = [
    {
      id: "rooms",
      title: "Rooms",
    },
    {
      id: "materials",
      title: "Materials",
    },
    {
      id: "books",
      title: "Books",
    },
  ];

  /* preguicodromo: "preguicodromo",
    teamRooms: "teamRooms",
    soloRooms: "soloRooms",
    agoraRoom: "agoraRoom", */

  const buttons = pages.map((e, key) => (
    <Box key={key} className="library-button">
      <NovaButton onClick={() => setSubPage(e.id)} className="library-button">
        {e.title}
      </NovaButton>
    </Box>
  ));

  const noneContent = <Typography>Select an Option</Typography>;

  const booksContent = <Typography>Books content</Typography>;

  const materialsContent = <Typography>Materials content</Typography>;

  const groupRoomsContent = <Typography>Group Rooms content</Typography>;

  const soloRoomsContent = <Typography>Solo Rooms content</Typography>;

  const preguicodromoContent = <Typography>Preguiçodromo Content</Typography>;

  const agoraRoomContent = <Typography>Ágora room content</Typography>;

  const roomsScreen = () => {
    switch (tabValue) {
      case "groupRooms":
        return groupRoomsContent;
      case "soloRooms":
        return soloRoomsContent;
      case "preguicodromo":
        return preguicodromoContent;
      case "agoraRoom":
        return agoraRoomContent;
    }
  };

  const roomsContent = (
    <Box className="library-rooms-content-container">
      <Box className="library-tabs-container">
        <Tabs
          sx={{ color: "white", borderColor: "white" }}
          value={tabValue}
          onChange={handleChange}
          variant="scrollable"
          textColor="inherit"
          indicatorColor="inherit"
        >
          <Tab value="groupRooms" label="Group Rooms" />
          <Tab value="soloRooms" label="Solo Rooms" />
          <Tab value="preguicodromo" label="Preguiçodromo" />
          <Tab value="agoraRoom" label="Ágora Room" />
        </Tabs>
      </Box>
      <Box className="library-rooms-content">{roomsScreen()}</Box>
    </Box>
  );

  const centerDisplayContent = () => {
    switch (subPage) {
      case "books":
        return booksContent;
      case "materials":
        return materialsContent;
      case "rooms":
        return roomsContent;
      default:
        return noneContent;
    }
  };

  const buttonAndInfoColumn = (
    <Box className="column-1">
      <Box className="library-button-section">{buttons}</Box>
      <Box className="library-info-section">
        {subPage === "rooms" && (
          <Paper sx={paperStyle} className="library-info-card">
            <Box className="library-info-content">Item Info</Box>
          </Paper>
        )}
      </Box>
    </Box>
  );

  return (
    <Page title="Library">
      <Box className="library-page-container">
        {buttonAndInfoColumn}
        <Box className="column-2">
          <Paper sx={paperStyle} className="center-display">
            {centerDisplayContent()}
          </Paper>
        </Box>
        <Box className="column-3">
          <Paper sx={paperStyle} className="library-right-picker">
            <Box className="library-right-picker-content">
              <Typography>Picker Content</Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Page>
  );
};

export default Library;
