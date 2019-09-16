import { AppLibrary } from '../../interfaces/app-library';
import { Component } from '@angular/core';
import { UserLibrariesService } from '../services/library/user-libraries.service';


@Component({
	selector: 'libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent {


	constructor(private __userLibraries: UserLibrariesService) {
	}


	get libraries(): AppLibrary[] {
		return this.__userLibraries.data;
	}


}
