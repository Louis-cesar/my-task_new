import React from 'react'
import ListLayout from '../../comps/ListLayout'


function index() {
  return (
   <ListLayout>No Items Selected</ListLayout>
    
  )
}

export default index






// import styles from "../../styles/number.module.css";
// import NumberListData from "../../data/numbers-id.json";
// import { useRouter } from "next/router";

// export async function getStaticProps(context) {
//   const params = context.params;
//   return {
//     props: {
//       NumberList: NumberListData.find((NumberList) => {
//         return NumberList.id.toString() === params.id; //dynamic id
//       }),
//     }, // will be passed to the page component as props
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { id: "1" } },
//       { params: { id: "2" } },
//       { params: { id: "3" } },
//       { params: { id: "4" } },
//       { params: { id: "5" } },
//       { params: { id: "6" } },
//       { params: { id: "7" } },
//       { params: { id: "8" } },
//       { params: { id: "9" } },
//       { params: { id: "10" } },
//       { params: { id: "11" } },
//       { params: { id: "12" } },
//       { params: { id: "13" } },
//       { params: { id: "14" } },
//       { params: { id: "15" } },
//     ],
//     fallback: false,
//   };
// }

// const Dynamic = (props) => {
//   const router = useRouter();
//   const id = router.query.id;
//   return (
//     <div className={styles.box2Container}>
//       <p className={styles.numbertitle}>{props.NumberList.title}</p>
//     </div>
//   );
// };

// export default Dynamic;


