export function checkRules(password) {
    if (password.length < 6) return "Weak ❌";
    if (password.match(/[A-Z]/) && password.match(/[0-9]/)) return "Strong ✅";
    return "Medium ⚠️";
}
