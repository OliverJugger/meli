import { Component, Input } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { displayDate, sampleData } from './event-utc';

@Component({
  selector: 'my-app',
  template: `
      <kendo-scheduler [kendoSchedulerBinding]="events"
                       [selectedDate]="selectedDate"
                       startTime="07:00"
                       style="height: 600px; margin-top:30px;">

          <kendo-scheduler-week-view>
          </kendo-scheduler-week-view>

          <kendo-scheduler-messages
              today="Aujourd'hui"
              allDay="Journée"
              dayViewTitle="Jour"
              weekViewTitle="Semaine"
              monthViewTitle="Mois"
              showWorkDay="Montrer heures travail"
              showFullDay="Montrer journée complète"
          >
          </kendo-scheduler-messages>
      </kendo-scheduler>
  `,
  styleUrls: ['./expert.calendar.scss']
})
export class ExperCalendarComponent {
  public selectedDate: Date = displayDate;
  @Input() events: SchedulerEvent[];
}
