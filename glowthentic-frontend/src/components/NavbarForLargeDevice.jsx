import React from "react";
import Container from "./Container";

const NavbarForLargeDevice = () => {
  return (
    <div className="hidden md:block bg-primary text-white border-t border-gray-500 py-5">
      <Container>
        <div className="px-2">
          <h2>This is My Large Device</h2>
        </div>
      </Container>
    </div>
  );
};

export default NavbarForLargeDevice;
