const authHeader = (token: string) => ({
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
})

export { authHeader }