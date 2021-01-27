// Not all of these strings represent an entire error message.  Some of them are fragments.

export const noRecordMatchedCriteria =
	'Operation not performed.  No document matched the request criteria';

export const notLoggedIn = 'not logged in';


// This error happens whenever a record is being created or updated and
// contains a property:value pair identical to a property:value pair in another record
// of the same collection.
// (The error only occurs if that property is indexed with a unique constraint)

export const duplicate = 'Duplicate key error: E11000 duplicate key error collection:';

// Each collection ('user', 'library', 'image') has a property indexed with a unique
// constraint.
// No two 'user' records can have the same 'email' value.
// No two 'library' records can have the same combined '_user_id' and 'name' values.
// No two 'image' records can have the same combined '_user_id' and 'name' values.


export const libraryNotFound = 'No such library found';
export const userDoesntExist = 'User does not exist';
export const sizeRequirement = 'Size must be between 0 and 16793600(16MB)';
export const batchDoesntExist = 'Batch does not exist';
