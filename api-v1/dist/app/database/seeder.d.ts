export declare class Seeder {
    private sequelize;
    constructor();
    private dropandSeedDatabase;
    private seedAllTable;
    private handleSeedingError;
    startSeeding(): Promise<void>;
}
