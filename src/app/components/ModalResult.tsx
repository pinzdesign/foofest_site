import Link from "next/link";

export default function ModalResult({type, title, body}:{type:string, title:string, body:string}) {
    return (
        <>
        <div className="modal booking-modal" role="dialog">
            <div className="modal-dialog show" role="document">
                <div className="modal-content">
                    <div className="modal-header"><h5 className={"alert alert-" + type}>{title}</h5></div>
                    <div className="modal-body"><p>{body}</p></div>
                    <div className="modal-footer">
                        <Link href="/" className={"btn btn-" + type}>Ok</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}