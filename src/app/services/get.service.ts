import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetService {
  private url = 'http://localhost:5265/api/Worker/GetWorker';

  constructor(private httpClient: HttpClient) {
  }

  getWorkers(): Observable<any> {
    return this.httpClient.get(this.url);
  }

}
