import { GetRouteParamsObserverService }
	from '@services/get-route-params-observer.abstract.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterLibraryRouteParamsReceivedService }
	from './run-tasks-after-library-route-params-received_service/run-tasks-after-library-route-params-received.service';
import { LibraryServicesModule } from '../library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class GetLibraryRouteParamsObserverService extends GetRouteParamsObserverService {

	constructor(__runTasksAfterRouteParamsReceived:
					RunTasksAfterLibraryRouteParamsReceivedService) {
		super(__runTasksAfterRouteParamsReceived);
	}

}
