import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";
import { UrqlClientProvider } from "@/urql";

function LandingPage({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default LandingPage;
