import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Celebrity from "./components/celebrity";
import Behind from "./components/behind";
import Bird from "./components/bird";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> }/>
      </Routes>
      <Routes>
        <Route path="/about" element={<About /> }/>
      </Routes>
      <Routes>
        <Route path="/celebritydrama" element={<Celebrity /> }/>
      </Routes>
      <Routes>
        <Route path="/behind" element={<Behind /> }/>
      </Routes>
      <Routes>
        <Route path="/bird" element={<Bird /> }/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;