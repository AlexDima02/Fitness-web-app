import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnChanges{

  @Input() activitati: any [] = [];
  @Input() chartType: 'ore' | 'kcal' = 'ore';

  public doughnutChartLabels: string[] = [];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [], label: ''},
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  constructor() {
  }

  ngOnChanges(): void {
    for (const activitate of this.activitati) {
      this.doughnutChartLabels.push(activitate.activitate);
      this.doughnutChartDatasets[0].data.push(
        this.chartType === 'ore' ? activitate.ore : activitate.kcal
      );
    }
    this.doughnutChartDatasets[0].label = this.chartType === 'ore' ? 'Ore' : 'KCal';
  }
}
