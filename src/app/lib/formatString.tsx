export function formatImgPath(path:string) {
    let logo = "noimage.png";
    if(path.startsWith("https://")) { logo = path }
    else { logo = "http://localhost:8080/logos/" + path }
    return logo;
}

export function formatDay(day: string) {
    let formatedDay = day;
    if(day == "mon") { formatedDay = "Mandag" }
    else if(day == "tue") { formatedDay = "Tirsdag" }
    else if(day == "wed") { formatedDay = "Onsdag" }
    else if(day == "thu") { formatedDay = "Torsdag" }
    else if(day == "fri") { formatedDay = "Fredag" }
    else if(day == "sat") { formatedDay = "Lørdag" }
    else { formatedDay = "Søndag" }
    return formatedDay;
}

export function formatScheduleAct(txt: any) {
    let formatedResult = txt;
    if(txt == "break") {
        formatedResult = <span className='text-danger'>{txt}</span>;
    }
    return formatedResult;
}