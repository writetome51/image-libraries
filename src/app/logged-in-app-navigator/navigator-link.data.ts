import { Link } from '@interfaces/has-label/link/link.interface';


// Contains all routes the LoggedInAppNavigatorModule is concerned with.

export class NavigatorLinkData {

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
