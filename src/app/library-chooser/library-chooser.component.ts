import { Component } from '@angular/core';
import { LibraryReaderService } from '../services/library-reader.service';
import { LibraryService } from '../services/library.service';


@Component({
	selector: 'library-chooser',
	templateUrl: './library-chooser.component.html'
})
export class LibraryChooserComponent {


	constructor(
		private __library: LibraryService,
		private __libraryReader: LibraryReaderService
	) {
	}


	get prompt(): string {
		return (this.__libraryReader.doneReading ? 'Choose different library:' : 'Choose library:');
	}


	get libraryLoaded(): boolean {
		return this.__library.isSaved;
	}


	get images(): any[] {
		return this.__library.images;
	}


	readLibrary(library: File) {
		this.__library.file = library;
		this.__libraryReader.read(library);
	}


	reloadLibrary() {
		this.__libraryReader.read(this.__library.file);
	}

}
