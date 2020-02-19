import { combineReducers } from 'redux';

import session from './session';
import currentForm from './currentForm';

export default combineReducers({ session, currentForm });
