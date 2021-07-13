import { AppImage } from '@interfaces/app-image.interface';
import { appName } from '@string-constants/app-name';
import { ImageRecord } from '@interfaces/image-record.interface';
import { MenuChoice } from '@interfaces/menu-choice.interface';
import { ResettableToDefault } from '@interfaces/resettable-to-default.interface';
import { setArray } from '@writetome51/set-array';
import { LoadConfiguration } from '@interfaces/load-configuration.interface';
import { DefaultPageSizeData as defaultPageSize } from '@read-only-data/default-page-size.data';


// All data structures intended to be reset to their default values when the logged-out home
// page is loaded are defined here.  Each must be ResettableToDefault.

export const ActionMenuChoicesData: ResettableToDefault = class __ActionMenuChoicesData {

	static global: MenuChoice[];
	static images: object;


	static setDefault() {
		this.global = [];

		this.images = {}; // keys will be image names, values will be menu choices
	}
};


export const LibraryNamesData: ResettableToDefault = class __LibraryNamesData {

	static data: string[];


	static setDefault() {
		this.data = undefined;
	}
};


export const LoadConfigurationData: ResettableToDefault & LoadConfiguration = class __LoadData {

	static number: number;
	static size;


	static setDefault() {
		this.number = 1;
		this.size = defaultPageSize.data * 3;
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
