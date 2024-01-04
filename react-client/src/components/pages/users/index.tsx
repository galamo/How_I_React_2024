import { User } from "./User";
import { useEffect, useState } from "react"
import axios from "axios"
import data from "./data.json"
import ReactModal from "react-modal-resizable-draggable"
export function UsersPage() {
    const [users, setUsers] = useState(data)
    const [userName, setUserName] = useState("")
    const [nor, setNor] = useState(5)
    const [modalOpened, setModalOpened] = useState(false)
    const [currentUser, setCurrentUser] = useState(false)


    useEffect(() => {
        async function fetchUsers() {
            console.log("fetchUsers!", nor)
            try {

                const { data } = await axios.get(`https://randomuser.me/api?results=${nor}`)
                const { results } = data;
                const modeledUsers = results.map((u: any) => {
                    return {
                        userName: `${u?.name?.title} ${u?.name?.first}`,
                        age: u?.registered?.age
                    }
                })
                console.log("State set!", nor)
                setUsers(modeledUsers)
            } catch (error) {

            }

        }
        fetchUsers()

        return () => {
            console.log("Component Destroy")
        }
    }, [nor])
    return <div>
        <div>
            <ReactModal
                initWidth={800}
                initHeight={400}
                onFocus={() => console.log("Modal is clicked")}
                className={"my-modal-custom-class"}
                isOpen={modalOpened}>
                <h3>My Modal</h3>
                <div className="body">
                    <p>This is the modal&apos;s body.</p>
                </div>
                <button onClick={() => { setModalOpened(false) }}>
                    Close
                </button>
            </ReactModal>
            <h1 onClick={() => {
                setNor(nor + 1)
            }}>
                Users {nor}
            </h1>
        </div>
        <div>
            <div>
                <input value={userName} onChange={(e: any) => {
                    setUserName(e.target.value)
                }} type="text" />
            </div>
            <div>
                <button onClick={() => {
                    setUsers([...users, { userName }])
                }}>Add User</button>
                {userName}
            </div>
        </div>
        {users.map((user, index) => {
            return <User key={user.userName + index} userName={user.userName} openWorkArrangment={(user: string) => {
                setCurrentUser(user)
                setModalOpened(true)
            }} />
        })}


    </div>
}