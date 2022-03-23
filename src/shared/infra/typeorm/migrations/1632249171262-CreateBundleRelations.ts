import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBundleRelations1632249171262 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'bundle_relations',
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
						name: 'freelancer_id',
						type: 'int',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'percentage',
						type: 'decimal',
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
						enum: ['active', 'inactive', 'deleted'],
						enumName: 'statusEnum',
						default: `'active'`,
						isNullable: false,
					},
				],
				foreignKeys: [
					{
						name: 'bundleToBundleRelations',
						referencedTableName: 'bundles',
						referencedColumnNames: ['id'],
						columnNames: ['bundle_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE',
					},
					{
						name: 'freelancerToBundleRelations',
						referencedTableName: 'freelancers',
						referencedColumnNames: ['id'],
						columnNames: ['freelancer_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey(
			'bundle_relations',
			'bundleToBundleRelations'
		);
		await queryRunner.dropForeignKey(
			'bundle_relations',
			'freelancerToBundleRelations'
		);
		await queryRunner.dropTable('bundle_relations');
	}
}
