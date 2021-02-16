import { Component } from '@angular/core';
import { CreateLibraryProcessorService }
	from './create-library-processor_service/create-library-processor.service';


@Component({
	selector: 'new-library-form',
	template: `
		<div class="form-container">
			<form>
				<new-library-form-input></new-library-form-input>
				<submit-form-button [label]="'Create'" [processor]="processor"></submit-form-button>
			</form>
		</div>
	`
})
export class NewLibraryFormComponent {

	constructor(public processor: CreateLibraryProcessorService) {
	}

}
