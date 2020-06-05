import { Component } from '@angular/core';
import { NewLibraryData as newLibrary }
	from '../../data-structures/runtime-state-data/new-library.data';


@Component({
	selector: 'new-library-button',
	template: `
		<div class="input-container">
			<button (click)="creatingNewLibrary = !(creatingNewLibrary)">{{buttonText}}</button>
		</div>
	`
})
export class NewLibraryButtonComponent {


	get creatingNewLibrary(): boolean {
		return newLibrary.beingCreated;
	}


	set creatingNewLibrary(value){
		newLibrary.beingCreated = value;
	}


	get buttonText() {
		return (this.creatingNewLibrary ? 'Cancel' : 'New Library');
	}


}
