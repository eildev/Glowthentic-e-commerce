import React from "react";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import Container from "../../components/Container";

const TermsAndConditionsPage = () => {
  return (
    <div>
      <DynamicHelmet title="Terms and Conditions" />
      <Container>
        <h2>Terms and Conditions</h2>
      </Container>
    </div>
  );
};

export default TermsAndConditionsPage;
