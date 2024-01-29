import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LessonHeader from '../general/LessonNavigation';
import DownloadButton from '../general/download';
import ImageViewer from '../general/ImageViewer';
import ZooGenerator from '../general/ZOOGenerator';
import './tinkercad.css';
import ClassLogin from './classes';

const TinkercadLekce4 = () => {
  useEffect(() => {
    document.title = 'TinkerCAD Lekce 4';
  }, []); 
  const beforeLesson = '/tinkercad/lekce3';
  const afterLesson = '/tinkercad/lekce5';
  return (
    <main role="main" className="container">
      <div className='content'>
        <LessonHeader beforeLesson={beforeLesson} afterLesson={afterLesson} />


        <div className="odstavec">
          <h1>Lekce 4 - Vesmírná stanice</h1>
        </div>

        <div className="odstavec">
          <table>
            <tr>
              <td>
                <p>
                  Naše planeta je již plně vybavena a zařízená. Nyní nás čeká mezigalaktické cestování.
                  A nastal čas vybudovat si vesmírnou stanici, která nám ulehčí takové daleké cestování.
                </p>
                <p>
                  Na obrázku vedle je ukázáno jak by naše stanice měla vypadat. Barvy jsou čistě jen na vás.
                  Tak samo jako rozšíření naší základny.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce4/stanice-11.avif"} altText={"Vesmírná stanice"} />
              </td>
            </tr>
          </table>
        </div>

        <ClassLogin></ClassLogin>

        <div className="odstavec">
          <h3>Vesmírná stanice</h3>
          <table className="table table-bordered">
            <tr>
              <td>
                <p>
                  Nejdříve začneme kabinou naší vesmírné stanice. Na to použijeme kouli o rozměrech
                  <strong>40x40x40</strong>.
                </p>
                <p>
                  Kolem koule si vytvoříme gyroskop ten bude mít rozměry <strong>poloměr 90 mm a šířka trubky 5</strong>.
                  Tloušťka trubky je na vás a určete si ji podle sebe.
                </p>
                <p>
                  Nakonec nám chybí pouze trubku spojit pomoci tří menších trubek.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce4/stanice-1.avif"} altText={"Kabina s prvnim prstencem"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Teď přidáme ještě 2 prstence kolem naší kabiny.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce4/stanice-2.avif"} altText={"Rozsiření o více prstenců"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Dále je potřeba vytvarovat desky pro zachycení kosmických paprsků. Pro její vytvoření
                  využijeme desku o velikosti <strong>80 * 20 * 4</strong>. Poté vytvořte duplikát desky.
                  Vytvořené desky spojte pomocí trubky o velikost <strong>30 * 2</strong>.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce4/stanice-3.avif"} altText={"Solární panely"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Nyní objekty seskupíme a vytvoříme jeden duplikát.
                </p>
                <p>
                  Ještě nás bude čekat vytvoření spojovacího dílu. Ten bude veliký tenký s poloměrem <strong>4</strong>.
                  Délku si už určíte sami.
                </p>
                <p>
                  Spojovníky máme a nyní je potřeba k nim připojit desky.
                  Udělejte duplikát desky, otočte je o 90 stupňů, abyste získali
                  to, co je zobrazeno na obrázku vedle.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce4/stanice-4.avif"} altText={"Připojení panelů ke kajutě"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Teď ještě seskupíme ty naše dvě desky a otočíme je o 90 stopňů.
                  Cíl naší tvorby by měl být jako vedle na obrázku.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce4/stanice-5.avif"} altText={"Rozšíření solárních panelů"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Nyní je potřeba udělat místo odkud bude naše raketa startovat.
                  Rozměry trubky jsou <strong>poloměr 70 mm a šířka trubky 40 mm</strong>.
                </p>
                <p>
                  To však není vše musíme ještě vyříznout kus z trubky. Aby naše raketa se mohle lépe uchytit.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce4/stanice-6.avif"} altText={"Přidání umístění pro raketu"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Nyní si vytvoříme žebřík k naší vesmírné stanici. Ten bude vypadat jako na obrázku vedle.
                </p>
                <p>
                  Pokud by se někomu nelíbil žebřík může vytvořit průhledný výtah.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce4/stanice-7.avif"} altText={"Přidání žebříku pro vlez do kajuty"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Dále nám u naší pološiny chybí už jen pár posledních drobností.
                </p>
                <p>
                  A jedna z nich je lávka mezi naším hlavním kokpitem a přistávací plošinu pro naši raketu.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce4/stanice-8.avif"} altText={"Pohled na přistávaí plošinu"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Jako poslední věc je výlez na naší přistávací plošině.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce4/stanice-10.avif"} altText={"Průchod skrze přistávací plošinu"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Ještě si naznačíme místo kde se mohou nacházet obranné zbraně.
                </p>
                <p>
                  Ty budou na vás jaké si vymyslíte.
                </p>
                <p>
                  Pokud se vám místo líbit nebude můžete ho změnit.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce4/stanice-9.avif"} altText={"Obranné prvky rakety"} />
              </td>
            </tr>
          </table>
          <p>
            Jako poslední krok, bude k naší vesmírné stanici přidat vesmírnou raketu.
            Tu jsme si vymodelovali v předchozí lekci a za pomocí zkratek pro
            kopoírování vložíme raketu k naši vesmírné stanici.
          </p>

        </div>
      </div>
    </main>
  );
}

export default TinkercadLekce4;
