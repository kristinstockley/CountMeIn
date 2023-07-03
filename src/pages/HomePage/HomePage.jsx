import './HomePage.css';

export default function HomePage() {

    return (
        <div className="HomePage">
            <div className="section-overlay"></div>

            <section className="hero-section">
                <div className="video-wrap">
                <video autoPlay loop muted className="custom-video">
  <source src={`${process.env.PUBLIC_URL}/confetti.mp4`} type="video/mp4" />
</video>

                    <div className="container text-center">

                        <div className="">
                            <div className="col-12 mt-auto mb-5">
                                <h1 className="hero-title">CountMeIn</h1>
                                <p className="btn btn-outline-warning text-white disabled" id="hero-text"> Countdown to the moments that count

                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
}

