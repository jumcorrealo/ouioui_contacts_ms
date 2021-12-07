import { ContactsModule } from './contacts/contacts.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ContactsController } from './contacts/contacts.controller';
import { Contacts } from './contacts/contacts.model';
import { ContactsService } from './contacts/contacts.service';

@Module({
  imports: [
    SequelizeModule.forRoot({

      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: 3308,
      username: 'contacts',
      password: '2021',
      database: 'contacts_db',
      models: [Contacts],
      autoLoadModels: true,
      synchronize: true,

    }),
    ContactsModule,
  ],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class AppModule { }
