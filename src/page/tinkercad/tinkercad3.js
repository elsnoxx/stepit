import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LessonHeader from '../general/LessonNavigation';
import DownloadButton from '../general/download';
import ImageViewer from '../general/ImageViewer';
import ZooGenerator from '../general/ZOOGenerator';
import './tinkercad.css';
import ClassLogin from './classes';

const TinkercadLekce3 = () => {
  useEffect(() => {
    document.title = 'TinkerCAD Lekce 3';
  }, []); 
  const beforeLesson = '/tinkercad/lekce2';
  const afterLesson = '/tinkercad/lekce4';
  return (
    <main role="main" className="container">
      <div className='content'>
        <LessonHeader beforeLesson={beforeLesson} afterLesson={afterLesson} />




        <h1>Lekce 3 - Dopavní prostředky a Vesmírná raketa</h1>
        <p>V této lekci si vymodelujeme dopravní prostředek a vesmírnou raketu pro naši vesmírnou postavu.</p>

        <ClassLogin></ClassLogin>

        <div>
          <h3>Navržení vesmírného auta</h3>
          <p>
            Aby jsme ulehčili naši vesmírné postavičce pohyb po našem vesmíru. Vytvoříme jí auto. Auto bude samozřejmě ve
            vesmíru a musí odolat nepříznivím podmínkám.
          </p>
          <table>
            <tr>
              <td>
                <p>
                  Pro samotnou konstrukci auta použijeme kvádr a po stranách použijeme válce pro zaoblení naše konstrukce.
                </p>
                <p>Objekty seskupíme a necháme jim jednu barvu.</p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-1.avif"} altText={"Základní konstrukce našeho auta"} />
              </td>

            </tr>
            <tr>
              <td>
                <p>Jelikož už máme vytvořený základ lodi. Můžeme přidat kabinu lodi. Tu vytvoříme pomocí koule.</p>
                <p>Objekty seskupíme a necháme jim jednu barvu.</p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-2.avif"} altText={"Kabina na základní konstrukci"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>Dále nám bude chybět výhled z vozidla. Takže si vytvoříme 3 okna. Ty vytvoříme pomocí 3 koulí, které
                  budou mít světle modrou barvu a budou transparentní.</p>
                <p>Pokud naše okna seskupíme s objektem, tak nikdz nedocílíme našeho efektu transparetní. Proto okna
                  <strong>NESLUČUJTE</strong>
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-3.avif"} altText={"Přidání oken na kokpitu"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>Teď uděláme nárazník. Po něm nám už bude chybět jen vymyslet, jak se bude pohybovat naše vozidlo. </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-4.avif"} altText={"Nárazních vesmírného auta"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>K pohybu si vymodelujeme pásy. Ty vymodelujeme je pomocí kvádrů. Seřadíme je jak to je na obrázku a
                  objekty
                  spojíme dohromady.</p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-5.avif"} altText={"Malý díl pásu"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>Celý pás vytvoříme naklonováním jednoho našeho dílu. Uděláme si takhle 4 dlouhé pásy.</p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-6.avif"} altText={"Nejdelší část pásu"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>Poté si budeme muset vytvořit spojové klouby. Ty vytvoříme pomocí jednoho dílu z pásu.</p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-7.avif"} altText={"Ukázka jak na zaoblení pásu"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>Naše díly spojíme s pásy. Návod je na obrázcích vedle.</p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-9.avif"} altText={"Ukázka spojení dílů pásu"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>Teď si očistíme naše pásy aby nám nic nepřesahovalo bokem.</p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-10.avif"} altText={"Ukázka jak ořezat pásy"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>Takhle by měli pásy nakonec vypadat.</p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-12.avif"} altText={"Výsledný pohled na pás"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>Aby nám pás držel pohromadě a aby ho něco rozpohybovalo. Musíme si navrhnout kola. Těmi pak vyplníme naše
                  pásy a připojíme k vozidlu.</p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-13.avif"} altText={"Ozubené kolečko v pásu"} />
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-14.avif"} altText={"Pohled z prava na pásy s koly"} />
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce4/stanice-11.avif"} altText={"Pohled z leva na pásy s koly"} />
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-16.avif"} altText={"Pohled ze předu na pásy s koly"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>A jelikož se naše vozidlo nebude pohybovat jen po zemi. Vytvoříme mu i trysky. Ty přidáme na naše
                  vozidlo.</p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-17.avif"} altText={"Tvar trysky"} />
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-19.avif"} altText={"Finální pohled ze předu"} />
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-20.avif"} altText={"Finální pohled ze zadu"} />
              </td>
            </tr>
          </table>

          <h3>Vesmírná raketa</h3>
          <p>
            Abychom mohli cestovat mezi planety. Musíme si vytvořit i naši vesmírnou raketu. Pomocí ní budeme lítat z
            planety na planetu.
          </p>
          <table className="table table-bordered">
            <tr>
              <td>
                <p>
                  Nejprve si vytvoříme tělo naší rakety. Tělo se skládá z <strong>válce</strong> a
                  <strong>paraboloidu</strong>.
                </p>
                <p>
                  Strany válce nastavíme na maximum, abychom udělalai úplně hladký povrch.
                  Rozměry jsou čistě na vás, ale musí to vypadat jako raketa.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-21.avif"} altText={"Tělo rakety"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Dále potřebujeme vytvořit boční podpěry, na kterých bude naše raketa stát. Ty však musí být dostatečně
                  pevné a aby neměla naše raketa přebytečnou váhu.
                </p>

              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-25.avif"} altText={"Ořez křídla"} />
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-22.avif"} altText={"Ořez křídla"} />
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-23.avif"} altText={"Ořez křídla"} />
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-24.avif"} altText={"Ořez křídla"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Poté vše spojíme. A výsledná raketa by měla vypadat takhle.
                </p>
                <p>
                  Samozřejmě že boční podpěry nám jen nestačí. Musí se nám přece náš astronaut nějak dostat do naši rakety.
                  A taky by měl vidět z ní ven.
                  Takže na naši raketu přidáme dveře a okno.
                </p>

              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-26.avif"} altText={"Spojení těla a křídla rakety"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Nyní si vymodelujeme okno pro našeko kosmonauta.
                </p>
                <p>
                  Pro jeho vytvoření je potřeba trubka a polokoule. Průměr trubky bude 15mm a do ní vložíme polokouli, která
                  nám bude vyvářet sklo.
                </p>

              </td>
              <td>
                <table>
                  <tr>
                    <td>
                      <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-27.avif"} altText={"Okno kabiny"} />
                    </td>
                    <td>
                      <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-28.avif"} altText={"Okno kabiny"} />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Těď už nám budou chybět pouze dveře nabo-li vchod do rakety.
                </p>
                <p>
                  Samozřejmě že musíme zajistit, aby se náš astronaut dostal do rakety. Takže budeme muset vytvořit i
                  žebřík, pomocí kterého se tam bude dostávat.
                  <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-29.avif"} altText={"Vstup do rakety"} />
                </p>

              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce3/tinkercad-30.avif"} altText={"Vstup do rakety s žebříkem"} />
              </td>
            </tr>
          </table>

        </div>

      </div>
    </main>
  );
}

export default TinkercadLekce3;
