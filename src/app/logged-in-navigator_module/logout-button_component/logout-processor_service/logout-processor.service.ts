import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { Injectable } from '@angular/core';
import { InterpretLogoutResultService } from './interpret-logout-result.service';
import { LogoutService } from './logout.service';
import { LoggedInNavigatorServicesModule } from '../../logged-in-navigator-services.module';


@Injectable({providedIn: LoggedInNavigatorServicesModule})
export class LogoutProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: LogoutService,
		__interpretResult: InterpretLogoutResultService
	) {
		super(__getResult, __interpretResult);
	}

}
