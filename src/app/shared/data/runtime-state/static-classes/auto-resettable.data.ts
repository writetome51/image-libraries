import { AppImage } from '@interfaces/app-image.interface';
import { ImageRecord } from '@interfaces/image-record.interface';
// import { ResettableToDefault } from '@interfaces/resettable-to-default';
import { MenuChoice } from '@app/shared/modules/action-menu_module/menu-choice.interface';
import { not } from '@writetome51/not';
import { setArray } from '@writetome51/set-array';
import { getMin } from '@writetome51/get-max-min';


// All data structures intended to be auto-reset to their default values when
// the user loads the logged-out home page are defined here.  Each must implement
// ResettableToDefault.


export class ActionMenuChoicesData {

	static global: MenuChoice[];
	static images: object;


	static setDefault() {
		this.global = [
			{label: 'choice 1'},

			// submenu example
			{
				label: 'choice 2',
				submenu: [
					{
						label: 'choice 3', submenu: [{label: 'choice 3A'}]
					},
					{label: 'choice 4'}
				]
			}
		];

		this.images = {}; // keys will be image names, values will be menu choices
	}

}


// Stores names of all libraries belonging to logged-in user

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
		const pageSizeChoices = [10,20,30,40];
		if (not(pageSizeChoices.includes(value))) {
			value = this.closest(pageSizeChoices, value);
		}
		this.__size = value;
	}

	// Must be called before LoadData.setDefault()
	static setDefault() {
		this.size = 20;
	}


	static closest(numbers, num) {
		let differences = new Array(numbers.length);
		for (let i=0, len = numbers.length; i < len; ++i){
			differences[i] = (Math.abs(numbers[i] - num));
		}
		let min = getMin(differences), index = differences.indexOf(min);
		return numbers[index];
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
		this.size = PageData.size;
	}

}


// Stores images not yet saved to db.

export class NewImagesData {

	static data: AppImage[] = [];


	static setDefault() {
		this.data = [];
	}

}


export class CurrentPageImagesData {

	static data: ImageRecord[] = [];


	static setDefault() {
		setArray(this.data, []);
	}

}


export class ThumbnailDisplaySettingsData {

	static width: number;


	static setDefault() {
		this.width = 100;
	}

}


export class SearchResultsData {

	static data: any[] = [];


	static setDefault() {
		setArray(this.data, []);
	}
}
