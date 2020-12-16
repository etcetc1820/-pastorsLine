import React, { Component } from "react";
import UserPopup from "./components/UserPopup";
import AllUserPopup from "./components/AllUsersPopup";
import UsUsersPopup from "./components/UsUsersPopup";
import CustomButton from "../../../shared/CustomButton/CustomButton";
import * as acts from "../mainSection.actions";
import {
  ContactState,
  MainSectionState,
  ModalTypes,
  QueryParamsState,
} from "../mainSection.state";
import { ConnectedProps } from "../../../store/state";
import "./mainSection.scss";

interface PropsInterface extends ConnectedProps, MainSectionState {
  history: any;
}

interface StateInterface {
  isChecked: boolean;
  isShowUser: boolean;
  user: ContactState;
  search: string;
  isSubmitted: boolean;
}

class MainSection extends Component<PropsInterface, StateInterface> {
  state = {
    isChecked: false,
    isShowUser: false,
    user: {
      id: 0,
      color: "",
      lastName: "",
      firstName: "",
      phoneNumber: "",
    },
    search: "",
    isSubmitted: false,
  };

  resetState = () => {
    this.setState({
      isChecked: false,
      isShowUser: false,
      user: {
        id: 0,
        color: "",
        lastName: "",
        firstName: "",
        phoneNumber: "",
      },
      search: "",
      isSubmitted: false,
    });
  };

  redirectTo = (path: string) => {
    this.props.history.push(path);
  };

  handlerPopupOpen = (path: string, modalType: string) => {
    switch (modalType) {
      case ModalTypes.ALL:
        this.props.dispatch(new acts.OpenAllContacts());
        this.props.dispatch(new acts.GetContacts({ page: "1" }));
        break;
      case ModalTypes.US:
        this.props.dispatch(new acts.OpenUsContacts());
        this.props.dispatch(
          new acts.GetContacts({
            page: "1",
            countryId: "226",
          })
        );
        break;
    }

    this.resetState();
    this.redirectTo(path);
  };

  handleClosePopup = () => {
    this.resetState();
    this.props.dispatch(new acts.ClosePopups());
    this.redirectTo("/");
  };

  handleScroll = (top: number | undefined, params: QueryParamsState) => {
    const { totalContacts, contacts } = this.props;
    const fetchMore = totalContacts - contacts.length;

    if (top && top > 0.9 && fetchMore > 0) {
      this.props.dispatch(
        new acts.GetContacts({
          ...params,
          query: this.state.isSubmitted ? this.state.search : undefined,
        })
      );
    }
  };

  handleCheckbox = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  handleUserPopupOpen = (user: ContactState) => {
    this.setState({ ...this.state, isShowUser: true, user });
  };

  closeUserPopup = () => {
    this.setState({
      ...this.state,
      user: {
        id: 0,
        color: "",
        lastName: "",
        firstName: "",
        phoneNumber: "",
      },
      isShowUser: false,
    });
  };

  handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    params: QueryParamsState
  ) => {
    e.preventDefault();

    if (params.query && params.query.length > 0) {
      this.setState({ ...this.state, isSubmitted: true });
    } else {
      this.setState({ ...this.state, isSubmitted: false });
    }

    this.props.dispatch(new acts.GetContacts(params));
  };

  handleSearchValue = (searchValue: string) => {
    this.setState({ ...this.state, search: searchValue });
  };

  render() {
    const {
      popups: { isAllContactsOpened, isUsContactsOpened },
      contacts,
      error,
      page,
      evenContacts,
    } = this.props;
    const { isChecked, user, search, isShowUser } = this.state;
    const allContacts = isChecked ? [...evenContacts] : [...contacts];

    return (
      <>
        <div className="main-wrapper">
          <CustomButton
            variant="all-contacts"
            onClick={() =>
              this.handlerPopupOpen("/all-contacts", ModalTypes.ALL)
            }
          >
            All Contacts
          </CustomButton>
          <CustomButton
            variant="us-contacts"
            onClick={() => this.handlerPopupOpen("/us-contacts", ModalTypes.US)}
          >
            US Contacts
          </CustomButton>
        </div>
        <AllUserPopup
          isShow={isAllContactsOpened}
          error={error}
          handleClose={this.handleClosePopup}
          handleSubmit={this.handleSubmit}
          handleSearch={this.handleSearchValue}
          searchValue={search}
          handleScroll={this.handleScroll}
          page={page}
          contacts={allContacts}
          handleModalOpen={this.handlerPopupOpen}
          handleCheckBox={this.handleCheckbox}
          handleUserPopup={this.handleUserPopupOpen}
        />
        <UsUsersPopup
          isShow={isUsContactsOpened}
          error={error}
          handleClose={this.handleClosePopup}
          handleSubmit={this.handleSubmit}
          handleSearch={this.handleSearchValue}
          searchValue={search}
          handleScroll={this.handleScroll}
          page={page}
          contacts={allContacts}
          handleModalOpen={this.handlerPopupOpen}
          handleCheckBox={this.handleCheckbox}
          handleUserPopup={this.handleUserPopupOpen}
        />
        <UserPopup
          isShow={isShowUser}
          user={user}
          handleClose={this.closeUserPopup}
        />
      </>
    );
  }
}

export default MainSection;
