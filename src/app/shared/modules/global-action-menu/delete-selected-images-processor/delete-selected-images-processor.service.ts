import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { DeleteSelectedImagesResultInterpreterService }
	from './delete-selected-images-result-interpreter.service';
import { Injectable } from '@angular/core';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';
import { SelectedImagesData as selectedImages } from '@runtime-state-data/selected-images.data';


@Injectable()
export class DeleteSelectedImagesProcessorService extends DataTransportProcessorService {

	constructor(
		private __realm: MongoDBRealmService,
		private __localSessionID: LocalSessionIDService,
		__deleteSelectedImagesResultInterpreter: DeleteSelectedImagesResultInterpreterService
	) {
		super(__deleteSelectedImagesResultInterpreter);
	}


	protected async _getResult(): Promise<{ success: true } | { error: { message: string } }> {
		return this.__realm.callFn('delete-images', {
			sessionID: this.__localSessionID.get(),
			imageNames: selectedImages.data.map((img: { name: string }) => img.name)
		});
	}

}
