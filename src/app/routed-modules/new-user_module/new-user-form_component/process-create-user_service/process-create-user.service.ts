import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../new-user-services.module';
import { InterpretCreateUserResultService }
	from './interpret-create-user-result_service/interpret-create-user-result.service';
import { CreateUserService } from './create-user.service';
import { ProcessService } from '@process/process.abstract.service';


@Injectable({providedIn: NewUserServicesModule})
export class ProcessCreateUserService extends ProcessService {

	constructor(
		__getResult: CreateUserService,
		__interpretResult: InterpretCreateUserResultService
	) {
		super(__getResult, __interpretResult);
	}

}
