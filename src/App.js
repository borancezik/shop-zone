import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <PageContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PageContainer>
    </div>
  );
}

export default App;
