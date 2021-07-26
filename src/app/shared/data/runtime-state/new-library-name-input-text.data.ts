import { ResettableToDefault } from '@interfaces/resettable-to-default.interface';


export const NewLibraryNameInputTextData: ResettableToDefault = {
	data: '',

	setDefault: function() {
		this.data = '';
	}
};
