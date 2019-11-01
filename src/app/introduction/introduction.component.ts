import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { DataOperationStatusService } from '../services/data-operation-status.service';


@Component({
	selector: 'app-introduction',
	templateUrl: './introduction.component.html'
})
export class IntroductionComponent implements OnInit {


	introduction = `This application lets you create libraries of images.  Inside each library you can 
	rename images, rearrange their order, add descriptions, tags, and do searches.`;


	constructor(
		public alert: AlertService,
		public dataOperationStatus: DataOperationStatusService
	) {
	}


	ngOnInit(): void {
		this.alert.clear();
	}


}
