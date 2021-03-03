import { ProcessDbOperationService }
	from '@process-related/process-db-operation.abstract.service';
import { Injectable } from '@angular/core';
import { InterpretLogoutResultService } from './interpret-logout-result.service';
import { LogoutService } from './logout.service';
import { LoggedInNavigatorServicesModule } from '../../logged-in-navigator-services.module';


@Injectable({providedIn: LoggedInNavigatorServicesModule})
export class ProcessLogoutService extends ProcessDbOperationService {

	constructor(
		__getResult: LogoutService,
		__interpretResult: InterpretLogoutResultService
	) {
		super(__getResult, __interpretResult);
	}

}
