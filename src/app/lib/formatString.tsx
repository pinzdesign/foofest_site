export function formatImgPath(path:string) {
    let logo = "noimage.png";
    let rnd = Math.random() * 5;
    if(path.startsWith("https://")) {
        //logo = path
        //unsplash stopped working - using another service: picsum.photos
        logo = "https://picsum.photos/500/800?random=" + rnd
    }
    else { logo = process.env.NEXT_PUBLIC_SERVER_INFO_API_URL + "/logos/" + path }
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