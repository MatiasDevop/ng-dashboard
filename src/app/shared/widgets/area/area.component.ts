import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions = {};
  @Input() data: any = [];
  
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
      this.chartOptions =  {

        title: {
            text: 'Random DATA'
        },
    
        subtitle: {
            text: 'DEMO'
        },
    
        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
    
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2017'
            }
        },
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        credits:{
            enabled: false
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
        series: this.data,
        // series: [{
        //     name: 'Installation',
        //     data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        // }, {
        //     name: 'Manufacturing',
        //     data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        // }, {
        //     name: 'Sales & Distribution',
        //     data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        // }, {
        //     name: 'Project Development',
        //     data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        // }, {
        //     name: 'Other',
        //     data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        // }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    };
    HC_exporting(Highcharts);

    setTimeout(() => {
        window.dispatchEvent(
            new Event('resize')
        );
    }, 300)
  }

}
