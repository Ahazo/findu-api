import { EStatus } from "shared/utils/dtos/EStatus";

export default interface ICreateInfluencerLevelDTO {
  description: string;
  experience_needed: number;
  status: EStatus;
}
