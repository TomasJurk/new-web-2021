import styles from './Projects.module.css';

const Projects = () => (
    <div className={styles.Projects}>
        <header>
            <h2>Some projects, that i've been working on</h2>
        </header>
        <div className={styles.ProjectsContent}>
            <div className={styles.Project}>
                <div className={styles.ProjectImage} />
                <p>lasdf d fsad fasdf asd fsad salkjhd aksd asdlkjhasdl alsdhalwd asd</p>
            </div>
            <div className={styles.Project}>
                <div className={styles.ProjectImage} />
                <p>lasdf d fsad fasdf asd fsad kedujwh ailwhdalk alwihda ksdj askdj as</p>
            </div>
            <div className={styles.Project}>
                <div className={styles.ProjectImage} />
                <p>lasdf d fsad fasdf asd fsad</p>
            </div>
            <div className={styles.Project}>
                <div className={styles.ProjectImage} />
                <p>lasdf d fsad fasdf asd fsad</p>
            </div>
            <div className={styles.Project}>
                <div className={styles.ProjectImage} />
                <p>lasdf d fsad fasdf asd fsad</p>
            </div>
        </div>
    </div>
);

export default Projects;