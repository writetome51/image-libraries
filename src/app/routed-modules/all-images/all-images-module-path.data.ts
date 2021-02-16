import { RouteParamIDData as paramID } from '@read-only-data/route-param-id.data';


export class AllImagesModulePathData {

	static readonly AllImagesComponent =  `page/:${paramID.pageNumber}`;
	static readonly defaultPath = `page/1`;

}
