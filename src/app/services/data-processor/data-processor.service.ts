import {Processor } from '../../interfaces/processor';


export abstract class DataProcessorService implements Processor {

	abstract process(): void;

}
