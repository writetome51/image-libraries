import { Directive, Input } from '@angular/core';


@Directive({selector: ''}) // prevents Angular build error
export abstract class HasDataInputDirective<T> {

	@Input() data: T;

}
