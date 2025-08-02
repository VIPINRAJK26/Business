import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/ui/whatsapp";
import ScrollToTop from "./components/ScrollToTop";
import { MobileNavbar } from "./components/BottomNav";
import Loader from "./components/ui/loader";
import "./index.css";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const BuyNow = lazy(() => import("./pages/BuyNow"));
const OrderPage = lazy(() => import("./pages/Orders"));
const Contact = lazy(() => import("./pages/Contact"));
const ProfilePage = lazy(() => import("./pages/Profile"));
const Wishlist = lazy(() => import("./pages/WishList"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <WhatsAppButton />
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <Loader />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/buy-now" element={<BuyNow />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <MobileNavbar />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
