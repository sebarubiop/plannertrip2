import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'search-destination',
  templateUrl: './search-destination.html',
  styleUrls: ['./search-destination.css']
})
export class SearchDestinationComponent implements OnInit {

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  submitTrip(){
    this.router.navigate(['/trip']); 
  }
}
