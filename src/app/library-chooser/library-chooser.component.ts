import { Component, OnInit } from '@angular/core';
import { LibraryProcessorService } from '../services/library-processor.service';


@Component({
    selector: 'library-chooser',
    templateUrl: './library-chooser.component.html'
})
export class LibraryChooserComponent implements OnInit {

    constructor(private __libraryProcessor: LibraryProcessorService) {
    }


    ngOnInit() {
    }


    get doneProcessing(){
        return this.__libraryProcessor.doneProcessing;
    }


    processLibrary(library: File) {
        this.__libraryProcessor.process(library);
    }

}
