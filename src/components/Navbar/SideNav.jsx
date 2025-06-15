import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export default function SideNavbar({ isOpen, toggleSidebar }) {
  return (
    <Sidebar
      collapsed={!isOpen}
      collapsedWidth="0"
      width="250px"
      className="fixed top-0 left-0 h-full bg-white text-black z-50 shadow-md transition-all duration-300"
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: '12px 20px',
            fontFamily: 'Roboto, sans-serif',
            textTransform: 'uppercase',
            fontSize: '13px',
            letterSpacing: '0.05em',
          },
        }}
      >
        <MenuItem>
          <Link to="/" onClick={toggleSidebar}>
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/shop" onClick={toggleSidebar}>
            Shop
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/planmykitchen" onClick={toggleSidebar}>
            Plan My Kitchen
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about" onClick={toggleSidebar}>
            About Us
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/gallery" onClick={toggleSidebar}>
            Gallery
          </Link>
        </MenuItem>
        <MenuItem>
          <button
            className="bg-[#D4B254] text-white px-4 py-2 rounded w-full uppercase font-roboto text-sm tracking-wide"
            onClick={toggleSidebar}
          >
            My Order
          </button>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
