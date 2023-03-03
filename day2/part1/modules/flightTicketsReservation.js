class FlightTicket {
    static assignedSeats = {};
  
    constructor(seatNum, flightNum, departureAirport, arrivalAirport, travelDate) {
      this.seatNum = null;
      this.flightNum = flightNum;
      this.setSeatNum(seatNum);
      this.departureAirport = departureAirport;
      this.arrivalAirport = arrivalAirport;
      this.travelDate = travelDate;
    }
  
    displayTicket() {
      console.log(`Seat Number: ${this.seatNum}`);
      console.log(`Flight Number: ${this.flightNum}`);
      console.log(`Departure Airport: ${this.departureAirport}`);
      console.log(`Arrival Airport: ${this.arrivalAirport}`);
      console.log(`Travel Date: ${this.travelDate}`);
      console.log(`Assigned seat numbers for flight ${this.flightNum}: ${Array.from(FlightTicket.assignedSeats[this.flightNum] || []).join(', ')}`);
    }
  
    getSeatNum() {
      return this.seatNum;
    }
  
    setSeatNum(newSeatNum) {
      const flightNum = this.getFlightNum();
      if (FlightTicket.assignedSeats[flightNum]?.has(newSeatNum)) {
        console.log(`Error Seat number ${newSeatNum} is already assigned for flight ${flightNum}`);
      }
      FlightTicket.assignedSeats[flightNum] = FlightTicket.assignedSeats[flightNum] || new Set();
      FlightTicket.assignedSeats[flightNum].add(newSeatNum);
      this.seatNum = newSeatNum;
    }
  
    getFlightNum() {
      return this.flightNum;
    }
  
    setFlightNum(newFlightNum) {
      this.flightNum = newFlightNum;
    }
  
    getDepartureAirport() {
      return this.departureAirport;
    }
  
    setDepartureAirport(newDepartureAirport) {
      this.departureAirport = newDepartureAirport ;
    }

}

module.exports = FlightTicket ;