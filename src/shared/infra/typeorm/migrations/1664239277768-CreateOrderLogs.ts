import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrderLogs1664239277768 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'order_logs',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'order_id',
						type: 'varchar',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'order_status_id',
						type: 'varchar',
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
						name: 'order_to_order_logs',
						referencedTableName: 'bundles',
						referencedColumnNames: ['id'],
						columnNames: ['order_id'],
						onDelete: 'SET NULL',
					},
					{
						name: 'order_status_to_order_logs',
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
		await queryRunner.dropForeignKey('order_logs', 'order_to_order_logs');
		await queryRunner.dropForeignKey(
			'order_logs',
			'order_status_to_order_logs'
		);
		await queryRunner.dropTable('order_logs');
	}
}
