import React from "react";
import Counter from "./components/Counter";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div>
      {/* Counter App */}
      <Counter />

      {/* Profile Card */}
      <ProfileCard
        name="Samuel Taiwo"
        title="Frontend Dev"
        image="https://via.placeholder.com/100"
        description="I know one day I will be Great, Learning React, and building cool projects."
      />
    </div>
  );
}

export default App;