import { combineReducers } from 'redux';

import session from './session';
import currentForm from './currentForm';
import tag from './tag';
import event from './event';
import pagination from './pagination';
import toast from './toast';
import userLog from './userLog';

export default combineReducers({
  session,
  currentForm,
  tag,
  event,
  pagination,
  toast,
  userLog,
});
