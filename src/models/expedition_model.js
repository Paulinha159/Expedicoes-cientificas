/* 
 O modelo define os dados dos documentos que vão 
 pertencer a uma coleção
*/

import { Schema, model } from "mongoose";

const expeditionSchema = new Schema({
  
  Location: {
    type: String,
    required: true
    
  },
  date: {
    type: Date,
    required: true
  },
  participants: [{
    type: Schema.Types.ObjectId,
    ref: "explorer",
    required: true
  }],
  speciesFound: [{
    type: Schema.Types.ObjectId,
    ref: "species",
    required: true
  }]
 
});

const expedition = model("expedition", expeditionSchema);

export default expedition;
