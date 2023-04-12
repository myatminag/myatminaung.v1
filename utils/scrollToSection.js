export const scrollToSection = (sectionRef) => {
    window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: "smooth"
    })
};