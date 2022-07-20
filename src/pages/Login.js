import { useNavigate } from 'react-router-dom';

function Login(props) {

    const { auth, setAuth } = props;
    const navigate = useNavigate();

    return(
        <>
            {/* <h1>Login</h1>
            <button onClick={() => { setAuth(!auth) }}>
                {auth ? '我要登出' : '登入'}
            </button>
            <p>{auth ? '會員已登入' : '沒登入'}</p> */}

            <h1>Login</h1>
            <button
                onClick={() => {
                    
                const newAuth = !auth;
                setAuth(newAuth);

                if (newAuth) {
                    // 跳出歡迎訊息
                    alert('歡迎登入網站!!')

                    // 導向首頁
                    navigate('/', { replace: true })
                } else {
                    alert('掰掰')
                }
                }}
            >
                {auth ? '我要登出' : '登入'}
            </button>
            <p>{auth ? '會員已登入' : '沒登入'}</p>
        </>
    )
}

export default Login;