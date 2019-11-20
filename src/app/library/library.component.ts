import { Component } from '@angular/core';
import { CurrentLibraryService as currentLibrary } from '../services/library/current-library.service';


@Component({
	selector: 'app-library',
	templateUrl: './library.component.html'
})
export class LibraryComponent {


	get name() {
		return currentLibrary.libName;
	}


}
