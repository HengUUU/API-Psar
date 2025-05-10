import { Model, Column, ForeignKey, DataType, Table } from "sequelize-typescript";
import { Product } from "./product.model";
import { Category } from "./category.model";


@Table({
  tableName: 'ProductCategory',
  freezeTableName: true,
})

export class ProductCategory extends Model {

  @Column({
    type: DataType.INTEGER, primaryKey: true, autoIncrement: true}) declare id: number;

    @ForeignKey(() => Product)
    @Column({type: DataType.INTEGER, allowNull: false, unique: false})    product_id: number;
  
    @ForeignKey(() => Category)
    @Column({type: DataType.INTEGER, allowNull: false, unique: false})    category_id: number;
  }
  