import { Component } from '@angular/core';
import HelloWorld from 'amd/HelloWorld' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-amd';

  constructor() {
    console.log('app.component.ts: 11', HelloWorld.hello());
  }
}
