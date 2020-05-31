import { Injectable } from '@angular/core';
import { DBImage } from '../../../../interfaces/db-image';
import { GetImagesProcessorService } from './get-images-processor.service';


@Injectable({providedIn: 'root'})

export class GetAllImagesProcessorService extends GetImagesProcessorService {

	protected async _getResult(): Promise<DBImage[] | { error: object }> {
		return await this._getImagesFromStorage.all();
	}

}
