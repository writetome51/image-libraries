import { Component } from '@angular/core';
import { CreatingNewLibraryService as creatingNewLibrary }
	from '../services/creating-new-library.service';


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
		return creatingNewLibrary.status;
	}


	set creatingNewLibrary(value){
		creatingNewLibrary.status = value;
	}


	get buttonText() {
		return (this.creatingNewLibrary ? 'Cancel' : 'New Library');
	}


}
