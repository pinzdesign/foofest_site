import { formatDay, formatScheduleAct } from "../lib/formatString";

export default async function ArtistSchedule() {
  const response = await fetch(process.env.NEXT_PUBLIC_SERVER_INFO_API_URL + "/schedule");

  const data = await response.json();

  return (
    <>
      {Object.entries(data).map(([stage, days]: [stage: string, days: any]) => {
        return (
          <div key={stage} className="container">
            <div className="accordion" id="accordion">
              <div className="accordion-item">
                <div className="accordion-header" id={"heading_" + stage}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse_" + stage}
                    aria-expanded="true"
                    aria-controls={"collapse_" + stage}
                  >
                    <h4>Scene: {stage}</h4>
                  </button>
                </div>

                <div
                  id={"collapse_" + stage}
                  className="accordion-collapse collapse show"
                  aria-labelledby={"heading_" + stage}
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body grid_2">
                    {Object.entries(days).map(
                      ([day, time]: [day: string, time: any]) => {
                        return (
                          <div key={day}>
                            <h5>{formatDay(day)}</h5>
                            {time.map((item: any, index: any) => {
                              return (
                                <p key={index}>
                                  <span>{item.start}</span> -{" "}
                                  <span>{item.end}</span>{" "}
                                  {formatScheduleAct(item.act)}
                                </p>
                              );
                            })}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
