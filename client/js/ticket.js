function generateQrcode() {
    let ticketInfo = localStorage.getItem('seance-data');
    let parsedTickets = JSON.parse(ticketInfo);
    let ticketTitle = document.querySelector('.ticket__title');
    let ticketChairs = document.querySelector('.ticket__chairs');
    let ticketHall = document.querySelector('.ticket__hall');
    let ticketStart = document.querySelector('.ticket__start');
    let seanceDate = new Date(+`${parsedTickets.seanceTimeStamp * 1000}`);

    ticketTitle.innerText = parsedTickets.filmName;
    ticketChairs.innerText = parsedTickets.takenChairs;
    ticketHall.innerText = parsedTickets.hallName;
    ticketStart.innerText = parsedTickets.seanceTime;
  
    let fulldate = seanceDate.toLocaleString("ru-RU",
      {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });;
    // console.log(fulldate);
  
    let seanceInfo = `На фильм: ${parsedTickets.filmName},Зал: ${parsedTickets.hallName},Ряд/Место: ${parsedTickets.takenChairs},Время: ${fulldate}`
    const qrcode1 = QRCreator(seanceInfo, { image: "SVG" });
    document.querySelector('.ticket__info-qr').append(qrcode1.result);
  }
  document.addEventListener("DOMContentLoaded", generateQrcode);