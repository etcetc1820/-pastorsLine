import { MainSectionState } from "./mainSection.state";
import * as acts from "./mainSection.actions";

const initialState: MainSectionState = {
  popups: {
    isAllContactsOpened: false,
    isUsContactsOpened: false,
  },
  contacts: [],
  error: "",
  page: 1,
  evenContacts: [],
  totalContacts: 0,
};

const reducer = (
  state = initialState,
  action: acts.MainSectionActionsTypes
): MainSectionState => {
  switch (action.type) {
    case acts.MainSectionActions.OPEN_ALL_CONTACTS_POPUP:
      return {
        ...initialState,
        popups: {
          isAllContactsOpened: true,
          isUsContactsOpened: false,
        },
      };
    case acts.MainSectionActions.OPEN_US_CONTACTS_POPUP:
      return {
        ...initialState,
        popups: {
          isUsContactsOpened: true,
          isAllContactsOpened: false,
        },
      };
    case acts.MainSectionActions.CLOSE_POPUPS:
      return { ...initialState };
    case acts.MainSectionActions.UPDATE_CONTACTS:
      return {
        ...state,
        error: "",
        page: action.payload.page,
        contacts: [...state.contacts, ...action.payload.contacts],
      };
    case acts.MainSectionActions.REMOVE_AND_UPDATE_CONTACTS:
      return {
        ...state,
        error: "",
        totalContacts: action.payload.total,
        page: action.payload.page,
        contacts: [...action.payload.contacts],
      };
    case acts.MainSectionActions.ERROR_ON_GET_CONTACTS:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
