export default function initCreateController(db) {
  // route to render a list of all the <NAME>
  const index = async (request, response) => {
    try {
      console.log(request.params.drummer_id);
      console.log(request.body);
      const userId = request.params.drummer_id;
      const { date } = request.body;
      await db.Reservation.create({
        userId,
        date,
      });
      response.redirect(`/reservations/${userId}`);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    index,
  };
}
