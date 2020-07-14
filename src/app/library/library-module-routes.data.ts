import { URLParamIDData as paramID } from '../../data-structures/read-only-data/url-param-id.data';


// Contains all routes the LibraryModule is concerned with.

export class LibraryModuleRoutesData {

	static readonly ImageViewerModule = `:${paramID.libName}/image`;
	static readonly LibraryComponent = `:${paramID.libName}/page/:${paramID.pageNumber}`;

}
