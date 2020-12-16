import { Action } from "../../store/state";
import { ContactState, QueryParamsState } from "./mainSection.state";

export enum MainSectionActions {
  OPEN_ALL_CONTACTS_POPUP = "[MainSection] open all contacts popup",
  OPEN_US_CONTACTS_POPUP = "[MainSection] open us contacts popup",
  CLOSE_POPUPS = "[MainSection] close popups",
  GET_CONTACTS = "[MainSection] get contacts",
  UPDATE_CONTACTS = "[MainSection] update contacts",
  ERROR_ON_GET_CONTACTS = "[MainSection] set error on get contacts",
  REMOVE_AND_UPDATE_CONTACTS = "[MainSection] remove and update contacts",
}

export class OpenAllContacts extends Action {
  readonly type = MainSectionActions.OPEN_ALL_CONTACTS_POPUP;
}

export class OpenUsContacts extends Action {
  readonly type = MainSectionActions.OPEN_US_CONTACTS_POPUP;
}

export class ClosePopups extends Action {
  readonly type = MainSectionActions.CLOSE_POPUPS;
}

export class GetContacts extends Action {
  readonly type = MainSectionActions.GET_CONTACTS;

  constructor(public payload: QueryParamsState) {
    super();
  }
}

export class UpdateContacts extends Action {
  readonly type = MainSectionActions.UPDATE_CONTACTS;

  constructor(public payload: { page: number; contacts: ContactState[] }) {
    super();
  }
}

export class RemoveAndUpdateContacts extends Action {
  readonly type = MainSectionActions.REMOVE_AND_UPDATE_CONTACTS;

  constructor(
    public payload: { page: number; contacts: ContactState[]; total: number }
  ) {
    super();
  }
}

export class SetError extends Action {
  readonly type = MainSectionActions.ERROR_ON_GET_CONTACTS;

  constructor(public payload: string) {
    super();
  }
}

export type MainSectionActionsTypes =
  | OpenAllContacts
  | OpenUsContacts
  | ClosePopups
  | GetContacts
  | UpdateContacts
  | SetError
  | RemoveAndUpdateContacts;
