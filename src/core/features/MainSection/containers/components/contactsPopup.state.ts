import React from "react";
import {
  ContactState,
  ModalTypes,
  QueryParamsState,
} from "../../mainSection.state";

export interface ContactsInterface {
  isShow: boolean;
  error: string;
  handleClose: () => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    params: QueryParamsState
  ) => void;
  handleSearch: (searchValue: string) => void;
  searchValue: string;
  handleScroll: (top: number | undefined, params: QueryParamsState) => void;
  page: number;
  contacts: ContactState[];
  handleModalOpen: (path: string, type: ModalTypes) => void;
  handleCheckBox: () => void;
  handleUserPopup: (user: ContactState) => void;
}
