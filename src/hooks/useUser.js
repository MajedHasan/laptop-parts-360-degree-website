import { useEffect, useState } from "react"

const useUser = userData => {

    const [user, setUser] = useState(false)
    const [userLoading, setUserLoading] = useState(true)

    useEffect(() => {
        const email = userData?.email
        if (email) {
            fetch(`https://agile-tor-39199.herokuapp.com/notAdmin/${email}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setUser(data?.user)
                    setUserLoading(false)
                })
        }
    }, [userData])

    return [user, userLoading]

}

export default useUser