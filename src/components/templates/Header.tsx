import H1 from "../atoms/H1";

const Header = () => {
    return (
        <header className="bg-light py-2">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">        
                    <H1><a title="GitHub repo" href="https://github.com/mejzerVitaliy/Zolotiy_Vik_test-task" className="nav-link text-dark">Zolotiy Vik test-task</a></H1>
                </div>
            </div>
        </header>
    );
};

export default Header;
