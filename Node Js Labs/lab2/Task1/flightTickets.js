class myClass {
  tickets = [];
  addTicket(seatNum, flightNum, departure, arrival, travellingDate) {
    let ticket = { seatNum, flightNum, departure, arrival, travellingDate };
    this.tickets.push(ticket);
  }
  displayTickets() {
    return this.tickets;
  }

  getTicket(id) {
    let curr;
    for (let i = 0; i < this.tickets.length; i++) {
      if (this.tickets[i].flightNum == id) {
        curr = this.tickets[i];
      }
    }

    return curr;
  }

  updateTicket(flightNum, seatNum, departure, arrival, travellingDate) {
    for (let i = 0; i < this.tickets.length; i++) {
      if (this.tickets[i].flightNum == flightNum) {
        this.tickets[i].seatNum = seatNum;
        this.tickets[i].departure = departure;
        this.tickets[i].arrival = arrival;
        this.tickets[i].travellingDate = travellingDate;
      }
    }
  }
}

module.exports = { myClass };
