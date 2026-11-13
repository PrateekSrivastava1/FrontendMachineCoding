import { useEffect, useState } from 'react'
import { problems } from './components/registry'
import './App.css'

function getProblemId() {
  const id = window.location.hash.slice(1)
  return problems.some((problem) => problem.id === id) ? id : problems[0].id
}

export default function App() {
  const [activeId, setActiveId] = useState(getProblemId)
  const active = problems.find((problem) => problem.id === activeId) ?? problems[0]
  const ActiveComponent = active.Component

  useEffect(() => {
    if (window.location.hash.slice(1) !== activeId) {
      window.history.replaceState(null, '', `#${activeId}`)
    }

    function onHashChange() {
      setActiveId(getProblemId())
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [activeId])

  return (
    <div className="app">
      <aside className="sidebar">
        <p className="sidebar-label">Problems</p>
        <nav className="nav" aria-label="Practice components">
          {problems.map((problem) => {
            const isActive = problem.id === active.id
            return (
              <button
                key={problem.id}
                type="button"
                className={isActive ? 'nav-item active' : 'nav-item'}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => {
                  window.location.hash = problem.id
                }}
              >
                {problem.title}
              </button>
            )
          })}
        </nav>
      </aside>
      <main className="stage">
        <ActiveComponent key={active.id} />
      </main>
    </div>
  )
}
