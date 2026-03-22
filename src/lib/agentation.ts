import type { AgentationProps } from 'agentation'
import type { ComponentType } from 'react'

const AGENTATION_ROOT_ID = 'agentation-root'

export async function mountAgentation(): Promise<void> {
  if (!import.meta.env.DEV || typeof window === 'undefined') {
    return
  }

  if (document.getElementById(AGENTATION_ROOT_ID)) {
    return
  }

  const [{ createElement }, { createRoot }, { Agentation }] = await Promise.all([
    import('react'),
    import('react-dom/client'),
    import('agentation'),
  ])

  const container = document.createElement('div')
  container.id = AGENTATION_ROOT_ID
  document.body.appendChild(container)

  const endpoint = import.meta.env.VITE_AGENTATION_ENDPOINT
  const props: AgentationProps | undefined = endpoint ? { endpoint } : undefined
  const AgentationComponent = Agentation as ComponentType<AgentationProps>

  createRoot(container).render(createElement(AgentationComponent, props))
}
