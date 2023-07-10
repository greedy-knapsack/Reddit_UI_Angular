import { VoteType } from "./vote.type";

export class VotePayload{
    voteType:VoteType| undefined = undefined;
    postId:number |undefined = undefined;
}