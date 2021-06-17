import { AppImage } from '@interfaces/app-image.interface';
import { appName } from '@string-constants/app-name';
import { getMin } from '@writetome51/get-max-min';
import { ImageRecord } from '@interfaces/image-record.interface';
import { MenuChoice } from '@app/shared/modules/action-menu_module/menu-choice.interface';
import { not } from '@writetome51/not';
import { ResettableToDefault } from '@interfaces/resettable-to-default.interface';
import { setArray } from '@writetome51/set-array';
import { LoadConfiguration } from '@interfaces/load-configuration.interface';


// All data structures intended to be reset to their default values when the logged-out home
// page is loaded are defined here.  Each must be ResettableToDefault.

export const ActionMenuChoicesData: ResettableToDefault = class __ActionMenuChoicesData {

	static global: MenuChoice[];
	static images: object;


	static setDefault() {
		this.global = [

			/************** submenu example
			{
				label: 'choice 2',
				submenu: [
					{
						label: 'choice 3', submenu: [{label: 'choice 3A'}]
					},
					{label: 'choice 4'}
				]
			}
			 **************/
		];

		this.images = {}; // keys will be image names, values will be menu choices
	}
};


export const LibraryNamesData: ResettableToDefault = class __LibraryNamesData {

	static data: string[];


	static setDefault() {
		this.data = undefined;
	}
};


export const PageConfigurationData: ResettableToDefault =  class __PageData {

	private static __size;


	static get size(): number {
		return this.__size;
	}


	static set size(value) {
		const pageSizeChoices = [10,20,30,40];
		if (not(pageSizeChoices.includes(value))) {
			value = this.__closest(pageSizeChoices, value);
		}
		this.__size = value;
	}


	// Must be called before LoadData.setDefault()

	static setDefault() {
		this.size = 20;
	}


	private static __closest(numbers, num) {
		let differences = new Array(numbers.length);
		for (let i=0, len = numbers.length; i < len; ++i){
			differences[i] = (Math.abs(numbers[i] - num));
		}
		let min = getMin(differences), index = differences.indexOf(min);
		return numbers[index];
	}

};


export const LoadConfigurationData: ResettableToDefault & LoadConfiguration = class __LoadData {

	static number: number;

	private static __size;


	static get size(): number {
		return this.__size;
	}


	static set size(value) {
		if (value < PageConfigurationData.size) value = PageConfigurationData.size;
		this.__size = value;
	}


	static setDefault() {
		this.number = 1;
		this.size = PageConfigurationData.size;
	}

};


// Stores images not yet saved to db.

export const NewImagesData: ResettableToDefault = class __NewImagesData {

	static data: AppImage[] = [];


	static setDefault() {
		this.data = [];
	}
};


export const CurrentPageImagesData: ResettableToDefault = class __CurrentPageImagesData {

	static data: ImageRecord[] = [];


	static setDefault() {
		setArray(this.data, []);
	}
};


export const ThumbnailDisplaySettingsData: ResettableToDefault =
	class __ThumbnailDisplaySettingsData {

	static width: number;


	static setDefault() {
		this.width = 100;
	}
};


export const SearchResultsData: ResettableToDefault = class __SearchResultsData {

	static data = [];


	static setDefault() {
		setArray(this.data, []);
	}
};


export const CurrentPageTitleData: ResettableToDefault = class __CurrentPageTitleData {

	static data: string;


	static setDefault() {
		this.data = appName;
	}
};
