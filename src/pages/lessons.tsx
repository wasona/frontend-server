import Navbar from "@components/navbar";
import WidthLimiter from "@components/width-limiter";
import { LessonsRequestT } from "@models/courses";
import { wasona } from "@utils/wasona";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Lessons: React.FC = () => {
  const [data, setData] = useState<LessonsRequestT>();
  const { id: courseId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await wasona<LessonsRequestT>("get", "/app/lessons", {
        params: { courseId: courseId },
      });
      if (response) setData(response);
    })();
  }, [courseId]);

  return (
    <>
      <Navbar />
      <WidthLimiter>
        {/* {JSON.stringify(data, null, 2)} */}
        {/* {JSON.stringify(data?.data?.courses, null, 2)} */}
        {data?.success ? (
          data?.data?.lessons.map((lesson, i) => {
            return (
              <div key={i}>
                <a href={`/tasks/${lesson.lesson_id}`}>
                  Practice {lesson.lesson_title}
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
