import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-html-css',
  standalone: true,
  imports: [CommonModule],  // Include CommonModule in the imports array
  templateUrl: './html-css.component.html',
  styleUrls: ['./html-css.component.css']
})
export class HtmlCssComponent {
  lessons = [
    {
      title: 'Lekce 1 - Seznámení s HTML a CSS',
      description: 'V dnešní lekci si vysvětlíme co HTML a CSS znamena. NA co se tyto technologie používají. Vytvořeíme si naši první webovou stránku.',
      link: 'html-css/lekce1'
    },
    {
      title: 'Lekce 2 - Seznamy, Obrázky, Tabulky',
      description: 'V této lekci si ukážeme jak si vytvořit seznam a tabulku. Jak přidat obrázek na vaši webovou stránku. A přidáme si k tomu jejich stylování.',
      link: 'html-css/lekce2'
    },
    {
      title: 'Lekce 3 - Odkazy a více stránek',
      description: 'V této lekci si ukážeme jak fungují odkazy. Jak pomocí nich si udělat více než jednu stránku na svém webu. A jak si upravit vzhled odkazu pomocí CSS stylů.',
      link: 'html-css/lekce3'
    },
    {
      title: 'Lekce 4 - Formuláře',
      description: 'V této lekci si ukážeme jak vytvořit formulář na vašich stránkách.',
      link: 'html-css/lekce4'
    },
    {
      title: 'Lekce 5 - Vytvoření Blogu',
      description: 'V této lekci si představíme knihovnu Bootstrap a její použití na ukázkové stránce.',
      link: 'html-css/lekce5'
    }
  ];

  project = {
    title: 'Projekt',
    description: 'V dalších lekcích budete vypracovávat závěrečný projekt a prezentaci k němu. Veškeré materiály dostanete na lekci. K tvorbě projektu budou i potřebné znalosti z lekcí, které jsme jič probrali.',
    link: 'html-css/projekt',
    buttonText: 'Přejít na projekt'
  };

  finalPresentation = {
    title: 'Zadání závěrečné prezentace',
    description: 'V dalších lekcích budete vypracovávat závěrečný projekt a prezentaci k němu. Veškeré materiály dostanete na lekci. K tvorbě projektu budou i potřebné znalosti z lekcí, které jsme již probrali. V případě nejasností se mi ozvete.',
    link: 'prezentace',
    buttonText: 'Přejít na projekt'
  };

  rating = {
    title: 'Hodnocení lekce',
    description: 'Prosím ohodnoťte lekci v níže přidaném formuláři.',
    link: 'html-css/hodnoceni',
    buttonText: 'Formulář hodnocení'
  };

  additional  = [
    {
      title: 'Publikování webu',
      description: 'Zde je maláý článek, popisující co je to doména. A také jak zpřístupnit své webové stránky světu.',
      link: 'html-css/publikovani'
    },
    {
      title: 'Otestování znalostí',
      description: 'Zde je maláý článek, popisující co je to doména. A také jak zpřístupnit své webové stránky světu.',
      link: 'html-css/test-znalosti'
    },
    {
      title: 'Ukázkové práce',
      description: 'Zde naleznete kódy ke stažení.',
      link: 'html-css/ukazkove-prace'
    }
  ];
}
