const DappletItem = ({
    divRef,
    provided,
    style
}) => {
    return <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={divRef}
        className="main__dapplet-item"
    >

    </div>
}

export default DappletItem;