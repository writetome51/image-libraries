import { AppLibrary } from '../../interfaces/app-library';
import { Component, OnInit } from '@angular/core';
import { LibraryStorageService } from '../services/library/library-storage.service';


@Component({
	selector: 'libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent implements OnInit {


	private __libraries: AppLibrary[];


	constructor(private __libraryStorage: LibraryStorageService) {
	}


	get libraries(): AppLibrary[] {
		return this.__libraries;
	}


	ngOnInit(): void {
		let subscription = this.__libraryStorage.getLibraries().subscribe((result) => {


			subscription.unsubscribe();
		});
	}


}
