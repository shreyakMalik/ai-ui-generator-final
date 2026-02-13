import axios from "axios"

const client = axios.create({
  baseURL: "http://localhost:3001"
})

export async function runAgent(
  userPrompt: string
): Promise<{ code: string }> {
  const res = await client.post("/api/llm", {
    prompt: userPrompt
  })

  return {
    code: res.data.output
  }
}
