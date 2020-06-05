import { Injectable } from '@angular/core';
import { GetImagesProcessorService } from './get-images-processor.service';
import { ImageBatch } from '../../../../interfaces/image-batch';


@Injectable({providedIn: 'root'})

// Only use this class' .process() method after calling
// GetLibraryProcessorService.process() first, and making sure the
// resulting _image_ids array contains items.

export class GetLibraryImagesProcessorService extends GetImagesProcessorService {

	protected async _getResult(): Promise<ImageBatch | { error: { message: string } }> {
		return await this._getImagesFromStorage.inLibrary();
	}

}
