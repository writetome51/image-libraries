export class RemoveParentLabelsForDisplayService {

	static go(label: string) {
		// If this menu choice is in a submenu, its label will have dot-notation.
		// Only the text after the final dot should be visible.

		let parts = label.split('.');
		return parts[parts.length - 1];
	}

}
