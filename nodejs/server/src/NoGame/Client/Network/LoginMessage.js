'use strict';

import Assert from 'assert-js';
import Message from './../../Common/Network/Message';
import ClientMessages from './../../Common/Network/ClientMessages';

export default class LoginMessage extends Message
{
    /**
     * @param {string} playername
     */
    constructor(playername)
    {
        super();

        Assert.string(playername);

        this._name = ClientMessages.LOGIN;
        this._data = {username: playername};
    }
}