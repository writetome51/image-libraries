import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImgbbRestAPIService } from '@services/imgbb-rest-api.service';
import { GetObjectFromSubscriptionService as getObjectFromSubscription }
	from '@services/get-object-from-subscription.service';
import { HasError } from '@interfaces/has-error.interface';


@Injectable({providedIn: 'root'})
export class StoreImageFilesService implements IDoThis {

	constructor(private __imgbbRestAPI: ImgbbRestAPIService) {}


	async go(images:  FileList | File[]): Promise<object | HasError> {
		return getObjectFromSubscription.go(this.__imgbbRestAPI.post('', {images}));
	}

}
