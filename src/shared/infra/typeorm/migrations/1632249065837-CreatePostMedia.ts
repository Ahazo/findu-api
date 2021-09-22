import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePostMedia1632249065837 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table({
				name: 'post_medias',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true
					},
					{
						name: 'post_id',
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
						isNullable: false,
					}
				],
				foreignKeys: [
					{
						name: 'postToPostMedia',
						referencedTableName: 'posts',
						referencedColumnNames: ['id'],
						columnNames: ['post_id'],
						onDelete: 'SET NULL',
						onUpdate: 'CASCADE'
					}
				]
			}))
		}

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropForeignKey('post_medias', 'postToPostMedia')
			await queryRunner.dropTable('post_medias')
		}

}
