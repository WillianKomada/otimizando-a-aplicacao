import { ButtonHTMLAttributes } from "react";

import { Icon } from "./Icon";

import "../styles/button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  selected: boolean;
  buttonClickCallback: () => void;
}

export function Button({
  iconName,
  title,
  selected,
  buttonClickCallback,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      {...(selected && { className: "selected" })}
      onClick={buttonClickCallback}
      {...rest}
    >
      <Icon name={iconName} color={selected ? "#FAE800" : "#FBFBFB"} />
      {title}
    </button>
  );
}
