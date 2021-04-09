import { Injectable } from '@angular/core';
import { InterpretLogoutResultService } from './interpret-logout-result.service';
import { LoggedInNavigatorServicesModule } from '../../logged-in-navigator-services.module';
import { LogoutService } from './logout.service';
import { ProcessDbOperationService } from '@process/process-db-operation.abstract.service';


@Injectable({providedIn: LoggedInNavigatorServicesModule})
export class ProcessLogoutService extends ProcessDbOperationService {

	constructor(
		__getResult: LogoutService,
		__interpretResult: InterpretLogoutResultService
	) {
		super(__getResult, __interpretResult);
	}

}
