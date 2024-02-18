import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:id" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}
