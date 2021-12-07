export default function initShowController(db) {
  // route to render a list of all the <NAME>
  const index = async (request, response) => {
    try {
      const user = await db.User.findOne({
        where: {
          id: request.params.id,
        },
      });
      response.render('show', { user });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    index,
  };
}

// export default function initShowController(db) {
//   // route to render a list of all the <NAME>
//   const index = (request, response) => {
//     db.User.findOne({
//       where: {
//         id: request.params.id,
//       },
//     }).then((user) => {
//       console.log(user.name);
//       response.render('show', { user });
//     })
//       .catch((error) => console.log(error));
//   };

//   return {
//     index,
//   };
// }
