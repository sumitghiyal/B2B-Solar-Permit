import React from "react";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2>Welcome to Solar Planset & Permitting</h2>
        <p>We design solar plansets and handle permitting across the USA.</p>
      </main>
    </div>
  );
};

export default App;
