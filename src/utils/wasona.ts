import axios from "axios";

const BACKEND_NOT_FOUND =
  "Backend URL or port is missing. Please check your environment variables.";

const verbs = {
  post: axios.post,
  get: axios.get,
};

export async function wasona(
  verb: "post" | "get",
  endpoint: string,
  data?: Record<string, any>,
) {
  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const backendPort = import.meta.env.VITE_BACKEND_PORT;

    if (!backendUrl || !backendPort) {
      alert(BACKEND_NOT_FOUND);
      return;
    }

    const response = await verbs[verb](
      `${backendUrl}:${backendPort}${endpoint}`,
      data,
    );

    console.log(`${endpoint} successful`, response.data);
    alert(`${endpoint} successful!`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      alert(
        `Server error: ${error.response.data.codeName}\n\n${JSON.stringify(error.response.data.error)}`,
      );
    } else if (error instanceof Error) {
      alert("Network error: " + error.message);
    } else {
      alert("An unexpected error occurred: " + error);
    }
  }
}
