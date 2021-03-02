import { Component } from '@angular/core';
import { LibraryChangesService } from '@services/library-related/library-changes.service';


@Component({
	selector: 'undo-changes-button',
	template: `
		<div><button class="btn btn-default" (click)="undoChanges()">Undo Changes</button></div>
	`
})
export class UndoChangesButtonComponent {

	constructor(private __libraryChanges: LibraryChangesService) {
	}


	undoChanges() {
		this.__libraryChanges.unsetAll();
	}

}
