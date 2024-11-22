import Navbar from "@components/navbar";
import WidthLimiter from "@components/width-limiter";
import {
  AnswerRequestT,
  QuestionRequestT,
  TasksRequestT,
} from "@models/courses";
import { wasona } from "@utils/wasona";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>();
  const [question, setQuestion] = useState<QuestionRequestT>();
  const { id: lessonId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await wasona<TasksRequestT>("get", "/app/tasks", {
        params: { lessonId: lessonId },
      });
      if (response) setTasks(response.data!.tasks);
    })();
  }, [lessonId]);

  useEffect(() => {
    if (!tasks || !tasks.length) return;
    (async () => {
      const response = await wasona<QuestionRequestT>(
        "get",
        "/app/task-question",
        {
          params: { taskId: tasks[0] },
        },
      );
      if (response) setQuestion(response);
    })();
  }, [tasks]);

  useEffect(() => {
    // alert(`Received a question: ${JSON.stringify(question)}`);
  }, [question]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") handleSubmit((e.target as HTMLInputElement).value);
  };

  const handleSubmit = (text: string) => {
    (async () => {
      const response = await wasona<AnswerRequestT>("get", "/app/task-answer", {
        params: { taskId: tasks![0], reply: text },
      });
      if (response && response.success) {
        alert(response.data!.correct);
        setTasks(tasks!.splice(1));
      }
    })();
  };

  return (
    <>
      <Navbar />
      <WidthLimiter>
        {question?.success ? (
          <>
            <p>{question?.data?.task.give}</p>
            <input onKeyDown={handleKeyDown}></input>
          </>
        ) : (
          <p>{JSON.stringify(question?.error)}</p>
        )}
      </WidthLimiter>
    </>
  );
};
