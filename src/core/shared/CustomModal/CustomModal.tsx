import React from "react";
import Modal from "react-bootstrap/Modal";
import "./customModal.scss";

interface CustomModalInterface {
  show: boolean;
  onHide?: () => void;
  header?: string;
  body?: JSX.Element | string;
  footer?: JSX.Element | string;
}

const CustomModal: React.FunctionComponent<CustomModalInterface> = ({
  show,
  onHide,
  header,
  body,
  footer,
}) => {
  return (
    <Modal show={show} onHide={onHide}>
      {onHide || header ? (
        <Modal.Header closeButton={!!onHide}>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
      ) : null}
      {body ? <Modal.Body>{body}</Modal.Body> : null}

      {footer ? (
        <Modal.Footer className="justify-content-start">{footer}</Modal.Footer>
      ) : null}
    </Modal>
  );
};

export default CustomModal;
