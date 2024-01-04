
import data from "../data.json"
export type TUserBasedJson = typeof data[0]

// export type TUser = {
//     userName: string,
//     age?: number,
//     image?: string,
// }


export function User(props: TUserBasedJson) {
    const { userName } = props;
    return <div>
        <h2> {userName}</h2>
    </div>
}