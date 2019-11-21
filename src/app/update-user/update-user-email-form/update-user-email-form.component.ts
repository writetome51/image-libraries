import { Component } from '@angular/core';
import { UpdateEmailProcessorService }
	from '../../services/data-operation-processor/update-email-processor.service';
import { PerformAppDataOperationService as performAppDataOperation }
	from '../../services/perform-app-data-operation.service';
import { ClearAlertAndFormOnInitComponent } from '../../clear-alert-and-form-on-init.component';
import { UpdateUserSubComponent } from '../update-user-sub.component';


@Component({
	selector: 'update-user-email-form',
	templateUrl: './update-user-email-form.component.html'
})
export class UpdateUserEmailFormComponent extends ClearAlertAndFormOnInitComponent
	implements UpdateUserSubComponent {

	static readonly heading = 'Update Email';


	constructor(private __emailUpdateProcessor: UpdateEmailProcessorService) {
		super();
	}


	async save() {
		await performAppDataOperation.go(this.__emailUpdateProcessor);
	}

}
