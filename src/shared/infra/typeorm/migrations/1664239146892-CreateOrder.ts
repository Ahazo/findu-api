import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrder1664239146892 implements MigrationInterface {
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
						name: 'ahazo_tax',
						type: 'real',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'total_value',
						type: 'real',
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
						name: 'user_to_order',
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						columnNames: ['user_id'],
						onDelete: 'SET NULL',
					},
					{
						name: 'bundle_to_order',
						referencedTableName: 'bundles',
						referencedColumnNames: ['id'],
						columnNames: ['bundle_id'],
						onDelete: 'SET NULL',
					},
					{
						name: 'order_status_to_order',
						referencedTableName: 'orders',
						referencedColumnNames: ['id'],
						columnNames: ['order_status_id'],
						onDelete: 'SET NULL',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('orders', 'user_to_order');
		await queryRunner.dropForeignKey('orders', 'bundle_to_order');
		await queryRunner.dropForeignKey('orders', 'order_status_to_order');
		await queryRunner.dropTable('orders');
	}
}
