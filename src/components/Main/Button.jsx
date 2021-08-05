import classNames from "classnames";
import { useEffect } from "react";
import { useState } from "react";

const Button = ({ itemId, dappletsState }) => {
    const [button, setButton] = useState();

    useEffect(() => {
        const findId = dappletsState.map(i => {
            return i.dappletId
        }).indexOf(itemId);

        if (findId !== -1) {
            dappletsState.map(d => {
                if (d.dappletId === itemId) {
                    return setButton(d.download)
                }
                return d;
            });
        }
        //eslint-disable-next-line
    }, [dappletsState]);

    const onDownloadApp = (id) => {
        if (dappletsState.length !== 0) {
            const findId = dappletsState.map(i => {
                return i.dappletId
            }).indexOf(id);

            if (findId === -1) {
                dappletsState.push({
                    dappletId: id,
                    download: true
                });

                setButton(true);
            }

            if (findId !== -1) {
                dappletsState.map((d, index) => {
                    if (d.dappletId === itemId) {
                        return dappletsState.splice(index, 1, {
                            dappletId: d.dappletId,
                            download: !d.download
                        });
                    }
                    return d;
                });
                setButton(!button);
            }
        } else {
            dappletsState.push({
                dappletId: id,
                download: true
            });

            setButton(true);
        }

        localStorage.setItem("itemsState", JSON.stringify(dappletsState))
    }

    return <button onClick={() => onDownloadApp(itemId)}
        className={classNames("btn-download", {
            "btn-download--installed": button,
            "btn-download--not-installed": !button
        }
        )}
    >
        {button ? "installed" : "install"}
    </button>
}

export default Button;