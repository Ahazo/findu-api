import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDeliveryAgreement1632249249224
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
						name: 'order_id',
						type: 'int',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'user_id',
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
					{
						name: 'status',
						type: 'enum',
						enum: ['accepted', 'refused', 'deleted'],
						enumName: 'AgreementStatusEnum',
						default: `'accepted'`,
						isNullable: false,
					},
				],
				foreignKeys: [
					{
						name: 'userToDeliveryAgreement',
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						columnNames: ['user_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE',
					},
					{
						name: 'orderToDeliveryAgreement',
						referencedTableName: 'orders',
						referencedColumnNames: ['id'],
						columnNames: ['order_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey(
			'delivery_agreements',
			'userToDeliveryAgrement'
		);
		await queryRunner.dropForeignKey(
			'delivery_agreements',
			'orderToDeliveryAgrement'
		);
		await queryRunner.dropTable('delivery_agreements');
	}
}
