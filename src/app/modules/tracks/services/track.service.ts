
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly url = environment.url;

  // dataTracksTrending$: Observable<TrackModel[]> = of([]);
  // dataTracksRandom$: Observable<TrackModel[]> = of([]);

  constructor(private _http: HttpClient) {

  }

  getAllTracks$(): Observable<TrackModel[]> {
    return this._http.get<TrackModel[]>(`${this.url}/tracks`)
      .pipe(
        map((data: any) => {
          return data.data;
        }),
        catchError((err) => {
          console.log("❎ Error de conexión",err);
          return of([]);
        })
      );
  }

  getAllRandom$(): Observable<TrackModel[]> {
    return this._http.get<TrackModel[]>(`${this.url}/tracks`)
      .pipe(
        mergeMap(({ data }: any) => this.skipById(data, 1)),
        catchError((err) => {
          console.log("❎ Error de conexión",err);
          return of([]);
        })
      );
  }


  private skipById(listTracks: [], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTemp = listTracks.filter((a: TrackModel) => a._id != id);
      resolve(listTemp);
    });
  }



}
