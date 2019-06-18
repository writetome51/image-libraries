import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-introduction',
	templateUrl: './introduction.component.html'
})
export class IntroductionComponent implements OnInit {


	introduction = `This application lets you create a library of images.  Inside it you can rename them, 
	rearrange their order, add descriptions to each, and do searches.`;


	constructor() {
	}


	ngOnInit() {
	}

}
