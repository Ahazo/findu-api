import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrderStatus1632249207426 implements MigrationInterface {
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
						isNullable: true,
						isUnique: true,
					},
					{
						name: 'step',
						type: 'int',
						isNullable: false,
						isUnique: true,
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('order_status');
	}
}
