import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBundleMedias1632249177164 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table({
				name: 'bundle_medias',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true
					},
					{
						name: 'bundle_id',
						type: 'int',
						isNullable: false,
						isUnique: true
					},
					{
						name: 'url',
						type: 'varchar',
						isNullable: false,
						isUnique: true
					},
					{
						name: 'status',
						type: 'enum',
						enum: ['active', 'inactive', 'deleted'],
						enumName: 'statusEnum',
						default: 'active',
						isNullable: false
					}
				],
				foreignKeys: [
					{
						name: 'bundleToBundleMedias',
						referencedTableName: 'bundles',
						referencedColumnNames: ['id'],
						columnNames: ['bundle_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE'
					}
				]
			}))
		}

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropForeignKey('bundle_medias', 'bundleToBundleMedias')
			await queryRunner. dropTable('bundle_medias')
		}
}
