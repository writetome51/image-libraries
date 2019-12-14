import { Component } from '@angular/core';
import { UpdatePasswordProcessorService }
	from '../../services/data-transport-processor/update-password-processor.service';
import { DataProcessorComponent } from '../../data-processor.component';


@Component({
	selector: 'update-password-save-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="process">
			Save Changes
		</processing-button>
	`
})
export class UpdatePasswordSaveButtonComponent extends DataProcessorComponent {

	constructor(__updatePasswordProcessor: UpdatePasswordProcessorService) {
		super(__updatePasswordProcessor);
	}

}
