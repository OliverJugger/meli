import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { DATA_DAYS_WEEK, DATA_TYPE_EXPERT, Day, Expert, TypeExpert } from 'src/app/model/expert';
import { NgCleanupHelper } from 'src/app/ng-cleanup-helper';
import { expertList } from '../expert-list';
import { ExpertService } from '../expert.service';


@Component({
  selector: 'app-expert-filter',
  templateUrl: './expert-filter.component.html',
  styleUrls: ['./expert-filter.component.scss']
})
export class ExpertFilterComponent extends NgCleanupHelper implements OnInit{

  @Output() onLaunch = new EventEmitter<any>()

  form: FormGroup  
  typeExpert: FormControl;

  typesExpertsAll:Array<TypeExpert> = new Array<TypeExpert>()

  days:Array<Day> = new Array<Day>()

  steps:Array<Expert>= new Array<Expert>()

  typeExpertInput: string

  constructor(private fb: FormBuilder, private expertService: ExpertService) {
    super()
    this._buildForm()
    this._setup()
  }

  private _buildForm(): void {
		this.form = this.fb.group({
			  typeExpert: [null],
        day: [null]
		})

	}

  ngOnInit(): void {  
      this.typeExpert = new FormControl('');
  
      this.form = this.fb.group({
        typeExpert: this.typeExpert
      });
  }

  onSubmit(){
    console.log(this.form.value)
  }

  onClick(){
    // this.expertService.launchSearch().subscribe(
    //   res => {
    //     this.onLaunch.emit(res)
    //   }      
    // )

    this.onLaunch.emit({type:this.typeExpertInput})
    
  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

  private _setup(): void {

    this.typesExpertsAll = DATA_TYPE_EXPERT
    this.days = DATA_DAYS_WEEK

	}

  private _buildFilter({ configuration, step, zone }: any): void {
		const filter = {
			filter: {
				configurations: configuration ? [`${configuration}`] : null,
				steps: step ? [`${step}`] : null,
				zones: zone ? [`${zone}`] : null
			}
		}

    //filter

		//this.change.emit(filter)
	}

}
