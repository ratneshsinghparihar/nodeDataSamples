﻿import {Strict} from 'nodedata/mongoose/enums';
import {field, document} from 'nodedata/mongoose/decorators';
import {Types} from 'mongoose';

@document({ name: 'Roles1', strict: Strict.false })
export class Roles1 {
    @field({ primary: true, autogenerated: true })
    _id: Types.ObjectId;

    @field()
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export default Roles1;