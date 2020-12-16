import React from "react";
import { Button } from "react-bootstrap";
import "./customButton.scss";

interface CustomButtonInterface {
  variant?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const CustomButton: React.FunctionComponent<CustomButtonInterface> = ({
  variant,
  children,
  onClick,
  disabled,
}) => (
  <Button variant={variant} onClick={onClick} disabled={disabled}>
    {children}
  </Button>
);

export default CustomButton;
