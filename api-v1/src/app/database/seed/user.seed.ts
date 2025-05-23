import { UserRole } from "src/app/models/enum/role.enum";
import User from "src/app/models/user/user.model";
export class UserSeeder{
    
    public static seed = async () => {
        try {
            await this.seedUsers();
        } catch (err) {
            console.log('\x1b[32m%s\x1b[0m', 'Unable to seed Users: ', err)
        }
    }


    private static async seedUsers(){       
        // console.log(bulkUser[0] instanceof User) 
        try {
            await User.bulkCreate((users));
            console.log("Successfully seeded users to database");
        } catch (err) {
            console.log('Something went wrong when seeding users: ', err);
        }
    }
}

const users = [
    { id: '1', phoneNumber: '089064289', password: '9bYHSaBg', role: UserRole.USER },
    { id: '2', phoneNumber: '088413509', password: '3faVidXp', role: UserRole.USER },
    { id: '3', phoneNumber: '011174579', password: 'T2lClx2G', role: UserRole.USER },
    { id: '4', phoneNumber: '097530229', password: 'e58SOB5f', role: UserRole.USER },
    { id: '5', phoneNumber: '089700669', password: 'RmMXYqon', role: UserRole.USER },
    { id: '6', phoneNumber: '088691638', password: '271jeRIk', role: UserRole.USER },
    { id: '7', phoneNumber: '011414173', password: 'sPGE8Jou', role: UserRole.USER },
    { id: '8', phoneNumber: '097697752', password: 'QLDaOj3a', role: UserRole.USER },
    { id: '9', phoneNumber: '012083015', password: 'wR9nBb0q', role: UserRole.USER },
    { id: '10', phoneNumber: '012418487', password: 'C2OLqMhN', role: UserRole.USER },
    { id: '11', phoneNumber: '097274535', password: 'eVzQOvSU', role: UserRole.USER },
    { id: '12', phoneNumber: '097459139', password: 'DhqeZS98', role: UserRole.USER },
    { id: '13', phoneNumber: '011773496', password: 'ppxlbYdq', role: UserRole.USER },
    { id: '14', phoneNumber: '097283386', password: 'Cp6cu8FN', role: UserRole.USER },
    { id: '15', phoneNumber: '012645477', password: '6E8GRlEY', role: UserRole.USER },
    { id: '16', phoneNumber: '011281977', password: 'tLnn2R38', role: UserRole.USER },
    { id: '17', phoneNumber: '088648490', password: 'MzuQYpxl', role: UserRole.USER },
    { id: '18', phoneNumber: '088009289', password: 'HUvmvglo', role: UserRole.USER },
    { id: '19', phoneNumber: '012933285', password: 'WA5KG4zh', role: UserRole.USER },
    { id: '20', phoneNumber: '089689129', password: '3VkDelYK', role: UserRole.USER },
    { id: '21', phoneNumber: '089634798', password: 'iUWRHKBa', role: UserRole.USER },
    { id: '22', phoneNumber: '097911706', password: 'RdWGGyo7', role: UserRole.USER },
    { id: '23', phoneNumber: '097680671', password: 'ygclvG8f', role: UserRole.USER },
    { id: '24', phoneNumber: '011735007', password: 'WOI3nwKx', role: UserRole.USER },
    { id: '25', phoneNumber: '088941872', password: 'bMCSahp3', role: UserRole.USER },
    { id: '26', phoneNumber: '088088911', password: 'Fm8Yl3CB', role: UserRole.USER },
    { id: '27', phoneNumber: '088403868', password: 'bl0Cqv97', role: UserRole.USER },
    { id: '28', phoneNumber: '012250674', password: '5G7HhSc6', role: UserRole.USER },
    { id: '29', phoneNumber: '012717931', password: 'crz68BoO', role: UserRole.USER },
    { id: '30', phoneNumber: '012806530', password: 'XGQ7xPiT', role: UserRole.USER },
    { id: '31', phoneNumber: '088259585', password: 'Uq1QqJs3', role: UserRole.USER },
    { id: '32', phoneNumber: '011602582', password: 'uO7NK4vS', role: UserRole.USER },
    { id: '33', phoneNumber: '012508258', password: '3tt4zicV', role: UserRole.USER },
    { id: '34', phoneNumber: '011763960', password: 'rchQtkYM', role: UserRole.USER },
    { id: '35', phoneNumber: '097217419', password: 'gt5uCJrK', role: UserRole.USER },
    { id: '36', phoneNumber: '097311010', password: '1N8XmBsv', role: UserRole.USER },
    { id: '37', phoneNumber: '011760841', password: 'mLYYLW88', role: UserRole.USER },
    { id: '38', phoneNumber: '012572335', password: 'FotyOeSm', role: UserRole.USER },
    { id: '39', phoneNumber: '089735888', password: 'TfATAPnl', role: UserRole.USER },
    { id: '40', phoneNumber: '011231959', password: 'VqytYUlr', role: UserRole.USER },
    { id: '41', phoneNumber: '011176637', password: 'Epqf242H', role: UserRole.USER },
    { id: '42', phoneNumber: '011713074', password: 'xg35mIoJ', role: UserRole.USER },
    { id: '43', phoneNumber: '012485947', password: 'nDPeXyIz', role: UserRole.USER },
    { id: '44', phoneNumber: '089678599', password: '3CPuIGYi', role: UserRole.USER },
    { id: '45', phoneNumber: '011715463', password: 'OBUtagPR', role: UserRole.USER },
    { id: '46', phoneNumber: '097244299', password: '4CRR8cMN', role: UserRole.USER },
    { id: '47', phoneNumber: '097567899', password: '6TY4Q0Va', role: UserRole.USER },
    { id: '48', phoneNumber: '097756301', password: 'sN4zDdPG', role: UserRole.USER },
    { id: '49', phoneNumber: '011173939', password: 'bQNEGG7B', role: UserRole.USER },
    { id: '50', phoneNumber: '088575166', password: 'aSgDanCh', role: UserRole.USER },
    { id: '51', phoneNumber: '088967982', password: 'PKuizHzC', role: UserRole.USER },
    { id: '52', phoneNumber: '097953186', password: 'mdnipOYL', role: UserRole.USER },
    { id: '53', phoneNumber: '097307919', password: 'ZPoA4Vb5', role: UserRole.USER },
    { id: '54', phoneNumber: '012422864', password: 'swX5IgQg', role: UserRole.USER },
    { id: '55', phoneNumber: '011529410', password: 'M5ckxBHr', role: UserRole.USER },
    { id: '56', phoneNumber: '011220874', password: 'IpvQ1e3Q', role: UserRole.USER },
    { id: '57', phoneNumber: '012197728', password: 'a01OyWbV', role: UserRole.USER },
    { id: '58', phoneNumber: '088557001', password: '69ZvHRBT', role: UserRole.USER },
    { id: '59', phoneNumber: '088718766', password: 'rsn4nmMy', role: UserRole.USER },
    { id: '60', phoneNumber: '088047505', password: 'hPXKQc1G', role: UserRole.USER },
    { id: '61', phoneNumber: '011663387', password: 'd9rvTjrS', role: UserRole.USER },
    { id: '62', phoneNumber: '089796636', password: 'qcrcn0Kw', role: UserRole.USER },
    { id: '63', phoneNumber: '012052457', password: 'CPSgnzTH', role: UserRole.USER },
    { id: '64', phoneNumber: '097743666', password: '2cops3BW', role: UserRole.USER },
    { id: '65', phoneNumber: '089894628', password: 'AuUpVm4S', role: UserRole.USER },
    { id: '66', phoneNumber: '088480151', password: 'Zk01vxyc', role: UserRole.USER },
    { id: '67', phoneNumber: '097641383', password: 'kbSfC2kz', role: UserRole.USER },
    { id: '68', phoneNumber: '088326842', password: 'mexRVSlq', role: UserRole.USER },
    { id: '69', phoneNumber: '089651290', password: 'QImDMMi6', role: UserRole.USER },
    { id: '70', phoneNumber: '097133190', password: 'LGZPnxY5', role: UserRole.USER },
    { id: '71', phoneNumber: '089360033', password: 'BKsPT9I1', role: UserRole.USER },
    { id: '72', phoneNumber: '012463715', password: '1YWz4ID7', role: UserRole.USER },
    { id: '73', phoneNumber: '097225246', password: 'nar7FFwS', role: UserRole.USER },
    { id: '74', phoneNumber: '097031549', password: '3CS4RsM6', role: UserRole.USER },
    { id: '75', phoneNumber: '089597135', password: '2RsTv0hQ', role: UserRole.USER },
    { id: '76', phoneNumber: '012441493', password: 'jTe9V3Lu', role: UserRole.USER },
    { id: '77', phoneNumber: '088843170', password: 'mIaVfgLv', role: UserRole.USER },
    { id: '78', phoneNumber: '088299890', password: 'nLfD1rIK', role: UserRole.USER },
    { id: '79', phoneNumber: '012779411', password: '8Rc6LOIO', role: UserRole.USER },
    { id: '80', phoneNumber: '089261097', password: 'GCVsK2d5', role: UserRole.USER },
    { id: '81', phoneNumber: '011556067', password: 'o1hMseiV', role: UserRole.USER },
    { id: '82', phoneNumber: '089541349', password: 'y6IYgz6W', role: UserRole.USER },
    { id: '83', phoneNumber: '089339801', password: 'UvAfaDEq', role: UserRole.USER },
    { id: '84', phoneNumber: '088826647', password: 'aIeIZoWU', role: UserRole.USER },
    { id: '85', phoneNumber: '088615350', password: 'lciQnruQ', role: UserRole.USER },
    { id: '86', phoneNumber: '089938156', password: '08R3eDNy', role: UserRole.USER },
    { id: '87', phoneNumber: '011403055', password: 'uk9bSSnN', role: UserRole.USER },
    { id: '88', phoneNumber: '088323470', password: 'JqS2qc4q', role: UserRole.USER },
    { id: '89', phoneNumber: '089304626', password: 'lEl1vCuw', role: UserRole.USER },
    { id: '90', phoneNumber: '088226179', password: '3YkRtBqh', role: UserRole.USER },
    { id: '91', phoneNumber: '097150396', password: 'sUpIpu8H', role: UserRole.USER },
    { id: '92', phoneNumber: '088925356', password: 'aAiNFnhe', role: UserRole.USER },
    { id: '93', phoneNumber: '097398403', password: '2EbtJTTX', role: UserRole.USER },
    { id: '94', phoneNumber: '097736791', password: 'xz4HGkfZ', role: UserRole.USER },
    { id: '95', phoneNumber: '089971226', password: 'ql7h4357', role: UserRole.USER },
    { id: '96', phoneNumber: '089613321', password: 'hQTbCz7u', role: UserRole.USER },
    { id: '97', phoneNumber: '088700121', password: 'YLOJsYuY', role: UserRole.USER },
    { id: '98', phoneNumber: '012539971', password: 'jRY4kPuw', role: UserRole.USER },
    { id: '99', phoneNumber: '088030672', password: '1D43PrLh', role: UserRole.USER },
    { id: '100', phoneNumber: '012101418', password: 'x7dsGtSq', role: UserRole.USER },
    { id: '101', phoneNumber: '097159832', password: 'cRHcbwm6', role: UserRole.USER },
    { id: '102', phoneNumber: '097836673', password: 'FDRNsi6g', role: UserRole.USER },
    { id: '103', phoneNumber: '089264972', password: 'sTenK7A3', role: UserRole.USER },
    { id: '104', phoneNumber: '012241812', password: 'AnScu6FC', role: UserRole.USER },
    { id: '105', phoneNumber: '089156797', password: 'MOkjJcjS', role: UserRole.USER },
    { id: '106', phoneNumber: '097357898', password: 'JnyG9I3W', role: UserRole.USER },
    { id: '107', phoneNumber: '097794789', password: 'XhOj9p2j', role: UserRole.USER },
    { id: '108', phoneNumber: '011959302', password: 'SL7x92pK', role: UserRole.USER },
    { id: '109', phoneNumber: '088377907', password: 'gEYWUcbK', role: UserRole.USER },
    { id: '110', phoneNumber: '089668708', password: 'jeqccrP1', role: UserRole.USER },
    { id: '111', phoneNumber: '097998843', password: 'xrKgJ7ue', role: UserRole.USER },
    { id: '112', phoneNumber: '089120898', password: 'vZvKtmEq', role: UserRole.USER },
    { id: '113', phoneNumber: '088661797', password: 'uqrt6zoQ', role: UserRole.USER },
    { id: '114', phoneNumber: '097232651', password: 'TQic0xcY', role: UserRole.USER },
    { id: '115', phoneNumber: '012720518', password: 'ahvfbs5c', role: UserRole.USER },
    { id: '116', phoneNumber: '012782612', password: '1NS3lPb4', role: UserRole.USER },
    { id: '117', phoneNumber: '097918569', password: 'RAi4ejBD', role: UserRole.USER },
    { id: '118', phoneNumber: '097070380', password: '23yADFrg', role: UserRole.USER },
    { id: '119', phoneNumber: '011669648', password: 'ozgShDwW', role: UserRole.USER },
    { id: '120', phoneNumber: '088295554', password: 'dmzyl6HK', role: UserRole.USER },
    { id: '121', phoneNumber: '011442732', password: 'yTyiQ5xc', role: UserRole.USER },
    { id: '122', phoneNumber: '011033159', password: 'X0DNBM7o', role: UserRole.USER },
    { id: '123', phoneNumber: '088421325', password: '4K1gtsII', role: UserRole.USER },
    { id: '124', phoneNumber: '011077312', password: 'iecGTgQv', role: UserRole.USER },
    { id: '125', phoneNumber: '089195232', password: 'SuMbM5fY', role: UserRole.USER },
    { id: '126', phoneNumber: '011253239', password: 'Jf84KcsW', role: UserRole.USER },
    { id: '127', phoneNumber: '089507329', password: 'LkFEtI2l', role: UserRole.USER },
    { id: '128', phoneNumber: '089595465', password: '5affuthh', role: UserRole.USER },
    { id: '129', phoneNumber: '088298385', password: 'pKBXFk2C', role: UserRole.USER },
    { id: '130', phoneNumber: '088381622', password: 'fhcVtvG0', role: UserRole.USER },
    { id: '131', phoneNumber: '011147169', password: 'VdXLZbYB', role: UserRole.USER },
    { id: '132', phoneNumber: '011479456', password: '75EZ8ki2', role: UserRole.USER },
    { id: '133', phoneNumber: '012066176', password: 'uWTPw4r8', role: UserRole.USER },
    { id: '134', phoneNumber: '011443368', password: '1cq6W2FA', role: UserRole.USER },
    { id: '135', phoneNumber: '089291708', password: 'mMIBTYLb', role: UserRole.USER },
    { id: '136', phoneNumber: '088001330', password: 'nRSWOAs6', role: UserRole.USER },
    { id: '137', phoneNumber: '089990205', password: 'WOtCUdb6', role: UserRole.USER },
    { id: '138', phoneNumber: '011226569', password: '7DJIED1Z', role: UserRole.USER },
    { id: '139', phoneNumber: '011618560', password: 'AeGnz0vV', role: UserRole.USER },
    { id: '140', phoneNumber: '088229085', password: '13zqsPFL', role: UserRole.USER },
    { id: '141', phoneNumber: '088583482', password: 'rR6ddfSn', role: UserRole.USER },
    { id: '142', phoneNumber: '089261874', password: 'l8LxeBw2', role: UserRole.USER },
    { id: '143', phoneNumber: '089536658', password: 'EgLx0xsc', role: UserRole.USER },
    { id: '144', phoneNumber: '088107491', password: 'sLAQmcbA', role: UserRole.USER },
    { id: '145', phoneNumber: '088725369', password: 'p6dPRLlH', role: UserRole.USER },
    { id: '146', phoneNumber: '089393251', password: 'SPlCKIgJ', role: UserRole.USER },
    { id: '147', phoneNumber: '012852203', password: 'Dv5b4eCU', role: UserRole.USER },
    { id: '148', phoneNumber: '088450270', password: 'hrB11uiq', role: UserRole.USER },
    { id: '149', phoneNumber: '097927566', password: 'OtiBL2Ng', role: UserRole.USER },
    { id: '150', phoneNumber: '012244302', password: 'EEPzrm5f', role: UserRole.USER },
    { id: '151', phoneNumber: '011771021', password: 'VhGkwkb7', role: UserRole.USER },
    { id: '152', phoneNumber: '097632833', password: 'vAbRKUQr', role: UserRole.USER },
    { id: '153', phoneNumber: '089280022', password: 'clEC1zg1', role: UserRole.USER },
    { id: '154', phoneNumber: '088049205', password: 'dzVCQ1tO', role: UserRole.USER },
    { id: '155', phoneNumber: '097140514', password: 'JGCmMvLg', role: UserRole.USER },
    { id: '156', phoneNumber: '089979960', password: 'pyFhqdb9', role: UserRole.USER },
    { id: '157', phoneNumber: '089525269', password: 'szXIRb5E', role: UserRole.USER },
    { id: '158', phoneNumber: '012720804', password: 'ayaF5zZM', role: UserRole.USER },
    { id: '159', phoneNumber: '097347394', password: 'h8Db1gNc', role: UserRole.USER },
    { id: '160', phoneNumber: '011508129', password: 'VjNZDQ1w', role: UserRole.USER },
    { id: '161', phoneNumber: '012616076', password: 'mLm6qFC0', role: UserRole.USER },
    { id: '162', phoneNumber: '012123698', password: 'wKL3WOeR', role: UserRole.USER },
    { id: '163', phoneNumber: '011851266', password: 'mdTE5bp7', role: UserRole.USER },
    { id: '164', phoneNumber: '088060505', password: 'lwlTROKn', role: UserRole.USER },
    { id: '165', phoneNumber: '088991325', password: 'EMIcQMbD', role: UserRole.USER },
    { id: '166', phoneNumber: '089392666', password: 'Do3Q3BYA', role: UserRole.USER },
    { id: '167', phoneNumber: '011230929', password: 'Dgy6khO9', role: UserRole.USER },
    { id: '168', phoneNumber: '097513772', password: 'tCf2cIbx', role: UserRole.USER },
    { id: '169', phoneNumber: '011211894', password: '7XYhvIr3', role: UserRole.USER },
    { id: '170', phoneNumber: '088336723', password: 'YGbwyecf', role: UserRole.USER },
    { id: '171', phoneNumber: '012113816', password: 'PC6Z7P82', role: UserRole.USER },
    { id: '172', phoneNumber: '089308844', password: 'iDhulyxQ', role: UserRole.USER },
    { id: '173', phoneNumber: '088490202', password: '9Muvwzkh', role: UserRole.USER },
    { id: '174', phoneNumber: '097596898', password: 'jInO7WpF', role: UserRole.USER },
    { id: '175', phoneNumber: '089541587', password: '1ADWA8dW', role: UserRole.USER },
    { id: '176', phoneNumber: '097244151', password: '0A6vg46u', role: UserRole.USER },
    { id: '177', phoneNumber: '088361427', password: 'mkd3Ii8x', role: UserRole.USER },
    { id: '178', phoneNumber: '088660310', password: 'Hf8QB2nm', role: UserRole.USER },
    { id: '179', phoneNumber: '088209338', password: 'tYjKmStW', role: UserRole.USER },
    { id: '180', phoneNumber: '097999454', password: 'B0x5myRb', role: UserRole.USER },
    { id: '181', phoneNumber: '012279852', password: 'FUINdLtQ', role: UserRole.USER },
    { id: '182', phoneNumber: '089549724', password: '3imAxo3h', role: UserRole.USER },
    { id: '183', phoneNumber: '088881353', password: 'aCaOMG7A', role: UserRole.USER },
    { id: '184', phoneNumber: '089223223', password: 'WQU16OJD', role: UserRole.USER },
    { id: '185', phoneNumber: '011680450', password: '9JvqW6fG', role: UserRole.USER },
    { id: '186', phoneNumber: '097451142', password: 'gcAOnCzd', role: UserRole.USER },
    { id: '187', phoneNumber: '089199183', password: 'OVuEWoXm', role: UserRole.USER },
    { id: '188', phoneNumber: '089897751', password: '0jkBD4Jv', role: UserRole.USER },
    { id: '189', phoneNumber: '088959529', password: 'NJS0gf6m', role: UserRole.USER },
    { id: '190', phoneNumber: '089514729', password: 'Jhyg4Xxo', role: UserRole.USER },
    { id: '191', phoneNumber: '097677779', password: 'MmBgtw7R', role: UserRole.USER },
    { id: '192', phoneNumber: '011025508', password: '7SK8vsjZ', role: UserRole.USER },
    { id: '193', phoneNumber: '011127050', password: 'jesYecop', role: UserRole.USER },
    { id: '194', phoneNumber: '088203163', password: 'Ckq9bofD', role: UserRole.USER },
    { id: '195', phoneNumber: '011361421', password: 'chWxRwo3', role: UserRole.USER },
    { id: '196', phoneNumber: '089983478', password: 'yQdJ5GXJ', role: UserRole.USER },
    { id: '197', phoneNumber: '089202035', password: 'Wtck3f22', role: UserRole.USER },
    { id: '198', phoneNumber: '011333283', password: 'ovqvEANQ', role: UserRole.USER },
    { id: '199', phoneNumber: '012441833', password: 'Eyhdw3wI', role: UserRole.USER },
    { id: '200', phoneNumber: '011094646', password: 'qLm8exjQ', role: UserRole.USER }
];
