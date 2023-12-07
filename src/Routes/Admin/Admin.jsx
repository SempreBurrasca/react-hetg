import * as React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

const drawerWidth = 240;
const hetgTheme = createTheme({
  palette: {
    primary: {
      main: "#95354c",
    },
  },
});
export function Admin() {
  const navigate = useNavigate();
  const location = useLocation();

  // Aggiungi questa funzione nel tuo componente Admin
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // Handle errors here
      });
  };
  return (
    <>
      <ThemeProvider theme={hetgTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Pannello di Amministrazione - HETG
              </Typography>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/admin")}
                    selected={location.pathname === "/admin"}
                  >
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Home"} />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/admin/pagine")}
                    selected={location.pathname === "/admin/pagine"}
                  >
                    <ListItemIcon>
                      <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Pagine"} />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/admin/facolta")}
                    selected={location.pathname === "/admin/facolta"}
                  >
                    <ListItemIcon>
                      <AccountBalanceIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Facoltà"} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/admin/corsi")}
                    selected={location.pathname === "/admin/corsi"}
                  >
                    <ListItemIcon>
                      <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Corsi"} />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/admin/staff")}
                    selected={location.pathname === "/admin/staff"}
                  >
                    <ListItemIcon>
                      <LocalLibraryIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Staff"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/admin/docenti")}
                    selected={location.pathname === "/admin/docenti"}
                  >
                    <ListItemIcon>
                      <LocalLibraryIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Docenti"} />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/admin/contatti")}
                    selected={location.pathname === "/admin/contatti"}
                  >
                    <ListItemIcon>
                      <ContactMailIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Moduli di contatto"} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
            <Toolbar />
            <Container>
            <Outlet />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
