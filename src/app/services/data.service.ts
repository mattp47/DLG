import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Faq} from '../models/faq';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  url = '../../assets/data/faqs.json';

  constructor(private http: HttpClient) {
  }

  public getFaqs(): Observable<Faq[]> {
    return this.http.get<Faq[]>(this.url).pipe(
      catchError(this.handleError)
    );
  }

  public handleError(error: HttpErrorResponse): Observable<[]> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}
