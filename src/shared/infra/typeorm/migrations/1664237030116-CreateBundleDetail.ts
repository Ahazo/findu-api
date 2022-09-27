import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBundleDetail1664237030116 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'bundle_details',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'bundle_id',
						type: 'varchar',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'description',
						type: 'varchar',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'value',
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
						name: 'bundle_to_bundle_details',
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
			'bundle_medias',
			'bundle_to_bundle_details'
		);
		await queryRunner.dropTable('bundle_medias');
	}
}
