import React, { useEffect } from 'react';
import LessonHeader from '../general/LessonNavigation';
import './audacity.css';

const AudacityLekce3 = () => {
  useEffect(() => {
    document.title = 'Audacity Lekce 3';
  }, []); 
  const beforeLesson = '/audacity/audacity2';
  const afterLesson = '/audacity/audacity4';

  return (
    <main role="main" className="container">
      <div className='content'>

        <LessonHeader beforeLesson={beforeLesson} afterLesson={afterLesson} />

        <div className="odstavec">
          <table>
            <tbody>
              <tr>
                <td>
                  {/* <img src="/img/audacity/logo.avif" alt="Prostředí pro upravu zvuku"
                  style="width:100%; max-width:100px; height: auto" loading="lazy"> */}
                </td>
                <td>
                  <h1>Lekce 3 - Šum a Remix</h1>
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            Pro práci na našich úkolů budeme používat nástroj <a href="https://www.audacityteam.org/">AudaCity</a>.
            Návod na zprovoznění najdete <a href="/lessons/audacity/env.html">zde</a>.
          </p>
          <p>
            Na předchozích lekcích jsme si ukázali práci s rozhraním audacity a pracovali jsme s různými efekty
            <strong>normalizaca</strong>
            a popřípadně <strong>Fade</strong>. Co jsme si ale neukazali je, ale jak se zbavit šumu, který se nachází v
            pozadí.
          </p>

        </div>

        <div className="odstavec">
          <h2>Spectrogram</h2>
          <p>
            Tento nástoj nám zobrazuje výšku tónu. Dá se aktivovat na samostné skladbě pomocí kliknutí na šipku
            vedle skladby. Efekt se jmenuje <strong>Noise Reduction</strong> poté se vám otevře okno kde vyberete
            <strong>Get Noise Profile / Získat profil hluku</strong>. Poté is audacity projde vybranou nahrávku a detekuje
            šum.

          </p>
          <p>
            Pokud se vám něco nezdá dá se kroky opakovat za pomocí klávesové zkratky <strong>CTRL + R</strong>.
            A provedené akce se znova provedou.
          </p>
          <p>
            Samotné snížení šumu se dělá pomocí posuvného jezdce vedle nápisu <strong>Noise Reduction (dB)</strong> a
            <strong>Frekvency smoothing (bands)</strong>. Hodnoty, které budete zadávat už je pouze na vás.
            Musíte si zaexperimentovat, aby zvuk zněl lépe.
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>
                      <h5>červené a bíle oblasti</h5>
                      <p>
                        Touto barvou jsou zbarvené hlasité zvuky.
                      </p>
                    </li>
                    <li>
                      <h5>Modré a fialové oblasti</h5>
                      <p>
                        Touto barvou je zbarvený šum.
                      </p>
                    </li>
                  </ul>
                </td>
                <td>
                  {/* <img className="myImg" src="/img/audacity/lekce3/spectogram.avif" alt="Prostředí pro upravu zvuku"
                  style="width:100%; max-width:100px; height: auto" loading="lazy"> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="odstavec">
          <h2>Přidání šumu</h2>
          <p>
            Šum nemusíme jen odstraňovat al taky přidávat. Máme dva typy šumu. A to je bílí, růžový a Brownův.
          </p>
          <ul>
            <li>
              <h5>Bílí šum</h5>
              {/* <audio controls>
                <source src="/lessons/audacity/music/bili.mp3" type="audio/mpeg">
                  Bili sum
              </audio> */}
            </li>
            <li>
              <h5>Růžový šum</h5>
              {/* <audio controls>
                <source src="/lessons/audacity/music/ruzovy.mp3" type="audio/mpeg">
                  Ruzovy sum
              </audio> */}
            </li>
            <li>
              <h5>Brownův šum</h5>
              {/* <audio controls>
                <source src="/lessons/audacity/music/brownuv.mp3" type="audio/mpeg">
                  Brownuv sum
              </audio> */}
            </li>
          </ul>
        </div>


        <div className="odstavec">
          <h2>Samostatná práce</h2>
          <p>
            Vašim úkolem bude si ve dvojcích vytvořit zvukové puzzle. Pokud si nejste jisti jak uložit
            soubor a nebo vyplnit metadata návod naleznete <a href="/lessons/audacity/audacity1.html#metadata">zde</a>.
          </p>
          <h5>Obsah puzzle:</h5>
          <ul className='textBolder'>
            <li>aspoň 3 hádánek</li>
            <li>odsranění šumu</li>
            <li>sestříháné a přidané pauzy mezi zvuky</li>
            <li>připravé a spárvé odpovědi</li>
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
          <a href="https://drive.google.com/drive/folders/1EfXEKWjbnh98Jt5h2iN3pHiJOth5AV5M?usp=sharing">odevzdání</a>
        </div>
      </div>
    </main>
  );
}

export default AudacityLekce3;
