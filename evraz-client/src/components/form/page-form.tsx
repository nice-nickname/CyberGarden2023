import styles from "./page-form.module.css";

export interface IPageFormProps {
  children: JSX.Element;
}

export function PageForm({ children }: IPageFormProps) {
  return (
    <div className={styles.form}>
      <div className={styles.form__content}>{children}</div>
    </div>
  );
}
