import { AddImagesServicesModule } from '../../add-images-services.module';
import { Injectable } from '@angular/core';
import { InterpretResultService } from '@interpret-result/interpret-result.abstract.service';


@Injectable({providedIn: AddImagesServicesModule})
export class InterpretSaveImageURLResultService extends InterpretResultService {

	constructor() {
		super({go: () => undefined}, {go: () => undefined});
	}

}
