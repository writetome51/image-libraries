import { Input } from '@angular/core';
import { MenuChoice } from '../../../menu-choice.interface';


export abstract class AbstractMenuChoiceComponent {

	@Input() data: MenuChoice;

}
