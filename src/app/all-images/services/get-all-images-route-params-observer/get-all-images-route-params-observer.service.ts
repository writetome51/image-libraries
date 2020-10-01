import { GetRouteParamsObserverService } from '@services/get-route-params-observer.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterAllImagesRouteParamsReceivedService }
	from './run-tasks-after-all-images-route-params-received.service';


@Injectable({providedIn: 'root'})

export class GetAllImagesRouteParamsObserverService extends GetRouteParamsObserverService {

	constructor(
		__runTasksAfterRouteParamsReceived: RunTasksAfterAllImagesRouteParamsReceivedService
	) {
		super(__runTasksAfterRouteParamsReceived);
	}

}
