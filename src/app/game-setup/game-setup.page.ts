import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.page.html',
  styleUrls: ['./game-setup.page.scss'],
})
export class GameSetupPage implements AfterViewInit {
  game = {
    name: '',
    dateTime: '',
    playerName: '',
    description: '',
    location: '',
    preset: '',
    sets: 1
  };
  map: any;
  marker: any;
  autocomplete: any;

  constructor(private router: Router) { }

  // Lifecycle hook that runs after the view has been initialized
  ngAfterViewInit() {
    this.initMap();
    this.initAutocomplete();
  }

  // Method to initialize the map
  initMap() {
    const mapOptions = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    };
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  // Method to initialize the autocomplete for location input
  initAutocomplete() {
    const input = document.getElementById('autocomplete') as HTMLInputElement;
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete.getPlace();
      if (!place.geometry || !place.geometry.location) {
        return;
      }
      this.game.location = place.formatted_address;
      this.updateMap(place.geometry.location);
    });
  }

  // Method to update the map with a new location
  updateMap(location: any) {
    this.map.setCenter(location);
    if (this.marker) {
      this.marker.setMap(null);
    }
    this.marker = new google.maps.Marker({
      map: this.map,
      position: location,
    });
  }

  // Method to navigate back to the home page
  goBack() {
    this.router.navigateByUrl('/tabs/home');
  }

  // Method to start the game and save the game setup data
  startGame() {
    // Implement the logic to start the game
    localStorage.setItem('currentGame', JSON.stringify(this.game));
    this.router.navigateByUrl('/tabs/game-play');
  }
}
