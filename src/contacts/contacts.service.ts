import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Contacts } from './contacts.model';

@Injectable()
export class ContactsService {

    constructor(
        @InjectModel(Contacts)
        private readonly contactsModel: typeof Contacts,
    ){}
    
    async findAll(): Promise<Contacts[]> {
        return this.contactsModel.findAll();
    }



}
