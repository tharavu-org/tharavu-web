import { combineReducers } from 'redux';

import session from './session';
import currentForm from './currentForm';
import tag from './tag';
import event from './event';

export default combineReducers({ session, currentForm, tag, event });
