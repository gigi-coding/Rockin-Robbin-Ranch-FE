import Footer from "../components/Footer";
// import NavBar from "../components/NavBar";

const Garden = () => {
    return (
        <div>
            {/* <div> <NavBar /></div> */}
            {/* NavBar is overlapping with h1 text */}
            <div>
                <h1>
                We have tons going on in the Garden! <br />
                Take a look!
                </h1>
                {/* carousel of images */}
            </div>
            <Footer />
        </div>
    );
}

export default Garden;