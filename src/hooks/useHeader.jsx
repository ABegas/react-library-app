import { useState } from "react"

const useHeader = () => {
    const [sticky, setSticky] = useState("")

    document.addEventListener("scroll", handleScroll)

    function handleScroll() {
        window.scrollY > 20 ? setSticky(true) : setSticky(false)
    }

    return sticky
}

export default useHeader
