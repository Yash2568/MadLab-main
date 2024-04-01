import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Container, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-commerce App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          {/* Add more menu items as needed */}
        </List>
      </Drawer>
      <Container sx={{ marginTop: '2rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://cdn.dribbble.com/users/3737070/screenshots/12726350/ecommerce_-_shoes_concept_4x.jpg"
                alt="Product Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  The Shoes Mart
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Extract your daily needd!!!!!
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">Buy Now</Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Add more product cards as needed */}
        </Grid>
      </Container>
      <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '1rem 0' }}>
        <p>&copy; 2024 E-commerce App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
