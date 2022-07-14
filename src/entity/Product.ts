import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm"



@Entity('product')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  produto: string

  @Column()
  fabricacao: Date

  @Column()
  perecivel: boolean

  @Column({ nullable: true })
  validade?: Date

  @Column()
  preco: number

}

export default Product