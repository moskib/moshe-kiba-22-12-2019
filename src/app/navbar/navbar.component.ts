import { Component, OnInit } from '@angular/core';
import { faCloudSun, faStar, faSearch } from '@fortawesome/free-solid-svg-icons';
import { LocationService } from 'app/services/location.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;
  icons =
    {
      brandIcon: faCloudSun,
      searchIcon: faSearch,
      favIcon: faStar
    };


  constructor(private locationService: LocationService) { }

  ngOnInit() {
    console.log(this.locationService.getSearchAutoComplete());
  }

}
