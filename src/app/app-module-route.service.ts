import { URLParamIDData as paramID } from './data-structures/read-only-data/url-param-id.data';

// Contains all routes the AppModule is concerned with.
// The keys are the modules or components that will be loaded when
// their route is accessed.


export const AppModuleRouteService = {

	UpdateUserModule: 'update-account',
	NewUserModule: 'create-account',
	LibrariesModule: 'libraries',
	LibraryModule: 'library',
	SecurityQuestionModule: 'security-question',
	AllImagesModule: `all-images/page/:${paramID.pageNumber}`

};
