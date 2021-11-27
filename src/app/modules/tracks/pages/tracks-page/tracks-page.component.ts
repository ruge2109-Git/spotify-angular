import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  public tracksTrending: TrackModel[] = [];
  public tracksRandom: TrackModel[] = [];
  listObserver$: Subscription[] = [];

  constructor(
    private _trackService: TrackService
  ) { }


  ngOnInit(): void {
    this.initTracks();
  }

  ngOnDestroy(): void {
    this.listObserver$.forEach(e => e.unsubscribe());
  }

  async initTracks() {
    this.tracksTrending = await this._trackService.getAllTracks$().toPromise();
    this.tracksRandom = await this._trackService.getAllRandom$().toPromise();
  }

}
