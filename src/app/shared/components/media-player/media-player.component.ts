import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  state: string = 'paused';
  listObserver$: Subscription[] = [];

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');

  constructor(
    public multimediaService: MultimediaService
  ) { }


  ngOnInit(): void {
    this.listenTrack();
  }

  ngOnDestroy(): void {
    this.listObserver$.forEach(e => e.unsubscribe());
  }

  listenTrack() {
    const observer1$ = this.multimediaService.playerStatus$.subscribe(res => {
      this.state = res;
    })
    this.listObserver$ = [observer1$];
  }

  handlePosition(event: MouseEvent) {
    const elNative: HTMLElement = this.progressBar.nativeElement;
    const { clientX } = event;
    const { x, width } = elNative.getBoundingClientRect();
    const clickX = clientX - x;
    const percentageFromX = (clickX * 100) / width;
    this.multimediaService.seekAudio(percentageFromX);
  }

}
