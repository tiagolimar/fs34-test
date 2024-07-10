import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Usuarios from './pages/Usuarios';
import Usuario from "./pages/Usuario.jsx";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/usuario/:nome" element={<Usuario />} />
        </>
    )
);

export default routes;
