import { useState, useEffect } from 'react';
import styles from './Receipt.module.css'
import InputList from './InputList';

const InputListList = ({ onChanged, name, defaultState }) => {
    const [list, setList] = useState(defaultState);

    const addInstruction = () => {
        let listPrev = [...list];
        listPrev.push({ title: "Ingredients", list: []});
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
    const handleTitleChange = (e) => {
        let listPrev = [...list];
        listPrev[e.target.name].title = e.target.value;
        onChanged({
            target : 
            {
                name, 
                value: [...listPrev ]
            }
        });
        setList([...listPrev ]);
    }

    const handleListChange = (e) => {
        let listPrev = [...list];
        listPrev[e.target.name].list = e.target.value;
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
                <div>
                    <input className={styles.title}
                            type="text"
                            name={index}
                            placeholder="Paste recipe URL here"
                            value={value.title}
                            defaultValue={value.title}
                            onChange={handleTitleChange}
                            style={{ padding: '0.5rem', width: '60%' }}
                        />
                    <InputList name={index} 
                            defaultState={value.list}
                            onChanged={handleListChange} />
                    <button className={styles.button} onClick={() => removeInstruction(index)}>Remove</button>
                </div>
                ))}
                <button className={styles.button} onClick={addInstruction}>Add</button>
        </div>)
}

export default InputListList;