import { Injectable } from '@angular/core';
import { Processor } from '@interfaces/processor';
import { ZoomOnScrollData } from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable()
export class ToggleZoomOnScrollingProcessorService implements Processor {

	process(data: {zoomOnScroll: typeof ZoomOnScrollData, checked: boolean}) {
		data.zoomOnScroll.enabled = !(data.zoomOnScroll.enabled);
		data.checked = data.zoomOnScroll.enabled;
	};

}
