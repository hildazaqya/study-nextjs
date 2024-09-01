import { UserInfo } from "./userinfo"

export const Header = () => {
    return (
    <div className="flex justify-between items-center">
        <div>Brand</div>
        <UserInfo />
    </div>
    )
}