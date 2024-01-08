import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./page/layout";
import Homepage from './page/homepage'
import Audacity from './page/audacity/audacity'
import Tinkercad from './page/tinkercad/tinkercad'
import NoPage from "./page/nopage";
import audacity_lekce1 from './page/audacity/audacity1';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="audacity" element={<Audacity />} />
          <Route path="tinkercad" element={<Tinkercad />} />
          <Route path="audacity_lekce1" element={<audacity_lekce1 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
