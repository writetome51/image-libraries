import { Component } from '@angular/core';
import { ProcessCreateLibraryService }
	from './process-create-library_service/process-create-library.service';


@Component({
	selector: 'new-library-form',
	template: `
		<div class="form-container">
			<form>
				<new-library-form-input></new-library-form-input>
				<submit-form-button [label]="'Create'" [process]="processor"></submit-form-button>
			</form>
		</div>
	`
})
export class NewLibraryFormComponent {

	constructor(public processor: ProcessCreateLibraryService) {
	}

}
