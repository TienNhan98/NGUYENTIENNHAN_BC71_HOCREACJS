import Header from "./header";
import Nav from "./nav";
import Content from "./content";
import Footer from "./footer";

// Phím tắt rfc

function BaiTap2() {
  return (
    <div>
      <Header />
      <div className="main">
        <Nav />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default BaiTap2;
