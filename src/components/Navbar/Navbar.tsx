"use client";
import { useState } from "react";
import Image from "next/image";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { CartModal } from "../CartModal/CartModal";
import { useCart } from "@/context/CartContext";

const categories = [
  { name: "TIRES", path: "/products" },
  { name: "WHEELS", path: "/wheels" },
  { name: "ACCESSORIES", path: "/accessories" },
  { name: "DEALS", path: "/deals" },
  { name: "MEMBERSHIP", path: "/membership" },
  { name: "HELP CENTER", path: "/help-center" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); // State for CartModal

  const { cart } = useCart();

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
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
        <div className="hidden md:flex gap-x-8">
          {categories.map((category, index) => (
            <Link key={index} href={category.path}>
              <span className="cursor-pointer text-lg font-medium hover:text-gray-600">
                {category.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex space-x-4">
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          
          {/* Cart Icon with Badge */}
          <IconButton color="inherit" onClick={handleCartOpen}>
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          
          {/* Cart Modal */}
          <CartModal open={cartOpen} onClose={handleCartClose} />

          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer}>
        <List className="w-64">
          {categories.map((category, index) => (
            <ListItem key={index} component="button" onClick={toggleDrawer}>
              <Link href={category.path}>
                <ListItemText primary={category.name} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};