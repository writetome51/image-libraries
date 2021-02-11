import { URLParamIDData as paramID } from '@read-only-data/url-param-id.data';


// Contains all routes the LibraryModule is concerned with.

export class LibraryModuleRoutesData {

	static readonly FullSizeImageViewerModule = `:${paramID.libName}/image`;
	static readonly LibraryComponent = `:${paramID.libName}/page/:${paramID.pageNumber}`;

}
