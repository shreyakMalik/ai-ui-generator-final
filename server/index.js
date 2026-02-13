import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import Groq from "groq-sdk"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

app.get("/ping", (req, res) => {
  res.json({ ok: true })
})

app.post("/api/llm", async (req, res) => {
  try {
    const { prompt } = req.body

    const completion = await groq.chat.completions.create({
      // ✅ WORKING MODEL
      model: "llama-3.1-8b-instant",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content:
            "You are a React UI generator. Generate clean React component code."
        },
        {
          role: "user",
          content: prompt
        }
      ]
    })

    const text = completion.choices[0].message.content

    res.json({ output: text })
  } catch (err) {
    console.error("BACKEND ERROR:", err)
    res.status(500).json({
      error: err.message || "Groq backend error"
    })
  }
})

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001")
})
