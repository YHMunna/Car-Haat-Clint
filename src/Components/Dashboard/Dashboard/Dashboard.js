import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import useAuth from "../../../Hooks/UseAuth";
import Orders from "../Orders/Orders";
import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import MyOrder from "../MyOrder/MyOrder";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import AdminRoute from "../../AdminRoute/AdminRoute";
import Payment from "../Payment/Payment";
import Review from "../Review/Review";
import AddBlog from "../AddBlog/AddBlog";
const drawerWidth = 200;

function Dashboard(props) {
  const { user } = useAuth();
  const { window } = props;
  const { admin } = useAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <NavLink
        style={{ textDecoration: "none", marginRight: "5px" }}
        to="/shop"
      >
        <Button variant="text" color="inherit">
          Car Shop
        </Button>
      </NavLink>
      <NavLink style={{ textDecoration: "none", marginRight: "5px" }} to="/pay">
        <Button variant="text" color="inherit">
          Payment
        </Button>
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", marginRight: "5px" }}
        to="/review"
      >
        <Button variant="text" color="inherit">
          Review
        </Button>
      </NavLink>

      <NavLink
        style={{ textDecoration: "none", marginRight: "5px" }}
        to={`${url}`}
      >
        <Button variant="text" color="inherit">
          Orders
        </Button>
      </NavLink>

      {admin && (
        <Box>
          <NavLink
            style={{ textDecoration: "none", marginRight: "5px" }}
            to={`${url}/makeAdmin`}
          >
            <Button variant="text" color="inherit">
              Make Admin
            </Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", marginRight: "5px" }}
            to={`${url}/addProduct`}
          >
            <Button variant="text" color="inherit">
              Add Product
            </Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", marginRight: "5px" }}
            to={`${url}/addBlog`}
          >
            <Button variant="text" color="inherit">
              Add Blog
            </Button>
          </NavLink>
        </Box>
      )}
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
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
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Hi, {user.displayName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Typography paragraph>
          <Switch>
            <Route exact path={path}>
              <MyOrder></MyOrder>
            </Route>
            <Route path={`${path}/review`}>
              <Review></Review>
            </Route>
            <Route path={`${path}/pay`}>
              <Payment></Payment>
            </Route>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/addBlog`}>
              <AddBlog></AddBlog>
            </AdminRoute>
          </Switch>
        </Typography>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
