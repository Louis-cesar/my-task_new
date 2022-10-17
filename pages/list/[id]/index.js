import ListLayout from '../../../comps/ListLayout'
import NumberListData from "../../../data/numbers-id.json";
import { useRouter } from "next/router";

export async function getStaticProps(context) {
  const params = context.params;
  return {
    props: {
      NumberList: NumberListData.find((NumberList) => {
        return NumberList.id.toString() === params.id;
      }),
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
      { params: { id: "6" } },
      { params: { id: "7" } },
      { params: { id: "8" } },
      { params: { id: "9" } },
      { params: { id: "10" } },
      { params: { id: "11" } },
      { params: { id: "12" } },
      { params: { id: "13" } },
      { params: { id: "14" } },
      { params: { id: "15" } },
      { params: { id: "16" } },
      { params: { id: "17" } },
      { params: { id: "18" } },
      { params: { id: "19" } },
      { params: { id: "20" } },
    ],
    fallback: false,
  };
}

const Dynamic = (props) => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <ListLayout>{props.NumberList.title}</ListLayout>
  );
};

export default Dynamic;