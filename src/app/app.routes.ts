import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MystatComponent } from './mystat/mystat.component';

import { AudacityComponent } from './lessons/audacity/audacity.component';
import { AudacityLekce1Component } from './lessons/audacity/lekce1/lekce1.component';
import { AudacityLekce2Component } from './lessons/audacity/lekce2/lekce2.component';
import { AudacityLekce3Component } from './lessons/audacity/lekce3/lekce3.component';
import { AudacityLekce4Component } from './lessons/audacity/lekce4/lekce4.component';

import { ConstructComponent } from './lessons/construct/construct.component';

import { HtmlCssComponent } from './lessons/html-css/html-css.component';
import { HtmlCssLekce1Component } from './lessons/html-css/lekce1/lekce1.component';
import { HtmlCssLekce2Component } from './lessons/html-css/lekce2/lekce2.component';
import { HtmlCssLekce3Component } from './lessons/html-css/lekce3/lekce3.component';
import { HtmlCssLekce4Component } from './lessons/html-css/lekce4/lekce4.component';
import { HtmlCssLekce5Component } from './lessons/html-css/lekce5/lekce5.component';
import { HtmlCssProjektComponent } from './lessons/html-css/projekt/projekt.component';
import { HtmlCssPublikovaniComponent } from './lessons/html-css/publikovani/publikovani.component';
import { HtmlCssTestZnalostiComponent } from './lessons/html-css/test-znalosti/test-znalosti.component';
import { HtmlCssUkazkovePraceComponent } from './lessons/html-css/ukazkove-prace/ukazkove-prace.component';
import { HtmlCssHodnoceniComponent } from './lessons/html-css/hodnoceni/hodnoceni.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },       // Výchozí cesta
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mystat', component: MystatComponent },
  // Audacity lesson
  { path: 'audacity', component: AudacityComponent },
  { path: 'audacity/lekce1', component: AudacityLekce1Component },
  { path: 'audacity/lekce2', component: AudacityLekce2Component },
  { path: 'audacity/lekce3', component: AudacityLekce3Component },
  { path: 'audacity/lekce4', component: AudacityLekce4Component },
  // Construct 3 lesson
  { path: 'construct', component: ConstructComponent },
  // HTML CSS lesson
  { path: 'html-css', component: HtmlCssComponent },
  { path: 'html-css/lekce1', component: HtmlCssLekce1Component },
  { path: 'html-css/lekce2', component: HtmlCssLekce2Component },
  { path: 'html-css/lekce3', component: HtmlCssLekce3Component },
  { path: 'html-css/lekce4', component: HtmlCssLekce4Component },
  { path: 'html-css/lekce5', component: HtmlCssLekce5Component },
  { path: 'html-css/projekt', component: HtmlCssProjektComponent },
  { path: 'html-css/publikovani', component: HtmlCssPublikovaniComponent },
  { path: 'html-css/test-znalosti', component: HtmlCssTestZnalostiComponent },
  { path: 'html-css/ukazkove-prace', component: HtmlCssUkazkovePraceComponent },
  { path: 'html-css/hodnoceni', component: HtmlCssHodnoceniComponent },
];
