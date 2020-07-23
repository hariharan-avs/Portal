import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portalApp';

  isDisabled = false;
  isHidden = false;
  customClass = 'italic';
  isUpperCase = false;
  isDarkTheme = false;
  isSurnameEnabled = true;

  cityArray = ['London', 'New York', 'Naples'];

  selectedCity;

  classes = ['red', 'bold'];

  styles = {
    'font-family': 'cursive',
    'text-decoration': 'overline'
  };

  name = 'Avon';

  public click(event: any) {
    console.log('click: ' + event.srcElement.value, event);
  }

  public mouseOver(event: any) {
    console.log('mouseOver: ' + event.srcElement.value, event);
  }

  public keyUp(event: any) {
    console.log('keyUp: ' + event.srcElement.value, event);
  }

  public selectCity(event: any){
    console.log('selectCity: ' + event.srcElement.value, event);
    this.selectedCity = event.srcElement.value;
  }

  public changeHobby(event: any) {
    console.log('changeHobby: ' + event);    
  }
}
