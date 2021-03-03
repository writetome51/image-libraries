import { RouteParamIDData as paramID } from '@read-only-data/route-param-id.data';


export class LibraryModulePathData {

	static readonly FullSizeImageViewerModule = `:${paramID.libName}/image`;
	static readonly LibraryComponent = `:${paramID.libName}/page/:${paramID.pageNumber}`;

}
