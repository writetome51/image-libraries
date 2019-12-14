import {DirectProcessor } from '../../interfaces/direct-processor';


export abstract class DataProcessorService implements DirectProcessor {

	abstract process(): void;

}
