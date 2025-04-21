import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
