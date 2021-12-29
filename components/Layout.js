import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <div className="shadow-md">
        <div className="md:relative mx-auto">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
