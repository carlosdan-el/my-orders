import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-orders',
  templateUrl: './table-orders.component.html',
  styleUrls: ['./table-orders.component.css']
})
export class TableOrdersComponent implements OnInit {

  @Input() columnsName: Array<string> = [];

  constructor() {
  }

  ngOnInit(): void { 
    console.log(this.columnsName);
  }
  
}
