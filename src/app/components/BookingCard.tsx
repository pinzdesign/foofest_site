export default function BookingCard(props:any) {
    return (
        <div className="bookingcard">
            <h5>{props.name}</h5>
            <p>Email: {props.email}</p>
            <p>Adresse: {props.address}, {props.city} {props.postal}</p>
            <p>Billetter: {props.tickets_reg} almindelige, {props.tickets_vip} VIP billetter</p>
            <p>Reserverings ID: {props.camp_id}</p>
            <p>Camping: {props.camp_area} - {props.camp_spots} pladser</p>
            <p>Grøn Camping: {props.camp_green == true ? <span>Ja</span> : <span>Nej</span>}</p>
        </div>
    )
}