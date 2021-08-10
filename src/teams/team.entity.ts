import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('teams')
export class TeamEntity {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length: 50})
    name: string;

    @Column({length: 50})
    coutry: string;

    @Column({length: 200})
    avatar: string;
}
