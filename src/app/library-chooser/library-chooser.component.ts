import { Component } from '@angular/core';
import { LibraryReaderService } from '../services/library-reader.service';
import { LoadedLibraryService } from '../services/loaded-library.service';
import { hasValue, noValue } from '@writetome51/has-value-no-value';


@Component({
	selector: 'library-chooser',
	templateUrl: './library-chooser.component.html'
})
export class LibraryChooserComponent {


	constructor(
		private __loadedLibrary: LoadedLibraryService,
		private __libraryReader: LibraryReaderService
	) {
	}


	get prompt(): string {
		return (this.__libraryReader.doneReading ? 'Choose different library:' : 'Choose library:');
	}


	get libraryLoaded(): boolean {
		return hasValue(this.__loadedLibrary.file);
	}


	readLibrary(library: File) {
		if (noValue(library)) return;

		this.__libraryReader.read(library);
		this.__loadedLibrary.file = library;
	}


	reloadLibrary() {
		this.__libraryReader.read(this.__loadedLibrary.file);
	}

}
