import { CORSProxyData as corsProxy } from '@read-only-data/cors-proxy.data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestAPIService } from '@services/rest-api.abstract.service';


@Injectable({providedIn: 'root'})
export class ImgbbRestAPIService extends RestAPIService {

	protected _baseURL = corsProxy.data +
		'https://api.imgbb.com/1/upload?key=b8fdfc28d91581020efa4a94b789554c';

	protected _requiredInEveryRequestBody = {};


	constructor(__http: HttpClient) {
		super(__http);
	}

}

/****************************
 The response object it sends after storing new images:

{
	"data": {
  		"id": "2ndCYJK",
    	"title": "c1f64245afb2",
    	"url_viewer": "https://ibb.co/2ndCYJK",
    	"url": "https://i.ibb.co/w04Prt6/c1f64245afb2.gif",
   		"display_url": "https://i.ibb.co/98W13PY/c1f64245afb2.gif",
   		"size": "42",
   		"time": "1552042565",
   		"expiration":"0",
   		"image": {
   	   		"filename": "c1f64245afb2.gif",
   	   		"name": "c1f64245afb2",
   	   		"mime": "image/gif",
   	   		"extension": "gif",
   	   		"url": "https://i.ibb.co/w04Prt6/c1f64245afb2.gif",
  		},
   		"thumb": {
     		"filename": "c1f64245afb2.gif",
      		"name": "c1f64245afb2",
      		"mime": "image/gif",
      		"extension": "gif",
      		"url": "https://i.ibb.co/2ndCYJK/c1f64245afb2.gif",
   		},
    	"medium": {
      		"filename": "c1f64245afb2.gif",
      		"name": "c1f64245afb2",
      		"mime": "image/gif",
      		"extension": "gif",
      		"url": "https://i.ibb.co/98W13PY/c1f64245afb2.gif",
    	},
    	"delete_url": "https://ibb.co/2ndCYJK/670a7e48ddcb85ac340c717a41047e5c"
  	},
  	"success": true,
  	"status": 200
}

 ***************************/
