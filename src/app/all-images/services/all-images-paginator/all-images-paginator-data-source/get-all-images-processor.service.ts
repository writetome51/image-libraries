import { GetImagesProcessorService } from '@get-images-processor/get-images-processor.service';
import { ImageBatch } from '@interfaces/image-batch.interface';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class GetAllImagesProcessorService extends GetImagesProcessorService {

	protected async _getResult(): Promise<ImageBatch | { error: { message: string } }> {
		return await this._getImagesFromStorage.all();
	}

}
