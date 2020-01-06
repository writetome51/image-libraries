import { Component } from '@angular/core';
import { LibrarySaverService } from '../../services/library/library-saver.service';


@Component({
	selector: 'save-changes',
	templateUrl: './save-changes.component.html'
})
export class SaveChangesComponent {

	fileSavingInfo = `The library is saved to a file you download.  When you save changes, your device
	downloads a new version.`;


	constructor(
		private __librarySaver: LibrarySaverService,
	) {
	}


	saveChanges() {
		this.__librarySaver.save();
	}

}
