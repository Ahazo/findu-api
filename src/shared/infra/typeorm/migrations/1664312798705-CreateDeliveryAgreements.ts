import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDeliveryAgreements1664312798705
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'delivery_agreements',
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
						name: 'received',
						type: 'boolean',
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
						name: 'order_to_delivery_agreement',
						referencedTableName: 'orders',
						referencedColumnNames: ['id'],
						columnNames: ['order_id'],
						onDelete: 'SET NULL',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey(
			'delivery_agreements',
			'order_to_delivery_agreement'
		);
		await queryRunner.dropTable('delivery_agreements');
	}
}
