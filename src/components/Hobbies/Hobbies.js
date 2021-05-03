import React, { useState } from 'react';

import styles from './Hobbies.module.css';

const Hobbies = () => {

    const [travelPicturePosition, setTravelPicturePosition] = useState(0);
    const [catPicturePosition, setCatPicturePosition] = useState(0);


    const nextPic = (stateHandler, stateItemName) => {
        if (stateItemName === -300) {
            stateHandler(0);
            return;
        }
        const newPosition = stateItemName - 100;
        stateHandler(newPosition);
    }

    const prevPic = (stateHandler, stateItemName) => {
        if (stateItemName === 0) {
            stateHandler(-300);
            return;
        }
        const newPosition = stateItemName + 100;
        stateHandler(newPosition);
    }
    

    return (
        <div className={styles.Hobbies}>
            <div className={styles.HobbiesContent}>
                <header>
                    <h2>And a little bit about me, some of my hobbies</h2>
                </header>
                <div className={styles.Hobby}>
                    <div className={styles.HobbyImage}>
                        <div className={styles.ArrowLeft} onClick={() => prevPic(setTravelPicturePosition, travelPicturePosition)} />
                        <div className={styles.ArrowRight} onClick={() => nextPic(setTravelPicturePosition, travelPicturePosition)} />
                        <div className={`${styles.SlidingImage} ${styles.Nice}`} style={{left: travelPicturePosition + '%'}}/>
                        <div className={`${styles.SlidingImage} ${styles.Svalbard}`} style={{left: travelPicturePosition + 100 + '%'}}/>
                        <div className={`${styles.SlidingImage} ${styles.Vienn}`} style={{left: travelPicturePosition + 200 + '%'}}/>
                        <div className={`${styles.SlidingImage} ${styles.Preikestolen}`} style={{left: travelPicturePosition + 300 + '%'}}/>
                    </div>
                    <p>Traveling! We want to visit every corner of this planet</p>
                </div>
                <div className={styles.Hobby}>
                    <div className={styles.HobbyImage} />
                    <p>Fishing</p>
                </div>
                <div className={styles.Hobby}>
                    <div className={styles.HobbyImage} />
                    <p>Exercise. Gym, cykling, walking... Love to do that all</p>
                </div>
                <div className={styles.Hobby}>
                    <div className={styles.HobbyImage}>
                        <div className={styles.ArrowLeft} onClick={() => prevPic(setCatPicturePosition, catPicturePosition)} />
                        <div className={styles.ArrowRight} onClick={() => nextPic(setCatPicturePosition, catPicturePosition)} />
                        <div className={`${styles.SlidingImage} ${styles.ImageCat1}`} style={{left: catPicturePosition + '%'}}/>
                        <div className={`${styles.SlidingImage} ${styles.ImageCat2}`} style={{left: catPicturePosition + 100 + '%'}}/>
                        <div className={`${styles.SlidingImage} ${styles.ImageCat3}`} style={{left: catPicturePosition + 200 + '%'}}/>
                        <div className={`${styles.SlidingImage} ${styles.ImageCat4}`} style={{left: catPicturePosition + 300 + '%'}}/>
                    </div>
                    <p>And of course programming! But sometimes it can be difficult to focus :)</p>
                </div>
            </div>
        </div>
    );
}

export default Hobbies;