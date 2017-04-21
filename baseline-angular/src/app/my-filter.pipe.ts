import { Pipe, PipeTransform } from '@angular/core';

import { User } from "./user"


// This is actually a filter for name, age, and created at.

@Pipe({
  name: 'my_filter'
})
export class MyFilterPipe implements PipeTransform {

  transform(value: User[], filter_name: string): any {
    if(!filter_name){ return value }

    // For date transformation here.
    function contains_string(user: User, str: string): boolean {
      str = str.toLowerCase()

      for(var key in user){
        if(key != "_id" && key != "__v" && key != "createdAt" && key != "updatedAt"){
          if(user[key].toString().toLowerCase().indexOf(str) > -1){
            // console.log(key, user[key].toString())
            return true
          }
        }
      }
      return false
    }
    return value.filter(user => contains_string(user, filter_name))


    // Includes name, age, and date.
    // return value.filter((rat => rat.name.toLowerCase().indexOf(filter_name.toLowerCase()) > -1
    // || rat.age.toString() == filter_name
    // || rat.createdAt.toString().toLowerCase().indexOf(filter_name.toLowerCase()) > -1))

  }

}
