import { all, fork, take, call, put } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/types";
import * as acts from "./mainSection.actions";
import getContacts from "../../api/contacts-request";
import { setAuthHeader } from "../../api/request";
import api from "../../shared/constants";

function* getContactsRequest(): SagaIterator {
  const { token } = api;

  while (true) {
    const {
      payload: { query, page, countryId },
    } = yield take(acts.MainSectionActions.GET_CONTACTS);

    try {
      setAuthHeader(token);

      const res = yield call(getContacts.GetContacts, {
        query,
        page,
        countryId,
      });
      let { contacts, total } = res.data;
      contacts = Object.entries(contacts).map(([, contact]: any) => {
        return {
          id: contact.id,
          color: contact.color,
          lastName: contact.last_name,
          firstName: contact.first_name,
          phoneNumber: contact.phone_number,
        };
      });

      if (page === "1") {
        yield put(new acts.RemoveAndUpdateContacts({ contacts, page, total }));
      } else {
        yield put(new acts.UpdateContacts({ contacts, page }));
      }
    } catch (e) {
      yield put(new acts.SetError(e.message));
    }
  }
}

export default function* root(): SagaIterator {
  yield all([fork(getContactsRequest)]);
}
