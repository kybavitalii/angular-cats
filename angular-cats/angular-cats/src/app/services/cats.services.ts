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
import { IOptions } from '../models/options.model';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  search: string = '';
  options: IOptions = {
    'x-api-key': environment.apiKey,
  };
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  // https://api.thecatapi.com/v1/breeds
  getAll(search: string, options: IOptions): Observable<ICat[]> {
    return this.responseToAPI(search, options);
  }

  // https://api.thecatapi.com/v1/breeds/search
  // fromObject: {
  //   'x-api-key': environment.apiKey,
  //   q: breed,
  getBreed(options: IOptions, breed: string): Observable<ICat[]> {
    const search = '/search';
    options.q = breed;
    return this.responseToAPI(search, options);
  }

  // 'https://api.thecatapi.com/v1/breeds'
  getLimitedList(search: string, options: IOptions): Observable<ICat[]> {
    return this.responseToAPI(search, options);
  }

  responseToAPI(search: string, options: IOptions): Observable<ICat[]> {
    return this.http
      .get<ICat[]>(`https://api.thecatapi.com/v1/breeds${search}`, {
        params: new HttpParams({
          fromObject: { ...options },
        }),
      })
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
