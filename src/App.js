import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./page/layout";
import Homepage from './page/homepage'
import Audacity from './page/audacity/audacity'
import Tinkercad from './page/tinkercad/tinkercad'
import NoPage from "./page/nopage";
import AudacityLekce1 from './page/audacity/audacity1';
import AudacityLekce2 from './page/audacity/audacity2';
import AudacityLekce3 from './page/audacity/audacity3';
import AudacityLekce4 from './page/audacity/audacity4';
import EnvAudacity from './page/audacity/env';
import AudacityProjekt from './page/audacity/projekt';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="audacity" element={<Audacity />} />
          <Route path="tinkercad" element={<Tinkercad />} />
          <Route path="audacity/audacity1" element={<AudacityLekce1 />} />
          <Route path="audacity/audacity2" element={<AudacityLekce2 />} />
          <Route path="audacity/audacity3" element={<AudacityLekce3 />} />
          <Route path="audacity/audacity4" element={<AudacityLekce4 />} />
          <Route path="audacity/env" element={<EnvAudacity />} />
          <Route path="audacity/projekt" element={<AudacityProjekt />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

