import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating!: number;
  starWidth!: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  ngOnChanges(): void{
    this.starWidth = (this.rating || 0) * 90 / 5;
  }
  onClick(): void {
    const message = `Đánh giá của sản phẩm là ${this.rating} sao !`;
    this.ratingClicked.emit(message);
    console.log('onClick()- star.component.ts is called'); // Thêm dòng này
  }
  ngOnInit(): void{
    // Gán giá trị mặc định cho rating ở đây
    this.rating = this.rating || 0;
    // Gán giá trị mặc định cho starWidth ở đây
    this.starWidth = (this.rating || 0) * 90 / 5;
  }
}
