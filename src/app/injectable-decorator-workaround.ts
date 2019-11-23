import { Modify } from './modify.decorator';
import { LocalSessionIDService } from './services/authentication/local-session-id.service';
import { Injectable } from '@angular/core';


/**************************************
 Problem:  class decorators created using getClassModificationDecorator() work
 fine when combined with @Injectable(), like so...

 @Injectable()
 @Decorator_created_using_getClassModificationDecorator()
 export ExampleClass {}

 ...unless the class being decorated requires dependency
 injection in its constructor. Angular's injector won't work.
 There's an easy solution:

 Decorate the class you've made with your own custom decorator. Begin
 this class' name with two underscores to indicate it's private.
 Then underneath that class create a subclass.  Give it the same name without the beginning
 underscores, indicating it's the public version of the parent class.  Decorate the subclass with
 @Injectable().  It's unnecessary to declare the constructor in the subclass.
 *************************************/
// Example:

@Modify({name: 'Biff'}) // custom decorator
export class __TheClass {

	constructor(public local: LocalSessionIDService) {
	}


	squeal() {
		this.local.set('aaaaaaahHHHH!!!!');
		console.log(this.local.get());
	}

}

@Injectable({providedIn: 'root'})
export class TheClass extends __TheClass {
}

// TheClass is now injectable.
