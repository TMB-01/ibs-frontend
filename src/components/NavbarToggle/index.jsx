import React from "react";
import { bool, func } from "prop-types";
import { StyledNav } from "./style";

const NavbarToggle = ({ open, setOpen, ...props }) => {
  const isExpanded = !!open;
  return (
    <StyledNav
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledNav>
  );
};

NavbarToggle.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default NavbarToggle;
