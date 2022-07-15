function ChildA (props){

    const {parentData,childBFromData} = props;

    return(
        <>
            <h1>ChildA</h1>
            <h1>來自childB:{childBFromData}</h1>
            <p>{parentData}</p>
        </>
    );
}

export default ChildA;