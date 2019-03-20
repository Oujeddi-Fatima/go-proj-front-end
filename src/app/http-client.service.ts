import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";

const baseUrl: string = "http://localhost:8080/";

@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  constructor(authService: AuthenticationService, public http: HttpClient) {}

  postToServer(link: string, data: any) {
    return this.http.post(baseUrl.concat(link), data);
  }

  getFromServer(link: string) {
    return this.http.get(baseUrl.concat(link));
  }
}
