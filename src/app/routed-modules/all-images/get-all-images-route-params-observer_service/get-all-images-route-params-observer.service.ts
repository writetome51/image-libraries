import { GetRouteParamsObserverService } from '@services/get-route-params-observer.abstract.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterAllImagesRouteParamsReceivedService }
	from './run-tasks-after-all-images-route-params-received.service';
import { AllImagesServicesModule } from '@app/routed-modules/all-images/all-images-services.module';


@Injectable({providedIn: AllImagesServicesModule})
export class GetAllImagesRouteParamsObserverService extends GetRouteParamsObserverService {

	constructor(
		__runTasksAfterRouteParamsReceived: RunTasksAfterAllImagesRouteParamsReceivedService
	) {
		super(__runTasksAfterRouteParamsReceived);
	}

}
