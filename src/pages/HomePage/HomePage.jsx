import './HomePage.css';

export default function HomePage() {
    return (
        <div className="HomePage">
            <section className="hero-section">
                <div className="video-wrap">
                    <video autoPlay loop muted className="custom-video">
                        <source src="confetti.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="section-overlay"></div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-12 mt-auto mb-5">
                            <h1 className="hero-title">CountMeIn</h1>
                            <button className="btn btn-outline-warning smoothscroll text-white" id="hero-text" href="/login">
                                Make every moment count
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

