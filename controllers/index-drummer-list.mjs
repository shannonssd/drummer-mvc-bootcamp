export default function initDrummerListController(db) {
  // route to render a list of all the <NAME>
  const index = async (request, response) => {
    try {
      const drummerList = await db.User.findAll();
      console.log('WOOORRRRKING:', drummerList);
      response.render('index-drummer-list', { drummerList });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    index,
  };
}
