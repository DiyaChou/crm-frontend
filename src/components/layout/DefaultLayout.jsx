import React from "react";
import Footer from "./partials/Footer.comp";
import Header from "./partials/Header.comp";
import "./DefaultLayout.style.css";

const DefaultLayout = ({ children }) => {
  return (
    <div className="defaultlayout">
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
