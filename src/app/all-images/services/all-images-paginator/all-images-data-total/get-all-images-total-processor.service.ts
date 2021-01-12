import { Injectable } from '@angular/core';
import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { GetImageTotalService }
	from '@data-transport-processor/get-images-processor/get-image-total.service';


@Injectable({providedIn: 'root'})
export class GetAllImagesTotalProcessorService extends DataTransportProcessorService {

	constructor(
		private __getImageTotal: GetImageTotalService,
		__resultInterpreter
	) {
		super(__resultInterpreter);
	}

	protected async _getResult(): Promise<{ dataTotal: number } | { error: { message: string } }> {
		return await this.__getImageTotal.all();
	}

}
