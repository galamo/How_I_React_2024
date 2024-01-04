import { User } from "./User";
import { useEffect, useState } from "react"
import axios from "axios"
import data from "./data.json"
export function UsersPage() {
    const [users, setUsers] = useState(data)
    const [userName, setUserName] = useState("")


    useEffect(() => {

        async function fetchUsers() {
            try {
                const { data } = await axios.get("https://randomuser.me/api?results=10")
                const { results } = data;
                const modeledUsers = results.map((u: any) => {
                    return {
                        userName: `${u?.name?.title} ${u?.name?.first}`,
                        age: u?.registered?.age
                    }
                })
                setUsers(modeledUsers)
            } catch (error) {

            }

        }
        fetchUsers()

        // return () => {
        //     console.log("when this code will run?")
        // }
    }, [])
    return <div>
        <div>
            <h1>
                Users
            </h1>
        </div>
        <div>
            <div>
                <input value={userName} onChange={(e: any) => {
                    setUserName(e.target.value)
                }} type="text" />
            </div>
            <div>
                <button onClick={(e: any) => {
                    setUsers([...users, { userName }])
                }}>Add User</button>
                {userName}
            </div>
        </div>
        {users.map(user => {
            return <User userName={user.userName} />
        })}
    </div>
}