import React, { useState } from 'react';
import '../styles.css';

const SidebarContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Extension Sidebar</h2>
      <p>This is the sidebar content.</p>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
    </div>
  );
};

export default SidebarContent;