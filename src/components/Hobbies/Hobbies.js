import React, { useState } from 'react';

import styles from './Hobbies.module.css';

const Hobbies = () => {

    const [travelPicturePosition, setTravelPicturePosition] = useState(0);
    const [fishingPicturePosition, setFishingPicturePosition] = useState(0);
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
        <div id="hobbies" className={styles.Hobbies}>
            <header>
                <h2>And a little bit about me, some of my hobbies</h2>
            </header>
            <div className={styles.HobbiesContent}>
                <div className={styles.Hobby}>
                    <div className={styles.HobbyImage}>
                        {/* <div className={styles.ArrowLeft} onClick={() => prevPic(setTravelPicturePosition, travelPicturePosition)} /> */}
                        {/* <div className={styles.ArrowRight} onClick={() => nextPic(setTravelPicturePosition, travelPicturePosition)} /> */}
                        <div className={`${styles.SlidingImage} ${styles.Nice}`} style={{left: travelPicturePosition + '%'}}/>
                        {/* <div className={`${styles.SlidingImage} ${styles.Svalbard}`} style={{left: travelPicturePosition + 100 + '%'}}/> */}
                        {/* <div className={`${styles.SlidingImage} ${styles.Vienn}`} style={{left: travelPicturePosition + 200 + '%'}}/> */}
                        {/* <div className={`${styles.SlidingImage} ${styles.Preikestolen}`} style={{left: travelPicturePosition + 300 + '%'}}/> */}
                    </div>
                    <p>Traveling. We want to visit every corner of this planet</p>
                </div>
                <div className={styles.Hobby}>
                    <div className={styles.HobbyImage}>
                        {/* <div className={styles.ArrowLeft} onClick={() => prevPic(setFishingPicturePosition, fishingPicturePosition)} /> */}
                        {/* <div className={styles.ArrowRight} onClick={() => nextPic(setFishingPicturePosition, fishingPicturePosition)} /> */}
                        <div className={`${styles.SlidingImage} ${styles.Fishing1}`} style={{left: fishingPicturePosition + '%'}}/>
                        {/* <div className={`${styles.SlidingImage} ${styles.Fishing2}`} style={{left: fishingPicturePosition + 100 + '%'}}/> */}
                        {/* <div className={`${styles.SlidingImage} ${styles.Fishing3}`} style={{left: fishingPicturePosition + 200 + '%'}}/> */}
                        {/* <div className={`${styles.SlidingImage} ${styles.Fishing4}`} style={{left: fishingPicturePosition + 300 + '%'}}/> */}
                    </div>
                    <p>Fishing. Lakes, rivers, fjords. Mostly catch and release fishing, but some of catch goes to frying pan :)</p>
                </div>
                <div className={styles.Hobby}>
                    <div className={styles.HobbyImage}>
                        <div className={`${styles.SlidingImage} ${styles.Gym}`} style={{left: fishingPicturePosition + '%'}}/>
                    </div>
                    <p>Weightlifting, cycling, walking and nutrition. I reached personal goal by losing 20kg of overweight!</p>
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