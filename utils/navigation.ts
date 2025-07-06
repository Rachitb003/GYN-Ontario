/**
 * Navigates to a specific section on the homepage
 * @param sectionId The ID of the section to navigate to
 */
export function navigateToSection(sectionId: string): void {
  // Create the URL with the hash
  const url = `/#${sectionId}`

  // Navigate to the URL
  window.location.href = url
}
