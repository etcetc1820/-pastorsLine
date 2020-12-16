import { connect } from "react-redux";
import MainSection from "./containers/MainSection";
import { AppState } from "../../store/state";
import {
  getContacts,
  getErrorMessage,
  getPopupsState,
  getNextPage,
  getContactsWithEvenId,
  getTotalContacts,
} from "./mainSection.selector";

const mapStateToProps = (state: AppState) => {
  return {
    popups: getPopupsState(state),
    contacts: getContacts(state),
    error: getErrorMessage(state),
    page: getNextPage(state),
    evenContacts: getContactsWithEvenId(state),
    totalContacts: getTotalContacts(state),
  };
};

export default connect(mapStateToProps)(MainSection);
