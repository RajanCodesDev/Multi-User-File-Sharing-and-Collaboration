export let checkmissing = (body) => {
    const { username, email, password } = body
    if (!username)
        return "Please enter username"
    if (!email)
        return "Plase enter email"
    if (!password)
        return "Please enter password"

    return null
}