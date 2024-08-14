import { Component } from '@angular/core';

@Component({
  selector: 'app-html-css',
  standalone: true,
  imports: [],
  templateUrl: './html-css.component.html',
  styleUrl: './html-css.component.css'
})
export class HtmlCssComponent {
  lessons = [
    {
      title: 'Lekce 2 - Seznamy, Obrázky, Tabulky',
      description: 'V této lekci si ukážeme jak si vytvořit seznam a tabulku. Jak přidat obrázek na vaši webovou stránku. A přidáme si k tomu jejich stylování.',
      link: '/lessons/html-css/html-css-2.html'
    },
    {
      title: 'Lekce 3 - Odkazy a více stránek',
      description: 'V této lekci si ukážeme jak fungují odkazy. Jak pomocí nich si udělat více než jednu stránku na svém webu. A jak si upravit vzhled odkazu pomocí CSS stylů.',
      link: '/lessons/html-css/html-css-3.html'
    },
    {
      title: 'Lekce 4 - Formuláře',
      description: 'V této lekci si ukážeme jak vytvořit formulář na vašich stránkách.',
      link: '/lessons/html-css/html-css-4.html'
    },
    {
      title: 'Lekce 5 - Vytvoření Blogu',
      description: 'V této lekci si představíme knihovnu Bootstrap a její použití na ukázkové stránce.',
      link: '/lessons/html-css/html-css-5.html'
    }
  ];
}
