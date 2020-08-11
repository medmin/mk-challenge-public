import { all } from "redux-saga/effects";
import * as appSagas from "./app/app-sagas";

const allSagaWatchers = [...Object.values(appSagas)].map((watcher) => watcher());

export function* rootSaga() {
  yield all(allSagaWatchers);
}
