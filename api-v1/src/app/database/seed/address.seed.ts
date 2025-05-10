import { BadRequestException } from "@nestjs/common";

import { City } from "src/app/models/location/city.model";
import { District } from "src/app/models/location/district.model";
import { Commune } from "src/app/models/location/commune.model";
import { Village } from "src/app/models/location/village.model";

export class CitySeeder{
    public static seed = async () => {
        try {
            await this.seedCity();
            await this.seedDistrict();
            await this.seedCommune();
            await this.seedVillage();
        } catch (err) {
            console.log("Cannot seed real time address")
            throw new BadRequestException(err)
        }
    }

    private static async seedCity(){
        try {
            await City.bulkCreate(cities)
            // await City.create({id: 1, name: 'Phnom Penh'})
        } catch (err) {
            console.log(err)
        }
    }

    private static async seedDistrict(){
        try {
            await District.bulkCreate(districts)
        } catch (err) {
            console.log(err)
        }
    }

    private static async seedCommune(){
        try {
            await Commune.bulkCreate(communes)
        } catch (err) {
            console.log(err)
        }
    }

    private static async seedVillage(){
        try {
            await Village.bulkCreate(villages)
        } catch (err) {
            console.log(err)
        }
    }
}

const cities = [
    { id: 1, name : 'បន្ទាយមានជ័យ'},
    { id: 2, name : 'ភ្នំពេញ'}
]

const districts = [
    { id: 1, name : 'មង្គលបូរី',    cityId : 1},
    { id: 2, name : 'ភ្នំស្រុក' ,    cityId : 1},
    { id: 3, name : 'អូរជ្រៅ' ,    cityId : 1},	
    { id: 4, name : 'ជ្រោយចង្វារ​',  cityId : 2},
    { id: 5, name : 'ទួលគោក',   cityId : 2},
    { id: 6, name : 'ចំការមន',   cityId : 2},
    { id: 7, name : 'ដូនពេញ',   cityId : 2},
    { id: 8, name : '៧មករា',       cityId : 2},
    
]

const communes = [
    { id: 1, name : 'បន្ទាយនាង',  districtId : 1},
    { id: 2, name : 'បាតត្រាង' ,  districtId : 1},
    { id: 3, name : 'អូរប្រាសាទ' , districtId : 1},
    { id: 4, name : 'ព្រែកតាសេក', districtId : 4},
    { id: 5, name : 'ផ្សារដើមគរ',  districtId : 5},
    { id: 6, name: "ទន្លេបាសាក់", districtId : 6},
    { id: 7, name: "បឹងកេងកងទី១", districtId : 6},
    { id: 8, name: "បឹងកេងកងទី២", districtId : 6},
    { id: 9, name: "បឹងកេងកងទី៣", districtId : 6},
    { id: 10, name: "ផ្សារថ្មីទី១", districtId : 7},
    { id: 11, name: 'ផ្សារថ្មីទី២', districtsId : 7},       
    { id: 12, name: 'ផ្សារថ្មីទី៣', districtsId : 7},       
    { id: 13, name: 'ផ្សារចាស់', districtsId : 7},       
    { id: 14, name: 'ចតុមុខ', districtsId : 7},       
    { id: 15, name: 'ស្រះចក', districtsId : 7},       
    { id: 16, name: 'វត្តភ្នំ', districtsId : 7},     
    { id: 17, name: 'មិត្តភាព', districtsId : 8},       
    { id: 18, name: 'វាលវង់', districtsId : 8},       
    { id: 19, name: 'អូរឫស្សីទី១', districtsId : 8},       
    { id: 20, name: 'អូរឫស្សីទី២', districtsId : 8},       
    { id: 21, name: 'អូរឫស្សីទី៣', districtsId : 8},       
    { id: 22, name: 'អូរឫស្សីទី៤', districtsId : 8},  

]

