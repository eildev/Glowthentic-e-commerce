import React from "react";
import HeadTitle from "../../components/typography/HeadTitle";
import Container from "../../components/Container";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";

const AboutPage = () => {
  return (
    <div>
      <DynamicHelmet title="About Page " />
      <Container>
        <HeadTitle>This is About Page</HeadTitle>
        <h2>Hello World!</h2>
      </Container>
    </div>
  );
};

export default AboutPage;
