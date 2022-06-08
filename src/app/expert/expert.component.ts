import { Component, OnInit } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { Expert } from 'src/app/model/expert';
import { baseData } from './expert-calendar/event-utc';
import { expertList } from './expert-list';
import { ExpertService } from './expert.service';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss']
})
export class ExpertComponent implements OnInit {

  selected:boolean = false

  sampleData: SchedulerEvent[]

  displayedColumns: string[] = ['nom', 'prenom', 'tel1', 'type'];
  dataSource: Array<Expert>;

  constructor(private expertService:ExpertService) {
    this.dataSource = expertList
    let randomOwner = this.getRandomOwner()
    console.log(baseData.filter(b => b.OwnerID==randomOwner))
  }

  ngOnInit(): void {

  }

  updateDataSource( _event: any) {

    if(_event.type !== undefined) {
      console.log( _event.type.toUpperCase())
      let filteredValues = expertList.filter( e => e.type == _event.type.toUpperCase())
      this.dataSource = new Array<Expert>()
      this.dataSource.push(filteredValues[this.getRandomInt(filteredValues.length-1)])
    } else {    
      this.dataSource = new Array<Expert>()
      this.dataSource.push(expertList[this.getRandomInt(53)])
    }
    this.selected=true
    
    let randomOwner = this.getRandomOwner()
    
    this.sampleData = baseData.filter(b => b.OwnerID==randomOwner).map(dataItem => (
      <SchedulerEvent> {
          id: dataItem.TaskID,
          start: this.parseAdjust(dataItem.Start),
          startTimezone: dataItem.startTimezone,
          end: this.parseAdjust(dataItem.End),
          endTimezone: dataItem.endTimezone,
          isAllDay: dataItem.IsAllDay,
          title: dataItem.Title,
          description: dataItem.Description,
          recurrenceRule: dataItem.RecurrenceRule,
          recurrenceId: dataItem.RecurrenceID,
          recurrenceException: dataItem.RecurrenceException,  
          roomId: dataItem.RoomID,
          ownerID: dataItem.OwnerID
      }
  ));

  }
  
  currentYear = new Date().getFullYear();

  parseAdjust = (eventDate: string): Date => {
    const date = new Date(eventDate);

    date.setFullYear(this.currentYear);
    return date;
  };

  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

  
  getRandomOwner() {
    return Math.round(Math.random() * (3 - 1) + 1);
  }

}
