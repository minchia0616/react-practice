import { useState } from 'react';
import './HTML5Form.css';

function HTML5Form(props) {
    // 記錄表單每個欄位輸入值
    const [fields, setFields] = useState({
        fullName: '',
        email: '',
        password: '',
    })

    // 記錄表單每個欄位有錯誤時的訊息
    const [fieldErrors, setFieldErrors] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    // 欄位用
    const handleFieldsChange = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }

    // 表單用
    const handleSubmit = (e) => {
        // 先阻擋預設送出行為
        e.preventDefault()

        // 這裡可以得到目前輸入的值
        // 第一種方式: 從狀態得到
        console.log(fields)

        // 第二種方式: 用FormData物件
        const formData = new FormData(e.target)

        console.log(
        formData.get('fullName'),
        formData.get('email'),
        formData.get('password')
        )

        // 作更多驗証
        if (fields.password !== fields.confirmPassword) {
        // 填入錯誤訊息
        setFieldErrors({
        ...fieldErrors,
        password: '密碼與確認密碼欄位輸入值不同',
        confirmPassword: '密碼與確認密碼欄位輸入值不同',
        })
        return
    }

        // 送到伺服器(fetch/ajax)
    }

    // 表單用，有不合法的驗証出現時會觸發
    const handleInvalid = (e) => {
        // 先阻擋預設行為-泡泡訊息
        e.preventDefault()

        // 錯誤訊息
        // console.log(e.target.validationMessage)

        // 填入錯誤訊息
        setFieldErrors({...fieldErrors,[e.target.name]: e.target.validationMessage})
    }

    // 表單用，整個表單有更動時會觸發
    // 用於讓使用者清空某個正在修改的欄位的錯誤訊息
    const handleFormChange = (e) => {
        // 填入錯誤訊息
        setFieldErrors({...fieldErrors,[e.target.name]: '',})
    }

    return (
    <>
        <form onSubmit={handleSubmit} onInvalid={handleInvalid} onChange={handleFormChange}>
            <label>姓名</label><input type="text" name="fullName" required value={fields.fullName} onChange={handleFieldsChange}/>
            <span className="error">{fieldErrors.fullName}</span>
            <br />

            <label>Email</label><input type="email" name="email" required value={fields.email} onChange={handleFieldsChange}/>
            <span className="error">{fieldErrors.email}</span>
            <br />

            <label>密碼</label><input type="text" name="password" required minLength={6} value={fields.password} onChange={handleFieldsChange}/>
            <span className="error">{fieldErrors.password}</span>
            <br />

            <label>確認密碼</label><input type="text" name="confirmPassword" required minLength={6} value={fields.confirmPassword} onChange={handleFieldsChange}/>
            <span className="error">{fieldErrors.confirmPassword}</span>

            <button type="submit">送出</button>
        </form>
    </>
    )
}

export default HTML5Form;