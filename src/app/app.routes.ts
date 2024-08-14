import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MystatComponent } from './mystat/mystat.component';

import { AudacityComponent } from './lessons/audacity/audacity.component';

import { ConstructComponent } from './lessons/construct/construct.component';

import { HtmlCssComponent } from './lessons/html-css/html-css.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },       // Výchozí cesta
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mystat', component: MystatComponent },
  { path: 'audacity', component: AudacityComponent },
  { path: 'construct', component: ConstructComponent },
  { path: 'html-css', component: HtmlCssComponent },
];
