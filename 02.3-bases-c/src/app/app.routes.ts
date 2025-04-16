import { Routes } from '@angular/router';
import { HeroComponent } from './page/hero/hero.component';
import { DragonballPagesComponent } from './page/dragonball/dragonball-pages.component';
import { DragonballSuperPagesComponent } from './page/dragonball-super/dragonball-super-pages.component';

export const routes: Routes = [
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPagesComponent,
  },
  {
    path: 'dragonball_super',
    component: DragonballSuperPagesComponent,
  },
];
