import * as React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getPagine } from "../../Firebase/RecuperoCopy";
import { Tab, Tabs } from "@mui/material";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import { EditorPagina } from "./EditorPagina/EditorPagina";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ flexGrow: 3 }}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, flexGrow: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function AdminPagine() {
  const navigate = useNavigate();
  const [pagine, setPagine] = React.useState(null);
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    // Altrimenti, recupera i dati e aggiorna localStorage
    getPagine()
      .then((data) => {
        localStorage.setItem("pagine", JSON.stringify(data)); // Aggiorna localStorage
        setPagine(data);
      })
      .catch(console.error);
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          scrollButtons={true}
          variant="scrollable"
          orientation="vertical"
        >
          {pagine &&
            pagine.map((pagina, index) => (
              <Tab label={pagina.nome} key={pagina.id} {...a11yProps(index)} />
            ))}
        </Tabs>
        {pagine &&
          pagine.map((pagina, index) => (
            <CustomTabPanel
              value={value}
              key={"panel-" + pagina.id}
              index={index}
            >
              <EditorPagina pagina={pagina} />
            </CustomTabPanel>
          ))}
      </Box>
    </>
  );
}
