import { Component, Input } from '@angular/core';


@Component({selector: '', template: ''}) // prevents Angular build error
export abstract class HasContextInputComponent<T> {

	@Input() context: T;

}
