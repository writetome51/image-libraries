import { batchDoesntExist } from '../../../../../../string-constants/rest-api-errors';
import { DataTransportResultCheckService } // tslint:disable-next-line:max-line-length
	from '../../data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { ImageTotalData as imageTotal }
	from '../../../../../../data-structures/runtime-state-data/static-classes/resettable-to-default/image-total.data';
import { Injectable } from '@angular/core';
import { LoadedImagesData as loadedImages }
	from '../../../../../../data-structures/runtime-state-data/static-classes/resettable-to-default/loaded-images.data';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class GetImagesResultCheckService extends DataTransportResultCheckService {

	protected async _errorHandler(errMessage) {
		loadedImages.data = [];
		imageTotal.data = 0;

		if (not(errMessage.includes(batchDoesntExist))) await super._errorHandler(errMessage);
	}

}
