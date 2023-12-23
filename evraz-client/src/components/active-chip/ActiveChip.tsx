import classNames from "classnames";
import style from "./styles.module.css";

function ActiveChip(props: { isActive: boolean }) {
  const { isActive } = props;

  return (
    <div
      className={classNames(style.activeChip, {
        ["bg-success"]: isActive,
        ["bg-secondary"]: !isActive,
      })}
    ></div>
  );
}

export default ActiveChip;
