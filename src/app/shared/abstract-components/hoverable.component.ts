export abstract class HoverableComponent {

	private __hovered = false;


	hover(): void {
		this.__hovered = true;
	}


	unHover(): void {
		this.__hovered = false;
	}


	isHovered(): boolean {
		return this.__hovered;
	}

}
