/************************************************************************
 Problem:  custom class decorators you make probably won't work when
 combined with @Injectable() (and possibly won't work with
 other Angular decorators) like so:

 @Injectable()
 @Your_Own_Custom_Decorator()
 export class ExampleClass { ... }

 If you do the above, Angular's dependency injector probably won't work.

 Solution:

 Decorate the class with your custom decorator (do not decorate this class
 with @Injectable()).  Begin the class' name with two underscores (it's private).
 Underneath that class, in the same file, create a subclass.  Give it the
 same name without the beginning underscores, indicating it's the public version.
 Decorate the subclass with @Injectable() (It's unnecessary to declare the
 constructor in the subclass).  The subclass is now injectable and will receive
 dependencies in its constructor.
 ------------------------------
 // Example:

 @Modify({name: 'Biff'}) // created with getClassModificationDecorator()
 export class __TheClass {

 	constructor(public obj: ExampleService) {
	}

 }

 @Injectable({providedIn: 'root'})
 export class TheClass extends __TheClass {
 }

// TheClass is now injectable.

 ***********************************************************************/
