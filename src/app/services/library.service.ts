import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { AppImage } from '../../interfaces/app-image';


@Injectable({
	providedIn: 'root'
})
export class LibraryService {

	file: File;
	contents: {
		name: string,
		images: AppImage[]
	};
	private __unsavedName = '';


	set name(value) {
		if (!(this.isSaved)) {
			this.__unsavedName = value;
		} else {
			this.contents.name = value;
		}
	}


	get name(): string {
		if (this.isSaved) {
			return this.contents.name;
		} else {
			return this.__unsavedName;
		}
	}


	get images(): any[] {
		return this.contents.images;
	}


	get isSaved(): boolean {
		return hasValue(this.file);
	}


}
