import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../../../models/event';

@Component({
  selector: 'app-event-list',
  imports: [CommonModule],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
  title=signal('Liste des événements');
 
  
  events= signal<Event[]>([
    {
      id: 1,
      titre: 'Angular Workshops',
      description: 'Découvrez les nouveautés d Angular et développez vos compétences.',
      date: new Date('2026-10-15'),
      lieu: 'Tunis',
      prix: 50,
      imageUrl: 'images/image.jpg',
      nbPlaces: 30,
      category:'Technologie',
      nbLikes: 0,
    },
    {
      id: 2,
      titre: 'Music Festival 2026',
      description: 'Un festival musical avec plusieurs artistes et groupes.',
      date: new Date('2026-10-22'),
      lieu: 'Sousse',
      prix: 80,
      imageUrl: 'images/image.jpg',
      nbPlaces: 500,
      category: 'Musique',
      nbLikes: 0,
    },
    {
      id: 3,
      titre: 'AI & Innovation Conference',
      description: 'Une conférence consacrée à l intelligence artificielle et à l innovation.',
      date: new Date('2026-11-18'),
      lieu: 'Hammamet',
      prix: 100,
      imageUrl: 'images/image.jpg',
      nbPlaces: 150,
      category: 'Technologie',
      nbLikes: 0,
    },
    {
      id: 4,
      titre: 'Startup Meetup',
      description: 'Une rencontre entre entrepreneurs, étudiants et professionnels.',
      date: new Date('2026-11-05'),
      lieu: 'Tunis',
      prix: 30,
      imageUrl: 'images/image.jpg',
      nbPlaces: 100,
      category: 'Business',
      nbLikes: 0,
    },
  ]);

  favoriteEvents= signal<Event[]>([]);

  incrementLikes(event: Event) {
    return event.nbLikes++;
  }

  addToFavorite(event: Event) {
    if (!this.favoriteEvents().includes(event)) {
      this.favoriteEvents.update(favorites => [...favorites, event]);
    }
  }
  

}
