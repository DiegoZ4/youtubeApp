import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  
  private youtubeUrl    = 'https://www.googleapis.com/youtube/v3';
  private apiKey        = 'AIzaSyAW1_VbFU3k-3YzBxknwBM3_5Pl_xLy4w0';
  private playlist      = 'UUvAaEWzVQuyzJLPaDWmsVWQ';
  private nextPageToken = '';

  constructor(
    private http: HttpClient
  ) {}

  getVideos() {
    
    const url = `${ this.youtubeUrl }/playlistItems`;

    const params = new HttpParams()
          .set('part', 'snippet')
          .set('key', this.apiKey)
          .set('playlistId', this.playlist)
          .set('maxResults', '10');

    return this.http.get( url, { params } );

  }
}
