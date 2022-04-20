const Navigation = () => {
    const navStyle = "transform transition opacity-50 hover:opacity-100 hover:ease-in xs:text-md";
    return(
        <>
            <h1 className="App__logo flex items-center justify-center mt-10">
                <span className={navStyle}><a href="#">Welcome</a></span>
                <span className={navStyle}><a href="#">About</a></span>
                { /* TODO: Needs to be replaced with a logo. Easier to scale and manage.*/ }
                <div className="inline md:text-3xl text-4xl tracking-wider ml-10 mr-10">The Fightery</div>
                <span className={navStyle}><a href="#">Contact</a></span>
                <span className={navStyle}><a href="#">Source</a></span>
            </h1>
        </>
    );
}

export default Navigation;