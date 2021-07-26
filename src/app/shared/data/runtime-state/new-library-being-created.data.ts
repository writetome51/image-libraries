import { ResettableToDefault } from '@interfaces/resettable-to-default.interface';


export const NewLibraryBeingCreatedData: ResettableToDefault = {
	true: false,

	setDefault: function() {
		this.true = false;
	}
};
