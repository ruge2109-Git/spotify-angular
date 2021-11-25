import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover: TrackModel = {
    cover: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/c/b/e/3/cbe32534b5d42220e47b16a1a9c9c0dd.jpg',
    album: 'Prueba',
    name: 'Prueba',
    url: '',
    _id: 1
  }

  listObserver$: Subscription[] = [];

  constructor(
    private _multimediaService: MultimediaService
  ) { }

  
  ngOnInit(): void {
    this.listenTrack();
  }
  
  ngOnDestroy(): void {
    this.listObserver$.forEach(e => e.unsubscribe());
  }
  
  listenTrack() {
    const observer$: Subscription = this._multimediaService.callback.subscribe(
      (data: TrackModel) => {
        console.log("recibiendo canción", data);
      }
    );
    this.listObserver$ = [observer$];

  }

}
