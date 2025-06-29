import { useEffect, useState } from "react";

type Status = {
  status: string
  db: string
  uptime_seconds: number
  app: string
  version: string
}

function DBStatus() {
  const [status, setStatus] = useState<Status | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://localhost:8000/api/status/')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch status')
        return res.json()
      })
      .then(setStatus)
      .catch((err) => setError(err.message))
  }, [])

  if (error) return <div className="status-error">Error: {error}</div>
  if (!status) return <div className="status-loading">Loading system status...</div>

  return (
    <div className="status-panel" style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: 1 }}>
      <h3>System Status</h3>
      <ul>
        <li><strong>App:</strong> {status.app}</li>
        <li><strong>Status:</strong> {status.status}</li>
        <li><strong>Database:</strong> {status.db}</li>
        <li><strong>Version:</strong> {status.version}</li>
        <li><strong>Uptime:</strong> {formatUptime(status.uptime_seconds)}</li>
      </ul>
    </div>
  )
}

function formatUptime(seconds: number) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}m ${secs}s`
}

export default DBStatus;