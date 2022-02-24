var getDateTime = (data) => {
    let now = new Date();
    let utc_date = new Date(data);
    let server_date = utc_date.getFullYear() + ":" + utc_date.getMonth() + ":" + utc_date.getDate();
    let local_date = now.getFullYear() + ":" + now.getMonth() + ":" + now.getDate();
    return server_date == local_date ? utc_date.getHours() + ":" + utc_date.getMinutes() + ":" + utc_date.getSeconds() : server_date + " " + utc_date.getHours() + ":" + utc_date.getMinutes() + ":" + utc_date.getSeconds();
}