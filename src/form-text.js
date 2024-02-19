import React from "react";
export default function FormText() {
  const textPswd = React.useRef();
  const textPswd2 = React.useRef();
  const onBlurPassword1 = () => {
    let pswd = textPswd.current.value;
    if (textPswd !== "" && !pswd.match(/^[0-9a-zA-Z]+$/)) {
      textPswd.current.value = "";
      alert("ต้องเป็น 0-9 หรือ a-z หรือ A-Z เท่านั้น");
    }
  };
  const onBlurPassword2 = () => {
    if (textPswd != textPswd2) {
      textPswd2.current.value = "";
      alert("รหัสผ่านทั้งสองช่องไม่ตรงกัน");
    }
  };
  return (
    <div
      className=" mt-4 mx-auto p-3 rounded "
      style={{ width: "400px", background: "#cee" }}
    >
      <form>
        {" "}
        <div className="form-group mb-2">
          <label htmlFor="login">ชื่อผู้ใช้ (Login)</label>
          <input
            type="text"
            id="login"
            name="login"
            maxLength="20"
            className="form-control form-control-sm"
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="login">รหัสผ่าน</label>
          <input
            type="password"
            id="login"
            name="login"
            maxLength="20"
            className="form-control form-control-sm"
            ref={textPswd}
            onBlur={onBlurPassword1}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="login">ใส่รหัสผ่านซ่ำ</label>
          <input
            type="password"
            id="login"
            name="login"
            maxLength="20"
            className="form-control form-control-sm"
            ref={textPswd2}
            onBlur={onBlurPassword2}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="memo">บันทึกช่วยจำ</label>
          <textarea
            id="memo"
            name="memo"
            rows="2"
            maxLength="200"
            className="form-control form-control-sm"
          ></textarea>
        </div>
        <div className="text-center">
            <button className="btn btn-sm px-4 btn btn-primary">OK</button>
        </div>
      </form>
    </div>
  );
}
