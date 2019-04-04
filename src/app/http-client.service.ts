import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";

const baseUrl: string = "http://localhost:8080/";

@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  constructor(authService: AuthenticationService, public http: HttpClient) {}

  postToServer(link: string, data: any, options?:any) {
    return this.http.post(baseUrl.concat(link), data, options);
  }

  getFromServer(link: string) {
    return this.http.get(baseUrl.concat(link));
  }

  getFromServerHref(link: string) {
    return this.http.get(link);
  }

  getFromServerQueryParam(link: string, params: any) {
    return this.http.get(baseUrl.concat(link), { params: params });
  }
}
