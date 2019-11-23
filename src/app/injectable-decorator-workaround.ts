import { Modify } from './modify.decorator';
import { LocalSessionIDService } from './services/authentication/local-session-id.service';
import { Injectable } from '@angular/core';


// Easy fix for the decorators not combining well with @Injectable:
//
// Decorate the class you've made with your own custom decorator.
// Then in the same file, underneath that class, create a subclass.
// Decorate the subclass with @Injectable().  Unnecessary to redeclare
// the constructor in the subclass.
// This code is an example:

@Modify({name: 'Biff'})
export class __TheClass {

	constructor(public local: LocalSessionIDService) {
	}


	squeal() {
		this.local.set('jdkla;jka;jkdls;fjdksa;eieie');
		console.log(this.local.get());
	}

}

@Injectable({providedIn: 'root'})
export class TheClass extends __TheClass {
}
