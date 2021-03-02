import { ProcessDataTransportService }
	from '@services/process-related/process-data-transport.abstract.service';
import { Injectable } from '@angular/core';
import { InterpretLogoutResultService } from './interpret-logout-result.service';
import { LogoutService } from './logout.service';
import { LoggedInNavigatorServicesModule } from '../../logged-in-navigator-services.module';


@Injectable({providedIn: LoggedInNavigatorServicesModule})
export class ProcessLogoutService extends ProcessDataTransportService {

	constructor(
		__getResult: LogoutService,
		__interpretResult: InterpretLogoutResultService
	) {
		super(__getResult, __interpretResult);
	}

}
