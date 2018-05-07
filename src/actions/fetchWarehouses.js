import { callFetchApi } from "../shared/api";
import {call} from 'vuex-saga';
import * as constants from '../utils/shared/constants';

export default function *fetchWarehouses() {
  return yield call(callFetchApi, constants.url, {}, 'GET')
}