import { Injectable } from '@angular/core';
import { InterpretLogoutResultService } from './interpret-logout-result.service';
import { LoggedInNavigatorServicesModule } from '../../logged-in-navigator-services.module';
import { LogoutService } from './logout.service';
import { ProcessExistingUserDBOperationService } from '@process/process-existing-user-db-operation.abstract.service';


@Injectable({providedIn: LoggedInNavigatorServicesModule})
export class ProcessLogoutService extends ProcessExistingUserDBOperationService {

	constructor(
		__getResult: LogoutService,
		__interpretResult: InterpretLogoutResultService
	) {
		super(__getResult, __interpretResult);
	}

}
