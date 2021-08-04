import { LeftSidebar, Header, Main, RightSidebar } from "./components"

const App = () => {
    return <div className="wrapper">
        <LeftSidebar />
        <div className="wrapper__main">
            <Header />
            <Main />
        </div>
        <RightSidebar />
    </div>
}

export default App;