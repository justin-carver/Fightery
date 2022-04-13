const Navigation = () => {
    const navStyle = "transform transition opacity-50 hover:opacity-100 hover:ease-in xsm:text-md";
    return(
        <>
            <h1 className="App__logo flex sm:flex-row md:flex-row mt-10">
                <span className={navStyle}><a href="#">Welcome</a></span>
                <span className={navStyle}><a href="#">About</a></span>
                { /* TODO: Needs to be replaced with a logo. Easier to scale and manage.*/ }
                <div className="inline md:text-5xl md:tracking-wider md:ml-20 md:mr-20">The Fightery</div>
                <span className={navStyle}><a href="#">Contact</a></span>
                <span className={navStyle}><a href="#">Source</a></span>
            </h1>
        </>
    );
}

export default Navigation;