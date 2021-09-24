import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProfilePhoto1632423276539 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'profile_photos',
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
						name: 'userToProfilePhoto',
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
		await queryRunner.dropForeignKey('profile_photos', 'userToProfilePhoto');
		await queryRunner.dropTable('profile_photos');
	}
}
