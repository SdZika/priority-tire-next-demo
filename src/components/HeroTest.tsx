import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../lib/graphql'; 
import { CategoriesData } from '../types/category';

export function HeroTest() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { data, loading, error } = useQuery<CategoriesData>(GET_CATEGORIES);

  console.log("is there DATA:", data);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Store
        </Typography>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          <ShoppingCartIcon />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>

      {/* Categories Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {data?.categories.items.map((category) => (
          <MenuItem key={category.url_key} onClick={handleMenuClose}>
            <Box>
              <Typography>{category.name}</Typography>
              {category.children && (
                <Box sx={{ pl: 2 }}>
                  {category.children.map((child) => (
                    <Typography key={child.url_key}>{child.name}</Typography>
                  ))}
                </Box>
              )}
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}