import { Injectable } from '@angular/core';
import { mongoDBStitch } from './mongo-db-stitch-config/stitch-client-config';
import * as stitchAuth from './mongo-db-stitch-config/stitch-client-authentication';


@Injectable({
	providedIn: 'root'
})
export class DocumentDBService {

	/*****************************
	 To call a MongoDB Stitch serverless function, use the imported `mongoDBStitch` object:

	 mongoDBStitch.callFunction(funcName: string, args: any[]): Promise<any>

	 Example:

	 mongoDBStitch.callFunction("sum", [3, 4]).then(result => {
    console.log(result) // Output: 7
});

	 **************************/


}
