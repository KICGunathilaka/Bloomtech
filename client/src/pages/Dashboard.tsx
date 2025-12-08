type User = { id: number; name: string; email: string; role: string }

export default function Dashboard({ user, onLogout }: { user: User; onLogout?: () => void }) {
  return (
    <div style={{ height: '100vh', width: '100%', display: 'grid', gridTemplateRows: '56px 1fr', background: 'var(--bg)', color: '#111', overflow: 'hidden' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', background: 'var(--primary)', color: '#fff', overflow: 'hidden', flexWrap: 'wrap', gap: 8 }}>
        <div style={{ fontWeight: 600 }}>BloomTech Dashboard</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <span>{user.name} ({user.role})</span>
          <button onClick={onLogout} style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid var(--primary)', background: 'var(--accent)', color: '#fff' }}>Logout</button>
        </div>
      </header>
      <main style={{ height: 'calc(100vh - 56px)', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <section style={{ width: '100%', height: '100%', background: 'transparent', borderRadius: 0, border: 'none', padding: 0, display: 'grid', placeItems: 'center', textAlign: 'center' }}>
          <h1 style={{ marginTop: 0, fontSize: 32 }}>Welcome back</h1>
        </section>
      </main>
    </div>
  )
}
