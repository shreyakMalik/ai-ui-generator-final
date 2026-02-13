const BACKEND_URL =
  "https://ai-ui-generator-final-production.up.railway.app"

export async function runAgent(
  userPrompt: string
): Promise<{ code: string }> {
  const res = await fetch(`${BACKEND_URL}/api/llm`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt: userPrompt })
  })

  if (!res.ok) {
    throw new Error("LLM request failed")
  }

  const data = await res.json()

  return {
    code: data.output
  }
}
