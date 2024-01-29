import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LessonHeader from '../general/LessonNavigation';
import DownloadButton from '../general/download';
import ImageViewer from '../general/ImageViewer';
import './tinkercad.css';

const TinkercadLogin = () => {
  useEffect(() => {
    document.title = 'TinkerCAD Login';
  }, []); 
  return (
    <main role="main" className="container">
      <div className='content'>
        <h1>Návod na přihlášení do TinkerCAD</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <p>
                  Otevřeme si odkaz s pozvánkou do třídy v <a href="https://www.tinkercad.com/joinclass/3QY3173UJ">TinkerCAD</a>.
                </p>
                <p>
                  Po rozkliknutí by se vám mělo zobrazit tohle okno.
                  Zde vybereme <strong>Join with Nickname</strong>.
                </p>
                <p>
                  Pak vás to vyzve na vyplnění vašeho <strong>Nickname</strong> to je vaše jmeno a přijmení. Jméno a příjmení
                  napíšeme malými písmeny a bez diakritiky.
                </p>
                <p>
                  <strong>Příklady:</strong>
                  <ul>
                    <li>Richard Ficek - richardficek</li>
                    <li>Jan Novák - jannovak</li>
                  </ul>
                </p>
                <p>
                  Pokud by jste si nevěděli rad nebo cokoliv nefungovalo prosím <a href="/contact.html">kontaktujte mě</a>.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/tinkerCAD-login.avif"} altText={"Přihlášení do TinkerCADu"} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default TinkercadLogin;
