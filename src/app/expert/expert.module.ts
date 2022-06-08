import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertListComponent } from './expert-list/expert-list.component';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpertFilterComponent } from './expert-filter/expert-filter.component';

import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSelectModule } from '@angular/material/select'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatExpansionModule } from '@angular/material/expansion'
import {MatButtonModule} from '@angular/material/button';
import { ExpertComponent } from './expert.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { ExperCalendarComponent } from './expert-calendar/expert-calendar.component';

@NgModule({
  declarations: [
    ExpertListComponent,
    ExpertFilterComponent,
    ExpertComponent,
    ExperCalendarComponent
  ],
  imports: [
    MatTableModule,
    ReactiveFormsModule,
    CommonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTooltipModule,
    MatExpansionModule,
    MatButtonModule,
    SchedulerModule
  ],
  exports: [
    ExpertListComponent,
    ExpertFilterComponent,
    ExpertComponent,
    ExperCalendarComponent
  ]
})
export class ExpertModule { }
