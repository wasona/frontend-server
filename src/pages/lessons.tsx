import Navbar from "@components/navbar";
import WidthLimiter from "@components/width-limiter";
import { LessonsResponseT } from "@models/api/lessons";
import { wasona } from "@utils/wasona";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Lessons: React.FC = () => {
  const [data, setData] = useState<LessonsResponseT>();
  const { id: courseId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await wasona<LessonsResponseT>("get", "/app/lessons", {
        params: { courseId: courseId },
      });
      if (response) setData(response);
    })();
  }, [courseId]);

  const Error = <p>{JSON.stringify(data?.error)}</p>;

  return (
    <>
      <Navbar />
      <WidthLimiter>
        {data?.success
          ? data?.data!.map((lesson, i) => (
              <div key={i}>
                <a href={`/tasks/${lesson.lesson_id}`}>
                  Practice {lesson.lesson_title}
                </a>
              </div>
            ))
          : Error}
      </WidthLimiter>
    </>
  );
};
