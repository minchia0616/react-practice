function Home(props) {

    const { auth } = props;

    return (
    <>
        <h1>Home</h1>
        <p>{auth ? '會員已登入' : '沒登入'}</p>
    </>
)
}

export default Home;