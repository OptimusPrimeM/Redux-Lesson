import { NgRedux } from '@angular-redux/store';
import { Component } from '@angular/core';
import { IAppState } from './store';
import { INCREAMENT } from './actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _counter = 0;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  /*Typical angular increment
  increment() {
    this._counter += 1;
  }
  */

  increment() {
    this.ngRedux.dispatch({ type: INCREAMENT });
  }

  get counter() {
    return this._counter;
  }
}
