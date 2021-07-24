import { LeftSidebar, Header, Main } from "./components"

const App = () => {
    return <div className="wrapper">
        <LeftSidebar />
        <div className="wrapper__main">
            <Header />
            <Main />
        </div>
    </div>
}

export default App;