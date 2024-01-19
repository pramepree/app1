import { func } from "prop-types";
import React, { useState } from "react";
export default function MessageBox() {
    let [text, setText] = useState('Hello World');
    elt[size, setText] = React.useState(16);
    const onClickSetText = () => {
        let t = prompt('กำหนดข้อความ');
        if (t) setText(t)
    }
}

const onClickZoomin = () => {
    let newSize = size + 1;
    setSize(newSize);
    let MsgboxStyle = {
        display: 'inline-block',
        width: 350,
        fontSize: size,
        backgroundColor: '#ccc',
        padding: 5,
        textAlign: 'left',
    }
    return (
        <div style={{ textAlign: 'center', margin: 20 }}>
            <div style={MsgboxStyle}>[{text}]</div><br></br>
            <button onClick={onClickSetText}>ข้อความ</button>&nbsp;
            <button onClick={onClickZoomin}>เพิ่มขนาด</button>&nbsp;
            <button onClick={() => setSize(size - 1)}>ลดขนาด</button>
        </div>
    )
}