/* 
 O modelo define os dados dos documentos que vão 
 pertencer a uma coleção
*/

import { Schema, model } from "mongoose";

const explorerSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  fildOfStudy: {
    type: String,
    required: true,
  },
  expeditionParticipated: {
    type: Number,
    required: true
  },
});

const explorer = model("explorer", explorerSchema);

export default explorer;
