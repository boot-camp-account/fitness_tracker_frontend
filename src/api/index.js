// const COHORT_NAME = '2209-FTB-MT-WEB-PT';

// export const createPost = async () => {
//     try {
//         const response = await fetch(`https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts`, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer TOKEN_STRING_HERE'
//             },
//             body: JSON.stringify({
//                 post: {
//                 title: "My favorite stuffed animal",
//                 description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
//                 price: "$480.00",
//                 willDeliver: true
//                 },
//             }),
//         });
//         const result = await response.json();
//         console.log(response);
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
   
// }