import * as type from '../contact/Type';

export const get_abc = (val) =>{
    return{
        type:type.GET_ABC,
        val
    }
}