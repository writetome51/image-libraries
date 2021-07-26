import { Component } from '@angular/core';
import { NewLibraryBeingCreatedData as newLibraryBeingCreated }
	from '@runtime-state-data/new-library-being-created.data';


@Component({
	selector: 'new-library-button',
	template: `
		<div class="input-container">
			<button class="btn btn-default" (click)="creatingNewLibrary = !(creatingNewLibrary)">
				{{label}}
			</button>
		</div>
	`
})
export class NewLibraryButtonComponent {

	get creatingNewLibrary(): boolean {
		return newLibraryBeingCreated.true;
	}

	set creatingNewLibrary(value){
		newLibraryBeingCreated.true = value;
	}

	get label() {
		return (this.creatingNewLibrary ? 'Cancel' : 'New Library');
	}

}
