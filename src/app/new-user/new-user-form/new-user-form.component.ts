import { Component } from '@angular/core';
import { NewUserProcessorService }
	from '../../services/data-operation-processor/new-user-processor.service';
import { DataOperationProcessorComponent } from '../../data-operation-processor.component';


@Component({
	selector: 'new-user-form',
	templateUrl: './new-user-form.component.html'
})
export class NewUserFormComponent extends DataOperationProcessorComponent {

	constructor(__newUserProcessor: NewUserProcessorService) {
		super(__newUserProcessor);
	}

}
