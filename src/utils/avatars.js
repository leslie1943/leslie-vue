import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

// import { avatarsList } from "@/utils/avatars";

export function avatarsList(){
    let res = [];
    // debugger;
    for(let i = 0; i<40; i++){
        res.push({id: i, url: 't' + i});
    }
    return res;
};