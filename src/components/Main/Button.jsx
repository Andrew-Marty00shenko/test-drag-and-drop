import classNames from "classnames";

const Button = ({ itemId, onDownloadApp, button }) => {

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