const villages = [
    { id: 1, name : 'អូរធំ',      communeId : 1},
    { id: 2, name : 'បន្ទាយនាង',  communeId : 1},
    { id: 3, name : 'គោកផ្នូវ' ,   communeId : 1},
    { id: 4, name : 'គៀនឃ្លាំង',  communeId : 4},
    { id: 5, name : "ភូមិ១", communesId : 6},
    { id: 6, name : "ភូមិ២", communesId : 6},
    { id: 7, name : "ភូមិ៣", communesId : 6},
    { id: 8, name : "ភូមិ៤", communesId : 6},
    { id: 9, name : "ភូមិ៥", communesId : 6},
    { id: 10, name : "ភូមិ៦", communesId : 6},
    { id: 11, name : "ភូមិ៧", communesId : 6},
    { id: 12, name : "ភូមិ៨", communesId : 6},
    { id: 13, name : "ភូមិ៩", communesId : 6},
    { id: 14, name : "ភូមិ១០", communesId : 6},
    { id: 15, name : "ភូមិ១", communesId : 7},
    { id: 16, name: 'ភូមិ២', communesId : 7},
    { id: 17, name: 'ភូមិ៣', communesId : 7},
    { id: 18, name: 'ភូមិ៤', communesId : 7},
    { id: 19, name: 'ភូមិ៥', communesId : 7},
    { id: 20, name: 'ភូមិ៦', communesId : 7},
    { id: 21, name: 'ភូមិ៧', communesId : 7},
    { id: 22, name: 'ភូមិ១', communesId : 8},
    { id: 23, name: 'ភូមិ២', communesId : 8},
    { id: 24, name: 'ភូមិ៣', communesId : 8},
    { id: 25, name: 'ភូមិ៤', communesId : 8},
    { id: 26, name: 'ភូមិ៥', communesId : 8},
    { id: 27, name: 'ភូមិ៦', communesId : 8},
    { id: 28, name: 'ភូមិ១', communesId : 9},
    { id: 29, name: 'ភូមិ២', communesId : 9},
    { id: 30, name: 'ភូមិ៣', communesId : 9},
    { id: 31, name: 'ភូមិ៤', communesId : 9},
    { id: 32, name: 'ភូមិ៥', communesId : 9},
    { id: 33, name: 'ភូមិ១', communesId : 10},
    { id: 34, name: 'ភូមិ២', communesId : 10},
    { id: 35, name: 'ភូមិ៣', communesId : 10},
    { id: 36, name: 'ភូមិ៤', communesId : 10},
    { id: 37, name: 'ភូមិ១', communesId : 11},
    { id: 38, name: 'ភូមិ២', communesId : 11},
    { id: 39, name: 'ភូមិ៣', communesId : 11},
    { id: 40, name: 'ភូមិ១', communesId : 12},
    { id: 41, name: 'ភូមិ២', communesId : 12},
    { id: 42, name: 'ភូមិ៣', communesId : 12},
    { id: 43, name: 'ភូមិ១', communesId : 13},
    { id: 44, name: 'ភូមិ២', communesId : 13},
    { id: 45, name: 'ភូមិ៣', communesId : 13},
    { id: 46, name: 'ភូមិ១', communesId : 14},
    { id: 47, name: 'ភូមិ២', communesId : 14},
    { id: 48, name: 'ភូមិ៣', communesId : 14},
    { id: 49, name: 'ភូមិ១', communesId : 15},
    { id: 50, name: 'ភូមិ២', communesId : 15},
    { id: 51, name: 'ភូមិ៣', communesId : 15},
    { id: 52, name: 'ភូមិ៤', communesId : 15},
    { id: 53, name: 'ភូមិ១', communesId : 16},
    { id: 54, name: 'ភូមិ២', communesId : 16},
    { id: 55, name: 'ភូមិ៣', communesId : 16},
    { id: 56, name: 'ភូមិ១', communesId : 17},
    { id: 57, name: 'ភូមិ២', communesId : 17},
    { id: 58, name: 'ភូមិ៣', communesId : 17},
    { id: 59, name: 'ភូមិ៤', communesId : 17},
    { id: 60, name: 'ភូមិ១', communesId : 18},
    { id: 61, name: 'ភូមិ២', communesId : 18},
    { id: 62, name: 'ភូមិ៣', communesId : 18},
    { id: 63, name: 'ភូមិ៤', communesId : 18},
    { id: 64, name: 'ភូមិ១', communesId : 19},
    { id: 65, name: 'ភូមិ២', communesId : 19},
    { id: 66, name: 'ភូមិ៣', communesId : 19},
    { id: 67, name: 'ភូមិ១', communesId : 20},
    { id: 68, name: 'ភូមិ២', communesId : 20},
    { id: 69, name: 'ភូមិ៣', communesId : 20},
    { id: 70, name: 'ភូមិ១', communesId : 21},
    { id: 71, name: 'ភូមិ២', communesId : 21},
    { id: 72, name: 'ភូមិ៣', communesId : 21},
    { id: 73, name: 'ភូមិ១', communesId : 22},
    { id: 74, name: 'ភូមិ២', communesId : 22},
    { id: 75, name: 'ភូមិ៣', communesId : 22},
]
