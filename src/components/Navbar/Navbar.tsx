"use client";

import { useState } from "react";
import Image from "next/image";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }} className="bg-white shadow-md">
      <Toolbar className="text-black flex justify-between">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </div>

        {/* Logo */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Image src="/logo.webp" alt="Priority Tire" width={150} height={50} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/products">
            <span className="cursor-pointer text-lg font-medium hover:text-gray-600">TIRES</span>
          </Link>
        </div>

        {/* Icons */}
        <div className="flex space-x-4">
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer}>
        <List className="w-64">
          <ListItem component="button" onClick={toggleDrawer}>
            <Link href="/products">
              <ListItemText primary="TIRES" />
            </Link> 
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

