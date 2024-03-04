import React from "react";


export default function FormSelectFile() {
    const inputFile = React.useRef();
    const selectMaxNumFiles = React.useRef();
    const selectMaxSize = React.useRef();
    const maxNumFiles = [1, 2, 3, 4, 5];
    const maxFileSizes = [50, 100, 200, 500, 1000];


    const onClickButton = () => {
        let maxNumFilesValue = selectMaxNumFiles.current.value;
        let maxSizeValue = selectMaxSize.current.value;

        if (inputFile.current.files.length > maxNumFilesValue) {
            alert(`เลือกได้ไม่เกิน ${maxNumFilesValue} ไฟล์`);
            return;
        }

        for (let file of inputFile.current.files) {
            if (file.size > maxSizeValue * 1000) {
                alert(`ขนาดของแต่ละไฟล์ต้องไม่เกิน ${maxSizeValue} KB`);
                return;
            }
        }

        alert('Files OK');
    }

    return (
        <div className="mt-4 mx-auto p-3 rounded" style={{ width: '400px', background: '#cee' }}>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="maxNumFiles" className="form-label">จำนวนไฟล์สูงสุด</label>
                    <select id="maxNumFiles" className="form-select form-select-sm" ref={selectMaxNumFiles}>
                        {maxNumFiles.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="maxFileSize" className="form-label">ขนาดไฟล์สูงสุด (KB)</label>
                    <select id="maxFileSize" className="form-select form-select-sm" ref={selectMaxSize}>
                        {maxFileSizes.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="maxFileSize" className="form-label">ขนาดไฟล์สูงสุด (KB)</label>
                    <select id="maxFileSize" className="form-select form-select-sm" ref={selectMaxSize}>
                        {
                            maxFileSizes.map(i => {
                                return <option value={i}>{i}</option>
                            })
                        }
                    </select>
                </div>
                <input type="file" ref={inputFile} multiple />
                <button type="button" onClick={onClickButton}>Validate Files</button>
            </form>
        </div>
    );
}