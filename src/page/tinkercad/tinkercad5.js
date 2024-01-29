import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LessonHeader from '../general/LessonNavigation';
import DownloadButton from '../general/download';
import ImageViewer from '../general/ImageViewer';
import ZooGenerator from '../general/ZOOGenerator';
import './tinkercad.css';
import ClassLogin from './classes';

const TinkercadLekce5 = () => {
  useEffect(() => {
    document.title = 'TinkerCAD Lekce 5';
  }, []); 
  const beforeLesson = '/tinkercad/lekce4';
  const afterLesson = '/tinkercad/projekt';
  return (
    <main role="main" className="container">
      <div className='content'>
        <LessonHeader beforeLesson={beforeLesson} afterLesson={afterLesson} />

        <div className="odstavec">
          <h1>Lekce 5 - Vesmírný robot</h1>
        </div>


        <div className="odstavec">
          <table>
            <tr>
              <td>
                <p>
                  Jelikož už jsme si v našem vesmíru vše vymodelovali. Stejně nám však chybí něco nejdůležitějšího.
                  A to je naše postava, která tohle vše bude využívat.
                  Naší postavou bude robot a nebude jen tak ledajaký. Bude vypadat jako exoskelet či driod.
                </p>
                <p>
                  Na obrázku vedle je ukázáno jak naše postava bude vypadat.
                  Je pak na vás jakou z další postav si vytvoříte.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce5/robot1.avif"} altText={"Vesmírný robot"} />
              </td>
            </tr>
          </table>
        </div>

        <ClassLogin></ClassLogin>

        <div className="odstavec">
          <h3>Vesmírná postava</h3>
          <table className="table table-bordered">
            <tr>
              <td>
                <p>
                  Nejdříve začneme od trupu, jelikož je to nejdůležitější část naší postavy.
                </p>
                <p>
                  Trup má jednoducou konstrukci. Skládá se z koule, která bude poměrně velká.
                  Na kruh umístíme torus, který nám zdůrazní rysy našeho robota.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce5/robot2.avif"} altText={"Trup robota"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Do našeho torusu poté umístíme jádro či oko.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce5/robot3.avif"} altText={"Jádro nebo oko robota"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Teď už máme náš trup hotový. Nyní se vrhneme na vyvoření ramen pro naše paže.
                  Ty se skládají z koulí, které jsou připojené na náš trup.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce5/robot4.avif"} altText={"Ramena robota"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Po vytvoření nohou nachvíli odběhneme k jiné části a vytvoříme si nohy a trysky.
                </p>
                <p>
                  Nohy a trysky musí být masivní a velké. Přece jen musí unést spousty váhy.
                  Ovšem ne větší než je tělo naší postavy.
                  Pro jejich vytvoření použijeme paraboild.
                </p>
                <p>
                  Abychom naše nohy a trysky vystužily.
                  Použijeme pro to dva tenké torusy.
                  A pomocí klonování si takhle vytvoříme 3 další objekty. Dvě trysky a dvě nohy.
                </p>
              </td>
              <td>
                  <ImageViewer imageUrl={"/img/tinkerCAD/lekce5/robot5.avif"} altText={"Vzhled pro nohy a trysky robota"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Teď si vytvoříme úchyt na trysky, který nám pomůže uchytit lépe naše trysky na postavu.
                </p>
              </td>
              <td>
                  <ImageViewer imageUrl={"/img/tinkerCAD/lekce5/robot6.avif"} altText={"Vyznačení přichycení trysky"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Nyní nás čeká naše trysky a nohy spojit s naším droidem.
                </p>
              </td>
              <td>
                  <ImageViewer imageUrl={"/img/tinkerCAD/lekce5/robot7.avif"} altText={"Připojení trysek a noh k trupu robota"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Nyní si vytvoříme pravou paži našeho droida.
                  Ta bude vybaveda kulometem, aby se mohl náš droid bránit.
                </p>
                <p>
                  Na paži použijeme válec, na paži pak vytvoříme náš kulomet.
                  Ten bude mít dvě hlavně a zaměřovací zařízení.
                </p>
              </td>
              <td>
                  <ImageViewer imageUrl={"/img/tinkerCAD/lekce5/robot9.avif"} altText={"Pravá ruka pohled z boku"} />
                  <table>
                    <tr>
                      <td>
                        <ImageViewer imageUrl={"/img/tinkerCAD/lekce5/robot8.avif"} altText={"Pravá ruka pohled ze předu"} />
                      </td>
                    </tr>
                  </table>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Dále máme v pořadí udělat druhou ruku. Tu bude náš droid používat na úchop věcí.
                </p>

                <p>
                  Ta bude v celku složítá a budete muset najít i speciální tvary v TinkerCADu.
                </p>
                <p>
                  Malá nápověda k vytváření této paže. Objekty, které budete potřebovat jsou:
                  <ul>
                    <li>Králičí uši</li>
                    <li>paraboild</li>
                    <li>Válec - jeden jako kruh, druhý jako matice o 6 stranách</li>
                  </ul>
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce5/robot10.avif"} altText={"Levá ruka pohled z boku"} />
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce5/robot11.avif"} altText={"Levá ruka pohled ze předu"} />
              </td>
            </tr>
          </table>
          <p>
            Pokud jste došli až sem tak jste právě vytvořili robota, které jsem pojmenoval Megatron 3000.
            Další postava už bude na vás. Využijte svou představivost a do konce hodiny zkuste navrhnout svou vlastní
            postavu.
            Ať už to bude člověk či stroj. Nechám tohle čistě na vás.
          </p>
        </div>
        </div>
    </main>
  );
}

export default TinkercadLekce5;
