import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1632248795758 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    generationStrategy: 'increment',
                    isGenerated: true
                },
                {
                    name: 'person_id',
                    type: 'int',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'username',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'experience',
                    type: 'int',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'level_id',
                    type: 'int',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'follower_count',
                    type: 'int4',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'following_count',
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
                }//sereeeeia deixa eu te contar

			],
            foreignKeys: [
                {
                    name: 'personToUser',
                    referencedTableName: 'persons',
                    referencedColumnNames: ['id'],
                    columnNames: ['person_id'],
                    onDelete: 'SET NULL',
                    onUpdate: 'CASCADE'
                },
                {
                    name: 'levelToUser',
                    referencedTableName: 'level_influencers',
                    referencedColumnNames: ['id'],
                    columnNames: ['level_id'],
                    onDelete: 'SET NULL',
                    onUpdate: 'CASCADE'
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
