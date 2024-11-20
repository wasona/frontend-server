import React, { useEffect, useState } from "react";
import Navbar from "@components/navbar";
import WidthLimiter from "@components/width-limiter";
import { wasona } from "@utils/wasona";
import { CoursesRequest, CoursesRequestT, CoursesT } from "@models/courses";

const Courses: React.FC = () => {
  const [data, setData] = useState<CoursesRequestT>();

  useEffect(() => {
    (async () => {
      const response = await wasona("get", "/app/courses");
      setData(CoursesRequest.parse(response));
    })();
  }, []);

  return (
    <>
      <Navbar />
      <WidthLimiter>
        {/* {JSON.stringify(data, null, 2)} */}
        {/* {JSON.stringify(data?.data?.courses, null, 2)} */}
        {data?.success ? (
          data?.data?.courses?.map((course: CoursesT, i: number) => {
            return (
              <div key={i}>
                <a href={`course/${course.course_id}`}>
                  Learn {course.course_title}!
                </a>
              </div>
            );
          })
        ) : (
          <p>{JSON.stringify(data?.error)}</p>
        )}
      </WidthLimiter>
    </>
  );
};

export default Courses;
