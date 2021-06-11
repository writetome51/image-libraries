import { IDoThis } from '@interfaces/i-do-this.interface';


export abstract class GetRouteParamsObserverService implements IDoThis {

	constructor(private __runTasksAfterRouteParamsReceived: IDoThis) {}


	go(): (params) => Promise<void> {
		return async (params) => this.__runTasksAfterRouteParamsReceived.go(params);
	}

}
