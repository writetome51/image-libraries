import { AppImage } from '@interfaces/app-image';
import { DBImage } from '@interfaces/db-image';
import { DBLibrary } from '@interfaces/db-library';
import { ResettableToDefault } from '@interfaces/resettable-to-default';
import { AppActionMenuChoice } from '@interfaces/app-action-menu-choice';


// All data structures intended to be auto-reset to their default values when
// the user loads the logged-out home page are defined here.  Each must implement
// interface ResettableToDefault.


export class ActionMenuChoicesData {

	static global: AppActionMenuChoice[];
	static images: object;


	static setDefault() {
		this.global = [
			'choice 1', // both label and choice
			{label: 'choice 2', choices: ['choice 3', 'choice 4']} // submenu example
		];
		this.images = {}; // keys will be image names, values will be menu choices
	}

}


export class ImageTotalData {

	static data: number;


	static setDefault() {
		this.data = undefined;
	}

}


export class ImagesLoadedFromData {

	static __all: boolean;
	static __library: boolean;
	static __none: boolean;


	static set data(value: 'all' | 'library' | 'none') {
		let choices = ['all', 'library', 'none'];
		for (let i = 0; i < choices.length; ++i) this[`__${choices[i]}`] = (value === choices[i]);
	}


	static get all() {
		return this.__all;
	}


	static get library() {
		return this.__library;
	}


	static get none() {
		return this.__none;
	}


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
