import { Component, OnInit } from "@angular/core";
import { Location } from "../models/location.model";
import { Router } from "@angular/router";
import { LocationService } from "app/services/location.service";
import { FavoritesService } from "app/services/favorites.service";
import { Observable } from "rxjs";

@Component({
  selector: "aeric-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"]
})
export class FavoritesComponent implements OnInit {
  constructor(
    private router: Router,
    private locationService: LocationService,
    private favoritesService: FavoritesService
  ) {}

  get favorites(): Observable<Location[]> {
    return this.favoritesService.favorites;
  }

  ngOnInit() {}

  onViewLocation(location: Location) {
    this.locationService.setCurrentLocation(location);
    this.router.navigate(["/"]);
  }
}
