import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateInfluencerLevel1632248776698 implements MigrationInterface {

		public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table({
				name: 'influencer_levels',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true
					},
					{
						name: 'description',
						type: 'varchar',
						isNullable: false,
						isUnique: true
					},
					{
						name: 'experience_needed',
						type: 'int4',
						isNullable: false,
						isUnique: true
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()'
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()'
					},
					{
						name: 'status',
						type: 'enum',
						enum: ['active', 'inactive', 'deleted'],
						enumName: 'statusEnum',
						default: 'active',
						isNullable: false,
					}
				]
		}))
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('influencer_levels')
    }

}
