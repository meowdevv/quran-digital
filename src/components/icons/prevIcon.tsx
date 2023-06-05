import { PrevIconProps } from "@/types/components";

const PrevIcon = (props: PrevIconProps) => {
  return (
    <svg
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path d="M8 1L2 7L8 13" stroke="white" stroke-width="2" />
    </svg>
  );
};

export default PrevIcon;
