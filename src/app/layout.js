import Footer from "../../component/FooterSection";
import Header from "../../component/HeaderSection";
import "./globals.css";
import "./fonts/font.css"
import TopButton from "../../component/TopButton";
import Cookies from "../../component/Cookies";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
     {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" /> */}
     </head>
      <body>
       <Header/>
        <main>{children}</main>
        <TopButton/>
        <Cookies/>
        <Footer />
      </body>
    </html>
  );
}
