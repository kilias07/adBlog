import Footer from "./Footer";
import NavbarMenu from "./NavbarMenu";

const Layout = ({children}) => {
    return (
        <>
         <NavbarMenu />
            {children}
         <Footer />
        </>
    );
};

export default Layout;
