import { Component } from '@angular/core';
import { LibraryChangesService as libraryChanges }
	from '../../services/library/library-changes.service';


@Component({
	selector: 'undo-changes-button',
	template: `<div><button (click)="undoChanges()">Undo Changes</button></div>`
})
export class UndoChangesButtonComponent {

	undoChanges() {
		libraryChanges.unsetAll();
	}

}
