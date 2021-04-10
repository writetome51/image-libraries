import { CreateUserFileFolderService } from './create-user-file-folder.service';
import { Injectable } from '@angular/core';
import { InterpretCreateUserFileFolderResultService }
	from './interpret-create-user-file-folder-result_service/interpret-create-user-file-folder-result.service';
import { NewUserServicesModule } from '../../new-user-services.module';
import { ProcessService } from '@process/process.abstract.service';


@Injectable({providedIn: NewUserServicesModule})
export class ProcessCreateUserFileFolderService extends ProcessService {

	constructor(
		__getResult: CreateUserFileFolderService,
		__interpretResult: InterpretCreateUserFileFolderResultService
	) {
		super(__getResult, __interpretResult);
	}

}
