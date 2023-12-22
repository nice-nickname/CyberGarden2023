import styles from './page-form.module.css'

export interface IPageFormProps {
    children: JSX.Element,
    title: string,
}

export function PageForm({ title, children }: IPageFormProps) {

    return (
        <div className={styles.form}>
            <div className={styles.form__header}>{title}</div>
            <div className={styles.form__content}>
                {children}
            </div>
        </div>
    )
}