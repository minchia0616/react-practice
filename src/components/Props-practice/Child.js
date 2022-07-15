function Child (props){


    const {text,isA,func} = props;

    return(
        <>
            <h1>{text}</h1>
            <h3>{isA}</h3>
            <button onClick={func}>點我</button>
        </>
    );
}

Child.defaultProps = {
    text: '給定預設',
    abc: 0,
  }

export default Child;