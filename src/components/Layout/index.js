import styles from "./styles.module.css";
import React from "react";

const Layout = ({id, title, descr, urlBg, colorBg}) => {

    return (
        <section style={{
            backgroundColor: colorBg,
            backgroundImage: `url(${urlBg})`
        }}
                 className={styles.root} id={id}>
            <div className={styles.wrapper}>
                <article>
                    <div className={styles.title}>
                        <h3>{title}</h3>
                        <span className={styles.separator}/>
                    </div>
                    <div className={styles.des}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
