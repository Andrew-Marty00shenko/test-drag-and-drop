import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { DappletItem } from "..";

const Dapplets = ({ dapplets, dappletsActions }) => {
    const [start, setStart] = useState(0);
    const [dappletsState, setDappletsState] = useState([]);
    const direction = useSelector(({ dapplets }) => dapplets.direction);
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener("scroll", infiniteScroll);

        setDappletsState(JSON.parse(localStorage.getItem("itemsState")) || []);

        fetchDapplets(start, direction);

        return () => window.removeEventListener("scroll", infiniteScroll);
        //eslint-disable-next-line
    }, [start, direction]);

    const infiniteScroll = () => {
        if (document.documentElement.scrollTop + window.innerHeight ===
            document.documentElement.scrollHeight) {
            setStart(start + 20);
        }
    };

    const fetchDapplets = (numberStart, direction) => {
        dispatch(dappletsActions.fetchDappletsData(numberStart, direction));
    };

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const items = reorder(
            dapplets,
            result.source.index,
            result.destination.index
        );

        dispatch(dappletsActions.setDappletsDataOnDragEnd(items));
    };

    const reorder = useCallback((list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }, []);

    return <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {
                        dapplets.map((i, index) => {
                            return <Draggable
                                key={i.id}
                                draggableId={i.id}
                                index={index}
                            >
                                {(provided) => (
                                    <DappletItem
                                        divRef={provided.innerRef}
                                        provided={provided}
                                        item={i}
                                        dappletsState={dappletsState}
                                    />
                                )}
                            </Draggable>
                        })
                    }
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </DragDropContext>
}

export default Dapplets;