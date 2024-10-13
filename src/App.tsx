import { useSelector } from "react-redux";
import Header from "./components/templates/Header";
import MainTable from "./components/templates/MainTable";
import { RootState } from "./store/store";
import Loader from "./components/organisms/Loader";

function App() {
    const isLoader = useSelector((state: RootState) => state.loader.isLoader)

    return !isLoader ? (
        <main className="w-100 h-100 ">
            <Header />
            <section className=" w-100 mt-3 d-flex justify-content-center align-items-center">
                <MainTable/>
            </section>
        </main>
    ) : <Loader/>
}

export default App
