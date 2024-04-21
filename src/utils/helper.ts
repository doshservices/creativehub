import { useSelector } from "react-redux";

export const useAuthentication = () => {

    const token = useSelector((state: any) => state?.auth?.authToken);
    const user = useSelector((state: any) => state?.auth?.user);

    const authToken = token;
    const ID = user?._id;
    const authName = user?.firstName;

    if (authToken && ID && authName) {
        return true;
    }
    return false;
}
