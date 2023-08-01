import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  // standalone: true,
  // imports: [
  //   MatTabsModule,
  //   MatIconModule,
  //   MatButtonModule,
  //   MatInputModule,
  //   CommonModule,
  //   SharedModule,
  // ],
})

export class TabComponent {
  previousDay = 'Vineri';
  nextDay = 'Marti';
  arr = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Rezumat'];

  onClick(value: number) {
    this.previousDay = this.arr[value-1];
    this.nextDay = this.arr[value+1];

    if(this.arr[value] == 'Rezumat'){
      this.previousDay = this.arr[value-1];
      this.nextDay = this.arr[0];
    }

    if(this.arr[value] == 'Luni'){
      this.previousDay = this.arr[this.arr.length-1];
      this.nextDay = this.arr[value+1];
    }
    console.log(this.previousDay);
    console.log(this.nextDay);
  }
}
