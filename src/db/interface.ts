type DataObject = {
  id: number,
  data: object
}

interface Database {
  get(table: string, id: number): DataObject;
  getAll(table: string): DataObject[];
  add(table: string, data: object): DataObject;
  update(table: string, id: number, data: object): DataObject;
  delete(table: string, id: number): void; 
}

export {Database, DataObject};


