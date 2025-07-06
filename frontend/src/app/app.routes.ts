import { Routes } from '@angular/router';
import {MenuNavegacion} from './layout/menu-navegacion/menu-navegacion'
import {Home} from './pages/home/home'
export const routes: Routes = [
  {
    path: '',
    component: MenuNavegacion,
    children: [
      { path: 'Inicio', component: Home },
    ]
  },
];
