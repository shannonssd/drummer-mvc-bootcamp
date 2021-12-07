export default function initReservListController(db) {
  // route to render a list of all the <NAME>
  const index = async (request, response) => {
    try {
      const drummerId = request.params.drummer_id;
      console.log(drummerId);
      const reservationList = await db.Reservation.findAll({
        where: {
          user_id: drummerId,
        },
      });
      console.log('WOOORRRRKING:', reservationList);
      response.render('index-reservation-list', { reservationList });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    index,
  };
}
