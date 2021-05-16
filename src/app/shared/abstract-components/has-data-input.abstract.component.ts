import { Component, Input } from '@angular/core';


@Component({selector: '', template: ''}) // prevents Angular build error
export abstract class HasDataInputComponent<T> {

	@Input() data: T;

}
