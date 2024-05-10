import { Images } from "./images";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ImagesService
{
    private paintingsUrl = 'assets/paintings.json';

  constructor(private http: HttpClient) { }

  getImages(): Observable<Images[]> {
    return this.http.get<Images[]>(this.paintingsUrl);
  }
}
