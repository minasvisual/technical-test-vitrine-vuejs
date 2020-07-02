import Home from "./pages/home";
import OfertaAdmin from "./pages/oferta-admin";

export const routes = [
  { path: "/", component: Home },
  { path: "/nova-oferta", component: OfertaAdmin },
  { path: "*", redirect: "/" }
];
