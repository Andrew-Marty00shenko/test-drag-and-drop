import { useEffect, useState } from "react";

import { dappletsApi } from "../../utils/api";

import { Button } from "..";

import DragIcon from "../../assets/images/drag-icon.svg";

const DappletItem = ({ divRef, provided, item, onDownloadApp, button }) => {
    const [allTags, setAllTags] = useState([]);
    const selectedTags = [];

    useEffect(() => {
        dappletsApi.getTags()
            .then(({ data }) => setAllTags(data));
    }, []);

    for (let i in allTags) {
        const { tags } = item;
        for (let j in tags) {
            if (tags[j] === allTags[i].id) {
                selectedTags.push(allTags[i].name)
            }
        }
    };

    return <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={divRef}
        className="main__dapplet-item"
    >
        <div className="main__dapplet-item__drag-icon">
            <img src={DragIcon} alt="drag" />
        </div>
        <div className="main__dapplet-item__image">
            <img src={`https://dapplets-hiring-api.herokuapp.com/api/v1/files/${item.icon}`} alt="item-icon" />
        </div>
        <div className="main__dapplet-item__info">
            <span>
                {item.title}
            </span>
            <p>
                {item.address.toUpperCase()}
            </p>
        </div>
        <div className="main__dapplet-item__description">
            <p>
                {item.description}
            </p>
        </div>
        <div className="main__dapplet-item__author">
            <p>
                {item.author}
            </p>
        </div>
        <div className="main__dapplet-item__tags">
            {selectedTags?.map((t, index) => {
                return <button key={index} className="tag-name">
                    {t}
                </button>
            })}
        </div>
        <div className="main__dapplet-item__btn-download">
            <Button
                itemId={item.id}
                onDownloadApp={onDownloadApp}
                button={button}
            />
        </div>
    </div>
}

export default DappletItem;