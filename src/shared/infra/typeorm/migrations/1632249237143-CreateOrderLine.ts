import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrderLine1632249237143 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table({
				name: 'order_lines',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true,
					},
					{
						name: 'order_id',
						type: 'int',
						isNullable: false,
						isUnique: true
					},
					{
						name: 'freelancer_id',
						type: 'int',
						isNullable: false,
						isUnique: true
					},
					{
						name: 'total_value',
						type: 'int',
						isNullable: false,
						isUnique: true
					}
				],
				foreignKeys: [
					{
						name: 'orderToOrderLine',
						referencedTableName: 'orders',
						referencedColumnNames: ['id'],
						columnNames: ['order_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE'
					},
					{
						name: 'freelancerToOrderLine',
						referencedTableName: 'freelancers',
						referencedColumnNames: ['id'],
						columnNames: ['freelancer_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE'
					}
				]
			}))
		}

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropForeignKey('order_lines', 'orderToOrderLine')
			await queryRunner.dropForeignKey('order_lines', 'freelancerToOrderLine')
			await queryRunner.dropTable('order_lines')
		}

}
