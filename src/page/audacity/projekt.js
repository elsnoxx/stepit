// AboutPage.js
import React from 'react';
import DownloadButton from '../general/download';

const AudacityProjekt = () => {

  return (
    <main role="main" className="container">
      <div className='content'>
        <div className="odstavec">
          <table>
            <tr>
              <td>
                {/* <img src="/img/audacity/logo.avif" alt="Prostředí pro upravu zvuku"
                  style="width:100%; max-width:100px; height: auto" loading="lazy"> */}
              </td>
              <td>
                <h1>Audacity - projekt</h1>
              </td>
            </tr>
          </table>

          <p>
            Pro práci na našich úkolů budeme používat nástroj <a href="https://www.audacityteam.org/">AudaCity</a>.
            Návod na zprovoznění najdete <a href="/lessons/audacity/env.html">zde</a>.
          </p>
          <p>
            Pokud budete chtít můžete použít i tento <a
              href="https://www.speechtech.cz/speechtech-text-to-speech/speechtech-tts-online-demo/#Oldrich30">generátor
              mluveného textu</a>.
          </p>
        </div>

        <div className="odstavec">
          <h2>Rádiové vysílání</h2>
          <p>
            Jako projekt jsem si pro vás vymyslel rádiové vysílání.
          </p>

          <p>
            Vašim úkolem se bude vcítit do role rádiového hlasatele a namluvit a sestříhat krátké rádiové vysílání.
            Povinná část vysílaní jsou napsané níže s názvem <strong>Požadavky</strong>. Ovšem zbytek je na vás.
            Ať už si tam přidáte písničky nebo nějakou svou hudbu je čistě navíc.
          </p>

          <h5>Požadavky: </h5>
          <ul>
            <li>Reklama</li>
            <li>Předpověď počasí</li>
            <li>Zprávy</li>
            <li>Délka maximálně 10 minut</li>
            <li>Do metadat zadejte své jméno jako jméno umělce, název stopy, "IT STEP ACADEMY" jako album a vyplňte také rok
            </li>
          </ul>

        </div>



        <div className="odstavec">
          <table>
            <tr>
              <td>
                <h5>Zadání projektu</h5>
              </td>
              <td>
                  <DownloadButton fileUrl="/zadani/audacity/projekt-radio.pdf" buttonText="Stažení PDF" requiresPassword/>
              </td>
            </tr>
          </table>
          <DownloadButton fileUrl="/zadani/pdfobraze.png" buttonText="Cover PDF"/>
        </div>

        <div className="odstavec">
          <h2>Zvuková koláž</h2>
          <p>
            V tomto zadání máte vytvořit zvukovou koláž.
          </p>

          <h5>Postup: </h5>
          <ol>
            <li>Zvuk ohně bude znít, jakože se nachází napravo od vás</li>
            <li>Zvuk bavících se lidí bude znít, jakože se lidé nachází nalevo od vás</li>
            <li>Přibližně ve 20. vteřině by se měl ozvat první hrom, velmi slabý, jakože je někde v dálce</li>
            <li>Ve 45. vteřině se ozve druhý, silnější hrom a v čase 1:25 se ozve velmi silný hrom, jakože bouchl někde
              blízko</li>
            <li>Chviličku po 2. hromu začne foukat vítr, nejprve slabě, ale bude postupně zesilovat</li>
            <li>Po 3. hromu utichnou hlasy lidí a vlevo ze skupinky lidí začne brečet dítě, které se leklo takové silné
              rány. Maličkou chviličku poté začne silně pršet (nejprve trošku slaběji, ale velmi prudce bude sílit). Chvíli
              poté začne velmi prudce, ale plynule sílit také vítr</li>
            <li>Jakmile začne pršet, začne okamžitě postupně utichat oheň, protože déšť jej hasí. Po chvíli utichne oheň
              úplně</li>
            <li>7. a v 16. vteřině bude slyšet zahoukání sovy</li>
            <li>Pojmenujte smysluplně všechny stopy, ale i jednotlivé zvuky v nich</li>
            <li>Projekt uložte</li>
            <li>Projekt vyexportujte do formátu MP3 - do metadat zadejte své jméno jako jméno umělce, "Táborák" jako název
              stopy, "IT STEP ACADEMY" jako album a vyplňte také rok.</li>
          </ol>
        </div>


        <div className="odstavec">
          <table>
            <tr>
              <td>
                <h5>Zadání projektu</h5>
              </td>
              <td>
                  <DownloadButton fileUrl="/zadani/audacity/projekt-koláž.pdf" buttonText="Stažení PDF" requiresPassword/>
              </td>
            </tr>
          </table>
          <DownloadButton fileUrl="/zadani/pdfobraze.png" buttonText="Cover PDF"/>
        </div>
      </div>
    </main>
  );
}

export default AudacityProjekt;
