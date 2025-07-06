// Store the target section in localStorage
export function storeTargetSection(sectionId: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("targetSection", sectionId)
  }
}

// Get and clear the target section from localStorage
export function getAndClearTargetSection(): string | null {
  if (typeof window !== "undefined") {
    const section = localStorage.getItem("targetSection")
    localStorage.removeItem("targetSection")
    return section
  }
  return null
}

// Scroll to a section by ID
export function scrollToSection(sectionId: string): void {
  if (typeof window !== "undefined") {
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Offset for header height
          behavior: "smooth",
        })
      }
    }, 100)
  }
}
