import { Component } from '@angular/core';


@Component({
	selector: 'app-introduction',
	templateUrl: './introduction.component.html'
})
export class IntroductionComponent {


	introduction = `This application lets you create libraries of images.  Inside each library you can 
	rename images, rearrange their order, add descriptions, tags, and do searches.`;

}
