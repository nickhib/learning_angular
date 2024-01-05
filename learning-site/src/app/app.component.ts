import { Component } from '@angular/core';

@Component({//meta data attached as a decorator. attaches to the appcomponent class. contains metadata and template
  selector: 'app-root',// selector is a custom html tag that can be used to represent the component
  templateUrl: './app.component.html',// represents the view for this component
  styleUrls: ['./app.component.css']// styles that only apply to this component which is the css file. 
})
export class AppComponent {//contains no methods 
  title = 'learning-site';
}
