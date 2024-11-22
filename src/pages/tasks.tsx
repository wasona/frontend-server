import Navbar from "@components/navbar";
import WidthLimiter from "@components/width-limiter";
import {
  AnswerRequestT,
  QuestionRequestT,
  TasksRequestT,
} from "@models/courses";
import { wasona } from "@utils/wasona";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Tasks: React.FC = () => {
  const [done, setDone] = useState(false);
  const [taskQueue, setTaskQueue] = useState<string[]>();
  const [question, setQuestion] = useState<QuestionRequestT>();
  const { id: lessonId } = useParams();
  const navigate = useNavigate();

  // When lessonId is updated, load task queue
  useEffect(() => {
    (async () => {
      const response = await wasona<TasksRequestT>("get", "/app/tasks", {
        params: { lessonId: lessonId },
      });
      if (response) setTaskQueue(response.data!.tasks);
    })();
  }, [lessonId]);

  // When task queue is updated, load 0th element as
  useEffect(() => {
    if (!taskQueue) return;
    if (taskQueue.length == 0) {
      setDone(true);
      return;
    }
    (async () => {
      const response = await wasona<QuestionRequestT>(
        "get",
        "/app/task-question",
        {
          params: { taskId: taskQueue[0] },
        },
      );
      if (response) setQuestion(response);
    })();
  }, [taskQueue]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") handleSubmit((e.target as HTMLInputElement).value);
  };

  const handleSubmit = (text: string) => {
    (async () => {
      const response = await wasona<AnswerRequestT>("get", "/app/task-answer", {
        params: { taskId: taskQueue![0], reply: text },
      });
      if (response && response.success) {
        alert(response.data!.correct);
        setTaskQueue(taskQueue!.slice(1));
        console.log(taskQueue);
      }
    })();
  };

  const Loading = <p>Loading the next question, please wait...</p>;
  const Done = (
    <>
      <p>You're all done! Good job!</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
  const Question = (
    <>
      <p>{question?.data?.task.give}</p>
      <input onKeyDown={handleKeyDown}></input>
    </>
  );
  return (
    <>
      <Navbar />
      <WidthLimiter>{done ? Done : question ? Question : Loading}</WidthLimiter>
    </>
  );
};
