"use client";

import React, { useState } from "react";
import PriceCount from "./PriceCount";
import ModalResult from "./ModalResult";
import TicketInfo from "./TicketInfo";

export default function BookingArea({ data }: { data: any }) {
  const [spots, setSpots] = useState(0);
  const [area, setArea] = useState("");
  const [areaId, setAreaId] = useState("");
  const [resultTxt, setResultTxt] = useState("");

  const handleCustomerName = (e: any) => {
    setFormData({
      ...formData,
      customerName: e.target.value,
    });
  };

  const handleCustomerEmail = (e: any) => {
    setFormData({
      ...formData,
      customerEmail: e.target.value,
    });
  };

  const handleCustomerAddress = (e: any) => {
    setFormData({
      ...formData,
      customerAddress: e.target.value,
    });
  };

  const handleCustomerCity = (e: any) => {
    setFormData({
      ...formData,
      customerCity: e.target.value,
    });
  };

  const handleCustomerPostal = (e: any) => {
    setFormData({
      ...formData,
      customerPostal: e.target.value,
    });
  };

  const handleTicketsRegular = (e: any) => {
    let newTotalTickets = Number(e.target.value) + Number(formData.ticketsVIP);
    if (spots >= newTotalTickets) {
      setFormData({
        ...formData,
        ticketsRegular: e.target.value,
      });
    }
  };

  const handleTicketsVIP = (e: any) => {
    let newTotalTickets =
      Number(e.target.value) + Number(formData.ticketsRegular);
    if (spots >= newTotalTickets) {
      setFormData({
        ...formData,
        ticketsVIP: e.target.value,
      });
    }
  };

  const handleGreenCamping = (e: any) => {
    setFormData({
      ...formData,
      greenCamping: !formData.greenCamping,
    });
  };

  const handleCardNumber = (e: any) => {
    setFormData({
      ...formData,
      cardNumber: e.target.value,
    });
  };

  const handleCardCVV = (e: any) => {
    setFormData({
      ...formData,
      cardCVV: e.target.value,
    });
  };

  const handleAreaChange = (e: any) => {
    setArea(e.target.value);
    setFormData({
      ...formData,
      area: e.target.value,
    });
  };

  const handleSpotsChange = (e: any) => {
    if (!isNaN(e.target.value)) {
      setSpots(parseInt(e.target.value));
      setFormData({
        ...formData,
        spots: parseInt(e.target.value),
      });
    }
  };

  /* Form data */
  const [formData, setFormData] = useState({
    areaId: "",
    area: "",
    spots: 0,
    customerName: "",
    customerEmail: "",
    customerAddress: "",
    customerCity: "",
    customerPostal: "",
    ticketsRegular: 0,
    ticketsVIP: 0,
    greenCamping: false,
    cardNumber: "",
    cardCVV: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    /* Send payment request, in this project we have to "fake" the payment,
        so let's assume payment went thru as it should, and returns positive response.
        Althou i am sending card number and cvv in formData, i don't do anything with it afterwards */
    const paymentComplete = true;

    if (paymentComplete == true) {
      /* Send id to fullfill the reservation */
      let headersList = {
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        id: formData.areaId,
      });

      let response = await fetch(
        process.env.SERVER_INFO_API_URL + "/fullfill-reservation",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );

      let data = await response.json();
      // response from fullfill-reservation ALWAYS returns an object with message, it returns status only in case of error
      if (data.status) {
        setResultTxt(data.message);
      }
      //console.log(resultTxt)

      if (!data.status) {
        /* Send request to supabase */
        let headersListSupa = {
          "Content-Type": "application/json",
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11bWd6dmRkdGdqa2diYW14dnV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzMzUxMjIsImV4cCI6MjAzMDkxMTEyMn0.2RthaUC_thNdgNtA1ggSC855_9R_2baj7V0EpdUv3mo",
        };

        let bodyContentSupa = JSON.stringify({
          camp_id: formData.areaId,
          camp_area: formData.area,
          camp_spots: formData.spots,
          name: formData.customerName,
          email: formData.customerEmail,
          address: formData.customerAddress,
          city: formData.customerCity,
          postal: formData.customerPostal,
          tickets_reg: formData.ticketsRegular,
          tickets_vip: formData.ticketsVIP,
          camp_green: formData.greenCamping,
        });

        let responseSupa = await fetch(
          process.env.SERVER_INFO_DATABASE_URL + "/bookings",
          {
            method: "POST",
            body: bodyContentSupa,
            headers: headersListSupa,
          }
        );

        let dataSupa = await responseSupa.text();
        // supabase returns text string, which is empty on success, or contains a stringified json on error
        if (dataSupa != "") {
          let msgJSON = JSON.parse(dataSupa);
          setResultTxt(msgJSON.message + ". " + msgJSON.hint);
        } else {
          // send mail
          let htmlBody =
            "<h5>Velkommen til Foofest!</h5>" +
            "<p>Hej " +
            formData.customerName +
            "</p>" +
            "<p>Du har bestilt " +
            formData.ticketsRegular +
            " almindelige biletter, og " +
            formData.ticketsVIP +
            " VIP biletter til FooFest 2024.</p>" +
            "<p> Din booking id er:<strong>" +
            formData.areaId +
            "</strong> (Der kan være en qr kode f.eks også)</p>" +
            "<p>Vi glæder os til at se jer 01.06.2024 i København</p>";

          const response = await fetch("/api/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              to: formData.customerEmail,
              html: htmlBody,
            }),
          });

          setResultTxt("Booking gennemført");
        }
      }
      console.log(resultTxt);
    }

    //console.log("Form Submitted:", formData);
  };

  //const [reservation, setReservation] = useState({}); unused
  const [error, setError] = useState("");

  const handleAreaSubmit = async (e: any) => {
    e.preventDefault();
    let headersList = {
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      area: area,
      amount: spots,
    });

    let response = await fetch(
      process.env.SERVER_INFO_API_URL + "/reserve-spot",
      {
        method: "PUT",
        body: bodyContent,
        headers: headersList,
      }
    );

    let data = await response.json();
    console.log(data);
    if (data.id) {
      console.log(data.id);
      setAreaId(data.id);
      setFormData({
        ...formData,
        areaId: data.id,
      });
    } else if (data.error) {
      setError(data.error);
    }
  };

  return (
    <>
      <TicketInfo></TicketInfo>
      <div className="container">
        <div className="row">
          {data.map((item: any) => {
            return (
              <div className="col-sm" key={item.area}>
                <h3>{item.area}</h3>
                <p>Antal pladser: {item.spots}</p>
                <p>Ledige Pladser: {item.available}</p>
              </div>
            );
          })}
        </div>

        <form>
          <fieldset>
            <legend>Camping Plads Booking</legend>
            <div className="row">
              <div className="form-group col-md">
                <label htmlFor="area_select">Område</label>
                {areaId == "" ? (
                  <select
                    id="area_select"
                    className="form-control"
                    onChange={handleAreaChange}
                  >
                    <option value="">---</option>
                    {data.map((item: any) => {
                      return (
                        <option key={item.area} value={item.area}>
                          {item.area}
                        </option>
                      );
                    })}
                  </select>
                ) : (
                  <p>
                    <strong>{area}</strong>
                  </p>
                )}
              </div>

              <div className="form-group col-md">
                <label htmlFor="area_spots">Pladser</label>
                {areaId == "" ? (
                  <input
                    id="area_spots"
                    className="form-control"
                    type="number"
                    value={formData.spots}
                    onChange={handleSpotsChange}
                    min={0}
                  ></input>
                ) : (
                  <p>
                    <strong>{spots}</strong>
                  </p>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-md">
                <p>
                  <strong>Bemærk:</strong> Reservationen duer i 5 minutter, hvis
                  du ikke bestiller biletter inden, så bliver din camping plads
                  reservation annuleret automatisk.
                </p>
              </div>
              <div className="col-md text-end">
                {areaId == "" && (
                  <button
                    className="btn btn-primary"
                    onClick={handleAreaSubmit}
                  >
                    Reserver
                  </button>
                )}
              </div>
            </div>
          </fieldset>
          {areaId != "" && (
            <>
              <fieldset>
                <legend>Billet Køb</legend>
                <div className="row">
                  <div className="col-md">
                    <label htmlFor="customerName">Navn *</label>
                    <input
                      type="text"
                      id="customerName"
                      className="form-control"
                      value={formData.customerName}
                      onInput={handleCustomerName}
                      minLength={3}
                      maxLength={64}
                      required
                    />
                  </div>
                  <div className="col-md">
                    <label htmlFor="customerEmail">Email *</label>
                    <input
                      type="email"
                      id="customerEmail"
                      className="form-control"
                      value={formData.customerEmail}
                      onInput={handleCustomerEmail}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md">
                    <label htmlFor="customerAddress">Adresse</label>
                    <input
                      type="text"
                      id="customerAddress"
                      className="form-control"
                      value={formData.customerAddress}
                      onInput={handleCustomerAddress}
                      minLength={3}
                      maxLength={64}
                    />
                  </div>
                  <div className="col-md">
                    <div className="row row-notop">
                      <div className="col-md">
                        <label htmlFor="customerCity">By</label>
                        <input
                          type="text"
                          id="customerCity"
                          className="form-control"
                          value={formData.customerCity}
                          onInput={handleCustomerCity}
                        />
                      </div>
                      <div className="col-md">
                        <label htmlFor="customerPostal">Postnr.</label>
                        <input
                          type="text"
                          id="customerPostal"
                          className="form-control"
                          value={formData.customerPostal}
                          onInput={handleCustomerPostal}
                          maxLength={4}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md">
                    <label htmlFor="ticketsRegular">
                      Billeter - Almindelig
                    </label>
                    <input
                      type="number"
                      id="ticketsRegular"
                      className="form-control"
                      value={formData.ticketsRegular}
                      onChange={handleTicketsRegular}
                      min={0}
                    />
                  </div>
                  <div className="col-md">
                    <label htmlFor="ticketsVIP">Billeter - VIP</label>
                    <input
                      type="number"
                      id="ticketsVIP"
                      className="form-control"
                      value={formData.ticketsVIP}
                      onChange={handleTicketsVIP}
                      min={0}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg">
                    <div className="form-check form-switch">
                      <input
                        type="checkbox"
                        id="greenCamping"
                        className="form-check-input"
                        checked={formData.greenCamping}
                        onClick={handleGreenCamping}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="greenCamping"
                      >
                        Grøn Camping
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend>Kort Oplysninger</legend>
                <p>
                  <strong>Bemærk: </strong>Vi gemmer ikke dine
                  betalingsoplysninger i vores database.
                </p>

                <div className="row">
                  <div className="col-md">
                    <label htmlFor="cardNumber">Kort nr.</label>
                    <input
                      type="text"
                      id="cardNumber"
                      className="form-control"
                      value={formData.cardNumber}
                      onInput={handleCardNumber}
                      maxLength={16}
                    ></input>
                  </div>
                  <div className="col-md">
                    <label htmlFor="cardCVV">CVV kontrolcifre</label>
                    <input
                      type="text"
                      id="cardCVV"
                      className="form-control"
                      value={formData.cardCVV}
                      onInput={handleCardCVV}
                      maxLength={4}
                    ></input>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg">
                    <div className="form-check form-check-inline">
                      <input
                        id="cardType01"
                        className="form-check-input"
                        type="radio"
                        name="cardType"
                      />
                      <label htmlFor="cardType01" className="form-check-label">
                        VISA
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        id="cardType02"
                        className="form-check-input"
                        type="radio"
                        name="cardType"
                      />
                      <label htmlFor="cardType02" className="form-check-label">
                        Mastercard
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        id="cardType03"
                        className="form-check-input"
                        type="radio"
                        name="cardType"
                      />
                      <label htmlFor="cardType03" className="form-check-label">
                        American Express
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        id="cardType04"
                        className="form-check-input"
                        type="radio"
                        name="cardType"
                      />
                      <label htmlFor="cardType04" className="form-check-label">
                        Discover
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        id="cardType05"
                        className="form-check-input"
                        type="radio"
                        name="cardType"
                      />
                      <label htmlFor="cardType05" className="form-check-label">
                        JCB
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md">
                    <PriceCount
                      ticketsRegular={formData.ticketsRegular}
                      ticketsVIP={formData.ticketsVIP}
                      campingSpots={formData.spots}
                      greenCamping={formData.greenCamping}
                    ></PriceCount>
                  </div>
                  <div className="col-md text-end">
                    <button
                      className="btn btn-primary btn-order"
                      onClick={handleSubmit}
                    >
                      Bestil
                    </button>
                  </div>
                </div>
              </fieldset>
            </>
          )}
        </form>
        {error != "" ? (
          <ModalResult
            type="danger"
            title="Fejl"
            body={"Der skete en fejl, prøv igen. " + error}
          ></ModalResult>
        ) : null}
        {resultTxt != "" ? (
          resultTxt == "Booking gennemført" ? (
            <ModalResult
              type="success"
              title={resultTxt}
              body={
                resultTxt +
                ". Der er sendt en mail med yderlige oplysninger om din køb. Vi glæder os til at se jer snart!"
              }
            ></ModalResult>
          ) : (
            <ModalResult
              type="danger"
              title="Fejl"
              body={"Der skete en fejl, prøv igen. " + resultTxt}
            ></ModalResult>
          )
        ) : null}
      </div>
    </>
  );
}
