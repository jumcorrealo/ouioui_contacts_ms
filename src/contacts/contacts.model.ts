
import { Column, Model, Table} from "sequelize-typescript";

@Table
export class Contacts extends Model {


    @Column
    name: string;
    @Column
    latitude: number;
    @Column
    longitude: number;
    
}


