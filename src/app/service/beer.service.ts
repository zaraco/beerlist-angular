import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {endpoints} from "../../config/endpoints.config";
import {Beer} from "../types/beer.type";


@Injectable({
  providedIn: 'root',
})
export class BeerService {
  constructor(private httpClient: HttpClient) {
  }

  beerList(): Observable<Beer[]> {
    return this.httpClient.get<Beer[]>(endpoints.beerList())
  }
}
