import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProfileBanner1632484901510 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'banner_photos',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true,
					},
					{
						name: 'user_id',
						type: 'int',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'url',
						type: 'varchar',
						isNullable: false,
						isUnique: true,
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
						name: 'userToBannerPhoto',
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						columnNames: ['user_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('banner_photos', 'userToBannerPhoto');
		await queryRunner.dropTable('banner_photos');
	}
}
