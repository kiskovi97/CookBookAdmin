import { useState, useEffect } from 'react';
import styles from './Receipt.module.css'

const InputList = ({ onChanged, name, defaultState }) => {
    const [list, setList] = useState(defaultState);

    const addInstruction = () => {
        let listPrev = [...list];
        listPrev.push("");
        onChanged({
            target : 
            {
                name, 
                value: [...listPrev ]
            }
        });
        setList([...listPrev ]);
    }
    
    const removeInstruction = (index) => {
        let listPrev = [...list];
        listPrev.splice(index, 1)
        onChanged({
            target : 
            {
                name, 
                value: [...listPrev ]
            }
        });
        setList([...listPrev ]);
    }

    const handleChange = (e) => {
        let listPrev = [...list];
        listPrev[e.target.name] = e.target.value;
        onChanged({
            target : 
            {
                name, 
                value: [...listPrev ]
            }
        });
        setList([...listPrev ]);
    }
     useEffect(() => {
            if(defaultState) {
                setList([ ...defaultState ])
            }
        }, [defaultState]);

    return(
        <div>
            {list?.map((value, index) => (
                <li>
                        <textarea className={styles.title} rows="8" cols="80"
                            name={index}
                            placeholder="Paste recipe URL here"
                            value={value}
                            defaultValue={value}
                            onChange={handleChange}
                            style={{ padding: '0.5rem', width: '60%' }}
                        />
                <button className={styles.button} onClick={() => removeInstruction(index)}>Remove</button>
                </li>
                ))}
                <button className={styles.button} onClick={addInstruction}>Add Instruction</button>
        </div>)
}

export default InputList;