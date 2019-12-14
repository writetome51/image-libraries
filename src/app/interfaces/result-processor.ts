import { DirectProcessor } from './direct-processor';


export interface ResultProcessor extends DirectProcessor {
	process: (result) => void;
}
