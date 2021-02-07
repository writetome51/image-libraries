import { Component, Input } from '@angular/core';
import { MenuChoice } from '../../menu-choice.interface';


// Intended to be abstract Component class, but angular compiler was not allowing inheritance
// to work.  So this is a work-around.

@Component({selector: '', template: ``})
export class AbstractMenuChoiceComponent {

	@Input() data: MenuChoice;

}
