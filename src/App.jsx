import { Suspense, useState } from "react";
import Comments from "./components/postcomment/Comments";
import Posts from "./components/postcomment/Posts";

export default function App() {
  const [selectData, setSelectData] = useState("");

  function handleSelectedData(e) {
    setSelectData(e.target.value);
  }

  return (
    <>
      <Suspense fallback={<h2>loading...</h2>}>
        <Posts handleSelectedData={handleSelectedData} />
      </Suspense>

      {selectData && <Comments selectData={selectData} />}
    </>
  );
}
