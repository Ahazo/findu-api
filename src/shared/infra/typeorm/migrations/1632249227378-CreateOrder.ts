import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePerson1619454362655 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'orders',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true,
					},
					{
						name: 'user_id',
						type: 'int',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'bundle_id',
						type: 'int',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'order_status_id',
						type: 'int',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()',
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()',
					},
				],
				foreignKeys: [
					{
						name: 'bundleToOrder',
						referencedTableName: 'bundles',
						referencedColumnNames: ['id'],
						columnNames: ['bundle_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE',
					},
					{
						name: 'userToOrder',
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						columnNames: ['user_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE',
					},
					{
						name: 'orderStatusToOrder',
						referencedTableName: 'order_status',
						referencedColumnNames: ['id'],
						columnNames: ['order_status_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('orders', 'bundleToOrder');
		await queryRunner.dropForeignKey('orders', 'userToOrder');
		await queryRunner.dropForeignKey('orders', 'orderStatusToOrder');
		await queryRunner.dropTable('orders');
	}
}
