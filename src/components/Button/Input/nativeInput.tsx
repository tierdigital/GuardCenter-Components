import React from "react";
import { Button, ButtonProps } from "antd";

enum VarientEnum {
  default = "default",
  green = "green",
}

interface DoubleIconButtonProps extends ButtonProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  type: "primary" | "default" | "dashed" | "link" | "text";
  size?: "large" | "small" | "middle";
  colorVariant?: "default" | "green";
}

export const NativeInput: React.FC<DoubleIconButtonProps> = ({
  leftIcon,
  rightIcon,
  children,
  colorVariant = "default",
  ...props
}) => {
  const defaultColorClasName =
    props.type &&
    props.type !== "primary" &&
    colorVariant === VarientEnum.default
      ? "default-button"
      : "";
  const defaultGreenColorClasName =
    props.type && props.type !== "primary" && colorVariant === VarientEnum.green
      ? "green-default-button"
      : "";
  const textColorClasName =
    props.type && props.type === "text" && colorVariant === VarientEnum.green
      ? "green-text-button"
      : "";

  return (
    <Button
      {...props}
      className={
        `${defaultColorClasName} ` +
        `${defaultGreenColorClasName} ` +
        `${textColorClasName}`
      }
      style={{ lineHeight: 0 }}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </Button>
  );
};
