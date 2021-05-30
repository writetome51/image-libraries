import { Directive, Input } from '@angular/core';


@Directive({selector: '[]'}) // prevents Angular build error
export abstract class HasContextInputDirective<T> {

	@Input() context: T;

}
