import { Injectable } from '@angular/core';

/******************************
We're using a single AWS S3 bucket (data container), which contains folders, each of which
represents a user of this app. The folder contains that user's images.
Once an image is uploaded to S3, all we need to know about that image is its url.  The url
must be assigned to the 'src' attribute of its MongoDB record.
 *****************************/

@Injectable({providedIn: 'root'})
export class ImageStorageService {

	constructor() { }
}
