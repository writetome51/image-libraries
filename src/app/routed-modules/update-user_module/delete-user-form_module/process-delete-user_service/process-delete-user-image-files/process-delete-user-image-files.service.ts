import { DeleteUserImageFilesService } from './delete-user-image-files.service';
import { Injectable } from '@angular/core';
import { UpdateUserServicesModule } from '../../../update-user-services.module';
import { ProcessService } from '@process/process.abstract.service';
import { InterpretDeleteUserImageFilesResultService }
	from './interpret-delete-user-image-files-result_service/interpret-delete-user-image-files-result.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class ProcessDeleteUserImageFilesService extends ProcessService {

	constructor(
		__getResult: DeleteUserImageFilesService,
		__interpretResult: InterpretDeleteUserImageFilesResultService
	) {
		super(__getResult, __interpretResult);
	}

}
