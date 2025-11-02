/* eslint-disable prettier/prettier */

import { PartialType } from "@nestjs/mapped-types";
import { CreateQuotesDto } from "./create-quotes.dto";



export class UpdateQuotesDto extends PartialType(CreateQuotesDto) {

}