import React from "react";
import Container from "../../components/Container";
import { Icon } from "@iconify/react";

const HomePage = () => {
  return (
    <div>
      <Container>
        <h2>This is Home Page</h2>
        <Icon icon="solar:airbuds-remove-outline" width="24" height="24" />
      </Container>
    </div>
  );
};

export default HomePage;
