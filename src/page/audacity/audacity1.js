import React, { useEffect } from 'react';
import LessonHeader from '../general/LessonNavigation';
import DownloadButton from '../general/download';
import AudioPlayer from '../general/AudioPlayer';
import ImageViewer from '../general/ImageViewer';
import './audacity.css';


const AudacityLekce1 = () => {
  // Efekt se spustí pouze při prvním načtení komponenty
  useEffect(() => {
    document.title = 'Audacity Lekce 1';
  }, []); 

  const beforeLesson = '/audacity';
  const afterLesson = '/audacity/audacity2';
  return (
    <main role="main" className="container">
      <LessonHeader beforeLesson={beforeLesson} afterLesson={afterLesson} />
      <div className='content'>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
              <ImageViewer imageUrl={"/img/audacity/logo.avif"} altText={"Prostředí pro upravu zvuku"} />
              </td>
              <td>
                <h1>Lekce 1 - Úvod, prostředí Audacity, první zvuková nahrávka
                </h1>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Pro práci na našich úkolů budeme používat nástroj <a href="https://www.audacityteam.org/">AudaCity</a>.
          Návod na zprovoznění najdete <a href="/audacity/env">zde</a>.
        </p>
      </div>

      <div>
        <h2>Teorie</h2>

        <h5>Zvuk</h5>
        <button className="otazka" id="zvuk">Odpověď</button>
        <div className="odpoved-zvuk">
          <table>
            <tbody>
              <tr>
                <td>
                  <p>
                    Zvuk se do počítače dostává jako elektrický signal. Počítač poté tyto signaly snimá v určitých
                    intervalech.
                    To znamena že nebere celou vlnu ale pouze její část.
                  </p>
                  <p>
                    Ten je reprezentován poté v 1 a 0, a také hloubku bytů.
                  </p>
                </td>
                <td>
                <ImageViewer imageUrl={"/img/audacity/lekce1/sample-rate.avif"} altText={"Prostředí pro upravu zvuku"} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h5>Stereo</h5>
        <button className="otazka" id="stereo">Odpověď</button>
        <div className="odpoved-stereo">
          <p>
            Stereo nám rozděluje zvukový signál do několika kanálů. Umožňuje tak rozsáhleho a plnějšího zvuku.
          </p>
        </div>
        <h5>Mono</h5>
        <button className="otazka" id="mono">Odpověď</button>
        <div className="odpoved-mono">
          <p>
            Mono je jednokanalový režim, a zvuk začne znít pokud jednoduše.
          </p>
        </div>
        <h5>Vzorkovací frekvence</h5>
        <button className="otazka" id="samplerate">Odpověď</button>
        <div className="odpoved-samplerate">
          <table>
            <tbody>
              <tr>
                <td>
                  <p>
                    Vzorkovací frekvence je počet vzorků zvuku přenášených za sekundu,
                    měřený v Hz nebo kHz (jeden kHz je 1 000 Hz). Například 44100 vzorků
                    za sekundu lze vyjádřit jako 44 100 Hz nebo 44,1 kHz. Šířka pásma je
                    rozdíl mezi nejvyšší a nejnižší frekvencí přenášenou v audio proudu
                  </p>
                </td>
                <td>
                <ImageViewer imageUrl={"/img/audacity/lekce1/sample-rate.avif"} altText={"Prostředí pro upravu zvuku"} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="odstavec">
        <h2>Příklady</h2>
        <p>
          Uveďte příklad
        </p>

        <h5>Vysoka frekvence</h5>
        <button className="otazka" id="vysoka">Odpověď</button>
        <div className="odpoved-vysoka">
          <table>
            <tbody>
              <tr>
                <td>
                  <p>
                    Pískání
                  </p>
                </td>
                <td>
                <ImageViewer imageUrl={"/img/audacity/lekce1/vysoka-frekvence.avif"} altText={"Prostředí pro upravu zvuku"} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h5>Nízká frekvence</h5>
        <button className="otazka" id="nizka">Odpověď</button>
        <div className="odpoved-nizka">
          <table>
            <tbody>
              <tr>
                <td>
                  <p>
                    Řev motoru
                  </p>
                </td>
                <td>
                <ImageViewer imageUrl={"/img/audacity/lekce1/nizka-frekvence.avif"} altText={"Prostředí pro upravu zvuku"} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="odstavec">
        <table>
          <tbody>
            <tr>
              <td>
                <h2>Nastroj pro uravu zvuku</h2>
                <p>
                  Jako prvni vec, kterou dneska udelame bude si zpravoznit Audacity.
                  Než začnene s instalaci skontrolujte zdali se Audacity již nachazí u vás v PC.
                </p>
                <p>
                  Pokud ne prosím přejděte na tuhle <a href="/audacity/env">stránku</a> a začneme s
                  instalací.
                </p>
              </td>
              <td>
              <ImageViewer imageUrl={"/img/audacity/env.avif"} altText={"Prostředí pro upravu zvuku"} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="odstavec">
        <table>
          <tbody>
            <tr>
              <td>
                <h2>Nový projekt</h2>
                <p>
                  Po nainstalovani si vytvříme nový projekt, kde si vše ukažem a projdeme
                </p>
              </td>
              <td>
              <ImageViewer imageUrl={"/img/audacity/lekce1/novy-projekt.avif"} altText={"Prostředí pro upravu zvuku"} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <section id="metadata">
        <h2>Uložení projektu</h2>
        <p>
          Pokud již budeme mít projekt hotov a budeme chtít uložit projekt do <strong>MP3</strong> formátu. Budete muste
          postupovat podle postupu a obrázků níže.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <p>
                  Nejprve si budeme muset projekt uložit pomocí tlačítka <strong>Uložit v jiním formátu</strong>. Následně
                  vybrat <strong>Uložit jako MP3</strong>.
                </p>
              </td>
              <td>
              <ImageViewer imageUrl={"/img/audacity/lekce1/ulozeni-projektu-1.avif"} altText={"Uložení v jiném formátu, Uložení ve formátu MP3"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Poté se vám otevře okno, ve kterém si vyberete kde si projekt uložíte.
                </p>
              </td>
              <td>
              <ImageViewer imageUrl={"/img/audacity/lekce1/ulozeni-projektu-2.avif"} altText={"Místo pro uložení projektu"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Poslední okno je věnované <strong>Metadatům</strong>. Ty uvidíte na obrázku vedle. Až vyplníte
                  <strong>Metadata</strong> kliknete na tlačítko <strong>OK</strong> a necháte <strong>Audacity</strong>
                  projekt vygenerovat.
                </p>
              </td>
              <td>
              <ImageViewer imageUrl={"/img/audacity/lekce1/ulozeni-projektu-3.avif"} altText={"Vyplnění metadat"} />
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="odstavec">
        <h2>Samostatná práce</h2>
        <p>
          Vašim úkolem bude složit a sestříhat si vlastní písničku pomocí tónů v níže uvedené skladbě.
          Pokud nebudete čemukoliv orzumět, ozvěte se mi a rád vám pomohu nebo poradím. Pokud si nejste jisti jak uložit
          soubor a nebo vyplnit metadata návod naleznete <a href="/lessons/audacity/audacity1.html#metadata">zde</a>.
        </p>
        <h5>Požadavky</h5>
        <ul className='textBolder'>
          <li>
            Při ukládání a vytváření mp3 souboru uložte do metadat nasledující:
            <ul>
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
        <h5>Skladba ke stažení <a href="/download/audacity/songs/ukol1-song.mp3" download>zde</a></h5>
      </div>


      </div>
    </main>
  );
}

export default AudacityLekce1;
