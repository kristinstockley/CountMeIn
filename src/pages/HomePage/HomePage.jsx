import './HomePage.css';


export default function HomePage() {
    return (
    <>
    <div className='HomePage'>
    <section className="hero-section">
        <div className="video-wrap">
            <video autoplay="" loop="60s" muted class="custom-video">
                <source src="confetti.mp4" type="video/mp4" />
            </video>
        </div>
        <div className="section-overlay"></div>
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-12 mt-auto mb-5 text-center">
                    <h1 className="text-white mb-5">CountMeIn</h1>
                    <a className="btn btn-outline-warning smoothscroll text-white" href="#scroll">Learn more</a>
                </div>
            </div>
        </div>



    </section>

    <section id="scroll">
        <div className="container px-5">
            <div className="row gx-5 align-items-center">
                <div className="col-lg-6 order-lg-2">
                    <div className="p-5"><img className="img-fluid rounded-circle" src="" alt="..." /></div>
                </div>
                <div className="col-lg-6 order-lg-1">
                    <div className="p-5">
                        <h2 className="display-4">BLAH BLAH BLAH</h2>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section>
        <div className="container px-5">
            <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                    <div className="p-5"><img className="img-fluid rounded-circle" src="" alt="..." /></div>
                </div>
                <div className="col-lg-6">
                    <div className="p-5">
                        <h2 className="display-4">BLAH BLAH BLAH</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    </>
    
    )
}