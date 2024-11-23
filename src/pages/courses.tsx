import Navbar from "@components/navbar";
import WidthLimiter from "@components/width-limiter";
import { CoursesResponseT } from "@models/api/courses";
import { wasona } from "@utils/wasona";
import React, { useEffect, useState } from "react";

export const Courses: React.FC = () => {
  const [data, setData] = useState<CoursesResponseT>();

  useEffect(() => {
    (async () => {
      const response = await wasona<CoursesResponseT>("get", "/app/courses");
      if (response) setData(response);
    })();
  }, []);

  const Error = <p>{JSON.stringify(data?.error)}</p>;
  return (
    <>
      <Navbar />
      <WidthLimiter>
        {data?.success
          ? data?.data?.map((course, i) => (
              <div key={i}>
                <a href={`/lessons/${course.course_id}`}>
                  Learn {course.course_title}!
                </a>
              </div>
            ))
          : Error}
      </WidthLimiter>
    </>
  );
};
