import { combineReducers } from 'redux';

import session from './session';
import currentForm from './currentForm';
import tag from './tag';

export default combineReducers({ session, currentForm, tag });
