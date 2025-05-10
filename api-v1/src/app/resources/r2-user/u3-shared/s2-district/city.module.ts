import { Module } from "@nestjs/common";
import { DistrictController } from "./city.controller";
import { DistrictService } from "./city.service";

@Module({
  controllers   : [DistrictController],
  providers     : [DistrictService]  
})

export class DistrictModule{}