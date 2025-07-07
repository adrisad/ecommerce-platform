import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MenuNavegacion} from './layout/menu-navegacion/menu-navegacion'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,MenuNavegacion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
