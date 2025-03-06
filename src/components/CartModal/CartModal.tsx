"use client";
import { FC } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, ListItemText, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../../context/CartContext";


interface CartModalProps {
  open: boolean; // `open` is a boolean
  onClose: () => void; // `onClose` is a function that takes no arguments and returns void
}

export const CartModal:FC<CartModalProps> = ({ open, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        Your Cart
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <List>
            {cart.map((item) => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={item.name}
                  secondary={`$${item.price.toFixed(2)} x ${item.quantity}`}
                />
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  min="1"
                  style={{ width: "60px", marginRight: "10px" }}
                />
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </ListItem>
            ))}
          </List>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button variant="contained" color="primary">
          Checkout (${totalPrice.toFixed(2)})
        </Button>
      </DialogActions>
    </Dialog>
  );
};