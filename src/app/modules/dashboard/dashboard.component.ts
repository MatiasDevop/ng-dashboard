import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart =[];
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    console.log("initiating Dashboard....");
    
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    console.log(this.bigChart);
    console.log(this.cards);
    console.log(this.pieChart);

    
  }

}
