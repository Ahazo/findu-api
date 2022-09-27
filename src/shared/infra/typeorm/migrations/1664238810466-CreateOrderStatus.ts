import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrderStatus1664238810466 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'order_status',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true,
					},
					{
						name: 'description',
						type: 'varchar',
						isNullable: false,
						isUnique: false,
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('order_status');
	}
}
