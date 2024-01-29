import React, { useEffect } from 'react';
import LessonHeader from '../general/LessonNavigation';
import DownloadButton from '../general/download';
import AudioPlayer from '../general/AudioPlayer';
import ImageViewer from '../general/ImageViewer';
import ClassLogin from './classes';

const TinkercadLekce1 = () => {
  useEffect(() => {
    document.title = 'TinkerCAD Lekce 1';
  }, []); 

  const beforeLesson = '/tinkercad';
  const afterLesson = '/tinkercad/lekce2';

  return (
    <main role="main" className="container">
      <div className='content'>
      <LessonHeader beforeLesson={beforeLesson} afterLesson={afterLesson} />
        <h1>Lekce 1 - Vytvoření prvních modelů</h1>

        <ClassLogin></ClassLogin>

        <div class="odstavec">
          <h3>TincerCAD</h3>
          <p>
            Je to stránka, na které můžeme vytvořit jakékoliv 3D modely, jaké si jen dovedeme
            představit a dokonce i takové, které nepodléhají
            naší představivosti, počínaje nejmenším objektem, například
            knoflíkem až po kosmické stanice pro celý vesmír,
            který si sami vymyslíme a k tomu se postupně dostaneme.
            Na konci kurzu budeme mít celý vesmír se svými hrdiny,
            zvířaty, dopravou a dokonce i s jídlem.
          </p>

          <h3>Důležité klávesové zkratky</h3>
          <h5>Pohyb objektů</h5>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Zkratka</th>
                <th scope="col">Popis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td><span>&#8592;</span> <span>&#8725;</span> <span>&#8593;</span> <span>&#8725;</span> <span>&#8595;</span>
                  <span>&#8725;</span> <span>&#8594;</span>
                </td>
                <td>Posouvání objektu po ose X a Y</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>CTRL <span>&#43;</span> <span>&#8593;</span> <span>&#8725;</span> <span>&#8595;</span> </td>
                <td>Posouvání po ose Z (nahoru a dolů)</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>SHIFT <span>&#43;</span> <span>&#8593;</span> <span>&#8725;</span> <span>&#8595;</span> </td>
                <td>Posouvání po ose X a Y o 10 bodů</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>CTRL <span>&#43;</span> SHIFT <span>&#8592;</span> <span>&#8725;</span> <span>&#8593;</span>
                  <span>&#8725;</span> <span>&#8595;</span> <span>&#8725;</span> <span>&#8594;</span>
                </td>
                <td>Posouvání po ose Z</td>
              </tr>
            </tbody>
          </table>

          <h5>Užitečné zkratky</h5>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Zkratka</th>
                <th scope="col">Popis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>CTRL <span>&#43;</span> C</td>
                <td>Kopírování objektů</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>CTRL <span>&#43;</span> V</td>
                <td>Vložení objektů</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>CTRL <span>&#43;</span> Z</td>
                <td>Vrátit se o krok zpět</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>CTRL <span>&#43;</span> SHIFT <span>&#8592;</span> <span>&#8725;</span> <span>&#8593;</span>
                  <span>&#8725;</span> <span>&#8595;</span> <span>&#8725;</span> <span>&#8594;</span>
                </td>
                <td>Posouvání po ose Z</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>CTRL <span>&#43;</span> SHIFT <span>&#43;</span> Z</td>
                <td>Předělat zpět</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>CTRL <span>&#43;</span> G</td>
                <td>Seskupení objektů</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>CTRL <span>&#43;</span> SHIFT <span>&#43;</span> G</td>
                <td>Rozdělení objektů</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>CTRL <span>&#43;</span> D</td>
                <td>Duplikovat objekt</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>CTRL <span>&#43;</span> L</td>
                <td>Uzamknout objekt</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>CTRL <span>&#43;</span> A</td>
                <td>Vybrat vše</td>
              </tr>
              <tr>
                <th scope="row">11</th>
                <td>DELETE</td>
                <td>Smazání vybraného objektu</td>
              </tr>
              <tr>
                <th scope="row">12</th>
                <td>W</td>
                <td>Přepnutí pracovní plochy</td>
              </tr>
              <tr>
                <th scope="row">13</th>
                <td>R</td>
                <td>Pravítko</td>
              </tr>
              <tr>
                <th scope="row">14</th>
                <td>F</td>
                <td>Upevnit pohled k vybranému objektu</td>
              </tr>
              <tr>
                <th scope="row">15</th>
                <td>D</td>
                <td>Shodit objekt dolů na plochu</td>
              </tr>
            </tbody>
          </table>

          <h5>Zkratky pro pohyb po ploše</h5>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Zkratka</th>
                <th scope="col">Popis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>ALT <span>&#43;</span> levé tlačítko myši</td>
                <td>Duplikování objektů, stejné jako CTRL <span>&#43;</span> D.</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>SHIFT <span>&#43;</span> levé tlačítko myši</td>
                <td>Výběr více objektů.</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>SHIFT <span>&#43;</span> levé tlačítko myši</td>
                <td>Při točení tělesa otočí vždy o 45°, posunutí tělesa v rovině.</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Kolečko na myši</td>
                <td>Při držení kolečka na myši se mohu pohybovat po ploše.</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>CTRL <span>&#43;</span> levé tlačítko myši</td>
                <td>Otáčím s pohledem na pracovní plochu.</td>
              </tr>
            </tbody>
          </table>

          <h3>Úkol č.1 - Vytvoření parníku</h3>
          <p>
            Našim úkolem bude vytvoření si parníku za pomocí základních obrazců a funkcí. V tomto úkolu se naučíme používat
            užitečné funkce jako je třeba zarovnání, shození předmětů dolů na plochu,
            sloučení objektů a pohyb objektů a kemry v TinkerCAD prostředí.
          </p>
          <table class="table table-bordered">
            <tr>
              <td>
                <p>Vyvoříme si dva objekty kvádr a trojúhelník tyhle dva objekty nám budou tvořit spodek naší lodi.</p>
                <p>Velikost objektů:</p>
                <ul>
                  <li>Kvádr - 30x70x5</li>
                  <li>Trojúhelník - 30x14x5</li>
                </ul>
                <p>Objekty pomocí klávesy D shodíme dolů na plochu. Ty poté zarovnáme k sobě tak jak je to na obrázku vedle.
                </p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce1/tinkercad-ukol1-1.avif"} altText={"Spodní část lodi"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>Vytvoříme si další kvádr, který nám bude tvořit naše kajuty parníku.</p>
                <p>Velikost kajut:</p>
                <ul>
                  <li>14x62x15 </li>
                </ul>
                <p>Kvádru změníme barvu na žlutou a položíme jej na námi už vytvořený spodek lodi. Kajuty zarovnáme se
                  spodním dílem lodi. Kajuty nesmí zasahovat do naší přídi lodi.</p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce1/tinkercad-ukol1-2.avif"} altText={"Přidání obytné části"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>Vytvoříme si jeden válec, ten nám bude sloužit jako předloha pro komíny našeho parníku. Ty budeme mít
                  celkem 3.</p>
                <p>Velikost komínu:</p>
                <ul>
                  <li>8x8x12</li>
                </ul>
                <p>Postup:</p>
                <ul>
                  <li>Po vytvoření a nastavení velikostí válec umístíme na náš žlutý kvádr.</li>
                  <li>Umístíme válce na střed a naduplikujete tak ještě 2 válce. Tak aby náš parník měl 3 komíny.</li>
                </ul>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce1/tinkercad-ukol1-3.avif"} altText={"Komíny"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>Vytvoříme si jeden válec bez výplně. Tohle budeme používat jako okna našeho parníku.</p>
                <p>velikosti válce:</p>
                <ul>
                  <li>11x8x3</li>
                </ul>
                <p>Vytvořený válec zanoříme do boku našeho žlutého válce a pomocí seskupení těles vyřežeme díry do strany.
                </p>
                <p>Stejný postup uděláme i na druhé straně.</p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce1/tinkercad-ukol1-4.avif"} altText={"Okna kajut"} />
              </td>
            </tr>
          </table>
          <p>
            Nyní jsme si vytvořili náše první dílo v 3D editoru TinkerCAD. Dají se zde tvořit spousta zajímavých obrázků a
            těles. Co jen vás napadne zde můžete
            graficky ztvárnit.
          </p>
          <h3>Úkol č.2 - Vytvoření pizzy</h3>
          <p>
            plátek salámu válec 4 výška 16 průměr,
            kousky ananasu jehlan 17 šířka a 25 výška špičku jehlany umažeme,
            plátek hřibu, nejprve vytvoříme celý hřib z polokoule a válce a pak jej ořežeme na plátek,
            kroužky cibule,
            tešto se skláda z tělesa torus a polokoule
          </p>
          <table class="table table-bordered">
            <tr>
              <td>
                <p>Vyvoříme válec jako plátek salámu s velikostí:</p>
                <ul>
                  <li>16x16x4</li>
                </ul>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce1/tinkercad-ukol1-5.avif"} altText={"Kolečko salámu"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>Vytvoříme ananas, jako objekt použijeme jehlan o velikosti:</p>
                <ul>
                  <li>17x25x17 </li>
                </ul>
                <p>Protože ani ananas není jehlan, uřízneme tomu našemu špičku.</p>
                <p>Použijeme na to čtverec bez výplbě a sjednotíme ho s našim jehlanem.</p>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce1/tinkercad-ukol1-6.avif"} altText={"Kousek ananasu"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>Vytvoříme houbu z objektů válce a koule</p>
                <p>Postup:</p>
                <ul>
                  <li>Umístíme na plochu kouli a válec</li>
                  <li>Z koule odřízneme polovinu a otočíme jí tak aby byla plochou stranou dole</li>
                  <li>Naši polokouli zarovnáme s válcem</li>
                  <li>Poslední krok je už odřezat strany tak, aby nám vznikl plochý obrázek, tak jak je to na obrázku vedle
                  </li>
                </ul>
              </td>
              <td>
                <table>
                  <tr>
                    <td>
                      <ImageViewer imageUrl={"/img/tinkerCAD/lekce1/tinkercad-ukol1-7.avif"} altText={"Houba celá"} />
                    </td>
                    <td>
                      <ImageViewer imageUrl={"/img/tinkerCAD/lekce1/tinkercad-ukol1-8.avif"} altText={"Plátek houby"} />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <p>Vytvoříme si jeden kousek cibule:</p>
                <p>Postup:</p>
                <ul>
                  <li>Umístíme na plochu kouli</li>
                  <li>Z kouli ořežeme tak jak to je na prvním obrázku vedle</li>
                  <li>Poté pomocí koule vyřežeme díru, aby to vypadalo jako stroužek cibule</li>
                </ul>
              </td>
              <td>
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce1/tinkercad-ukol1-12.avif"} altText={"První ořez koule"} />
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce1/tinkercad-ukol1-9.avif"} altText={"Ukázka ořezané části"} />
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce1/tinkercad-ukol1-10.avif"} altText={"Výřez vnitřní části"} />
                <ImageViewer imageUrl={"/img/tinkerCAD/lekce1/tinkercad-ukol1-11.avif"} altText={"Ukázka finální ho výřezu, připomínající cibuly"} />
              </td>
            </tr>
            <tr>
              <td>
                <p>A teď vše spojíme dohromady</p>
                <p>Postup:</p>
                <ul>
                  <li>Nejprve si uděláme z torusu kůrku</li>
                  <li>Poté naši kůrku vyplníme za pomocí válce</li>
                  <li>Pak už jsem budeme potřebovat vše naházat na pizzu a máme hotovo.</li>
                </ul>
              </td>
              <td>
                <table>
                  <tr>
                    <td>
                      <ImageViewer imageUrl={"/img/tinkerCAD/lekce1/tinkercad-ukol1-13.avif"} altText={"První webová stránka"} />
                    </td>
                    <td>
                      <ImageViewer imageUrl={"/img/tinkerCAD/lekce1/tinkercad-ukol1-14.avif"} altText={"První webová stránka"} />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  );
}

export default TinkercadLekce1;
