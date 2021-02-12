import { Link } from '@interfaces/has-label/link/link.interface';
import { AppModulePathData as appModulePath } from '@app/app-module-path.data';


export class LoggedInNavigatorLinkData {

	static readonly UpdateUserModule: Link = {
		path: appModulePath.UpdateUserModule,
		label: 'Update Account'
	};

	static readonly AddImagesModule: Link = {
		path: appModulePath.AddImagesModule,
		label: 'Add Images'
	};

	static readonly AllImagesModule: Link = {
		path: appModulePath.AllImagesModule,
		label: 'All Images'
	};

}
