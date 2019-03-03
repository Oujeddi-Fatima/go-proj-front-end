import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "grid-ui",
  templateUrl: "./grid.view.html"
})
export class GridComponent {
  gridColumns: Array<Object> = new Array<Object>();
  gridData: Array<Object> = new Array<Object>();

  @Input("grid-columns")
  set setGridColumns(_gridColumns: Array<Object>) {
      console.log(_gridColumns)
    this.gridColumns = _gridColumns;
  }

  @Input("grid-data")
  set setGridData(_gridData: Array<Object>) {
    console.log(_gridData)
    this.gridData = _gridData;
  }

  @Output("grid-selected")
  eventEmitter : EventEmitter<Object> =
  new EventEmitter<Object>();

  selectRow(_selectedObj: Object) {
    this.eventEmitter.emit(_selectedObj);
  }
}
