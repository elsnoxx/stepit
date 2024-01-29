import React, { useEffect } from 'react';
import LessonHeader from '../general/LessonNavigation';
import DownloadButton from '../general/download';
import ImageViewer from '../general/ImageViewer';
import ClassLogin from './classes';

const TinkercadLekce2 = () => {
  useEffect(() => {
    document.title = 'TinkerCAD Lekce 2';
  }, []); 
  const beforeLesson = '/tinkercad/lekce1';
  const afterLesson = '/tinkercad/lekce3';
  return (
    <main role="main" className="container">
      <div className='content'>
      <LessonHeader beforeLesson={beforeLesson} afterLesson={afterLesson} />
      <h1>Lekce 2 - Vesmírná stanice a zvířata</h1>

    <h5>Shrnutí z minulé lekce</h5>
    <p>Nyní si uděláme krátké opakování z minulé lekce. Vyzkoušíme si vše podstatné, co jsme si v minulé hodině ukázali.
      Každý půjde k tabuli, kde všem ukáže, jak se to dělá.</p>
    <ul>
      <li>Ukaž, jak se pohybuje objekt na osách X, Y a Z v TinkerCAD</li>
      <li>Ukaž, jak dokážeme spojit objekty dohromady</li>
      <li>Ukaž, jak nastavíme spojené objekty tak, aby každý měl svojí barvu a byl transparentní</li>
      <li>Ukaž, jak dokážeme rozbít spojené objekty</li>
      <li>Ukaž, jak vyřežeme z objektu libovolnou část</li>
      <li>Ukaž, jak vyřezanou část vrátíme zpět do původního tvaru</li>
      <li>Ukaž, jak shodíme objekt na pracovní plochu</li>
    </ul>

    <ClassLogin></ClassLogin>

    <h3>Navržení vesmírného domu pro našeho hrdinu</h3>
    <p>
      Minulou hodinu jsme se udělali jídlo pro naši vesmírného hrdinu. Nyní je potřeba našemu hrdinovy udělat dům, kde
      by mohl bydlet.
      Dům bude mít poklop na střeše, ze kterého se bude moct vyletět do širokého vesmíru. A na zahradě bude dělo Gausse.
      (Elektromagnetické dělo)
    </p>

    <table class="table table-bordered">
      <tr>
        <td>Nejprve si vytvoříme stěny našeho domu. Na stěny použijeme <strong>kvádry</strong>, které pak seskupíme
          dohromady.</td>
        <td>
          <table>
            <tr>
              <td>
                    <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-1.avif"} altText={"Stěny vesmíré stanice - pohled z boku"} />
              </td>
              <td>
                    <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-2.avif"} altText={"Stěny vesmíré stanice - pohled ze shora"} />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <p>
            Základ našeho domu je hotový. Dále potřebujeme vytvořit okna a dveře. Oken budou aspoň 2, pokud budete chtít
            může jich být i více.
            Dveře a okna vřežeme do našich stěn. Na dveře použijeme <strong>kvádr</strong> a na okna použijeme
            <strong>čtverec a válec</strong>.
          </p>
        </td>
        <td>
          <table>
            <tr>
              <td>
                    <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-3.avif"} altText={"Vesmírá stanice - dveře"} />
              </td>
              <td>
                    <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-4.avif"} altText={"Vesmírá stanice - dveře"} />
              </td>
            </tr>
            <tr>
              <td>
                    <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-5.avif"} altText={"Vesmírá stanice - čtvercové okna"} />
              </td>
              <td>
                    <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-6.avif"} altText={"Vesmírá stanice - oválné okno"} />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <p>
            Okna bychom měli vyřezané. Nyní je načase udělat kolem nich rám. Rámy budou trochy vyčnívat ze stěny.
            Do oken přidejte skla. Je na vás, jak budou vypadat.
          </p>
          <p>
            Pokud si nevíte rady jak se sklem. Vyplňte okno a nastavte objektu barvu na <strong>transparentní</strong>
          </p>
        </td>
        <td>
          <table>
            <tr>
              <td>
                    <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-8.avif"} altText={"Vesmírá stanice - rám čtvercovích oken"} />
              </td>
              <td>
                    <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-9.avif"} altText={"Vesmírá stanice - rám oválných okno"} />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <p>
            Nyní naprojektujeme střechu našeho domu. Střecha bude obsahovat i otvor pro loď, kterou bude moc přilétat a
            odlétat.
            A také ve střeše bude komín pro jaderný reaktor, který bude vytápět naši budovu.
          </p>
        </td>
        <td>
          <table>
            <tr>
              <td>
                    <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-10.avif"} altText={"Vesmírá stanice - střecha a střešní okno"} />
              </td>
              <td>
                    <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-11.avif"} altText={"Vesmírá stanice - jaderný reaktor"} />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <p>
            Nyní vytvoříme kousek potu. Plot bude mít 4 latě a 2 spojovací desky. Po vytvoření jednoho dílu jej
            použijeme na
            vytvoření celého plotu okolo našeho domu.
          </p>
          <p>
            Pokud už máme vše připravené. Navrhneme si náš balkón nebo rampu, kde se bude nacházet naše dělo.
          </p>
        </td>
        <td>
          <table>
            <tr>
              <td>
                    <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-12.avif"} altText={"Vesmírá stanice - plot první díl"} />
              </td>
              <td>
                    <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-13.avif"} altText={"Vesmírá stanice - oploceni domu"} />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <p>
            Pokud už máme vytvořenou rampu. Vytvoříme si kanón pro naši obranu.
            A co by to bylo za kanón, bez nábojů? Takže si vedle vytvoříme malé koule jako náboje do našeho děla.
          </p>
          <p>
            Tak a pokud vše šlo dobře tady je jak by měl vypadat výsledek, ke kterému se dopracujete.
          </p>
          <p>
            Poté další rozšíření úprav je už na vás.
          </p>
        </td>
        <td>
          <table>
            <tr>
              <td>
                    <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-14.avif"} altText={"Konečná podoba vesmírné stanice pohled ze zadu"} />
              </td>
              <td>
                    <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-15.avif"} altText={"Konečná podoba vesmírné stanice pohled ze zadu"} />
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>


    <h3>Vytvoření vesmírných zvířat</h3>
    <p>
      Jídlo a obydlí již máme. Teď musíme zajistit, aby náš hrdina ve vesmíru se nenudil a měl nějakého kamaráda.
      Vymodelujeme si
      malé a roztomilé zvířátka. My si vyzkoušíme vymodelovat malou želvičku.
    </p>

    <div>
      <table class="table table-bordered">
        <tr>
          <td>
            <p>Naše želva bude tvořena ze 4 válců a polokoule.</p>
          </td>
          <td>
          <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-17.avif"} altText={"Základní tvary pro tvorbu"} />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              Ocásek vytvoříme z polokoule. Hlavu vytvoříme pomocí koule a upravíme velikost.
            </p>
          </td>
          <td>
            <table class="table">
              <tr>
                <td>
                      <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-18.avif"} altText={"Spojení objeků do podoby zvířete pohled ze zadu"} />
                </td>
                <td>
                      <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-19.avif"} altText={"Spojení objeků do podoby zvířete pohled ze předu"} />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <p>Tak a máme naši želvu hotovovou.</p>
            <p>
              Dále už to bude na vás, jaké zvířátka vymyslíte a vymodelujete.
              Tady je pár návrhů, které další můžete vytvořit:
            </p>
            <ul>
              <li>mini slon</li>
              <li>prasátko</li>
              <li>kočka</li>
              <li>pes</li>
              <li>kuřátko</li>
            </ul>
          </td>
          <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce2/tinkercad-ukol2-20.avif"} altText={"Konečná podoba vesmírného zvířete"} />
          </td>
        </tr>
      </table>
    </div>
      </div>
    </main>
  );
}

export default TinkercadLekce2;
