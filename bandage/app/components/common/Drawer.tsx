'use client'
import { useState } from "react";

export default function Drawer({children, menuOpen}: any) {
    const [drawerOpen, setDrawerOpen] = useState(false); // Initialize with provided isOpen state

  const handleClose = () => {
    setDrawerOpen(!drawerOpen);
  };
  console.log(menuOpen)
  const drawerStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: !menuOpen ? '0' : '-100%', // Adjust width as needed
    width: '250px', // Adjust width as needed
    height: '100vh', // Adjust height as needed
    backgroundColor: 'white', // Adjust background color
    transition: 'left 0.3s ease-in-out',
    zIndex: 10, // Ensure drawer is above other elements
  };

  return (
    <div style={drawerStyles}>
      <button onClick={handleClose}>Close</button>
      <h1>Hallo World</h1>
    </div>
  )
}