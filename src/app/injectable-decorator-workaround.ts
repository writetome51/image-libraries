/************************************************************************
 Problem:  class decorators created using getClassModificationDecorator()
 work fine when combined with @Injectable(), like so...

 @Injectable()
 @Decorator_created_using_getClassModificationDecorator()
 export class ExampleClass {}

 ...unless the class being decorated requires dependency injection in its
 constructor. Angular's injector won't work.
 Solution:

 Decorate the class with a decorator created with
 getClassModificationDecorator().  Begin the class' name with two
 underscores (it's private).  Underneath that class create a subclass.
 Give it the same name without the beginning underscores, indicating it's
 the public version.  Decorate the subclass with @Injectable() (It's
 unnecessary to declare the constructor in the subclass).  The subclass
 is now injectable and will receive dependencies in its constructor.
 ------------------------------
 // Example:

 @Modify({name: 'Biff'}) // created with getClassModificationDecorator()
 export class __TheClass {

 	constructor(public local: LocalSessionIDService) {
	}

 }

 @Injectable({providedIn: 'root'})
 export class TheClass extends __TheClass {
 }

// TheClass is now injectable.

 ***********************************************************************/
