import { ResettableToDefault } from '@interfaces/resettable-to-default.interface';


export const NewLibraryData: ResettableToDefault = {
	beingCreated: false,
	name: '',

	setDefault: function() {
		this.beingCreated = false;
		this.name = '';
	}
};
