import { URLParamIDData as paramID } from '../data-structures/read-only-data/url-param-id.data';

// Contains all routes the LibrariesModule is concerned with.
// The keys are the modules or components that will be loaded when
// their route is accessed.


export const LibrariesModuleRouteService = {

	AllImagesModule: `all-images/page/:${paramID.pageNumber}`,
	AddImagesComponent: 'add-images'

};
