import React, { useEffect } from 'react';
import LessonHeader from '../general/LessonNavigation';
import DownloadButton from '../general/download';
import AudioPlayer from '../general/AudioPlayer';
import ImageViewer from '../general/ImageViewer';

const Tinkercad = () => {
  useEffect(() => {
    document.title = 'TinkerCAD Sachy';
  }, []); 
  return (
    <main role="main" className="container">
      <div className='content'>
        <div class="odstavec">
          <h1>Šachové figurky</h1>
          <p>
            Zde je návod na vytvoření šachových figuerk.
          </p>


        </div>

        <div class="odstavec">
          <h3>Věž</h3>
          <table>
            <tr>
              <td>
                <p>
                  <strong>Věž</strong> je vytvořena z kvádru o velikost <strong>25x25x50</strong> a z vrchu ze 4 stran je
                  seříznuvý.
                  Seříznutý je vytvořeným kvádrem nakloňený o 20 stupňů.
                </p>
                <p>
                  Věží bude celkem 4. A po dvou budou mít stejnou barvu. Pro každého hráče dvě věže.
                </p>
              </td>
              <td>
                <table>
                  <tr>
                    <td>
                      <ImageViewer imageUrl={"/img/tinkerCAD/bonus/věž.avif"} altText={"tinkercad-kavrd"} />
                    </td>
                    <td>
                      <ImageViewer imageUrl={"/img/tinkerCAD/bonus/věž-ořez.avif"} altText={"Ořez kvůli vziku šikmích stran"} />
                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>
        </div>

        <div class="odstavec">
          <h3>Pěšec a Střelec</h3>
          <table>
            <tr>
              <td>
                <p>
                  Pěšec a střelec jsou veli podobné postavičky. Liší se pouze v tom jak jsou velké. Střelec i pěšec mají
                  hlavičku.
                  Ta je vvytvořena z obráceného jeho těla a je taky roříznuta kvádem natočeným o 20 stupňů. Tělo mí udělané
                  stejně jako věž jen jiné rozměry.
                </p>
                <ul>
                  <li>
                    <p><strong>Pěšec</strong> je vytvořen pomocí krychle o velikosti <strong>20x20x20</strong></p>
                  </li>
                  <li>
                    <p><strong>Střelec</strong> je vytvořen pomocí kvádku o velikosti <strong>25x25x50</strong></p>
                  </li>
                </ul>
                <p>
                  Pěšců bude celkem 16. A po osmi budou mít stejnou barvu. Pro každého hráče osm pěšců.
                </p>
                <p>
                  Střelců bude celkem 4. A po dvou budou mít stejnou barvu. Pro každého hráče dva střelce.
                </p>
              </td>
              <td>
                <table>
                  <tr>
                    <td>
                      <ImageViewer imageUrl={"/img/tinkerCAD/bonus/pěšec-střelec.avif"} altText={"Hlavní pohled na hotové figurky"} />
                    </td>
                    <td>
                      <ImageViewer imageUrl={"/img/tinkerCAD/bonus/pěšec-střelec-ořez.avif"} altText={"Ořez na hotové figurky"} />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Tinkercad;
