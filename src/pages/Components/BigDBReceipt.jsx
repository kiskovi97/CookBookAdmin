import styles from './Receipt.module.css'
import ScrollAnimation from 'react-animate-on-scroll'
import { useState, useEffect } from 'react';
import { uploadData } from '../../dynamoService.js';

function BigDBReceipt({ proj }) {
    const [allValues, setAllValues] = useState(proj);
    const handleChange = (e) => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value });
    }; 
    const upload = async () => {
        await uploadData(allValues);
    }
    useEffect(() => {
        if(proj) {
            setAllValues({ ...proj })
        }
    }, [proj])

    var image = proj.image?.startsWith("/CookBook") ? "https://kiskovi97.github.io" + proj.image : proj.image; 

        return (
            <div className={styles.receipt}>
                <div className={styles.main}>
                    <div className={styles.details}>
                        <input className={styles.title}
                            type="text"
                            name='title'
                            placeholder="Paste recipe URL here"
                            value={allValues.title}
                            defaultValue={allValues.title}
                            onChange={handleChange}
                            style={{ padding: '0.5rem', width: '60%' }}
                        />
                        <textarea className={styles.title} rows="8" cols="80"
                            name='details'
                            placeholder="Paste recipe URL here"
                            value={allValues.details}
                            defaultValue={allValues.details}
                            onChange={handleChange}
                            style={{ padding: '0.5rem', width: '60%' }}
                        />
                        {proj.sources && proj.sources.length > 0 ? (<div>Források:</div>) : null}
                        {proj.sources?.map(source => (
                            <div>
                                <a href={source.link} target="_blank" rel="noreferrer">{source.name}</a>
                            </div>))}
                        <div>
                            <button className={styles.button} onClick={upload}>Upload</button>
                        </div>

                    </div>
                    <div className={styles.image}>
                        <img src={image} hidden={!image} alt="" className={styles.background} />
                    </div>
                </div>
                <div className={styles.description}>
                    <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" animateOnce >
                        {proj.ingredients?.map(station => (
                            <div>
                                <h3>{station.title}</h3>
                                <div>
                                    {station.list?.map(element => (<li>{element}</li>))}
                                </div>
                            </div>))}
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" animateOnce >
                        <div>
                            {proj.comment ? (<li>{proj.comment}</li>) : null}
                            {proj.instructions?.map(station => (<li>{station}</li>))}
                        </div>
                    </ScrollAnimation>
                </div>
            </div>)

}

export default BigDBReceipt