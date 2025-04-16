import { Routes } from '@angular/router';
import { HeroComponent } from './page/hero/hero.component';
import { DragonballPagesComponent } from './components/dragonball/dragonball-pages.component';

export const routes: Routes = [
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPagesComponent,
  },
];
