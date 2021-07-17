import { HasDataInputDirective } from '@abstract-directives/has-data-input.abstract.directive';
import { MenuChoice } from '@interfaces/menu-choice.interface';
import { MenuChoiceLabelHierarchyService as labelHierarchy }
	from '@action-menu_module/menu-choice-label-hierarchy.service';


export abstract class LabeledMenuChoiceComponent extends HasDataInputDirective<MenuChoice> {

	get label(): string {
		return labelHierarchy.getWithoutParentForDisplay(this.data.label);
	}

}
