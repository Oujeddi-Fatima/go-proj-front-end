import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeRoutingModule } from "../Routing/home-routing.module";
import { HomePage } from "./homePage.component";
import { MasterPage } from "./masterPage.component";
import { BaseLogger, DBLogger, ConsoleLogger } from "../Utility/logger.component";
import { GridComponent } from '../Utility/grid.component';


var LoggerService : any = [];
LoggerService.push(    { provide: "1", useClass: DBLogger },
{ provide: "2", useClass: ConsoleLogger },
{ provide: "3", useClass: BaseLogger })


@NgModule({
  declarations: [HomePage, MasterPage, GridComponent],
  imports: [BrowserModule, ReactiveFormsModule, HomeRoutingModule, FormsModule],
  providers: [LoggerService],
  bootstrap: [MasterPage]
})
export class HomeModule {}
