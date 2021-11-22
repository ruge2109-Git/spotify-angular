import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '@data/tracks.json';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent implements OnInit {

  public mockTrackList: TrackModel[] = [];

  constructor() { }

  ngOnInit(): void {
    const data : any = (dataRaw as any).default;    
    this.mockTrackList = data.data;
  }

}