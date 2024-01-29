import React, { useEffect } from 'react';
import LessonHeader from '../general/LessonNavigation';
import DownloadButton from '../general/download';
import AudioPlayer from '../general/AudioPlayer';
import ImageViewer from '../general/ImageViewer';
import './audacity.css';


const AudacityLekce2 = () => {
  // Efekt se spustí pouze při prvním načtení komponenty
  useEffect(() => {
    document.title = 'Audacity Lekce 2';
  }, []);

  const beforeLesson = '/audacity/lekce1';
  const afterLesson = '/audacity/lekce3';
  return (
    <main role="main" className="container">
      <div className='content'>
        <LessonHeader beforeLesson={beforeLesson} afterLesson={afterLesson} />
        <div className="odstavec">
          <table>
            <tbody>
              <tr>
                <td>
                  {/* <img src="/img/audacity/logo.avif" alt="Prostředí pro upravu zvuku" style="width:100%; max-width:100px; height: auto" loading="lazy"> */}
                </td>
                <td>
                  <h1>Lekce 2 - Efekty a podcast</h1>
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            Pro práci na našich úkolů budeme používat nástroj <a href="https://www.audacityteam.org/">AudaCity</a>.
            Návod na zprovoznění najdete <a href="/lessons/audacity/env.html">zde</a>.
          </p>
          <p>
            V této lekci si ukážeme další možnosti a úpravy za pomocí aplikace audacity. Ale než se vrhnem na lekci dál.
            Tak si každý skontrolujte zdali odevzdal svůj domácí úkol. Pokud ne tak si ho teď doďělá.
          </p>
        </div>

        <div className="odstavec">
          <h2>Úprava zvuku</h2>
          <ul>
            <li>
              <strong>Normalizace</strong>
              <ul>
                <li>
                  Ukážeme si funkci <strong>normalizace</strong>, tu najdete v záložce
                  <strong>effect</strong>. Slouží nám k zvýšení hlasitosti všech vrcholů v naši nahrávce.
                </li>
                <ImageViewer imageUrl={"/img/audacity/lekce2/normalizace.avif"} altText={"Okno normalizace Audacity"} />
              </ul>
            </li>
            <li>
              <strong>Limiter - přebuření</strong>
              <ul>
                <li>
                  Pokud však použijeme funkci <strong>normalizace</strong> je taky dobré použít funkci
                  <strong>limiter</strong>.
                  Kterou najdete taky v záložce <strong>effect</strong>. Tu používáme hlavně proto, abychom
                  omezili nejvyšší tóny a dorovnali jsme zvuk po celé nahrávce.
                </li>

                <ImageViewer imageUrl={"/img/audacity/lekce2/limiter.avif"} altText={"Okno limiter Audacity"} />
              </ul>
            </li>
            <li>
              <strong>Fade in</strong>
              <ul>
                <li>
                  Tenhle efekt se používá pokud chceme vytvořit na nahrávce postupný náběh.
                  Takže bychom šli z ticha aŽ do plné hlasitosti.
                </li>

                <ImageViewer imageUrl={"/img/audacity/lekce2/fadein.avif"} altText={"Okno fade in Audacity"} />
              </ul>
            </li>
            <li>
              <strong>Fade out</strong>
              <ul>
                <li>
                  Tenhle efekt se používá pokud chceme vytvořit na nahrávce postupné zeslabení.
                  Takže bychom šli z plné hlasitosti do ticha.
                </li>

                <ImageViewer imageUrl={"/img/audacity/lekce2/fadeout.avif"} altText={"Okno fade out Audacity"} />
              </ul>
            </li>
            <li>
              <strong>Zesílení</strong>
              <ul>
                <li>
                  Tenhle efekt se používá pokud chceme skladbu zesílít. Tahle funkce
                  je hlídaná ochranou přebuzení. Ta se dá ovšem vypnout, ale to nam vsak písničku jen zhorší.
                </li>
                <br />
                <ImageViewer imageUrl={"/img/audacity/lekce2/zesileni.avif"} altText={"Okno fade out Audacity"} />
              </ul>
            </li>
          </ul>
        </div>

        <div className="odstavec">
          <h2>Samostatná práce - Podcast</h2>
          <p>
            Každý si udělá svůj krátky podcast na jeho oblíbené téma. Ať už to je hra nebo nějaké zajímavosti.
            To je čistě na vaši fantazii co vymyslíte. Pokud si nejste jisti jak uložit
            soubor a nebo vyplnit metadata návod naleznete <a href="/lessons/audacity/audacity1.html#metadata">zde</a>.
          </p>
          <h5>Obsah podcastu:</h5>
          <ul className='textBolder'>
            <li>intro - úvodní znělka</li>
            <li>sponzora - krátký vstup kdo je sponzorem podcastu</li>
            <li>outro - ukončovací znělka</li>
            <li>déla maximalně 5 minut</li>
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

          {/* <a href="https://drive.google.com/drive/folders/1az3Tovyw9RDTD2SkVkRN_esBo4nZaUbp?usp=sharing">odevzdat<a> */}
        </div>

      </div>
    </main>
  );
}

export default AudacityLekce2;
