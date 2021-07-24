import { useEffect, useState, useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { dappletsApi } from "../../utils/api";
import { DappletItem } from "..";

const Dapplets = () => {
    const [dapplets, setDapplets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const onDragEnd = useCallback(result => {
        if (result.destination) {
            return;
        }

        const items = reorder(
            dapplets.data,
            result.source.index,
            result.destination.index
        );

        setDapplets(items);
        //eslint-disable-next-line
    }, []);

    const reorder = useCallback((list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }, []);

    useEffect(() => {
        dappletsApi.getDapplets()
            .then(res => {
                setDapplets(res);
                setIsLoading(false);
            });
    }, []);

    return <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {
                        !isLoading && dapplets.data.map((i, index) => {
                            return <Draggable
                                key={i.id}
                                draggableId={i.id}
                                index={index}
                            >
                                {(provided, snapshot) => (
                                    <DappletItem
                                        divRef={provided.innerRef}
                                        provided={provided}
                                        item={i}
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