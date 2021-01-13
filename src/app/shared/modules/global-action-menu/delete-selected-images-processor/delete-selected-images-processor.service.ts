import { DataTransportProcessorService }
	from '@services/data-processor/data-transport-processor/data-transport-processor.service';
import { DeleteSelectedImagesResultInterpreterService }
	from './delete-selected-images-result-interpreter.service';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';
import { SelectedImagesData as selectedImages } from '@runtime-state-data/selected-images.data';


@Injectable()
export class DeleteSelectedImagesProcessorService extends DataTransportProcessorService {

	constructor(
		private __realm: MongoDBRealmService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		__deleteSelectedImagesResultInterpreter: DeleteSelectedImagesResultInterpreterService
	) {
		super(__deleteSelectedImagesResultInterpreter);
	}


	protected async _getResult(): Promise<{ success: true } | { error: { message: string } }> {
		return this.__realm.callFn('pub_deleteImages', {
			sessionID: this.__sessionIDInBrowser.get(),
			imageNames: selectedImages.data.map((img: { name: string }) => img.name)
		});
	}

}
