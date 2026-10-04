import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './core/home/home';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { EventList } from './core/event-list/event-list';

@Component({
  selector: 'app-root',
  imports: [Header, Home, Footer, EventList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nom-projet');
}
