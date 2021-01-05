import { GetImagesProcessorService }
	from '@services/data-processor/data-transport-processor/get-images-processor/get-images-processor.service';
import { ImageBatch } from '@interfaces/image-batch';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class GetAllImagesProcessorService extends GetImagesProcessorService {

	protected async _getResult(): Promise<ImageBatch | { error: { message: string } }> {
		return await this._getImagesFromStorage.all();
	}

}
