import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// Reducer is a function that returns data
export default combineReducers({
    //reducer
    libraries: LibraryReducer, // the key here represents the state variable
    // state now has a variable for libraries and its value is defined by LibraryReducer
    selectedLibraryId: SelectionReducer // this reducer(function) generates this piece of state
});
