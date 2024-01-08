import React, { Component } from "react";
export default class Calender extends Component {
    getDate() {
        const dayName = ['อาทิตย์', 'จันทร์', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
        const monthName = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
        const date = new Date()
        const weekDay = dayName[date.getDay()]
        const day = date.getDate()
        const month = monthName[date.getMonth()]
        const year = date.getFullYear() + 543
        return `วัน${weekDay} ที่ ${day} ${month} ${year}`

    }
    render() {
        return <div>{this.getDate()}</div>
    }
}