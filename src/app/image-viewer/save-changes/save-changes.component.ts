import { Component } from '@angular/core';
import { LibrarySaverService } from '../../services/library-saver.service';
import { LibraryService } from '../../services/library.service';


@Component({
	selector: 'save-changes',
	templateUrl: './save-changes.component.html'
})
export class SaveChangesComponent {

	fileSavingInfo = `The library is saved to a file you download.  When you save changes, your device 
	downloads a new version.`;


	constructor(
		private __librarySaver: LibrarySaverService,
		private __library: LibraryService
	) {
	}


	saveChanges() {
		this.__librarySaver.save(this.__library.name);
	}

}
