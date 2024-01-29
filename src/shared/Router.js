import { BrowserRouter, Route, Routes } from "react-router-dom";
import Soobin from "pages/Soobin.jsx"
import Yeonjun from "pages/Yeonjun.jsx"
import Beomgyu from "pages/Beomgyu.jsx"
import Taehyun from "pages/Taehyun.jsx"
import Hueningkai from "pages/Hueningkai.jsx"

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Soobin />}/>
            <Route path="/soobin" element={<Soobin />}/>
            <Route path="/yeonjun" element={<Yeonjun />}/>
            <Route path="/beomgyu" element={<Beomgyu />}/>
            <Route path="/taehyun" element={<Taehyun />}/>
            <Route path="/hueningkai" element={<Hueningkai />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;