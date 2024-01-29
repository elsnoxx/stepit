import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LessonHeader from '../general/LessonNavigation';
import DownloadButton from '../general/download';
import ImageViewer from '../general/ImageViewer';
import ZooGenerator from '../general/ZOOGenerator';
import './tinkercad.css';
import ClassLogin from './classes';

const TinkercadProjekt = () => {
  useEffect(() => {
    document.title = 'TinkerCAD Projekt';
  }, []); 
  const beforeLesson = '/tinkercad/lekce5';
  const afterLesson = '/prezentace';

  return (
    <main role="main" className="container">
      <div className='content'>
        <LessonHeader beforeLesson={beforeLesson} afterLesson={afterLesson} />
        <div className="odstavec">
          <h1>Projekt - ZOO</h1>
          <p>
            Na této stránce naleznete zadání závěrečného projektu v TinkerCADu.
          </p>
        </div>

        <ClassLogin></ClassLogin>

        <ZooGenerator></ZooGenerator>

        <div className="odstavec">
          <table>
            <tr>
              <td>
                <h5>Zadání projektu</h5>
              </td>
              <td>
                <DownloadButton fileUrl="/zadani/tinkercad/projekt.pdf" buttonText="Stažení PDF" requiresPassword />
              </td>
            </tr>
          </table>
          <DownloadButton fileUrl="/zadani/pdfobraze.png" buttonText="Cover PDF" />
        </div>

        <section>
          <h3>Přidělené zvířata</h3>

          <table>
            <tbody>
              <tr>
                <td>
                  <h4>Bruno Penhaker</h4>
                </td>
                <td>
                  <ul>
                    <li>
                      Delfín
                    </li>
                    <li>
                      Kráva
                    </li>
                    <li>
                      Jaguár
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Jonáš Volek</h4>
                </td>
                <td>
                  <ul>
                    <li>
                      Delfín
                    </li>
                    <li>
                      Želva
                    </li>
                    <li>
                      Vlk
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Nela Holušová</h4>
                </td>
                <td>
                  <ul>
                    <li>
                      Jaguár
                    </li>
                    <li>
                      Krokodýl
                    </li>
                    <li>
                      Zebra
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Tomáš Machač</h4>
                </td>
                <td>
                  <ul>
                    <li>
                      Ježek
                    </li>
                    <li>
                      Had
                    </li>
                    <li>
                      Tygr
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Daniel Dzurik</h4>
                </td>
                <td>
                  <ul>
                    <li>
                      Rak
                    </li>
                    <li>
                      Sob
                    </li>
                    <li>
                      Slon
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Daniel Klasa</h4>
                </td>
                <td>
                  <ul>
                    <li>
                      Želva
                    </li>
                    <li>
                      Tygr
                    </li>
                    <li>
                      Velbloud
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Marco Pospíšil</h4>
                </td>
                <td>
                  <ul>
                    <li>
                      Vosa
                    </li>
                    <li>
                      Medvěd
                    </li>
                    <li>
                      Kůň
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Tobiáš Hrbáč</h4>
                </td>
                <td>
                  <ul>
                    <li>
                      Pes
                    </li>
                    <li>
                      Had
                    </li>
                    <li>
                      Kočka
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Alex Nguyen</h4>
                </td>
                <td>
                  <ul>
                    <li>
                      Želva
                    </li>
                    <li>
                      Pes
                    </li>
                    <li>
                      Vosa
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </main>
  );
}

export default TinkercadProjekt;
