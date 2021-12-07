
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ContactsController } from './contacts.controller';
import { Contacts } from './contacts.model';
import { ContactsService } from './contacts.service';

@Module({
    imports: [SequelizeModule.forFeature([Contacts])],
    providers: [ContactsService],
    controllers: [ContactsController],
    exports: [SequelizeModule],
})
export class ContactsModule {}
