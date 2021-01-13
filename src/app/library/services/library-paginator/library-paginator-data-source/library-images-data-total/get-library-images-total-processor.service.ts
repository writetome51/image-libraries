import { Injectable } from '@angular/core';
import { GetImagesTotalProcessorService }
	from '@get-images-total-processor/get-images-total-processor.service';


@Injectable({providedIn: 'root'})
export class GetLibraryImagesTotalProcessorService extends GetImagesTotalProcessorService {

	protected async _getResult(): Promise<{ dataTotal: number } | { error: { message: string } }> {
		return await this._getImagesTotal.inLibrary();
	}

}
