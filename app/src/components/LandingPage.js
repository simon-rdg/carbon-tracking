import React from "react";

const Begruessung = () => {
  const today = new Date();

  if (today.getHours() <= 10) {
    return <h1>Guten Morgen!</h1>;
  } else if (today.getHours() > 10 && today.getHours() < 18) {
    return <h1>Guten Tag!</h1>;
  } else if (today.getHours() >= 18) {
    return <h1>Guten Abend!</h1>;
  }
};

const LandingPage = () => {
  return (
    <div>
      <Begruessung />
    </div>
  );
};

export default LandingPage;
