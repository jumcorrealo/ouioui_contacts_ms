import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Contacts } from './contacts.model';
import { ContactsService } from './contacts.service';

@ApiTags('contacts')
@Controller('contacts')
export class ContactsController {

    constructor(private contactsService: ContactsService) {}

        @Get('/location')
        async findAll(): Promise<Contacts[]> {

            return this.contactsService.findAll();
        }

}
