import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
   
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5, type: "spring" }}
        >
         
          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="logo"
            src={logo}
            alt="Nurzhigit Turman"
          />
        </motion.div>
      </NavLink>
    
      <NavLinks />
    </header>
  );
};

export default Header;
