function generateKey(number, length = 16) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let hash = '';
    let seed = number * 2654435761;
    for (let i = 0; i < length; i++) {
        hash += chars.charAt((seed + i) % chars.length);
        seed = (seed * 31) % 999999937;
    }
    return hash;
}

exports.generateKey = generateKey;