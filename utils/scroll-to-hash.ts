export function scrollToHash(hash: string) {
  // Remove the # from the hash
  const id = hash.replace("#", "")

  // Find the element with the id
  const element = document.getElementById(id)

  if (element) {
    // Add a small delay to ensure the page is fully loaded
    setTimeout(() => {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header height
        behavior: "smooth",
      })
    }, 100)
    return true
  }

  return false
}
