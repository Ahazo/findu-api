import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePerson1632247967291 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'persons',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'cpf',
						type: 'varchar',
						length: '14',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'email',
						type: 'varchar',
						length: '100',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'cellphone_number',
						type: 'varchar',
						length: '14',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'first_name',
						type: 'varchar',
						length: '100',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'last_name',
						type: 'varchar',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'birth_date',
						type: 'timestamp',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'address_id',
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
						name: 'address_to_person',
						referencedTableName: 'addresses',
						referencedColumnNames: ['id'],
						columnNames: ['address_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE',
					},
				],
			})
		);
	}
	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('persons', 'address_to_person');
		await queryRunner.dropTable('persons');
	}
}
