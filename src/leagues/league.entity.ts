import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('leagues')
export class LeagueEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length: 50})
    name: string;

    @Column({length: 50})
    region: string;

    @Column({length: 200})
    avatar: string;
}
