
import CheckoutPage from "@/component/checkout/page";
import Footer from "@/component/footer";
import Error404 from "@/component/header";
import MenuPage from "@/component/menu/page";
import Navbar from "@/component/navbar";
import ProductDetailPage from "@/component/shopdetails/page";
import ShopListPage from "@/component/shoplist/page";
import Image from "next/image";
import FaqData from "@/component/faq/page"
import Signin from "@/component/Signin/page";


export default function Home() {
  return (
    <main>

      {/* <CheckoutPage />   */}
      
      
      <Navbar/>
      <Error404/>
      <ShopListPage/>
      <ProductDetailPage/>
      <FaqData/>
      <Signin/>
      <MenuPage/>

      <footer>
      <Footer/>
      </footer>
    
      </main>
       
    
    )};
