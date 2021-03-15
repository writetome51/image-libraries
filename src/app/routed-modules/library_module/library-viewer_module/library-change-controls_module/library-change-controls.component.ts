import { Component } from '@angular/core';
import { LibraryChangesService } from '@services/library/library-changes.service';


@Component({
	selector: 'library-change-controls',
	template: `
		<ng-container *ngIf="changesExist">
			<save-changes-button></save-changes-button>
			<undo-changes-button></undo-changes-button>
		</ng-container>
	`
})
export class LibraryChangeControlsComponent {

	get changesExist(): boolean {
		return this.__libraryChanges.exist;
	}


	constructor(private __libraryChanges: LibraryChangesService) {}

}
