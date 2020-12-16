import { all, fork } from "redux-saga/effects";

import mainSectionSagas from "../features/MainSection/mainSection.sagas";

function* rootSaga(): Generator {
  yield all([fork(mainSectionSagas)]);
}

export default rootSaga;
