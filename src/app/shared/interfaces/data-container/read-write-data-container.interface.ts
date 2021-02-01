import { SettableDataContainer }
	from '@interfaces/data-container/settable-data-container.interface';
import { GettableDataContainer }
	from '@interfaces/data-container/gettable-data-container.interface';


export interface ReadWriteDataContainer<T>
	extends SettableDataContainer, GettableDataContainer<T> {
}
