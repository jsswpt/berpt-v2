import {
  RouterProvider,
  Routes,
  Route,
  useLocation,
  Router,
  Navigator,
} from "react-router-dom";
import { Home } from "./home/home";
import { Other } from "./other/other";
import { AnimatePresence } from "framer-motion";

export const Routing = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </AnimatePresence>
  );
};
