import { GetImagesProcessorService } from '@get-images-processor/get-images-processor.service';
import { ImageBatch } from '@interfaces/image-batch.interface';
import { Injectable } from '@angular/core';
import { HasError } from '@interfaces/has-error.interface';


@Injectable({providedIn: 'root'})
export class GetAllImagesProcessorService extends GetImagesProcessorService {

	protected async _getResult(): Promise<ImageBatch | HasError> {
		return await this._getImagesFromStorage.all();
	}

}
