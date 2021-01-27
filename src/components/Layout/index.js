import styles from "./styles.module.css";

const Layout = ({ id, title, descr, urlBg, colorBg }) => {
    const style = {

    };
    return(
        <section className={styles.root} id={id}>
            <div className={styles.wrapper} style={{ backgroundColor: colorBg, backgroundImage: `url(${urlBg})`}}>
                <article>
                    <div className={styles.title}>
                        <h3>{title}</h3>
                        <span className={styles.separator}/>
                    </div>
                    <div className={styles.des}>
                        <p>{ descr }</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
