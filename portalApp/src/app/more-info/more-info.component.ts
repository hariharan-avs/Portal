import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  @Input() name: string;
  @Output() changeHobby = new EventEmitter<string>();

  hobby;

  constructor() { }

  ngOnInit(): void {
  }

  public keyUp(event: any) {
    this.hobby = event.srcElement.value;

    console.log('keyUp hobby: ' + this.hobby, event);
    this.changeHobby.emit(this.hobby);
  }

}
