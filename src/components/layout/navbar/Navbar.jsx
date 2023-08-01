import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { menuItems } from "../../../Router/Navigation";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useContext, useState } from "react";
import GoBack from "../../common/goBack/GoBack";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AuthContext } from "../../../context/AuthContext";
const drawerWidth = 200;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const { user, handleLogOut } = useContext(AuthContext);
  const userRol = user?.rol;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />

      <List>
        {menuItems.map(({ id, path, title, Icon }) => {
          return (
            <Link key={id} to={path}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={title} color="primary" />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
        {userRol === "admin" && (
          <Link to={"/dashboard"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} color="primary" />
              </ListItemButton>
            </ListItem>
          </Link>
        )}
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogOut}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={"Cerrar sesion"} color="primary" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
        }}
      >
        <Toolbar
          sx={{ gap: "20px", display: "flex", justifyContent: "space-between" }}
        >
          <Link to="/" style={{ color: "white" }}>
            Bazar-deco
          </Link>
          <IconButton
            color="secondary.primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon color="secondary.primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav" aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor={"right"}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1976d2",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
          width: "100%",
          minHeight: "100vh",
          px: 2,
        }}
      >
        <Toolbar />
        {pathname !== "/" && <GoBack />}
        <Outlet />
      </Box>
    </Box>
  );
}

export default Navbar;
