import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBundleMedia1664237108888 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'bundle_medias',
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
						name: 'url',
						type: 'varchar',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'status',
						type: 'enum',
						enum: ['active', 'inactive', 'deleted'],
						enumName: 'statusEnum',
						default: `'active'`,
						isNullable: false,
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
						name: 'bundle_to_bundle_media',
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
		await queryRunner.dropForeignKey('bundle_medias', 'bundle_to_bundle_media');
		await queryRunner.dropTable('bundle_medias');
	}
}
