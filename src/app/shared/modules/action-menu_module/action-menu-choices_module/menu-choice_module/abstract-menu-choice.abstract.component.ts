import { Component, Input } from '@angular/core';
import { MenuChoice } from '../../menu-choice.interface';


@Component({selector: '', template: ''}) // prevents Angular build error
export abstract class AbstractMenuChoiceComponent {

	@Input() data: MenuChoice;

}
