import { Module } from "@nestjs/common";
import { SharedController } from "./shared.controller";
import { SharedService } from "./shared.service";
import { CityController } from "./s1-city/city.controller";
import { CityService } from "./s1-city/city.service";
import { DistrictController } from "./s2-district/city.controller";
import { DistrictService } from "./s2-district/city.service";

@Module({
  controllers   : [SharedController, CityController, DistrictController],
  providers     : [SharedService, CityService, DistrictService],
})

export class SharedModule{}