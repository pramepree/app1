import React, { useRef, useState } from 'react';

export default function FormCheck() {
    const switchRef = useRef();
    const [checkedStyle, setCheckedStyle] = useState([]);
    const [checkedSize, setCheckedSize] = useState('');
    const size = ['Small', 'Medium', 'Large'];

    const onChangeCheck = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setCheckedStyle((prevStyles) => [...prevStyles, value]);
        } else {
            setCheckedStyle((prevStyles) => prevStyles.filter((style) => style !== value));
        }
    };

    const onChangeRadio = (event) => {
        setCheckedSize(event.target.value);
    };

    const onClickButton = () => {
        if (switchRef.current.checked) {
            if (checkedStyle.length === 0) {
                alert('Please select style');
                return;
            } else if (checkedSize === '') {
                alert('Please select size');
                return;
            }
        }
        let msg = 'Selected style(s): ' + checkedStyle.join(',');
        msg += '\nSelected size: ' + checkedSize;
        alert(msg);
    };

    return (
        <div className='mt-4 mx-auto p-3' style={{ width: '450px', background: '#cee' }}>
            <form>
                <span>Font style</span>&nbsp;&nbsp;
                {size.map((st, i) => (
                    <div className='form-check form-check-inline mb-2' key={i}>
                        <input type='checkbox' id={'check' + i} value={st} onChange={onChangeCheck} />
                        <label htmlFor={'check' + i}>{st}</label>
                    </div>
                ))}
                <br />
                <span>font size:</span>&nbsp;&nbsp;
                {
                    size.map((st, i) => (
                        <div className='form-check form-check-inline mb-2' key={i}>
                            <input type='radio' id={'radio' + i} value={st} name='fontSize' className='form-check-input' onChange={onChangeRadio} />
                            <label htmlFor={'radio' + i}>{st}</label>
                        </div>
                    ))
                }
                <div className='form-check form-switch mt-3'>
                    <input type='checkbox' id='sw' value={'require'} className='form-check-input' ref={switchRef} />
                    <label htmlFor='sw' className='form-check-label'> Required</label>
                </div>
                <div className='text-center mt-4'>
                    <button type='button' onClick={onClickButton} className='btn btn-sm px-4'>OK</button>
                </div>
            </form>
        </div>
    );
}
