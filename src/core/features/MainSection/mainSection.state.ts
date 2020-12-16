export enum ModalTypes {
  ALL = "Modal All contacts",
  US = "Modal US contacts",
}

export type PopupsState = {
  isAllContactsOpened: boolean;
  isUsContactsOpened: boolean;
};

export type ContactState = {
  id: number;
  color: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
};

export type QueryParamsState = {
  query?: string;
  page: string;
  countryId?: string;
};

export interface MainSectionState {
  popups: PopupsState;
  contacts: ContactState[];
  error: string;
  page: number;
  evenContacts: ContactState[];
  totalContacts: number;
}
