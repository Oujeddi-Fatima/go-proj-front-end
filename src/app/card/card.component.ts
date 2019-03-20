import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  title:string = "title";
  date:string ="03-12-2019" ;
  content:string ="this is the content of the ...";
  link:string="home";

  constructor(private authService: AuthenticationService) {
    console.log(authService.isAuthenticated())
   }

  ngOnInit() {
  }

}
