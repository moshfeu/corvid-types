import wixStores from "wix-stores-backend"

export function getCurrentCart() {
    const b = new Buffer("testooo")
    const x = b.readBigInt64BE()
    console.log(x)
    return wixStores.getCurrentCart();
}