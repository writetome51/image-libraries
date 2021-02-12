import { URLParamIDData as paramID } from '@read-only-data/url-param-id.data';


export class LibraryModulePathData {

	static readonly FullSizeImageViewerModule = `:${paramID.libName}/image`;
	static readonly LibraryComponent = `:${paramID.libName}/page/:${paramID.pageNumber}`;

}
