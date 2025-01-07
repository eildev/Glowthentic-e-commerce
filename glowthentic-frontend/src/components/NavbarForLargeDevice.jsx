import React from "react";
import Container from "./Container";

const NavbarForLargeDevice = () => {
  return (
    <div className="px-5 hidden md:block bg-primary text-white border border-t border-gray-500 py-5">
      <Container>
        <h2>This is My Large Device</h2>
      </Container>
    </div>
  );
};

export default NavbarForLargeDevice;
