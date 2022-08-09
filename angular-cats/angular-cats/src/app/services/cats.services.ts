import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, Observable, throwError, retry } from 'rxjs';
import { ICat } from '../models/cat.model';
import { environment } from '../../environments/environment';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getAll(): Observable<ICat[]> {
    return this.http
      .get<ICat[]>('https://api.thecatapi.com/v1/breeds', {
        params: new HttpParams({
          fromObject: { 'x-api-key': environment.apiKey },
        }),
      })
      .pipe(retry(2), catchError(this.errorHandler.bind(this)));
  }

  getBreed(breed: string): Observable<ICat[]> {
    console.log(breed);
    return this.http
      .get<ICat[]>('https://api.thecatapi.com/v1/breeds/search', {
        params: new HttpParams({
          fromObject: {
            'x-api-key': environment.apiKey,
            'breed_ids': breed,
          },
        }),
      })
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
