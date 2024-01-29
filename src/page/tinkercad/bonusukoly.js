import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LessonHeader from '../general/LessonNavigation';
import DownloadButton from '../general/download';
import ImageViewer from '../general/ImageViewer';
import './tinkercad.css';

const Tinkercad = () => {
  useEffect(() => {
    document.title = 'TinkerCAD Bonusove ukoly';
  }, []); 
  return (
    <main role="main" className="container">
      <div className='content'>
        <div className="odstavec">
          <h1>Bonusové úkoly</h1>
          <p>
            Zde budou bonusové úkoly pro vás. Kdo bude chtít nebo bude mít již hotovou práci v hodině.
            Může zkusit si vytvořit nějaké další projekty zde.
          </p>
        </div>

        <div className="odstavec">
          <h3>Biom v minecraftu</h3>

          <table>
            <tbody>
              <tr>
                <td>
                  <p>
                    Vašim úkolem bude navrhnout a vytvořit libovolný biom.
                    Biom může již v Minecraftu a nebo si navrhněte svůj.
                    Třeba takový který by jste chtěl přidat do Minecraftu.
                  </p>
                  <p>
                    Pokud si vyberete nějaký biom z minecraftu.
                    Vytvořte pak něco co tam dokážeme najít.
                  </p>
                </td>
                <td>
                  <ImageViewer imageUrl={"/img/tinkerCAD/bonus/biom.avif"} altText={"Minecraft biom džungle"} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="odstavec">
          <h3>Šachovnice</h3>

          <table>
            <tbody>
              <tr>
                <td>
                  <p>
                    Vašim úkolem bude navrhnout a vytvořit deskovou hru šachy.
                    Hra bude obsahovat všechny figurky a hrací plochu.
                    Tvar figurek je čistě na vás.
                    Ale pokud by vás nic nenapadlo kousek níže je jeden typ jak by vypadat mohli.
                  </p>
                  <p>
                    Obrázek vedle je vytvořen pomocí TinkerCadu a poté vytisknut 3D tiskárnou.
                  </p>
                  <p><strong>Figurky budou:</strong></p>
                  <ul>
                    <li>Pěšec</li>
                    <li>Střelec</li>
                    <li>Věž</li>
                    <li>Kůň</li>
                    <li>Královna</li>
                    <li>Král</li>
                  </ul>
                  <p>
                    Pokud si nevíte rady jak na figurky, tak návod je <Link to="/tinkercad/sachy">zde</Link>
                  </p>
                </td>
                <td>
                  <ImageViewer imageUrl={"/img/tinkerCAD/bonus/sachy.avif"} altText={"Šachové figurky s hrací deskou"} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="odstavec">
          <h3>Letadlo - Boeing 737</h3>

          <table>
            <tbody>
              <tr>
                <td>
                  <p>
                    Vašim úkolem bude navrhnout a vytvořit letadlo Boeing 737.
                    Velikost letadla bude čistě jen na vás
                  </p>
                  <ImageViewer imageUrl={"/img/tinkerCAD/bonus/letadlo3.avif"} altText={"Letadlo pohled ze zhora"} />
                </td>
                <td>
                  <ImageViewer imageUrl={"/img/tinkerCAD/bonus/letadlo1.avif"} altText={"Letadlo pohled ze spoda"} />
                  <ImageViewer imageUrl={"/img/tinkerCAD/bonus/letadlo2.avif"} altText={"Letadlo pohled ze předu"} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="odstavec">
          <h3>Závodní auto</h3>

          <table>
            <tbody>
              <tr>
                <td>
                  <p>
                    Vašim úkolem bude navrhnout a vytvořit závodní auto.
                    Obrázek je pouze ukázka jak by auto mohlo vypadat.
                    Nechte svou představivost volně a navrhněte si auto svých snů.
                  </p>
                  <ImageViewer imageUrl={"/img/tinkerCAD/bonus/auto1.avif"} altText={"Závodní auto pohled ze předu"} />
                </td>
                <td>
                  <ImageViewer imageUrl={"/img/tinkerCAD/bonus/auto2.avif"} altText={"Závodní auto pohled ze zadu"} />
                  <ImageViewer imageUrl={"/img/tinkerCAD/bonus/auto3.avif"} altText={"Závodní auto pohled z boku"} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="odstavec">
          <h3>Navržení postele</h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <p>
                    Vašim úkolem bude navrhnout a vytvořit postel svých snů.
                  </p>
                </td>
                <td>
                  <ImageViewer imageUrl={"/img/tinkerCAD/bonus/postel.avif"} altText={"Postel snu"} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Tinkercad;
