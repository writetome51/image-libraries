import { Component } from '@angular/core';
import { LibraryReaderService } from '../services/library-reader.service';


@Component({
	selector: 'library-chooser',
	templateUrl: './library-chooser.component.html'
})
export class LibraryChooserComponent {

	private __loadedLibrary: File;


	constructor(
		private __libraryReader: LibraryReaderService
	) {
	}


	get prompt(): string {
		return (this.__libraryReader.doneReading ? 'Choose different library:' : 'Choose library:');
	}


	readLibrary(library: File) {
		this.__loadedLibrary = library;
		this.__libraryReader.read(library);
	}


	reloadLibrary() {
		this.__libraryReader.read(this.__loadedLibrary);
	}

}
