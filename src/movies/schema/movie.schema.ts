import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

// export type MovieDocument = Movie & Document;
export type MovieDocument = Movie & Document & { createdAt: Date; updatedAt: Date };

@Schema({timestamps :true})

export class Movie{
    @Prop({required:true})
    title:string
     @Prop()
    discription:string
    @Prop({required:true})
    videoUrl:string
    @Prop()
    imageUrl?:string
    @Prop()
    genre?:string
    @Prop({default:0})
    rating:number
}
export const MovieSchema = SchemaFactory.createForClass(Movie)