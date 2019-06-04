import { Component, OnInit } from '@angular/core';
import { LibraryProcessorService } from '../services/library-processor.service';


@Component({
    selector: 'library-chooser',
    templateUrl: './library-chooser.component.html'
})
export class LibraryChooserComponent {

    constructor(private __libraryProcessor: LibraryProcessorService) {
    }


    get prompt(): string {
        return (this.doneProcessing ? 'Choose different library:' : 'Choose library:');
    }


    get doneProcessing(): boolean {
        return this.__libraryProcessor.doneProcessing;
    }


    processLibrary(library: File) {
        this.__libraryProcessor.process(library);
    }

}
