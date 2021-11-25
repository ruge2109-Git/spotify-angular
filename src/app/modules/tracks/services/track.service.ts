import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '@data/tracks.json';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<TrackModel[]> = of([]);

  constructor() {
    const { data }: any = (dataRaw as any).default;
    this.dataTracksTrending$ = of(data);
    this.dataTracksRandom$ = new Observable((observer) => {
      const newTrack: TrackModel = {
        _id:9,
        name:'Leve',
        album:'Cartel de santa',
        cover:'https://i.ytimg.com/vi/1LAC847kENY/maxresdefault.jpg',
        url:'https://i.ytimg.com/vi/1LAC847kENY/maxresdefault.jpg'
      }
      setTimeout(() => {
        observer.next([newTrack]);
      }, 3500);
    })
  }



}
