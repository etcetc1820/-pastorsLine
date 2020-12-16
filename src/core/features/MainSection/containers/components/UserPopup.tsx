import React from "react";
import CustomModal from "../../../../shared/CustomModal/CustomModal";
import CustomButton from "../../../../shared/CustomButton/CustomButton";
import { ContactState } from "../../mainSection.state";

interface UserPopupInterface {
  isShow: boolean;
  handleClose: () => void;
  user: ContactState;
}

const UserPopup: React.FunctionComponent<UserPopupInterface> = ({
  isShow,
  handleClose,
  user,
}) => {
  return (
    <CustomModal
      show={isShow}
      onHide={() => handleClose()}
      header={"User info"}
      body={
        <div style={{ color: user.color }}>
          <p>ID: {user.id}</p>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Phone number: {user.phoneNumber}</p>
        </div>
      }
      footer={
        <CustomButton variant="close" onClick={() => handleClose()}>
          Close
        </CustomButton>
      }
    />
  );
};

export default UserPopup;
