import { Injectable } from '@angular/core';
import { GetImageTotalProcessorService }
	from '@get-images-total-processor/get-image-total-processor.service';


@Injectable({providedIn: 'root'})
export class GetLibraryImagesTotalProcessorService extends GetImageTotalProcessorService {

	protected async _getResult(): Promise<{ dataTotal: number } | { error: { message: string } }> {
		return await this._getImagesTotal.go();
	}

}
