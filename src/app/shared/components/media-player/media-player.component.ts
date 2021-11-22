import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = {
    cover: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/c/b/e/3/cbe32534b5d42220e47b16a1a9c9c0dd.jpg',
    album: 'Prueba',
    name: 'Prueba',
    url: '',
    _id:1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
