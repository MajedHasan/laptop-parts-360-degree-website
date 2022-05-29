import { useEffect, useState } from "react"

const useAdmin = adminData => {

    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)

    useEffect(() => {
        const email = adminData?.email
        if (email) {
            fetch(`https://agile-tor-39199.herokuapp.com/admin/${email}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data?.admin)
                    setAdminLoading(false)
                })
        }
    }, [adminData])

    return [admin, adminLoading]

}

export default useAdmin