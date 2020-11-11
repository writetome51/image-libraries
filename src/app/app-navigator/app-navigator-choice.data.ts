// Contains all routes the AppNavigatorModule is concerned with.


import { Link } from '@interfaces/link';


export class AppNavigatorChoiceData {

	static readonly UpdateUserModule: Link = {
		path: 'update-account',
		label: 'Update Account'
	};

	static readonly AddImagesModule: Link = {
		path: 'add-images',
		label: 'Add Images'
	};

	static readonly AllImagesModule: Link = {
		path: 'all-images',
		label: 'All Images'
	};

}
