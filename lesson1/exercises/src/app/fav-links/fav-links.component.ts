import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ["http://www.google.com", "http://www.slps.org", "http://www.facebook.com"];
 
  constructor() { }

  ngOnInit() {
  }

}
