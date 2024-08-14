import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audacity',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './audacity.component.html',
  styleUrls: ['./audacity.component.css']
})
export class AudacityComponent {
  lessons = [
    {
      title: 'Lekce 1',
      description: 'V této lekci se naučíte základní práci s programem Audacity, včetně instalace, vytváření nových projektů a nahrávání zvuku. Naučíte se také základy zvukové teorie, jako je vzorkovací frekvence, rozdíly mezi stereo a mono zvukem, a jak uložit projekt do formátu MP3 s vyplněním metadat.',
      link: 'audacity/lekce1'
    },
    {
      title: 'Lekce 2',
      description: 'V této lekci naučíte používat Audacity pro úpravu zvuku, včetně efektů jako normalizace, limiter, fade in, fade out a zesílení. Budete tvořit vlastní podcast (2-5 minut) s intrem, sponzorem, outrem a třemi efekty. Naučíte se také ukládat MP3 soubory a vyplňovat metadata.',
      link: 'audacity/lekce2'
    },
    {
      title: 'Lekce 3',
      description: 'V této lekci naučíte používat Audacity pro ukázku spectogramu. Ukážeme si jak vytvářet šum, tóny a jiné zvuky.',
      link: 'audacity/lekce3'
    },
    {
      title: 'Lekce 4',
      description: 'V této lekci naučíte používat Audacity pro úpravu zvuku. Ukážeme si jak zvýšit a snížit hlasitost a jiné možné nastavení. Zadáme si projekt a také prezentaci. Tohle vše pak nás čeká ještě odprezentovat rodičům.',
      link: 'audacity/lekce4'
    },
  ];
  
  project = {
    title: 'Projekt',
    description: 'V dalších lekcích budete vypracovávat závěrečný projekt a prezentaci k němu. Veškeré materiály dostanete na lekci. K tvorbě projektu budou i potřebné znalosti z lekcí, které jsme již probrali. V případě nejasností se mi ozvete.',
    link: '/lessons/audacity/projekt.html',
    buttonText: 'Přejít na projekt'
  };

  finalPresentation = {
    title: 'Zadání závěrečné prezentace',
    description: 'V dalších lekcích budete vypracovávat závěrečný projekt a prezentaci k němu. Veškeré materiály dostanete na lekci. K tvorbě projektu budou i potřebné znalosti z lekcí, které jsme již probrali. V případě nejasností se mi ozvete.',
    link: '/lessons/audacity/projekt.html',
    buttonText: 'Přejít na projekt'
  };

  rating = {
    title: 'Hodnocení lekce',
    description: 'Prosím ohodnoťte lekci v níže přidaném formuláři.',
    link: '/lessons/audacity/hodnoceni.html',
    buttonText: 'Formulář hodnocení'
  };
}
