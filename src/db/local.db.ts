import { DataObject, Database } from "./interface";

type Table = {
  name: string;
  data: DataObject[];
}

export default class LocalDatabase implements Database { 
    tables: Table[] = [];
      
    get(table: string, id: number): DataObject { 
      let tableInMemory = this.tables.find(t => t.name == table);
      
      if(!tableInMemory){
        // Throw some kind of error;
        throw new Error("table not found");
      }


    const record = tableInMemory.data.find(r => r.id == id);
    if(!record){
        throw new Error("x not found");
    }

    return record;
    }
    getAll(table: string): DataObject[] {
      let tableInMemory = this.tables.find(t => t.name == table);
      
      if(!tableInMemory){
        return [];
      }

      return tableInMemory.data;
    }

    add(table: string, data: object): DataObject {
      let tableInMemory = this.tables.find(t => t.name == table);
      let newTable = false;

      if(tableInMemory == null){
        newTable = true;    
        tableInMemory = {
          name: table,
          data: []
        }; 
      }

      const index = tableInMemory.data.length; 
      const record = {
        id: index,
        data: data,
      }
      tableInMemory.data.push({id: index, data: data})

      if(newTable){
        this.tables.push(tableInMemory);
      }

      return record;
    }
    update(table: string, id: number, data: object): DataObject { 
      let tableInMemory = this.tables.find(t => t.name == table);
      
      if(!tableInMemory){
        // Throw some kind of error;
        throw new Error("table not found");
      }


      const record = tableInMemory.data.find(r => r.id == id);
      if(!record){
          throw new Error("x not found");
      }

      record.data = data;

      return record;

    }
    delete(table: string, id: number): void {
      const tableInMemory = this.tables.find(t => t.name == table);
  
      if(tableInMemory == null) return 

      tableInMemory.data.splice(id, 1);

      return 
    }

}
