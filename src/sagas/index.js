import { fork } from 'redux-saga/effects';

import {
    test
} from './test';

export default function* rootSaga() {
    yield fork(test);
}
