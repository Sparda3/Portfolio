import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="container py-4">{children}</main>
    </>
  );
};

export default Layout;
