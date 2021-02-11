import { URLParamIDData as paramID } from '@read-only-data/url-param-id.data';


export class AllImagesModulePathData {

	static readonly AllImagesComponent =  `page/:${paramID.pageNumber}`;
	static readonly defaultPath = `page/1`;

}
