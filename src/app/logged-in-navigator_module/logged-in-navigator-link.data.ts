import { AppModulePathData as appModulePath } from '@app/app-module-path.data';
import { Link } from '@interfaces/link.interface';


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
