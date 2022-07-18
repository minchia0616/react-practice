function IdForm (){

    const iuput = document.getElementById('my-input');

    return(
        <>
            <h1>IdForm</h1>
            <input type="text" id="my-input" />
            <button
                onClick={() => {
                    iuput.focus()
                }}
            >
                Focus
            </button>
            <button
                onClick={() => {
                    iuput.blur()
                }}
            >
                Blur
            </button>
            <button
                onClick={() => {
                alert(iuput.value)
                }}
            >
                Show value
            </button>
        </>
    );
}

export default IdForm;