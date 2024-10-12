import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import SideMenu from "@/components/sidemenu";

export default function Home() {
  return (
    <>
      <Navbar />
      <SideMenu />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
