import { Component } from '@angular/core';

@Component({
  selector: 'app-test',//we can make this a class instead by using .app-test and we can make class = to this for the same result. 
  //another way to do this is to enclose specifyer in brackets [] then in html we can make this an attribute to div tag
  template: `<div> 
              inline tmplate
            </div>`,
  styles: [`div {
    color: red;
  }`]
})
export class TestComponent {
  constructor() {}

  ngOnInit() {

  }

}
