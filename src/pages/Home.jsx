import React from "react";
import AppContainer from "../components/AppContainer/AppContainer";

const HomePage = () => {
  return (
    <AppContainer
      title="Boba Tracker"
      render={() => {
        return (
          <div>
            <h1>hi</h1>
          </div>
        );
      }}
    />
  );
};

export default HomePage;
