export default function Gallery() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                    src="/images/festival-girl.jpg"
                    className="w-100 shadow-1-strong mb-4"
                    alt="Boat on Calm Water"
                    />

                    <img
                    src="/images/metallica.jpg"
                    className="w-100 shadow-1-strong mb-4"
                    alt="Wintry Mountain Landscape"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                    src="/images/festival-people.jpg"
                    className="w-100 shadow-1-strong mb-4"
                    alt="Mountains in the Clouds"
                    />

                    <img
                    src="/images/iron-maiden.jpg"
                    className="w-100 shadow-1-strong mb-4"
                    alt="Boat on Calm Water"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                    src="/images/festival-girl2.jpg"
                    className="w-100 shadow-1-strong mb-4"
                    alt="Waves at Sea"
                    />

                    <img
                    src="/images/festival-people2.jpg"
                    className="w-100 shadow-1-strong mb-4"
                    alt="Yosemite National Park"
                    />
                </div>
            </div>
        </div>
    )
}