import { Component } from '@angular/core';
import { LibrarySaverService } from '../../services/library/library-saver.service';


@Component({
	selector: 'save-changes',
	templateUrl: './save-changes.component.html'
})
export class SaveChangesComponent {


	constructor(private __librarySaver: LibrarySaverService) {
	}


	saveChanges() {
		this.__librarySaver.save();
	}

}
