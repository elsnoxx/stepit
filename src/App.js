import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import TopNav from "./page/nav";
import Footer from './page/footer';
import Homepage from './page/homepage'
import NoPage from "./page/nopage";

// Audacity
import Audacity from './page/audacity/audacity'
import AudacityLekce1 from './page/audacity/audacity1';
import AudacityLekce2 from './page/audacity/audacity2';
import AudacityLekce3 from './page/audacity/audacity3';
import AudacityLekce4 from './page/audacity/audacity4';
import EnvAudacity from './page/audacity/env';
import AudacityProjekt from './page/audacity/projekt';
import AudacityHodnoceni from './page/audacity/hodnoceni';

// TinkerCAD
import Tinkercad from './page/tinkercad/tinkercad'
import TinkercadLekce1 from './page/tinkercad/tinkercad1';
import TinkercadLekce2 from './page/tinkercad/tinkercad2';
import TinkercadLekce3 from './page/tinkercad/tinkercad3';
import TinkercadLekce4 from './page/tinkercad/tinkercad4';
import TinkercadLekce5 from './page/tinkercad/tinkercad5';
import TinkercadUkol from './page/tinkercad/ukol';
import TinkercadLogin from './page/tinkercad/login';
import TinkercadProjekt from './page/tinkercad/projekt';
import TinkercadSachy from './page/tinkercad/sachy';
import TinkercadHodnoceni from './page/tinkercad/hodnoceni';
import TinkercadBonusukoly from './page/tinkercad/bonusukoly';

// General pages
import EndPresentation from './page/general/prezentace';

export default function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route>
          <Route index element={<Homepage />} />
          <Route path="stepit" element={<Homepage />} />
          {/* Audacity pages */}
          <Route path="audacity" element={<Audacity />} />
          <Route path="audacity/lekce1" element={<AudacityLekce1 />} />
          <Route path="audacity/lekce2" element={<AudacityLekce2 />} />
          <Route path="audacity/lekce3" element={<AudacityLekce3 />} />
          <Route path="audacity/lekce4" element={<AudacityLekce4 />} />
          <Route path="audacity/env" element={<EnvAudacity />} />
          <Route path="audacity/projekt" element={<AudacityProjekt />} />
          <Route path="audacity/hodnoceni" element={<AudacityHodnoceni />} />
          {/* TinkerCADc pages */}
          <Route path="tinkercad" element={<Tinkercad />} />
          <Route path="tinkercad/lekce1" element={<TinkercadLekce1 />} />
          <Route path="tinkercad/lekce2" element={<TinkercadLekce2 />} />
          <Route path="tinkercad/lekce3" element={<TinkercadLekce3 />} />
          <Route path="tinkercad/lekce4" element={<TinkercadLekce4 />} />
          <Route path="tinkercad/lekce5" element={<TinkercadLekce5 />} />
          <Route path="tinkercad/ukol" element={<TinkercadUkol />} />
          <Route path="tinkercad/login" element={<TinkercadLogin />} />
          <Route path="tinkercad/projekt" element={<TinkercadProjekt />} />
          <Route path="tinkercad/sachy" element={<TinkercadSachy />} />
          <Route path="tinkercad/hodnoceni" element={<TinkercadHodnoceni />} />
          <Route path="tinkercad/bonusukoly" element={<TinkercadBonusukoly />} />
          {/* General pages */}
          <Route path="prezentace" element={<EndPresentation />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

