import { ClearAlertOnDestroyContainerComponent } from './clear-alert-on-destroy-container.component';
import { ClearFormDataService as clearFormData } from '@services/clear-form-data.service';
import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'clear-form-on-init-and-alert-on-destroy-container',
	template: `<ng-content></ng-content>`
})
export class ClearFormOnInitAndAlertOnDestroyContainerComponent
	extends ClearAlertOnDestroyContainerComponent implements OnInit {

	ngOnInit(): void {
		clearFormData.go();
	}

}
