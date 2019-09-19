
import wixUsersBackend from 'wix-users-backend';
import {blockByEmail} from 'wix-users-backend';

export function sayHello(name) {
    blockByEmail("test@wix.com").then(() => { })
    wixUsersBackend.approveByEmail(name).then(str => console.group(str))
    return `hello ${name}!`
};
