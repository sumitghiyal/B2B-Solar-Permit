import "./styles/main.scss";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>

      <main className="flex-grow p-6">
        <h2 className="text-2xl font-semibold text-center">Welcome to Solar Planset & Permitting</h2>
        <p className="text-center mt-2 text-gray-600">
          We provide efficient and reliable solar permitting solutions across the USA.
        </p>
      </main>

      <Footer/>
    </div>
  );
};

export default App;
