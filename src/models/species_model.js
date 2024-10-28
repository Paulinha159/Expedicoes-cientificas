/* 
 O modelo define os dados dos documentos que vão 
 pertencer a uma coleção
*/

import { Schema, model } from "mongoose";

const speciesSchema = new Schema({
  
  discoveryLocation: {
    type: String,
    required: true
    
  },
  name: {
    type: String,
    required: true
  },
  rarity: {
    type: Number,
    required: true
  },
  documented: {
    type: Boolean,
    default: false,
    required: true
  }
 
});

const species = model("species", speciesSchema);

export default species;
