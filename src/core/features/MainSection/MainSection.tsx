import React, { Component } from "react";
import { Form } from "react-bootstrap";
import CustomButton from "../../shared/CustomButton/CustomButton";
import CustomModal from "../../shared/CustomModal/CustomModal";
import "./mainSection.scss";

interface PropsInterface {
  history: any;
}

interface StateInterface {
  isAllContactsOpened: boolean;
  isUsContactsOpened: boolean;
}

enum ModalTypes {
  ALL = "Modal All contacts",
  US = "Modal US contacts",
}

class MainSection extends Component<PropsInterface, StateInterface> {
  constructor(props: PropsInterface) {
    super(props);

    this.state = {
      isAllContactsOpened: false,
      isUsContactsOpened: false,
    };
  }

  redirectTo = (path: string) => {
    this.props.history.push(path);
  };

  handlerOnClick = (path: string, modalType: string) => {
    switch (modalType) {
      case ModalTypes.ALL:
        this.setState({
          isAllContactsOpened: true,
          isUsContactsOpened: false,
        });
        break;
      case ModalTypes.US:
        this.setState({
          isAllContactsOpened: false,
          isUsContactsOpened: true,
        });
        break;
    }

    this.redirectTo(path);
  };

  handleClose = () => {
    this.setState({
      isAllContactsOpened: false,
      isUsContactsOpened: false,
    });

    this.redirectTo("/");
  };

  render() {
    const { isAllContactsOpened, isUsContactsOpened } = this.state;

    return (
      <>
        <div className="main-wrapper">
          <CustomButton
            variant="all-contacts"
            onClick={() => this.handlerOnClick("/all-contacts", ModalTypes.ALL)}
          >
            All Contacts
          </CustomButton>
          <CustomButton
            variant="us-contacts"
            onClick={() => this.handlerOnClick("/us-contacts", ModalTypes.US)}
          >
            US Contacts
          </CustomButton>
        </div>
        <CustomModal
          show={isAllContactsOpened}
          onHide={() => this.handleClose()}
          header={"All contacts"}
          body={
            <>
              <div>
                <CustomButton
                  disabled
                  variant="all-contacts"
                  onClick={() =>
                    this.handlerOnClick("/all-contacts", ModalTypes.ALL)
                  }
                >
                  All Contacts
                </CustomButton>
                <CustomButton
                  variant="us-contacts"
                  onClick={() =>
                    this.handlerOnClick("/us-contacts", ModalTypes.US)
                  }
                >
                  US Contacts
                </CustomButton>
                <CustomButton
                  variant="close"
                  onClick={() => this.handleClose()}
                >
                  Close
                </CustomButton>
              </div>
            </>
          }
          footer={
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Only even" />
            </Form.Group>
          }
        />
        <CustomModal
          show={isUsContactsOpened}
          onHide={() => this.handleClose()}
          header={"US contacts"}
          body={
            <>
              <div>
                <CustomButton
                  variant="all-contacts"
                  onClick={() =>
                    this.handlerOnClick("/all-contacts", ModalTypes.ALL)
                  }
                >
                  All Contacts
                </CustomButton>
                <CustomButton
                  disabled
                  variant="us-contacts"
                  onClick={() =>
                    this.handlerOnClick("/us-contacts", ModalTypes.US)
                  }
                >
                  US Contacts
                </CustomButton>
                <CustomButton
                  variant="close"
                  onClick={() => this.handleClose()}
                >
                  Close
                </CustomButton>
              </div>
            </>
          }
          footer={
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Only even" />
            </Form.Group>
          }
        />
      </>
    );
  }
}

export default MainSection;
