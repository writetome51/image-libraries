import { Component } from '@angular/core';
import { LibraryChangesService}	from '../../shared/services/library/library-changes.service';


@Component({
	selector: 'undo-changes-button',
	template: `<div><button (click)="undoChanges()">Undo Changes</button></div>`
})
export class UndoChangesButtonComponent {

	constructor(private __libraryChanges: LibraryChangesService) {
	}

	undoChanges() {
		this.__libraryChanges.unsetAll();
	}

}
