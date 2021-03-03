import { Component, Input } from '@angular/core';
import { ClickExecuteFunctionContainerComponent }
	from '@abstract-components/click-execute-function-container.abstract.component';
import { hasValue } from '@writetome51/has-value-no-value';
import { LabelledMenuChoiceComponent }
	from '../labelled-menu-choice.abstract.component';


@Component({
	selector: 'executable-menu-choice',
	template: `
		<click-execute-function-div [container]="container" [funcArgs]="[data]">
			<div class="label-container">{{ label }}</div>

			<!--  Should <checkmark> be removed and placed in modules that use <action-menu> ? -->
			<!--  It may be better if this component is more generic, like an empty container. -->
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
