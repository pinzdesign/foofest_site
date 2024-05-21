export default function PriceCount({ticketsRegular, ticketsVIP, campingSpots, greenCamping} : 
    {
        ticketsRegular:number,
        ticketsVIP:number,
        campingSpots:number,
        greenCamping:boolean
    }) {

    let totalPrice = (ticketsRegular * 799) + (ticketsVIP * 1299) + (campingSpots * 99)
    if(greenCamping == true) { totalPrice = totalPrice + 249 }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <p>Camping: {campingSpots} plads x 99 kr.</p>
                </div>
                <div className="col-sm-4">
                    <p>{campingSpots * 99} kr.</p>
                </div>
            </div>
            {ticketsRegular >= 1 &&
                <div className="row">
                    <div className="col-sm-8">
                        <p>Biletter - Almindelige: {ticketsRegular} biletter x 799 kr.</p>
                    </div>
                    <div className="col-sm-4">
                        <p>{ticketsRegular * 799} kr.</p>
                    </div>
                </div>
            }
            {ticketsVIP >= 1 &&
                <div className="row">
                    <div className="col-sm-8">
                        <p>Biletter - VIP: {ticketsVIP} biletter x 1299 kr.</p>
                    </div>
                    <div className="col-sm-4">
                        <p>{ticketsVIP * 1299} kr.</p>
                    </div>
                </div>
            }
            {greenCamping == true &&
                <div className="row">
                    <div className="col-sm-8">
                        <p>Grøn Camping</p>
                    </div>
                    <div className="col-sm-4">
                        <p>249 kr.</p>
                    </div>
                </div>
            }
            <hr/>
            <div className="row">
                <div className="col-sm-8">
                    <p>Pris i alt</p>
                </div>
                <div className="col-sm-4">
                    <p>{totalPrice} kr.</p>
                </div>
            </div>
        </div>
    )
}