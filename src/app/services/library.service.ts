import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class LibraryService {

	file: File;
	private __unsavedName = '';


	set name(value) {
		if (!(this.isSaved)) this.__unsavedName = value;
	}


	get name(): string {
		if (this.isSaved) return this.file.name;
		else return this.__unsavedName;
	}


	get isSaved(): boolean {
		return hasValue(this.file);
	}


}
