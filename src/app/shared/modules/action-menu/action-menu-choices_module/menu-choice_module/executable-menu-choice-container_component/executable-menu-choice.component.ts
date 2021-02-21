import { Component, Input } from '@angular/core';
import { ClickExecuteFunctionContainerComponent }
	from '@abstract-components/click-execute-function-container.component';
import { hasValue } from '@writetome51/has-value-no-value';
import { LabelledMenuChoiceComponent }
	from '../abstract-menu-choice_component/labelled-menu-choice.component';


@Component({
	selector: 'executable-menu-choice',
	template: `
		<click-execute-function-div [container]="container" [funcArgs]="[data]">
			<div class="label-container">{{ label }}</div>
			<checkmark [class.invisible]="!(checked)"></checkmark>
		</click-execute-function-div>
	`,
	styles: [`checkmark {position: relative;  top: 5px;  left: 5px;}`]
})
export class ExecutableMenuChoiceComponent extends LabelledMenuChoiceComponent {

	@Input() container: ClickExecuteFunctionContainerComponent;


	get checked(): boolean {
		if (hasValue(this.data.data) && hasValue(this.data.data.checked)) {
			return this.data.data.checked;
		}
		else return false;
	}

}
