import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { DataOperationBegunService } from '../services/data-operation-begun.service';


@Component({
	selector: 'app-introduction',
	templateUrl: './introduction.component.html'
})
export class IntroductionComponent {


	introduction = `This application lets you create libraries of images.  Inside each library you can 
	rename images, rearrange their order, add descriptions, tags, and do searches.`;


	constructor(
		public alert: AlertService,
		public dataOperationBegun: DataOperationBegunService
	) {
	}


}
