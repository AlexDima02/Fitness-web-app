import { Component,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SchedulerService } from 'src/app/shared-module/scheduler-service/scheduler.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnDestroy {

summaryDays:any;
days = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri'];
objectKeys = Object.keys;
subscription!: Subscription;
constructor(private DailyService: SchedulerService) {
  this.subscription = this.DailyService.schedule.subscribe((res) => {
    this.summaryDays = res;
    console.log(this.summaryDays)
  })
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}


}
