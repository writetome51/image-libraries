import { HasDataInputComponent } from '@abstract-components/has-data-input.abstract.component';
import { MenuChoice } from '@action-menu_module/menu-choice.interface';
import { MenuChoiceLabelHierarchyService as labelHierarchy }
	from '@action-menu_module/menu-choice-label-hierarchy.service';


export abstract class LabeledMenuChoiceComponent extends HasDataInputComponent<MenuChoice> {

	get label(): string {
		return labelHierarchy.getWithoutParentForDisplay(this.data.label);
	}

}
