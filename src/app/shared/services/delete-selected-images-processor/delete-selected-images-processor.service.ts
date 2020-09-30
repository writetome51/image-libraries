import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { DeleteSelectedImagesResultInterpreterService }
	from './delete-selected-images-result-interpreter/delete-selected-images-result-interpreter.service';
import { GetObjectFromSubscriptionService as getObjectFromSubscription }
	from '@services/get-object-from-subscription.service';
import { ImagesRestAPIService } from '@services/images-rest-api.service';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '@services/local-storage-data/local-session-id.service';
import { SelectedImageNamesData as selectedImageNames }
	from '@runtime-state-data/selected-image-names.data';


@Injectable({providedIn: 'root'})

export class DeleteSelectedImagesProcessorService extends DataTransportProcessorService {

	constructor(
		private __imagesRestApi: ImagesRestAPIService,
		private __localSessionID: LocalSessionIDService,
		__deleteSelectedImagesResultInterpreter: DeleteSelectedImagesResultInterpreterService
	) {
		super(__deleteSelectedImagesResultInterpreter);
	}


	protected async _getResult(): Promise<{ success: true } | { error: { message: string } }> {
		return await getObjectFromSubscription.go(
			this.__imagesRestApi.delete(
				{sessionID: this.__localSessionID.get(), imageNames: selectedImageNames.data}
			)
		);
	}

}
