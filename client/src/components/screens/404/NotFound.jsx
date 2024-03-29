import styles from './NotFound.module.css';
import {ROUTE_HOME} from 'utils/consts';

const NotFound = () => {
    return (
        <div className={styles.errorPage}>
            <div className={styles.errorPage__errorTextBox}>
                <h1 className={styles.errorTextBox__errorText}>
                    #404
                </h1>
                <h2 className={styles.errorTextBox__errorExplainText}>
                    Page not found
                </h2>
                <p className={styles.errorTextBox__navText}>
                    Go back to <span><a href={ROUTE_HOME}>home page</a></span>
                </p>
            </div>
        </div>
    );
};

export default NotFound;