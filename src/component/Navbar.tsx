import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Box,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'; // Import the CSS file

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box onClick={toggleDrawer(false)} sx={{ width: 250 }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component="a" href={item.href}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" elevation={1} color="default">
        <Toolbar className="navbar-toolbar">
          <Typography
            variant="h6"
            component="a"
            href="/"
            className="navbar-title"
          >
              <span className="color-w">w</span>
              <span className="color-o">o</span>
              <span className="color-r">r</span>
              <span className="color-k">k</span>
              <span className="color-b">b</span>
              <span className="color-e">e</span>
              <span className="color-n">n</span>
              <span className="color-c">c</span>
              <span className="color-h">h</span>
              <span> </span>
              <span className="color-i">i</span>
              <span className="color-n2">n</span>
              <span className="color-d">d</span>
              <span className="color-i2">i</span>
              <span className="color-a">a</span>
          </Typography>

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
              </Drawer>
            </>
          ) : (
            <Box className="navbar-links">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component="a"
                  href={item.href}
                  className="navbar-button"
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
