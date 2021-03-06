import React from "react";
import { Form } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars";
import CustomButton from "../../../../shared/CustomButton/CustomButton";
import CustomModal from "../../../../shared/CustomModal/CustomModal";
import { ContactState, ModalTypes } from "../../mainSection.state";
import { ContactsInterface } from "./contactsPopup.state";

const AllUserPopup: React.FunctionComponent<ContactsInterface> = ({
  isShow,
  error,
  handleClose,
  handleSubmit,
  handleSearch,
  searchValue,
  handleScroll,
  page,
  contacts,
  handleModalOpen,
  handleCheckBox,
  handleUserPopup,
}) => {
  const scrollbarRef = React.createRef<Scrollbars>();

  return (
    <CustomModal
      show={isShow}
      onHide={() => handleClose()}
      header={"All contacts"}
      body={
        !!error ? (
          <p>{error}</p>
        ) : (
          <>
            <Form
              onSubmit={(e) =>
                handleSubmit(e, {
                  page: "1",
                  query: searchValue,
                })
              }
            >
              <Form.Control
                className="search-field"
                type="text"
                placeholder="Search"
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
              />
            </Form>
            <Scrollbars
              ref={scrollbarRef}
              onScroll={(e) => {
                if (scrollbarRef.current) {
                  const { top } = scrollbarRef.current.getValues();
                  handleScroll(top, {
                    page: +page + 1 + "",
                  });
                }
              }}
              autoHeight
            >
              <ul>
                {contacts.map((contact: ContactState) => (
                  <li
                    style={{ color: contact.color }}
                    key={contact.id}
                    onClick={() => handleUserPopup(contact)}
                  >
                    {contact.firstName} {contact.firstName}
                  </li>
                ))}
              </ul>
            </Scrollbars>
            <div className="btns-row">
              <CustomButton
                disabled
                variant="all-contacts"
                onClick={() => handleModalOpen("/all-contacts", ModalTypes.ALL)}
              >
                All Contacts
              </CustomButton>
              <CustomButton
                variant="us-contacts"
                onClick={() => handleModalOpen("/us-contacts", ModalTypes.US)}
              >
                US Contacts
              </CustomButton>
              <CustomButton variant="close" onClick={() => handleClose()}>
                Close
              </CustomButton>
            </div>
          </>
        )
      }
      footer={
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Only even"
            onChange={() => handleCheckBox()}
          />
        </Form.Group>
      }
    />
  );
};

export default AllUserPopup;
