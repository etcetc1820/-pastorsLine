import { combineReducers } from "redux";

import mainSectionState from "../features/MainSection/mainSection.reducers";

export default combineReducers({ mainState: mainSectionState });
