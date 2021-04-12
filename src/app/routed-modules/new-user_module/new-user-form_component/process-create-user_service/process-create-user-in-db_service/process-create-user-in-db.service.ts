import { CreateUserInDbService } from './create-user-in-db.service';
import { Injectable } from '@angular/core';
import { InterpretCreateUserInDbResultService }
	from './interpret-create-user-in-db-result_service/interpret-create-user-in-db-result.service';
import { NewUserServicesModule } from '../../../new-user-services.module';
import { ProcessService } from '@process/process.abstract.service';


@Injectable({providedIn: NewUserServicesModule})
export class ProcessCreateUserInDbService extends ProcessService {

	constructor(
		__getResult: CreateUserInDbService,
		__interpretResult: InterpretCreateUserInDbResultService
	) {
		super(__getResult, __interpretResult);
	}

}
