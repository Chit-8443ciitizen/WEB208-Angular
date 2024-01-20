import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })

export class FilterService {
    private _filterValue: BehaviorSubject<string> = new BehaviorSubject<string>('');

    get filterValue$() {
        return this._filterValue.asObservable();
      };
    
    setFilterValue(value: string) {
        this._filterValue.next(value);
      }
}