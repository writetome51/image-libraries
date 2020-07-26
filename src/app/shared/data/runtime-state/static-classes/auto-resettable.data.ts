import { Submenu } from '@shared/interfaces/submenu';
import { DBImage } from '@shared/interfaces/db-image';
import { DBLibrary } from '@shared/interfaces/db-library';
import { AppImage } from '@shared/interfaces/app-image';


export class ActionMenuChoicesData {

	static data: Array<string | Submenu>;


	static setDefault() {
		this.data = [];
	}

}


export class ImageTotalData {

	static data: number;


	static setDefault() {
		this.data = undefined;
	}

}


export class ImagesLoadedFromData {

	static data: 'all' | 'library' | 'none';


	static setDefault() {
		this.data = 'none';
	}

}


// Stores names of all libraries belonging to currently logged-in user

export class LibraryNamesData {

	static data: string[];


	static setDefault() {
		this.data = undefined;
	}

}


export class LoadData {

	static number: number;

	private static __size;


	static get size(): number {
		return this.__size;
	}


	static set size(value) {
		if (value < PageData.size) value = PageData.size;
		this.__size = value;
	}


	static setDefault() {
		this.number = 1;
		this.size = PageData.size * 2;
	}

}


export class LoadedImagesData {

	static data: DBImage[];


	static setDefault() {
		this.data = undefined;
	}
}


export class LoadedLibraryData {

	static data: DBLibrary;


	static setDefault() {
		this.data = undefined;
	}


	static get _id() {
		return this.data._id;
	}


	// Can't call this property 'name' because it conflicts with built-in constructor

	static get libName() {
		return this.data.name;
	}


	static get _image_ids() {
		return this.data._image_ids;
	}


	static get _user_id() {
		return this.data._user_id;
	}

}


// Stores images not yet saved to db.

export class NewImagesData {

	static data: AppImage[];


	static setDefault() {
		this.data = [];
	}

}


export class PageData {

	private static __size;


	static get size(): number {
		return this.__size;
	}


	static set size(value) {
		this.__size = value;
	}


	static setDefault() {
		this.size = 20;
	}

}


export class PageImagesData {

	static data: DBImage[];


	static setDefault() {
		this.data = undefined;
	}
}


export class ThumbnailDisplaySettingsData {

	static width: number;


	static setDefault() {
		this.width = 100;
	}

}
