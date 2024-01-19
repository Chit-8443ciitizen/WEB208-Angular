import { Component} from '@angular/core';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-exe05',
  templateUrl: './exe05.component.html',
  styleUrls: ['./exe05.component.css']
})
export class Exe05Component  {  
  constructor(private filterService: FilterService) {}

  private _filterValue: string = '';

  set listFilter(value: string){
    this._filterValue = value;
    this.filterService.setFilterValue(this._filterValue);
  }
  get listFilter(): string {
    return this._filterValue;
  }
}
