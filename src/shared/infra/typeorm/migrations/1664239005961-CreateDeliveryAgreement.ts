import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDeliveryAgreements1664239005961
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'delivery_agreements',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true,
					},
					{
						name: 'bundle_id',
						type: 'int',
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
						name: 'bundle_to_delivery_agreement',
						referencedTableName: 'bundles',
						referencedColumnNames: ['id'],
						columnNames: ['bundle_id'],
						onDelete: 'SET NULL',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey(
			'delivery_agreements',
			'bundle_to_delivery_agreement'
		);
		await queryRunner.dropTable('delivery_agreements');
	}
}
