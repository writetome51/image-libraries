import { Component } from '@angular/core';
import { UpdatePasswordProcessorService }
	from '../../services/data-operation-processor/update-password-processor.service';
import { DataOperationProcessorComponent } from '../../data-operation-processor.component';


@Component({
	selector: 'update-password-save-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="process">
			Save Changes
		</processing-button>
	`
})
export class UpdatePasswordSaveButtonComponent extends DataOperationProcessorComponent {

	constructor(__updatePasswordProcessor: UpdatePasswordProcessorService) {
		super(__updatePasswordProcessor);
	}

}
