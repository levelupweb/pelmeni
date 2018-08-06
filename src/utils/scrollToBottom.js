export default () => window && window.scrollBy && 
    window.scrollBy({ 
        top: window.innerHeight,
        behavior: "smooth",
    })