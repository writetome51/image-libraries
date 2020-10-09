import { URLParamIDData as paramID } from '@read-only-data/url-param-id.data';


export class AllImagesModuleRoutesData {

	static readonly AllImagesComponent =  `page/:${paramID.pageNumber}`;
	static readonly defaultRoute = `page/1`;

}
