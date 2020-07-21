import { ActionMenuChoicesData as menuChoices }
	from '../../data-structures/runtime-state-data/static-classes/action-menu-choices.data';
import { CurrentRouteService } from './current-route.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})

export class ActionMenuChoicesManagerService {


	constructor(private __currentRoute: CurrentRouteService) {
	}


}
