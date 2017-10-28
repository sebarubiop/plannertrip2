import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'search-destination',
  templateUrl: './search-destination.html',
  styleUrls: ['./search-destination.css']
})
export class SearchDestinationComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
