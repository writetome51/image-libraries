import { Injectable } from '@angular/core';
import { GetImageTotalProcessorService }
	from 'get-image-total-processor/get-image-total-processor.service';


@Injectable({providedIn: 'root'})
export class GetAllImagesTotalProcessorService extends GetImageTotalProcessorService {

	protected async _getResult(): Promise<{ dataTotal: number } | { error: { message: string } }> {
		return await this._getImagesTotal.all();
	}

}
