export default function Breaker({title, content}:{title: string, content: string}) {
    return (
        <>
        <div className="container-fluid breaker">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                    </div>
                    <div className="col-md">
                        <div className="breaker-content">
                            <h3>{title}</h3>
                            <p>{content}</p>
                            <a href="#" className="btn btn-primary">Læs mere...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}