// import { UserDBRecord } from './user-db-record.interface';

export interface HasUserIDKey {

	// Unique, never changes.
	// Foreign key, relating to `UserDBRecord._id`
	_user_id: string;

}
