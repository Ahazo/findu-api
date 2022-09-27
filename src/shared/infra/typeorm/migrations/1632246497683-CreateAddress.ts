import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAddress1632246497683 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'addresses',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'postal_code',
						type: 'varchar',
						length: '9',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'street',
						type: 'varchar',
						length: '100',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'number',
						type: 'int',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'city',
						type: 'varchar',
						length: '100',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'state',
						type: 'varchar',
						length: '2',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'neighborhood',
						type: 'varchar',
						isNullable: true,
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
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('addresses');
	}
}
