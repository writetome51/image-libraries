import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { componentPathMaps } from './component-path-maps';
import { ComponentPathMap } from './component-path-map.type';


@Component({
	selector: 'update-user',
	templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {

	heading = 'Update Account';


	get formHeading() {
		let url = this.__router.routerState.snapshot.url;
		let mapKeys = Object.keys(componentPathMaps);

		for (let i = 0; i < mapKeys.length; ++i) {
			let map: ComponentPathMap = componentPathMaps[mapKeys[i]];

			if (url.endsWith(`/${map.path}`)) {
				return map.component['heading']; // 'heading' must be static
			}
		}
	}


	constructor(private __router: Router) {
	}

}
