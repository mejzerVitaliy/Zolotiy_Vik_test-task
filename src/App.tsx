import { useSelector } from "react-redux";
import Header from "./components/templates/Header";
import MainTable from "./components/templates/MainTable";
import { RootState } from "./store/store";
import Loader from "./components/organisms/Loader";

function App() {
    const isLoader = useSelector((state: RootState) => state.loader.isLoader)

    return !isLoader ? (
        <main>
            <Header />
            <section className=" py-3 d-grid place-items-center">
                <MainTable/>
            </section>
        </main>
    ) : <Loader/>
}

export default App
