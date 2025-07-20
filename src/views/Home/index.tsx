import classNames from "classnames";

import styles from "./index.module.scss";


export interface HomeViewProps {
    className?: string;
}


export function HomeView({ className }: HomeViewProps) {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>ddnomad.net is very much under construction</h1>
        </div>
    );
}
