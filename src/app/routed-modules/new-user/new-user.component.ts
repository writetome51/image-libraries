import { Component } from '@angular/core';
import { NewUserModuleTitleData as moduleTitle } from './new-user-module-title.data';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'new-user',
	template: `
		<header><h2>{{heading}}</h2></header>
		<new-user-form clearFormOnInit clearAlertOnDestroy></new-user-form>
	`
})
export class NewUserComponent {

	heading = 'Create Account';


	constructor(private __title: Title) {
		this.__title.setTitle(moduleTitle.data);
	}

}
