const flightReservation = require("./modules/flightTicketsReservation");


person1 = new flightReservation ('1','1','cairo','london','3/3/2023');
person2 = new flightReservation ('2','1','cairo','london','3/3/2023');
person3 = new flightReservation ('3','1','cairo','london','3/3/2023');
person4 = new flightReservation ('4','1','cairo','london','3/3/2023');
person5 = new flightReservation ('25','1','cairo','london','3/3/2023');

person6 = new flightReservation ('1','5','cairo','Newyork','3/3/2023');
person7 = new flightReservation ('12','5','cairo','Newyork','3/3/2023');
person8 = new flightReservation ('14','5','cairo','Newyork','3/3/2023');
person9 = new flightReservation ('36','5','cairo','Newyork','3/3/2023');
person10 = new flightReservation ('13','5','cairo','Newyork','3/3/2023');

person1.displayTicket();

person6.displayTicket();