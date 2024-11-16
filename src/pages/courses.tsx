import React, { useEffect, useState } from "react";
import Navbar from "@components/navbar";
import WidthLimiter from "@components/width-limiter";
import { wasona } from "@utils/wasona";

const Courses: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => setData(await wasona("get", "/app/courses")))();
  }, []);

  return (
    <>
      <Navbar />
      <WidthLimiter>
        {JSON.stringify(data, null, 2)}
        {/* {data?.map((course: Record<string, string>, i: number) => {
          return <p key={i}>{JSON.stringify(course)}</p>;
        })} */}
      </WidthLimiter>
    </>
  );
};

export default Courses;
