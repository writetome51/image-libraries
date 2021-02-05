import { Input } from '@angular/core';
import { MenuChoice } from '@action-menu/menu-choice.interface';


export abstract class AbstractMenuChoiceComponent {

	@Input() data: MenuChoice;

}
