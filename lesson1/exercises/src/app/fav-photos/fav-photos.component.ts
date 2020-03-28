import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'What Do You Meme?';
  image1 = 'https://i.imgflip.com/1ophsy.jpg';
  image2 = 'https://insidethemagic-119e2.kxcdn.com/wp-content/uploads/2020/03/Screen-Shot-2020-03-20-at-17.39.10-800x400.png';
  image3 = 'https://bookstr.com/wp-content/uploads/2019/09/Image-via-Memes-Monkey-e1569248168154.jpeg';


  constructor() { }

  ngOnInit() {
  }

}