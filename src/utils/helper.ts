export const isAuthenticated = () => {

    const authToken = localStorage.getItem("c/tk");
    const ID = localStorage.getItem("c/id");

    if (authToken && ID !== "") {
        return true;
    }
    return false;
}
