import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public columnsName: Array<string> = [];
  public orders: any = [];

  constructor() {
  }

  ngOnInit(): void {
    this.columnsName = ['ID', 'Customer', 'Address', 'Time', 'Status', 'Actions'];
    this.orders.push({
      id: 1,
      createdAt: '2021-06-25 00:00:00',
      updatedAt: '2021-06-25 00:00:00',
      createdBy: 'Carlos Daniel',
      updatedBy: 'Carlos Daniel',
      itemsQuantity: 5,
      status: 'active'
    },
    {id: 2,
      createdAt: '2021-06-25 10:00:00',
      updatedAt: '2021-06-25 10:00:00',
      createdBy: 'Carlos Daniel',
      updatedBy: 'Carlos Daniel',
      itemsQuantity: 8,
      status: 'active'
    },
    {id: 3,
      createdAt: '2021-06-25 10:00:00',
      updatedAt: '2021-06-25 10:00:00',
      createdBy: 'Carlos Daniel',
      updatedBy: 'Carlos Daniel',
      itemsQuantity: 8,
      status: 'active'
    },
    {id: 4,
      createdAt: '2021-06-25 10:00:00',
      updatedAt: '2021-06-25 10:00:00',
      createdBy: 'Carlos Daniel',
      updatedBy: 'Carlos Daniel',
      itemsQuantity: 8,
      status: 'active'
    },
    {id: 5,
      createdAt: '2021-06-25 10:00:00',
      updatedAt: '2021-06-25 10:00:00',
      createdBy: 'Carlos Daniel',
      updatedBy: 'Carlos Daniel',
      itemsQuantity: 8,
      status: 'active'
    }
    );
  }

  delete(id: String): void {
    console.log(id);
  }

}
