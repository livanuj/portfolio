/**
 * Scrolls to a section by ID with offset for sticky headers
 * @param sectionId - The ID of the element to scroll to
 * @param headerOffset - Offset in pixels to account for fixed/sticky headers (default: 120)
 */
export const scrollToSection = (
  sectionId: string,
  headerOffset: number = 120,
): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
