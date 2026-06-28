export function useScrollTo() {
  const scrollTo = (elementId: string) => {
    const el = document.getElementById(elementId)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return { scrollTo }
}
