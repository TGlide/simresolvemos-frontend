import { Task } from "../store";
import { SendTaskData } from "../api/tasks";

export function formatTaskDataForApi(
  task: Task,
  userEmail: string
): SendTaskData {
  return {
    "delivery-value": task.dueDate,
    "want-video": task.wantVideo,
    files: task.files,
    area: task.area,
    description: task.description,
    level: task.level,
    subject: task.subject,
    tarefa: task.subject,
    title: task.title,
    user_email: userEmail,
    video_questions: task.videoQuestions,
  };
}
