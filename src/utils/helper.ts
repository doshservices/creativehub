export const isAuthenticated = () => {

    const authToken = localStorage.getItem("c/tk");
    const ID = localStorage.getItem("c/id");
    const authName = localStorage.getItem("c/usn");

    if (authToken && ID && authName !== "") {
        return true;
    }
    return false;
}
