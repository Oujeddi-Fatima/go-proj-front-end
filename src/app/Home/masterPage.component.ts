import { Component, Injector } from "@angular/core";
import { ILogger } from "../Utility/logger.component";

@Component({
  selector: "app-root",
  templateUrl: "./masterPage.view.html",
})
export class MasterPage {
  search:String="";
  baseLogger: ILogger;
  constructor(_injector: Injector) {
    this.baseLogger = _injector.get("3");
  }
}
