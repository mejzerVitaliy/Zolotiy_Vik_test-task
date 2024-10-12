import Header from "./components/templates/Header";
import MainTable from "./components/templates/MainTable";

function App() {
    return (
        <main>
            <Header />

            <section className=" py-3 d-grid place-items-center">
                <MainTable/>
            </section>
            
        </main>
    )
}

export default App
