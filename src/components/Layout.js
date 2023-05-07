import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div style={{ padding: "18px 120px 18px 120px" }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
