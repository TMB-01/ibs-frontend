import React, { useState } from "react";

import { 
  Header, 
  AllItems, 
  Logo, 
  NavbarItemLink, 
  Container
} from "./styles";

//comp
import NavbarToggle from "../NavbarToggle";
import Sidebar from "../Sidebar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Header>
      <Container>
        <AllItems>
          <Logo style={{fontSize: 25}}>
            <NavbarItemLink to="/">IBS</NavbarItemLink>
          </Logo>
          <NavbarToggle setOpen={setOpen} open={open} />
          <Sidebar open={open} setOpen={setOpen} />
        </AllItems>
      </Container>
    </Header>
  );
};

export default Navbar;
