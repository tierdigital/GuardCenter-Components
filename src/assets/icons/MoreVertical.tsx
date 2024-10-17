interface IconProps {
  fillColor: string;
  isDisabled?: boolean;
}

export const MoreVertical: React.FC<IconProps> = ({
  fillColor,
  isDisabled = false,
}: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.25 19.98V20.0061C13.25 20.6921 12.691 21.25 12 21.25C11.309 21.25 10.75 20.6921 10.75 20.0061C10.75 19.3181 11.309 18.75 12 18.75C12.691 18.75 13.25 19.294 13.25 19.98ZM12 10.75C11.309 10.75 10.75 11.3191 10.75 12.0061C10.75 12.6921 11.309 13.25 12 13.25C12.691 13.25 13.25 12.6921 13.25 12.0061V11.98C13.25 11.294 12.691 10.75 12 10.75ZM12 2.75C11.309 2.75 10.75 3.3191 10.75 4.0061C10.75 4.6921 11.309 5.25 12 5.25C12.691 5.25 13.25 4.6921 13.25 4.0061V3.97998C13.25 3.29398 12.691 2.75 12 2.75Z"
      fill={isDisabled ? "#98A2B3" : fillColor}
    />
  </svg>
);