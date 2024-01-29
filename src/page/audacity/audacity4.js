import React, { useEffect } from 'react';
import LessonHeader from '../general/LessonNavigation';
import DownloadButton from '../general/download';
import AudioPlayer from '../general/AudioPlayer';
import ImageViewer from '../general/ImageViewer';
import './audacity.css';


const AudacityLekce4 = () => {
  // Efekt se spustí pouze při prvním načtení komponenty
  useEffect(() => {
    document.title = 'Audacity Lekce 4';
  }, []); 

  const beforeLesson = '/audacity/lekce3';
  const afterLesson = '/audacity/projekt';



  return (
    <main role="main" className="container">
      <LessonHeader beforeLesson={beforeLesson} afterLesson={afterLesson} />
      <div className='content'>
        <div className="odstavec">
          <table>
            <tbody>
            <tr>
              <td>
                  <ImageViewer imageUrl={"/img/audacity/logo.avif"} altText={"Prostředí pro upravu zvuku"} />
              </td>
              <td>
                <h1>Lekce 4 - Opakování, zadání projektu a vypracovávání
                  prezentace</h1>
              </td>
            </tr>
            </tbody>
          </table>

          <p>
            Pro práci na našich úkolů budeme používat nástroj <a href="https://www.audacityteam.org/">AudaCity</a>.
            Návod na zprovoznění najdete <a href="/lessons/audacity/env.html">zde</a>.
          </p>

          <p>
            Představte si, že musíte připravit skladbu, která se bude přehrávat na online hudební platformě.
            Zvuk nesmí být sekaný a nemá obsahovat hlasité skoky. Právě k této korekci využijeme
            <strong>kompresi</strong>.
          </p>
        </div>

        <div className="odstavec">
          <h2>Nastavení komprese</h2>
          <div className="odstavec">
              <ImageViewer imageUrl={"/img/audacity/lekce4/Compressor.avif"} altText={"Prostředí pro upravu zvuku"} />
          </div>
          <ul>
            <li>
              <strong>Prahová hodnota</strong> - Threshold
              <ul>
                <li>
                  Toto nastavení definuje úroveň vstupního signálu, nad kterou kompresor začne signál zeslabovat.
                </li>
                <li>
                  <strong>Např.:</strong> -10 dB při prahu -7dB se hlasitost automaticky ztlumí
                </li>
              </ul>
            </li>
            <li>
              <strong>Hladina hluku</strong> - Noise Floor
              <ul>
                <li>
                  Toto nastavení označuje frekvence, při kterých bude detekován a odstreněn šum
                </li>
              </ul>
            </li>
            <li>
              <strong>Poměr</strong> - Ratio
              <ul>
                <li>
                  Toto nastavení určuje míru útlumu signálu.
                </li>
                <li>
                  Objem se obvykle liší 2-5 krát; 1é krát a více se označuje jako <strong>agresivní zpracování</strong>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="odstavec">
          <h2>Předvolby</h2>
          <p>
            Ty najdete pod políčkem <strong>Manage</strong>. Pár příkladů je níže
          </p>
          <ul>
            <li>100Hz Rumble</li>
            <li>Bass Boost</li>
            <li>Bass cut</li>
            <li>Telephone</li>
          </ul>
        </div>

        <div className="odstavec">
          <h2>Samostatná práce</h2>
          <p>
            Vžijte se do role DJ. A zkuste namixovat nějaký pořádný <strong>Track</strong>. Pokud si nejste jisti jak uložit
            soubor a nebo vyplnit metadata návod naleznete <a href="/lessons/audacity/audacity1.html#metadata">zde</a>.
          </p>
          <h5><DownloadButton fileUrl="/zadani/audacity/songs/baiana.mp3" buttonText="Skladba ke stažení"/></h5>
          <h5>Obsah:</h5>
          <ul className='textBolder'>
            <li>3 písničky</li>
            <li>použití efektů</li>
            <li>použití komprese</li>
            <ul>
              <li className='textBolder'>
                Při ukládání a vytváření mp3 souboru uložte do metadat nasledující:
                <ul className='textNormal'>
                  <li>
                    Jméno jako jméno umělce
                  </li>
                  <li>
                    Název stopy
                  </li>
                  <li>
                    "IT STEP ACADEMY" jako album
                  </li>
                  <li>
                    Rok vytvoření
                  </li>
                </ul>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default AudacityLekce4;
