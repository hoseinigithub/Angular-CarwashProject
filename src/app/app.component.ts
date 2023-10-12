import { Component,OnInit } from '@angular/core';
import {GetService} from './services/get.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  workerList =[];

  constructor(private service:GetService) {}

  ngOnInit() {
    this.service.getWorkers()
      .subscribe(response => {
        this.workerList = response['data']

      });
  }
  title = 'CarwashProject';
}

// export interface Student{
//   firstName:string,
//   lastName:string,
//   age:number,
//   salary:number,
//   bonus:number
// }
