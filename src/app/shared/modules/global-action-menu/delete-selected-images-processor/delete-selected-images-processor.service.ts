import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { DeleteSelectedImagesResultInterpreterService }
	from './delete-selected-images-result-interpreter.service';
import { GetObjectFromSubscriptionService as getObjectFromSubscription }
	from '@services/get-object-from-subscription.service';
import { ImagesRestAPIService } from '@services/images-rest-api.service';
import { Injectable } from '@angular/core';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';
import { SelectedImagesData as selectedImages } from '@runtime-state-data/selected-images.data';


@Injectable()
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
				{
					sessionID: this.__localSessionID.get(),
					imageNames: selectedImages.data.map((img: { name: string }) => img.name)
				}
			)
		);
	}

}
