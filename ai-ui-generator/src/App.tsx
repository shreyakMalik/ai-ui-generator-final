import { useState } from "react"
import Navbar from "./components/Navbar"
import { runAgent } from "./lib/ai"

type Snapshot = {
  id: number
  prompt: string
  code: string
  createdAt: string
}

function App() {
  const [userPrompt, setUserPrompt] = useState("")
  const [generatedCode, setGeneratedCode] = useState(
    "// UI generation will go here"
  )
  const [history, setHistory] = useState<Snapshot[]>([])
  const [activeSnapshotId, setActiveSnapshotId] =
    useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleGenerate() {
    if (!userPrompt.trim()) return
    setLoading(true)

    try {
      const result = await runAgent(userPrompt)

      const newSnapshot: Snapshot = {
        id: history.length + 1,
        prompt: userPrompt,
        code: result.code,
        createdAt: new Date().toLocaleTimeString()
      }

      setHistory((prev) => [...prev, newSnapshot])
      setActiveSnapshotId(newSnapshot.id)
      setGeneratedCode(result.code)
    } catch (err) {
      console.error(err)
      setGeneratedCode("// Error generating UI")
    }

    setLoading(false)
  }

  function rollbackTo(snapshot: Snapshot) {
    setActiveSnapshotId(snapshot.id)
    setGeneratedCode(snapshot.code)
  }

  return (
    <div style={{ height: "100vh", padding: 12 }}>
      <Navbar title="AI UI Generator" />

      <div style={{ display: "flex", marginTop: 12 }}>
        <div
          className="panel"
          style={{ width: "30%", padding: 12, marginRight: 12 }}
        >
          <h3>User Prompt</h3>

          <textarea
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            placeholder="Describe the UI you want..."
            style={{ width: "100%", height: 120 }}
          />

          <button
            style={{ marginTop: 8 }}
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate UI"}
          </button>

          <h4 style={{ marginTop: 16 }}>Generation History</h4>

          {history.length === 0 && (
            <div style={{ color: "#888" }}>
              No generations yet
            </div>
          )}

          {history.map((snap) => (
            <button
              key={snap.id}
              onClick={() => rollbackTo(snap)}
              style={{ marginTop: 6, textAlign: "left" }}
            >
              <strong>
                {snap.id === activeSnapshotId ? "▶ " : "↩ "}
                Snapshot {snap.id}
              </strong>
              <div style={{ fontSize: 12 }}>
                {snap.createdAt}
              </div>
            </button>
          ))}
        </div>

        <div className="panel" style={{ width: "70%", padding: 12 }}>
          <h3>Generated Code</h3>
          <textarea
            readOnly
            value={generatedCode}
            style={{
              width: "100%",
              height: 400,
              fontFamily: "monospace"
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default App
