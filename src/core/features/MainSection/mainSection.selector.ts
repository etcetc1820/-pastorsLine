import { createSelector } from "reselect";
import { AppState } from "../../store/state";

export const getPopupsState = ({ mainState: { popups } }: AppState) => popups;

export const getContacts = ({ mainState: { contacts } }: AppState) => contacts;

export const getErrorMessage = ({ mainState: { error } }: AppState) => error;

export const getNextPage = ({ mainState: { page } }: AppState) => page;

export const getContactsFromStore = ({ mainState: { contacts } }: AppState) =>
  contacts;

export const getTotalContacts = ({ mainState: { totalContacts } }: AppState) =>
  totalContacts;

export const getContactsWithEvenId = createSelector(
  [getContactsFromStore],
  (contacts) => {
    return contacts.filter((contact) => contact.id % 2 === 0);
  }
);
