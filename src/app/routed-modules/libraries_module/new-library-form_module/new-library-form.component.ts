import { Component } from '@angular/core';
import { ProcessCreateLibraryService }
	from './process-create-library_service/process-create-library.service';
import { LibraryNameInputService } from './library-name-input.service';


@Component({
	selector: 'new-library-form',
	template: `
		<div class="form-container">
			<form>
				<new-library-form-input></new-library-form-input>
				<submit-form-button [label]="'Create'" [validatingInputs]="libraryNameInput"
					[iDoThis]="process"
				>
				</submit-form-button>
			</form>
		</div>
	`
})
export class NewLibraryFormComponent {

	constructor(
		public process: ProcessCreateLibraryService,
		public libraryNameInput: LibraryNameInputService
	) {}

}
