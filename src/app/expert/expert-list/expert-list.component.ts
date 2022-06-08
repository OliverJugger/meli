import { Component, Input, OnInit } from '@angular/core';
import { Expert } from 'src/app/model/expert';
import { ExpertService } from '../expert.service';

export interface PeriodicElement {
  prenom: string;
  nom: number;
  tel1: number;
  type: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nom: 1, prenom: 'Hydrogen', tel1: 1.0079, type: 'H'},
  {nom: 2, prenom: 'Helium', tel1: 4.0026, type: 'He'},
  {nom: 3, prenom: 'Lithium', tel1: 6.941, type: 'Li'},
  {nom: 4, prenom: 'Beryllium', tel1: 9.0122, type: 'Be'},
  {nom: 5, prenom: 'Boron', tel1: 10.811, type: 'B'},
  {nom: 6, prenom: 'Carbon', tel1: 12.0107, type: 'C'},
  {nom: 7, prenom: 'Nitrogen', tel1: 14.0067, type: 'N'},
  {nom: 8, prenom: 'Oxygen', tel1: 15.9994, type: 'O'},
  {nom: 9, prenom: 'Fluorine', tel1: 18.9984, type: 'F'},
  {nom: 10, prenom: 'Neon', tel1: 20.1797, type: 'Ne'},
]

@Component({
  selector: 'app-expert-list',
  templateUrl: './expert-list.component.html',
  styleUrls: ['./expert-list.component.scss']
})
export class ExpertListComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'prenom', 'tel1', 'lieu', 'type'];

  @Input() dataSource: Array<Expert>;

  constructor() {
  }

  ngOnInit(): void {

  }

  onClick() {
  }


}
