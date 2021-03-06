import styles from './Projects.module.css';

const Projects = () => (
    <div id="projects" className={styles.Projects}>
        <header>
            <h2>Some projects i've been working on</h2>
        </header>
        <div className={styles.ProjectsContent}>
            <a className={styles.Project} href="https://tomasjurk.github.io/Portfolio/resume/" rel="noreferrer" target="_blank">
                <div className={`${styles.ProjectImage} ${styles.Resume}`} />
                <p>My resume, build with React and typescript</p>
            </a>
            <a className={styles.Project} href="https://tomasjurk.github.io/Portfolio/socialapp/" rel="noreferrer" target="_blank">
                <div className={`${styles.ProjectImage} ${styles.Blog}`} />
                <p>A little social space page, blog</p>
            </a>
            <a className={styles.Project} href="https://tomasjurk.github.io/Portfolio/ytapp/" rel="noreferrer" target="_blank">
                <div className={`${styles.ProjectImage} ${styles.SimpleYoutubeVideos}`} />
                <p>The small app powered by Youtube API, to track and watch newest videos of my favorite shows. (Youtube API has limited requests around 30 daily)</p>
            </a>
            <a className={styles.Project} href="https://tomasjurk.github.io/Portfolio/bikestations/" rel="noreferrer" target="_blank">
                <div className={`${styles.ProjectImage} ${styles.Bikesharing}`} />
                <p>Bike sharing stations with available bikes. Locations received from oslobysykkel.no open API.</p>
            </a>
        </div>
    </div>
);

export default Projects;