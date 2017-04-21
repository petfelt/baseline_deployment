export class User {
  name: string
  bid: number
  _id: string
  createdAt: Date
  updatedAt: Date

  constructor(_id, name, bid){
    this._id = _id
    this.name = name
    this.bid = bid
  }
}
