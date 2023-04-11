export const handleScroll = (sectionRef) => {
    window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: "smooth"
    })
};