import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm"



@Entity('product')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  produto: string

  @Column()
  preco: number

  @Column()
  qtd: number

  @Column()
  categoria: string

  @Column()
  compra: Date

  @Column()
  validade: Date

}

export default Product