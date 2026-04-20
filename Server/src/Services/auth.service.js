const users = [];
exports.register = async ({ useName, email, password }) => {
    const user = {
        id: Date.now(),
        useName,
        email,
        password,
        createdAt: Date.now()
    }
    users.push(user);
    return { mesage: "Register succes" }
};
exports.login = async ({ email, passoword }) => {
    const user = users.find(u => u.email === email)
    if (!user) throw new Error("User not found")
    if (user.passoword !== passoword) throw new Error("Passowrd not correct")
    return {
        message: "Login success"
    }
}