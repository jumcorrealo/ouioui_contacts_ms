import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  getHello(): string {
    throw new Error('Method not implemented.');
  }
  constructor(private sequelize: Sequelize) {}
}
