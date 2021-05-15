import { Injectable } from '@angular/core';
import { InterpretLoginResultService } from '@interpret-result/interpret-login-result.service';
import { LoginByPasswordService } from './login-by-password.service';
import { LoginFormServicesModule } from '../login-form-services.module';
import { ProcessService } from '@process/process.abstract.service';


@Injectable({providedIn: LoginFormServicesModule})
export class ProcessLoginByPasswordService extends ProcessService {

	constructor(
		__getResult: LoginByPasswordService,
		__interpretResult: InterpretLoginResultService
	) {
		super(__getResult, __interpretResult);
	}

}
